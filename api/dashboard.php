
<?php
require_once __DIR__ . '/config.php';

$admin = requireAuth();
$pdo = getDbConnection();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {

    // 1. Total enquiries
    $totalEnquiries = (int) $pdo
        ->query("SELECT COUNT(*) FROM enquiries")
        ->fetchColumn();

    // 2. Enquiry status counts
    $stmt = $pdo->query("
        SELECT status, COUNT(*) AS count
        FROM enquiries
        GROUP BY status
    ");

    $statusCounts = [
        'New' => 0,
        'In Progress' => 0,
        'Contacted' => 0,
        'Converted' => 0,
        'Closed' => 0
    ];

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        if (isset($statusCounts[$row['status']])) {
            $statusCounts[$row['status']] = (int) $row['count'];
        }
    }

    // 3. Monthly enquiries
    $stmt = $pdo->query("
        SELECT
            DATE_FORMAT(created_at, '%b %Y') AS month_name,
            COUNT(*) AS total
        FROM enquiries
        WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
        GROUP BY YEAR(created_at), MONTH(created_at)
        ORDER BY YEAR(created_at), MONTH(created_at)
    ");

    $monthlyChart = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // 4. Upcoming follow-ups
    $stmt = $pdo->query("
        SELECT
            id, name, company, email, phone, service,
            status, follow_up_date, notes
        FROM enquiries
        WHERE follow_up_date IS NOT NULL
        AND status NOT IN ('Converted', 'Closed')
        ORDER BY follow_up_date ASC
        LIMIT 6
    ");

    $followUps = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // 5. Recent enquiries
    $stmt = $pdo->query("
        SELECT
            id, name, company, email, phone, service,
            budget, status, created_at, notes, follow_up_date
        FROM enquiries
        ORDER BY created_at DESC
        LIMIT 8
    ");

    $recentEnquiries = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // 6. Published services count
    $totalServices = (int) $pdo
        ->query("
            SELECT COUNT(*)
            FROM services
            WHERE is_published = 1
        ")
        ->fetchColumn();

    // 7. Published testimonials count
    $stmt = $pdo->query("
        SELECT COUNT(*)
        FROM testimonials
        WHERE is_published = 1
    ");

    $totalTestimonials = (int) $stmt->fetchColumn();

    // 8. Dashboard response
    sendResponse(true, 'Dashboard data loaded', [
        'stats' => [
            'total_enquiries' => $totalEnquiries,
            'status_counts' => $statusCounts,
            'active_services' => $totalServices,
            'total_testimonials' => $totalTestimonials
        ],
        'monthly_chart' => $monthlyChart,
        'upcoming_followups' => $followUps,
        'recent_enquiries' => $recentEnquiries
    ]);

} elseif ($method === 'PUT') {

    // Update enquiry
    $input = getJsonInput();

    $id = (int) ($input['id'] ?? 0);
    $status = $input['status'] ?? null;
    $follow_up_date = $input['follow_up_date'] ?? null;
    $notes = $input['notes'] ?? null;

    if (!$id) {
        sendResponse(false, 'Enquiry ID required', null, 422);
    }

    $fields = [];
    $params = ['id' => $id];

    if ($status !== null) {
        $fields[] = "status = :status";
        $params['status'] = $status;
    }

    if ($follow_up_date !== null) {
        $fields[] = "follow_up_date = :fdate";
        $params['fdate'] = $follow_up_date ?: null;
    }

    if ($notes !== null) {
        $fields[] = "notes = :notes";
        $params['notes'] = $notes;
    }

    if (empty($fields)) {
        sendResponse(false, 'Nothing to update', null, 400);
    }

    $sql = "UPDATE enquiries SET "
         . implode(', ', $fields)
         . " WHERE id = :id";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    sendResponse(true, 'Enquiry updated successfully');

} else {

    sendResponse(false, 'Method not allowed', null, 405);

}

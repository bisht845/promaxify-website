<?php
require_once __DIR__ . '/config.php';

$pdo = getDbConnection();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $input = getJsonInput();

    $name     = trim($input['name'] ?? '');
    $company  = trim($input['company'] ?? '');
    $email    = trim($input['email'] ?? '');
    $phone    = trim($input['phone'] ?? '');
    $service  = trim($input['service'] ?? 'General Enquiry');
    $quantity = trim($input['quantity'] ?? '');
    $budget   = trim($input['budget'] ?? '');
    $timeline = trim($input['timeline'] ?? '');
    $message  = trim($input['message'] ?? '');
    $source   = trim($input['source'] ?? 'contact_form');

    if (!$name || !$email || !$phone) {
        sendResponse(false, 'Name, email, and phone number are required.', null, 422);
    }

    $stmt = $pdo->prepare("
        INSERT INTO enquiries (name, company, email, phone, service, quantity, budget, timeline, message, source, status, follow_up_date)
        VALUES (:name, :company, :email, :phone, :service, :quantity, :budget, :timeline, :message, :source, 'New', DATE_ADD(CURDATE(), INTERVAL 1 DAY))
    ");

    $stmt->execute([
        'name'     => $name,
        'company'  => $company,
        'email'    => $email,
        'phone'    => $phone,
        'service'  => $service,
        'quantity' => $quantity,
        'budget'   => $budget,
        'timeline' => $timeline,
        'message'  => $message,
        'source'   => $source
    ]);

    sendResponse(true, 'Thank you! Your enquiry has been received. Our brand specialists will get in touch shortly.', null, 201);
}

$admin = requireAuth();

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT * FROM enquiries ORDER BY created_at DESC");
    $enquiries = $stmt->fetchAll();
    sendResponse(true, 'Enquiries retrieved', $enquiries);
}

if ($method === 'DELETE') {
    $id = (int) ($_GET['id'] ?? 0);
    $stmt = $pdo->prepare("DELETE FROM enquiries WHERE id = :id");
    $stmt->execute(['id' => $id]);
    sendResponse(true, 'Enquiry deleted successfully');
}
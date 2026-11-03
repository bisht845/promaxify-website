<?php
require_once __DIR__ . '/config.php';

$pdo = getDbConnection();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $isAdmin = isset($_GET['admin']) && $_GET['admin'] === '1';
    if ($isAdmin) {
        requireAuth();
        $stmt = $pdo->query("SELECT * FROM services ORDER BY sort_order ASC, id DESC");
    } else {
        $stmt = $pdo->query("SELECT * FROM services WHERE is_published = 1 ORDER BY sort_order ASC, id DESC");
    }
    $services = $stmt->fetchAll();
    sendResponse(true, 'Services retrieved', $services);
}

$admin = requireAuth();

if ($method === 'POST') {
    $input = getJsonInput();
    $title = trim($input['title'] ?? '');
    $slug = trim($input['slug'] ?? '');
    if (!$slug) {
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
    }
    $category = trim($input['category'] ?? 'Corporate Solutions');
    $short_description = trim($input['short_description'] ?? '');
    $heading = trim($input['heading'] ?? $title);
    $description = trim($input['description'] ?? '');
    $image = trim($input['image'] ?? '');
    $is_published = isset($input['is_published']) ? (int) $input['is_published'] : 1;
    $sort_order = (int) ($input['sort_order'] ?? 0);

    if (!$title || !$short_description) {
        sendResponse(false, 'Title and short description are required.', null, 422);
    }

    $check = $pdo->prepare("SELECT id FROM services WHERE slug = :slug LIMIT 1");
    $check->execute(['slug' => $slug]);
    if ($check->fetch()) {
        $slug .= '-' . time();
    }

    $stmt = $pdo->prepare("
        INSERT INTO services (title, slug, category, short_description, heading, description, image, is_published, sort_order)
        VALUES (:title, :slug, :category, :short_desc, :heading, :desc, :image, :pub, :sort)
    ");
    $stmt->execute([
        'title'      => $title,
        'slug'       => $slug,
        'category'   => $category,
        'short_desc' => $short_description,
        'heading'    => $heading,
        'desc'       => $description,
        'image'      => $image,
        'pub'        => $is_published,
        'sort'       => $sort_order
    ]);

    sendResponse(true, 'Service created successfully', ['id' => $pdo->lastInsertId()], 201);
}

if ($method === 'PUT') {
    $input = getJsonInput();
    $id = (int) ($input['id'] ?? 0);
    if (!$id) {
        sendResponse(false, 'Service ID required', null, 422);
    }

    if (isset($input['toggle_publish'])) {
        $stmt = $pdo->prepare("UPDATE services SET is_published = NOT is_published WHERE id = :id");
        $stmt->execute(['id' => $id]);
        sendResponse(true, 'Publish status updated');
    }

    $stmt = $pdo->prepare("
        UPDATE services SET 
            title = :title,
            slug = :slug,
            category = :category,
            short_description = :short_desc,
            heading = :heading,
            description = :desc,
            image = :image,
            is_published = :pub,
            sort_order = :sort
        WHERE id = :id
    ");
    $stmt->execute([
        'title'      => trim($input['title']),
        'slug'       => trim($input['slug']),
        'category'   => trim($input['category'] ?? 'Corporate Solutions'),
        'short_desc' => trim($input['short_description']),
        'heading'    => trim($input['heading'] ?? ''),
        'desc'       => trim($input['description'] ?? ''),
        'image'      => trim($input['image'] ?? ''),
        'pub'        => (int) ($input['is_published'] ?? 1),
        'sort'       => (int) ($input['sort_order'] ?? 0),
        'id'         => $id
    ]);

    sendResponse(true, 'Service updated successfully');
}

if ($method === 'DELETE') {
    $id = (int) ($_GET['id'] ?? 0);
    if (!$id) {
        sendResponse(false, 'Service ID required', null, 422);
    }
    $stmt = $pdo->prepare("DELETE FROM services WHERE id = :id");
    $stmt->execute(['id' => $id]);
    sendResponse(true, 'Service deleted successfully');
}
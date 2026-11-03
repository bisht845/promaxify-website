<?php
require_once __DIR__ . '/config.php';

$pdo = getDbConnection();
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $isAdmin = isset($_GET['admin']) && $_GET['admin'] === '1';
    $slug = $_GET['slug'] ?? null;

    if ($slug) {
        $stmt = $pdo->prepare("SELECT * FROM case_studies WHERE slug = :slug " . ($isAdmin ? "" : "AND is_published = 1") . " LIMIT 1");
        $stmt->execute(['slug' => $slug]);
        $item = $stmt->fetch();
        if (!$item) {
            sendResponse(false, 'Case study not found', null, 404);
        }
        $item['before_after_metrics'] = json_decode($item['before_after_metrics'] ?: '[]', true);
        $item['chart_data'] = json_decode($item['chart_data'] ?: '{}', true);
        $item['gallery'] = json_decode($item['gallery'] ?: '[]', true);

        $rel = $pdo->prepare("SELECT id, title, slug, client_name, industry, thumbnail FROM case_studies WHERE slug != :slug AND is_published = 1 ORDER BY id DESC LIMIT 3");
        $rel->execute(['slug' => $slug]);
        $item['related'] = $rel->fetchAll();

        sendResponse(true, 'Case study loaded', $item);
    }

    if ($isAdmin) {
        requireAuth();
        $stmt = $pdo->query("SELECT * FROM case_studies ORDER BY sort_order ASC, id DESC");
    } else {
        $stmt = $pdo->query("SELECT * FROM case_studies WHERE is_published = 1 ORDER BY sort_order ASC, id DESC");
    }

    $cases = $stmt->fetchAll();
    foreach ($cases as &$c) {
        $c['before_after_metrics'] = json_decode($c['before_after_metrics'] ?: '[]', true);
        $c['chart_data'] = json_decode($c['chart_data'] ?: '{}', true);
        $c['gallery'] = json_decode($c['gallery'] ?: '[]', true);
    }
    sendResponse(true, 'Case studies retrieved', $cases);
}

$admin = requireAuth();

if ($method === 'POST') {
    $input = getJsonInput();
    $title = trim($input['title'] ?? '');
    $slug = trim($input['slug'] ?? '');
    if (!$slug) {
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title)));
    }
    $client_name = trim($input['client_name'] ?? '');
    $industry = trim($input['industry'] ?? '');
    $thumbnail = trim($input['thumbnail'] ?? '');
    $hero_image = trim($input['hero_image'] ?? $thumbnail);
    $challenge = trim($input['challenge'] ?? '');
    $strategy = trim($input['strategy'] ?? '');
    $results = trim($input['results'] ?? '');
    
    $metrics = json_encode($input['before_after_metrics'] ?? []);
    $chartData = json_encode($input['chart_data'] ?? []);
    $gallery = json_encode($input['gallery'] ?? []);
    
    $t_quote = trim($input['testimonial_quote'] ?? '');
    $t_author = trim($input['testimonial_author'] ?? '');
    $t_role = trim($input['testimonial_role'] ?? '');
    $is_published = (int) ($input['is_published'] ?? 1);
    $sort_order = (int) ($input['sort_order'] ?? 0);

    if (!$title || !$client_name || !$thumbnail) {
        sendResponse(false, 'Title, client name, and thumbnail are required.', null, 422);
    }

    $chk = $pdo->prepare("SELECT id FROM case_studies WHERE slug = :slug");
    $chk->execute(['slug' => $slug]);
    if ($chk->fetch()) {
        $slug .= '-' . time();
    }

    $stmt = $pdo->prepare("
        INSERT INTO case_studies 
        (title, slug, client_name, industry, thumbnail, hero_image, challenge, strategy, results, before_after_metrics, chart_data, gallery, testimonial_quote, testimonial_author, testimonial_role, is_published, sort_order)
        VALUES 
        (:title, :slug, :client, :ind, :thumb, :hero, :chal, :strat, :res, :metrics, :chart, :gal, :t_quote, :t_auth, :t_role, :pub, :sort)
    ");

    $stmt->execute([
        'title'    => $title,
        'slug'     => $slug,
        'client'   => $client_name,
        'ind'      => $industry,
        'thumb'    => $thumbnail,
        'hero'     => $hero_image,
        'chal'     => $challenge,
        'strat'    => $strategy,
        'res'      => $results,
        'metrics'  => $metrics,
        'chart'    => $chartData,
        'gal'      => $gallery,
        't_quote'  => $t_quote,
        't_auth'   => $t_author,
        't_role'   => $t_role,
        'pub'      => $is_published,
        'sort'     => $sort_order
    ]);

    sendResponse(true, 'Case study created successfully', ['id' => $pdo->lastInsertId()], 201);
}

if ($method === 'PUT') {
    $input = getJsonInput();
    $id = (int) ($input['id'] ?? 0);
    if (!$id) {
        sendResponse(false, 'Case study ID required', null, 422);
    }

    if (isset($input['toggle_publish'])) {
        $stmt = $pdo->prepare("UPDATE case_studies SET is_published = NOT is_published WHERE id = :id");
        $stmt->execute(['id' => $id]);
        sendResponse(true, 'Publish status updated');
    }

    $stmt = $pdo->prepare("
        UPDATE case_studies SET
            title = :title,
            slug = :slug,
            client_name = :client,
            industry = :ind,
            thumbnail = :thumb,
            hero_image = :hero,
            challenge = :chal,
            strategy = :strat,
            results = :res,
            before_after_metrics = :metrics,
            chart_data = :chart,
            gallery = :gal,
            testimonial_quote = :t_quote,
            testimonial_author = :t_auth,
            testimonial_role = :t_role,
            is_published = :pub,
            sort_order = :sort
        WHERE id = :id
    ");

    $stmt->execute([
        'title'    => trim($input['title']),
        'slug'     => trim($input['slug']),
        'client'   => trim($input['client_name']),
        'ind'      => trim($input['industry']),
        'thumb'    => trim($input['thumbnail']),
        'hero'     => trim($input['hero_image'] ?? $input['thumbnail']),
        'chal'     => trim($input['challenge']),
        'strat'    => trim($input['strategy']),
        'res'      => trim($input['results']),
        'metrics'  => json_encode($input['before_after_metrics'] ?? []),
        'chart'    => json_encode($input['chart_data'] ?? []),
        'gal'      => json_encode($input['gallery'] ?? []),
        't_quote'  => trim($input['testimonial_quote'] ?? ''),
        't_auth'   => trim($input['testimonial_author'] ?? ''),
        't_role'   => trim($input['testimonial_role'] ?? ''),
        'pub'      => (int) ($input['is_published'] ?? 1),
        'sort'     => (int) ($input['sort_order'] ?? 0),
        'id'       => $id
    ]);

    sendResponse(true, 'Case study updated successfully');
}

if ($method === 'DELETE') {
    $id = (int) ($_GET['id'] ?? 0);
    if (!$id) {
        sendResponse(false, 'Case study ID required', null, 422);
    }
    $stmt = $pdo->prepare("DELETE FROM case_studies WHERE id = :id");
    $stmt->execute(['id' => $id]);
    sendResponse(true, 'Case study deleted successfully');
}
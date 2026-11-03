<?php
require_once __DIR__ . '/config.php';
$admin = requireAuth();

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || empty($_FILES['file'])) {
    sendResponse(false, 'No image file uploaded', null, 400);
}

if (!is_dir(UPLOAD_DIR)) {
    mkdir(UPLOAD_DIR, 0755, true);
}

$file = $_FILES['file'];
$allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

if (!in_array($mime, $allowedTypes)) {
    sendResponse(false, 'Invalid file type. Only JPG, PNG, WEBP, and SVG are accepted.', null, 422);
}

if ($file['size'] > 10 * 1024 * 1024) {
    sendResponse(false, 'File is too large. Max 10MB.', null, 422);
}

$extension = pathinfo($file['name'], PATHINFO_EXTENSION);
$filename = uniqid('pmx_') . '.' . strtolower($extension);
$destination = UPLOAD_DIR . $filename;

if (move_uploaded_file($file['tmp_name'], $destination)) {
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https://' : 'http://';
    $host = $_SERVER['HTTP_HOST'];
    $fileUrl = $protocol . $host . rtrim(dirname($_SERVER['SCRIPT_NAME']), '/\\') . '/uploads/' . $filename;

    sendResponse(true, 'Image uploaded successfully', ['url' => $fileUrl]);
} else {
    sendResponse(false, 'Failed to save uploaded image.', null, 500);
}
<?php
require_once __DIR__ . '/config.php';

header('Content-Type: application/json');

try {
    $pdo = getDbConnection();

    $stmt = $pdo->prepare(
        "SELECT password_hash FROM admins WHERE username = :username LIMIT 1"
    );

    $stmt->execute(['username' => 'admin']);
    $admin = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$admin) {
        echo json_encode([
            'success' => false,
            'message' => 'Admin account not found'
        ]);
        exit;
    }

    echo json_encode([
        'admin_found' => true,
        'password_matches' => password_verify(
            'Admin@12345',
            $admin['password_hash']
        )
    ]);

} catch (Throwable $e) {
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
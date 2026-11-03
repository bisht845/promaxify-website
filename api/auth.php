
<?php
require_once __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');

try {
    $method = $_SERVER['REQUEST_METHOD'] ?? '';

    $pdo = getDbConnection();

    if ($method === 'POST') {
        $input = getJsonInput();

        $username = trim($input['username'] ?? '');
        $password = $input['password'] ?? '';

        if ($username === '' || $password === '') {
            sendResponse(false, 'Username and password are required.', null, 422);
        }

        $stmt = $pdo->prepare("
            SELECT id, username, email, password_hash
            FROM admins
            WHERE username = :username OR email = :email
            LIMIT 1
        ");

        $stmt->execute([
            'username' => $username,
            'email' => $username
        ]);

        $admin = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$admin || !password_verify($password, $admin['password_hash'])) {
            sendResponse(false, 'Invalid credentials. Please verify your username and password.', null, 401);
        }

        $token = bin2hex(random_bytes(32));
        $expiry = date('Y-m-d H:i:s', strtotime('+30 days'));

        $update = $pdo->prepare("
            UPDATE admins
            SET token = :token, token_expiry = :expiry
            WHERE id = :id
        ");

        $update->execute([
            'token' => $token,
            'expiry' => $expiry,
            'id' => $admin['id']
        ]);

        sendResponse(true, 'Login successful', [
            'token' => $token,
            'user' => [
                'id' => $admin['id'],
                'username' => $admin['username'],
                'email' => $admin['email']
            ]
        ]);

    } elseif ($method === 'GET') {
        $admin = requireAuth();
        sendResponse(true, 'Authenticated', ['user' => $admin]);

    } else {
        sendResponse(false, 'Method not allowed', null, 405);
    }

} catch (Throwable $e) {
    error_log('Auth API error: ' . $e->getMessage());
    sendResponse(false, 'Server error during authentication.', null, 500);
}

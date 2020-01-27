<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

if (empty($_POST['email']) || empty($_POST['password'])) {
    http_response_code(404);

    echo json_encode([
            'email' => ['Please enter an email address'],
            'password' => ['Please enter a password']
    ]);
}
else{
    http_response_code(200);

    echo json_encode([
            'success' => ['Bien joué !']
    ]);
}

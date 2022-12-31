<?php

$return = array();

$mailToSend = 'plazamarcin098@gmail.com';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $errors = array();

    if (empty($name)) {
        array_push($errors, 'name');
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($errors, 'email');
    }
    if (empty($message)) {
        array_push($errors, 'message');
    }

    if (count($errors) > 0) {
        $return['errors'] = $errors;
    } else {
        $headers = 'MIME-Version: 1.0' . "\r\n" .
            'Content-type: text/html; charset=UTF-8' . "\r\n" .
            'From: ' . $email . "\r\n" .
            'Reply-to: ' . $email;

        $template = "
            <html>
            <head>
            <meta charset=\"utf-8\">
            </head>
            <style type='text/css'>
                body {font-family:sans-serif; color:#222; padding:20px;}
                div {margin-bottom:10px;}
                .msg-title {margin-top:30px;}
            </style>
            <body>
            <div>Imię: <strong>%s</strong></div>
            <div>Email: <a href=\"mailto:%s\">%s</a></div>
            <div class=\"msg-title\"> <strong>Wiadomość:</strong></div>
            <div>%s</div>
            </body>
            </html>";

        if (mail($mailToSend, 'Wiadomość ze strony - ' . date("d-m-Y"), sprintf($template, $name, $email, $email, $message), $headers)) {
            $return['status'] = 'ok';
        } else {
            $return['status'] = 'error';
        }
    }

    header('Content-Type: application/json');
    echo json_encode($return);
}
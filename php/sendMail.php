<?php
try {

    if ($_SERVER['REQUEST_METHOD'] !== "POST") {
        throw new Exception('No post');
        http_response_code(400);
    }
    if (
        !isset($_POST['name']) ||
        !isset($_POST['mail']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['message'])
    ) {
        var_dump($_POST);
        throw new Exception('Bad request');
        http_response_code(400);
    }

    // SEND MAIL
    $phone = strip_tags($_POST['phone']);
    $from = strip_tags($_POST['name'] . ' <' . strip_tags($_POST['mail'] . '>'));
    $to = 'a.cros@codeur.online';
    $object = "Nouveau message depuis le portfolio !";
    $inputMessage = strip_tags($_POST['message']);

    $message = "<h1>Contact</h1>
    $from ($phone)
    $object

    <h2>Message</h2>
    $inputMessage";

    $headers = array(
        'From' => $from,
        'Reply-To' => $from,
        'X-Mailer' => 'PHP/' . phpversion(),
        'Content-type' => 'text/html; charset=utf-8'
    );

    $success = mail($to, $object, $message, $headers);
    echo json_encode(['success' => $success]);
    http_response_code(200);
} catch (Exception $e) {
    $err = $e->getMessage();
    echo json_encode(['success' => false, 'message' => $err]);
    http_response_code(200);
}

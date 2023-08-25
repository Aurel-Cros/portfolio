<?php
header('Access-Control-Allow-Origin: https://portfolio-aurel-cros.vercel.app');
try {

    if ($_SERVER['REQUEST_METHOD'] !== "POST") 
        throw new Exception('No post');
    
    if (!isset($_POST['name'], $_POST['mail'], $_POST['phone'], $_POST['message']))
        throw new Exception('Bad request');
    

    // SEND MAIL
    $phone = strip_tags($_POST['phone']);
    $mail = strip_tags($_POST['mail']);
    $from = strip_tags($_POST['name']) . ' <' . $mail . '>';
    $to = 'a.cros@codeur.online';
    $object = "Nouveau message depuis le portfolio !";
    $inputMessage = nl2br(strip_tags($_POST['message']));

    $message = "<h1>Contact</h1>
    Message de : $from (Tel : $phone)

    <h2>Message</h2>
    $inputMessage";

    $headers = array(
        'From' => $from,
        'Reply-To' => $mail,
        'X-Mailer' => 'PHP/' . phpversion(),
        'Content-type' => 'text/html; charset=utf-8'
    );

    if (mail($to, $object, $message, $headers)) {
        echo json_encode(['success' => true]);
        http_response_code(200);
    } else {
        echo json_encode(['success' => false, 'message' => 'Mail could not be sent']);
        http_response_code(200);
    }
} catch (Exception $e) {
    $err = $e->getMessage();
    echo json_encode(['success' => false, 'message' => $err]);
    http_response_code(400);
}

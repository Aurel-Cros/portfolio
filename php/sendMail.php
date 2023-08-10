<?php
if ($_SERVER['REQUEST_METHOD'] !== "POST")
    die('No post');
if (
    !isset($_POST['name']) ||
    !isset($_POST['mail']) ||
    !isset($_POST['phone']) ||
    !isset($_POST['message'])
) {
    var_dump($_POST);
    die('No good post');
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

mail($to, $object, $message, $headers);
echo "Mail envoyé !";

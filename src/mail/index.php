<?php

$to = $_POST['to'];
$subject = $_POST['subject'];

$headers = "From: " . strip_tags($_POST['from']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['from']) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$message = $_POST['html'];

mail($to, $subject, $message, $headers);
?>

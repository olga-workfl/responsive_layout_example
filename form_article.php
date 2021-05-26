<?php
$to = "olga.g.sonina@gmail.com";
$from = "no-reply@mail.com";
$txt = "Новая заявка на размешения статьи в журнале  Resto-Profi! " ;

$headers = "From: " . $from . "\r\n";

$subject = "Новая заявка на размешения статьи в журнале  Resto-Profi от  ". $_POST['email'];
$body = "New user subscription: " . $_POST['email'];
mail($to,$subject,$txt,$headers);

header("Location: ".$_SERVER['HTTP_REFERER']);
?>
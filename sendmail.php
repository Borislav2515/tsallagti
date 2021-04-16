<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('Tsallagti.com", Лучшие туры с нами!');
$mail->addAddress("borislav.khadikov@mail.ru");
$mail->Subject = "Привет! Я хочу оформить заказ!";


$body = '<h1>Тестовое письмо</h1>';

if (trim(!empty(S_POST['name']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}

if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отпправились';
}
$response = ['message' => $message];

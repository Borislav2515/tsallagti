<?php

$name = $_POST['name'];
$email = $_POST['email'];

$to = "borislav.khadikov@mail.ru";
$subject = 'Отправленна заявкаа на тур';
$message = "Заявка былаа отправлен пользоваателем $name c почтой $email";
$headers = "Form: $name <$email>" . "\r\n";

if (mail($to,$subject,$message,$headers)) {
    echo 'Ваше сообщение успешно отправленно';
} else {
    echo 'Возниклаа ошибка при отправке. Повторите еще рааз';
}

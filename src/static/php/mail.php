<?php
if (isset($_POST['title'])) {$title = $_POST['title'];} 
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['tel'])) {$tel = $_POST['tel'];}  

  
$address  = 'idromruccool@ya.ru';
$mes = "Форма: $title\nИмя: $name\nТелефон: $tel";   
$sub='Заявка с сайта rvts.ru'; 
$email='rvts@info.ru'; 
$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");  
?> 
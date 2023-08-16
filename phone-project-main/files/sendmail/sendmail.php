<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);


	$mail->isSMTP();                                            //Send using SMTP
	$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	// // $mail->Username   = 'maximus.mixik@gmail.com';                     //SMTP username
	// $mail->Username   = 'maximus.mixik@gmail.com';                     //SMTP username
	// $mail->Password   = 'zidcyhgeoilrztgs';                               //!!!!!SMTP password
	// $mail->SMTPSecure ='TLS';            //Enable implicit TLS encryption
	// $mail->Port       = '587';                 
	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	$mail->Username   = 'noreply.neuz@gmail.com';                     //SMTP username
	$mail->Password   = 'cguhdvxwomdvwttp';                               //!!!!!SMTP password
	$mail->SMTPSecure ='TLS';            //Enable implicit TLS encryption
	$mail->Port       = '587';                 


	//Від кого лист
	$mail->setFrom('noreply.neuz@gmail.com', 'Test'); // Вказати потрібний E-mail
	//Кому відправити
	$mail->addAddress('noreply.neuzbox@gmail.com'); // Вказати потрібний E-mail
	//Тема листа
	$mail->Subject = 'Contact Data';

	//Тіло листа
	$body = '<h1>New message</h1>';

	if(trim(!empty($_POST['email']))){
		$body.="<p>Email: ".$_POST['email']."</p>";
	}	
	

	



	$mail->Body = $body;



	//Відправляємо
	if (!$mail->send()) {
		$message = 'Помилка';
	} else {
		$message = 'Дані надіслані!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>
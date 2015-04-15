<?php

$yourEmailAddress = 'marcelotena@fastandyours.com'; //Put your own email address here.

	$subject=addslashes($_POST['subject']);
	$comments=addslashes($_POST['message']);

//Check to make sure that the name field is not empty
if(trim($_POST['name']) == '') {
	$hasError = true;
} else {
	$name = trim($_POST['name']);
}



//Check to make sure that the last name field is not empty
/*if(trim($_POST['contactlast']) == '') {
	$hasError = true;
} else {
	$contactlast = trim($_POST['contactlast']);
}*/

//Check to make sure sure that a valid email address is submitted
if(trim($_POST['email']) == '')  {
	$hasError = true;
} else if (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", trim($_POST['email']))) {
	$hasError = true;
} else {
	$email = trim($_POST['email']);
}

//Check to make sure comments were entered
/*if(trim($_POST['message']) == '') {
	$hasError = true;
} else {
	if(function_exists('stripslashes')) {
		$comments = stripslashes(trim($_POST['message']));
	} else {
		$comments = trim($_POST['message']);
	}
}*/

//If there is no error, send the email
if(!isset($hasError)) {
	$emailTo = $yourEmailAddress;
	$body = <<<EOD
<div id='success' class='sent success'><p style='color:#002f40;margin-top:30px;font-size: small;font-family: Arial, Helvetica, sans-serif;'><span style='color: #22779d;'>Nombre:</span> $name <br><br>
<span style='color: #22779d;'>E-mail:</span> $email <br><br>
<span style='color: #22779d;'>Asunto:</span> $subject <br><br>
<span style='color: #22779d;'>Mensaje:</span> $comments </p></div>
EOD;
	$headers = 'From: Formulario Fast&amp;Yours <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
	$headers = "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$valid = mail($emailTo, "Mensaje de ".$name." utilizando el formulario de Fast&amp;Yours", $body, $headers);
	if ($valid) {
        echo <<<EOD
<div id="success" class="sent success"><p><img src="../images/logo-dark.png" style="width:125px;height:80px;"></p><p style="color:#002f40;margin-top:30px;font-size: large;font-family: Arial, Helvetica, sans-serif;"><strong>&iexclE-mail enviado correctamente!</strong><br>Gracias por contactar con Fast&amp;Yours. En breve nos pondremos en contacto contigo.</p><br>
	<p><a href="index.html" onClick="history.back();return false;" style="color:#002f40;font-family: Arial, Helvetica, sans-serif;">Volver a Fast&amp;Yours</a></p></div>
EOD;
    }
    else{
        echo "KO";
    }
} else { //If errors are found
    echo <<<EOD
<div id="success" class="sent success"><p><img src="../images/logo-dark.png" style="width:125px;height:80px;"></p><p style="color:#002f40;margin-top:30px;font-size: large;font-family: Arial, Helvetica, sans-serif;">Por favor comprueba que has rellenado todos los campos con informaci&oacute;n v&acute;lida y aceptado el Aviso Legal. Gracias.</p><br>
    <p><a href="index.html" onClick="history.back();return false;" style="color:#002f40;font-family: Arial, Helvetica, sans-serif;">Volver a Fast&amp;Yours</a></p></div>
EOD;
} 
 
 ?>
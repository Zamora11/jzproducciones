<?php 

// Llamando a los campos
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$titulo = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

// Datos para el correo
$destinatario = "jzamora11p@gmail.com";
$asunto = "Contacto JZ Producciones";

$carta = "De: $nombre \n";
$carta .= "Correo electrónico: $email \n";
$carta .= "Asunto: $asunto \n";
$carta .= "Mensaje: $mensaje";

// Enviando mensaje
mail($destinatario, $asunto, $carta);

?>
<?php

// Llamando a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$titulo = $_POST['asunto'];
$texto = $_POST['mensaje'];

// Datos para el correo
$destinatario = "jzamora11p@gmail.com";
$asunto = "Contacto para JZProducciones";

$carta = "De: $nombre \n";
$carta .= "Correo electrónico: $correo \n";
$carta .= "Asunto: $titulo \n";
$carta .= "Mensaje: $texto";

// Enviado mensaje
mail($destinatario, $asunto, $carta);
header('Location:agradecimientos.html')

?>
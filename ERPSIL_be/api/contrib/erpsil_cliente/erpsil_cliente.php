<?php 
function agregarCliente(){

    $nombre = params_get("nombre");
    $cedula = params_get("cedula");
    $email = params_get("email");
    $direccion = params_get("direccion");
    $telefono = params_get("telefono");
    $descripcion = params_get("descripcion");
    $saldo_maximo = params_get("saldo_maximo");
    $saldo = params_get("saldo");
    $tipo = params_get("tipo");

    $q = "INSERT INTO `tbl_cliente` (`nombre`, `cedula`, `email`, `direccion`, `telefono`, `descripcion`, `saldo_maximo`, `saldo`, `tipo`) 
          VALUES ('$nombre', '$cedula', '$email', '$direccion', '$telefono', '$descripcion', '$saldo_maximo', '$saldo', '$tipo')";

          return db_query($q, 0);
}

function editarCliente(){
    $nombre = params_get("nombre");
    $cedula = params_get("cedula");
    $email = params_get("email");
    $direccion = params_get("direccion");
    $telefono = params_get("telefono");
    $descripcion = params_get("descripcion");
    $saldo_maximo = params_get("saldo_maximo");
    $saldo = params_get("saldo");
    $tipo = params_get("tipo");

    $q = "UPDATE `tbl_cliente` 
    SET `nombre` = '$nombre', 
    `cedula` = '$cedula',
    `email` = '$email',
    `direccion` = '$direccion',
    `telefono` = '$telefono',
    `descripcion` = '$descripcion',
    `saldo_maximo` = '$saldo_maximo',
    `saldo` = '$saldo',
    `saldo` = '$tipo',
     WHERE `tbl_cliente`.`id_cliente` = 5";

    return db_query($q, 0);

}

function mostrarCliente(){

    $q = "SELECT * FROM `tbl_cliente`";

    return db_query($q, 2);

}



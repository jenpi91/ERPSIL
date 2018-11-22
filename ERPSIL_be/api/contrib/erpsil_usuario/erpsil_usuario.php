<?php

function agregarUsuario(){
    $fullName = params_get("fullName");
    $userName = params_get("userName");
    $email = params_get("email");
    $pwd = params_get("pwd");
    $about = params_get("about");
    $country = params_get("country");

    $q = "INSERT INTO `users` (`fullName`, `userName`, `email`, `pwd`, `about`, `country`) 
          VALUES ('$fullName', '$userName', '$email', '$pwd', '$about', '$country')";
      
       
    //return $q;
    return db_query($q, 0);

}

function mostrarUsuario(){
    $q = "SELECT * FROM `users`";

    //return "mostrar proveedor";
    return db_query($q, 2);
}

function eliminarUsuario(){
    $id = params_get("id");

    $q = "DELETE FROM `users` 
    WHERE `idUser` = $id";

    //return "Eliminar Proveedor!";
    return db_query($q, 0);
}

function editarProveedor(){

    $id = params_get("id");
    $nombre = params_get("nombre");
    $apellido1 = params_get("apellido1");
    $apellido2 = params_get("apellido2");
    $cedula = params_get("cedula");
    $telefono = params_get("telefono");
    $direccion = params_get("direccion");
    $descripcion = params_get("descripcion");

    $q = "UPDATE `tbl_proveedor` 
    SET `nombre` = '$nombre',
    `apellido1` = '$apellido1',
    `apellido2` = '$apellido2',
    `cedula` = '$cedula',
    `direccion` = '$direccion',
    `telefono` = '$telefono',
    `descripcion` = '$descripcion'

    WHERE `id_proveedor` = $id";

    return db_query($q, 0);
}

function obtenerProveedor(){
    $id = params_get("id");
    $q = "SELECT * FROM `tbl_proveedor`
    WHERE `id_proveedor` =  $id";

    return db_query($q, 1);
}

function obtenerUsuario(){
    $id = params_get("id");

    $q = "SELECT * FROM `users`
    WHERE `idUser` =  $id";
            
    return db_query($q, 1);
}


<?php

function agregarProveedor(){
    $nombre = params_get("nombre");
    $apellido1 = params_get("apellido1");
    $apellido2 = params_get("apellido2");
    $cedula = params_get("cedula");
    $direccion = params_get("direccion");
    $telefono = params_get("telefono");
    $descripcion = params_get("descripcion");

    $q = "INSERT INTO `tbl_proveedor` (`nombre`, `apellido1`, `apellido2`, `cedula`, `direccion`, `telefono`, `descripcion`) 
          VALUES ('$nombre', '$apellido1', '$apellido2', '$cedula', '$direccion', '$telefono', '$descripcion')";

    return db_query($q, 0);

}

function mostrarProveedor(){
    $q = "SELECT * FROM `tbl_proveedor`";

    //return "mostrar proveedor";
    return db_query($q, 2);
}

function eliminarProveedor(){
    $id = params_get("id");

    $q = "DELETE FROM `tbl_proveedor` 
    WHERE `id_proveedor` = $id";

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
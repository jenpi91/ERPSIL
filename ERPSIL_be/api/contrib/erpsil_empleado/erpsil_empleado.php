<?php

function agregarEmpleado(){

    $nombre = params_get("nombre");
    $apellido1 = params_get("apellido1");
    $apellido2 = params_get("apellido2");
    $telefono = params_get("telefono");
    $cedula = params_get("cedula");
    $direccion = params_get("direccion");
    $ingreso = params_get("ingreso");
    $observacion = params_get("observacion");
    $puesto = params_get("puesto");
    $jornada = params_get("jornada");

    $q = "INSERT INTO `tbl_empleado` (`nombre`, `apellido1`, `apellido2`, `telefono`, `cedula`, `direccion`, `ingreso`, `observacion`, `puesto`, `jornada`) 
    VALUES ('$nombre', '$apellido1', '$apellido2', '$telefono', '$cedula', '$direccion', '$ingreso', '$observacion', '$puesto', '$jornada')";

    //return "algo de algo";
    return db_query($q, 0);
}

function mostrarEmpleado(){

    $q = "SELECT * FROM `tbl_empleado`";

    return db_query($q, 2);

}

function obtenerEmpleado(){
    $id = params_get("id");
    $q = "SELECT * FROM `tbl_empleado`
    WHERE `id_empleado` =  $id";

    return db_query($q, 1);
}

function eliminarEmpleado(){
    $id = params_get("id");

    $q = "DELETE FROM `tbl_empleado` 
          WHERE `id_empleado` = $id";

    return db_query($q, 0);
}

function editarEmpleado(){
    $id = params_get("id");
    $nombre = params_get("nombre");
    $apellido1 = params_get("apellido1");
    $apellido2 = params_get("apellido2");
    $telefono = params_get("telefono");
    $cedula = params_get("cedula");
    $direccion = params_get("direccion");
    $ingreso = params_get("ingreso");
    $observacion = params_get("observacion");
    $puesto = params_get("puesto");
    $jornada = params_get("jornada");

    $q = "UPDATE `tbl_empleado` 
    SET `nombre` = '$nombre', 
    `apellido1` = '$apellido1',
    `apellido2` = '$apellido2',
    `telefono` = '$telefono',
    `cedula` = '$cedula',
    `direccion` = '$direccion',
    `ingreso` = '$ingreso',
    `observacion` = '$observacion',
    `puesto` = '$puesto',
    `jornada` = '$jornada'

     WHERE `id_empleado` = $id";

    return db_query($q, 0);
}
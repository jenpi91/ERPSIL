<?php

function agregarActivos(){

    $nombre = params_get("nombre");
    $cantidad = params_get("cantidad");
    $vencimiento = params_get("vence");

    $q = "INSERT INTO `tbl_activo` (`nombre`, `cantidad`, `vence`) 
          VALUES ('$nombre', '$cantidad', '$vencimiento')";

    //return($q);
    return db_query($q, 0);
}

function mostrarActivos(){
    $q = "SELECT * FROM `tbl_activo` ";

    return db_query($q, 2);
}

function eliminarActivos(){
    $id = params_get("id");

    $q = "DELETE FROM `tbl_activo` 
    WHERE `id_activo` = $id ";

    //return "Eliminar Proveedor!";
    return db_query($q, 0);
}

function obtenerActivos(){

    $id = params_get("id");

    $q = "SELECT * FROM `tbl_activo`
    WHERE `id_activo` = $id";

    //return $q;
    return db_query($q, 1);
}

function editarActivos(){

    $id = params_get("id");
    $nombre = params_get("nombre");
    $cantidad = params_get("cantidad");
    $vencimiento = params_get("vencimiento");

    $q = "UPDATE `tbl_activo` SET `nombre` = '$nombre',
    `cantidad` = '$cantidad',
    `vence` = '$vencimiento'
    
    WHERE `id_activo` = $id";

    //return $q;
    return db_query($q, 0);
}

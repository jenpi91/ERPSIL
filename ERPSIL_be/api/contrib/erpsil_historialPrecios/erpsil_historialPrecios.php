<?php
function mostrarHistorialPrecios(){
    $q = "SELECT * FROM `tbl_historialprecios`";
    return db_query($q, 2);
    
}

function agregarhistorialPrecio(){
    $id_inventario = params_get("id_inventario");
    $costo = params_get("costo");
    //$fecha = params_get("fecha");
    $stamp = time();
    $id_proveedor = params_get("id_proveedor");
    
    $q = "INSERT INTO tbl_historialprecios (id_inventario, costo, fecha, id_proveedor) 
          VALUES ('$id_inventario', '$costo', '$stamp', '$id_proveedor')";
    //return $q;
    return db_query($q, 0);
}

function eliminarHistorialPrecio(){
    $id = params_get("id");

    $q = "DELETE FROM tbl_historialprecios 
          WHERE id_historialPrecio = $id";

    return db_query($q, 0);
}

function obtenerHistorialPrecios(){
    
    $id = params_get("id");

    $q = "SELECT * FROM `tbl_historialprecios`
    WHERE `id_historialPrecio` =  $id";

    //return $q;
    return db_query($q, 1);
}

function editarHistorialpagos(){
    $id = params_get("id");
    $id_inventario = params_get("id_inventario");
    $costo = params_get("costo");
    $fecha = params_get("fecha");
    $id_proveedor = params_get("id_proveedor");

    $q = "UPDATE `tbl_historialprecios` 
    SET `id_inventario` = '$id_inventario', 
    `costo` = '$costo',
    `fecha` = '$fecha',
    `id_proveedor` = '$id_proveedor'
     WHERE `id_historialPrecio` = $id";

    return db_query($q, 0);
}
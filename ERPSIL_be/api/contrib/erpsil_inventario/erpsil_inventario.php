<?php

function mostrarInventario(){
    $q = "SELECT * FROM `tbl_inventario`";
    
    return db_query($q, 2);
}

function agregarInventario(){
    $cantidad = params_get("cantidad");
    $unidad = params_get("unidad");
    $codigoInt = params_get("codigo_interno");
    $codigoBar = 1;
    $categoria = params_get("categoria");
    $cantidadMinima = params_get("cantidad_minima");
    $descripcion = params_get("descripcion");
    $impuesto = params_get("impuesto_venta");
    $gananacia = params_get("ganancia_minima");
    $costo = params_get("costo");
    $status = params_get("status");

    $q = "INSERT INTO `tbl_inventario` (`cantidad`, `unidad`, `codigo_interno`, `codigo_barras`, 
                      `categoria`, `cantidad_minima`, `descripcion`, 
                      `impuesto_venta`,`ganancia_minima`, `costo`, `status`) 
          VALUES ('$cantidad', '$unidad', '$codigoInt', '$codigoBar', '$categoria', '$cantidadMinima', 
                  '$descripcion', '$impuesto', '$gananacia', '$costo', '$status')";

    return db_query($q, 0);
}

function eliminarInventario(){
    $id = params_get("id");

    $q = "DELETE FROM `tbl_inventario` WHERE `id_inventario` = $id";

    //return "Eliminado inventario";
    return db_query($q, 0);
}

//Llenar estas partes, voy por aca
function editarInventario(){

    $id = params_get("id");
    $cantidad = params_get("cantidad");
    $unidad = params_get("unidad");
    $codigo_interno = params_get("codigo_interno");
    $codgo_barras = 1;
    $categoria = params_get("categoria");
    $cantidad_minima = params_get("cantidad_minima");
    $descripcion = params_get("descripcion");
    $impuesto_venta = params_get("impuesto_venta");
    $ganancia_minima = params_get("ganancia_minima");
    $costo = params_get("costo");
    $status = params_get("status");

    $q = "UPDATE `tbl_inventario` 
    SET `cantidad` = '$cantidad',
    `unidad` = '$unidad',
    `codigo_interno` = '$codigo_interno',
    `codigo_barras` = '$codgo_barras',
    `categoria` = '$categoria',
    `cantidad_minima` = '$cantidad_minima',
    `descripcion` = '$descripcion',
    `impuesto_venta` = '$impuesto_venta',
    `ganancia_minima` = '$ganancia_minima',
    `costo` = '$costo',
    `status` = '$status'
    
    WHERE `id_inventario` = $id";

    //return "Amigos";    
    return db_query($q, 0);
}

function obtenerInventario(){
    $id = params_get("id");

    $q = "SELECT * FROM `tbl_inventario` 
    WHERE `id_inventario` = $id";

    return db_query($q, 1);
}
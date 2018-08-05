<?php

function agregarHistorialPrecio($id_producto, $costo, $id_proveedor){

    $stamp = time();

    $q = "INSERT INTO `tbl_historialprecios` (`id_producto`, `costo`, `fecha`, `id_proveedor`) 
          VALUES ('$id_producto', '$costo', '$stamp', '$id_proveedor')";

    return db_query($q, 0);

}

function mostrarhistorialPrecios(){

    $q = "SELECT * FROM `tbl_clientetickets`";
    
    //return $q;
    return db_query($q, 2);
    
    
}
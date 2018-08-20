<?php
function mostrarMovimientoInventario(){
   $q = "SELECT * FROM `tbl_movimientoinventario`";
  
   return db_query($q, 2);
}

function agregarMovimientoInventario(){
   $id_usuario = params_get("id_usuario");
   $id_producto = params_get("id_producto");
   $fecha = time();
   $razon = params_get("razon");
   $descripcion = params_get("descripcion");
   $costo = params_get("costo");
  
   $q = "INSERT INTO `tbl_movimientoinventario` (`id_usuario`, `id_caja`, `id_producto`,
   `fecha`, `razon`, `descripcion`, `costo`) VALUES ('$id_usuario', '1','$id_producto', '$fecha', '$razon', '$descripcion', '$costo')";

    //return $q;
   return db_query($q, 0);
}

function eliminarMovimientoInventario(){
   $id = params_get("id");

   $q = "DELETE FROM `tbl_movimientoinventario` WHERE `id_movInv` = $id";

   //return "Eliminado inventario";
   return db_query($q, 0);
}

function obtenerMovimientoInventario(){
   $id = params_get("id");
   $q = "SELECT * FROM tbl_movimientoinventario
   WHERE id_movInv =  $id";
 
   return db_query($q, 1);
}

function editarMovimientoInventario(){
   $id_movInv = params_get("id_movInv");
   $id_usuario = params_get("id_usuario");
   $id_producto = params_get("id_producto");
   $fecha = params_get("fecha");
   $id_caja = '1';
   $razon = params_get("razon");
   $descripcion = params_get("descripcion");
   $costo = params_get("costo");
  
   $q = "UPDATE `tbl_movimientoinventario`
   SET `id_usuario` = '$id_usuario',
   `id_caja`= '$id_caja',
   `id_producto`= '$id_producto',
   `fecha` = '$fecha',
   `razon` = '$razon',
   `descripcion` = '$descripcion',
   `costo` = '$costo'

   WHERE `id_movInv` = $id_movInv";

   //return $q;
   return db_query($q, 0);
}


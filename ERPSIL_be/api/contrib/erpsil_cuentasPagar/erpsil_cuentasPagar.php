<?php

function mostrarCuentasPagar(){
   $q = "SELECT * FROM `tbl_cuentaspagar`";

   return db_query($q, 2);
}

function agregarCuentasPagar(){
   $id_proveedor = params_get("id_proveedor");
   $codigo_referencia = params_get("codigoReferencia");
   $saldo = params_get("saldo");
   $estado = params_get("estado");
   $vence = params_get("vence");
   $descripcion = params_get("descripcion");
   $stampfecha = params_get("fecha");

   $q = "INSERT INTO `tbl_cuentaspagar` (`id_proveedor`, `codigo_referencia`, `saldo`, `estado`, `vence`, `descripcion`, `stampfecha`)
    VALUES ('$id_proveedor', '$codigo_referencia', '$saldo', '$estado', '$vence', '$descripcion', '$stampfecha')";
   return db_query($q, 0);
}

function eliminarCuentasPagar(){
   $id = params_get("id");

   $q = "DELETE FROM tbl_cuentaspagar
         WHERE id_cuentasPagar = $id";

   return db_query($q, 0);
}

function obtenerCuentasPagar(){
   $id = params_get("id");
   $q = "SELECT * FROM tbl_cuentaspagar
   WHERE id_cuentasPagar =  $id";

  
   return db_query($q, 1);
}

function agregarEditarCuentasPagar(){

   $id_cuentasPagar = params_get("id_cuentasPagar");
   $id_proveedor = params_get("id_proveedor");
   $codigo_referencia = params_get("codigo_referencia");
   $saldo = params_get("saldo");
   $estado = params_get("estado");
   $vence = params_get("vence");
   $descripcion = params_get("descripcion");
   $stampfecha = params_get("stamp");

   $q = "UPDATE `tbl_cuentaspagar` 
   SET `id_proveedor` = '$id_proveedor',
   `codigo_referencia` = '$codigo_referencia',
   `saldo`= '$saldo',
   `estado` = '$estado',
   `vence` = '$vence',
   `descripcion` = '$descripcion',
   `stampfecha` = '$stampfecha'

   WHERE `id_cuentasPagar` = $id_cuentasPagar";

    //return $q;
    return db_query($q, 0);
}


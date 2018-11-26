<?php

function mostrarPagos(){
    
    $q = "SELECT * FROM `tbl_pagos`";

    return db_query($q, 2);
}

function agregarPagos(){
    $id_cuenta = params_get("id_cuenta");
    $id_usuarios = params_get("id_usuarios");
    $fecha = params_get("fecha");;
    $pago = params_get("pago");
    $actual = params_get("actual");

    $q = "INSERT INTO `tbl_pagos` (`id_cuenta`, `id_usuarios`, `fecha`, `pago`, `actual`) 
    VALUES ('$id_cuenta', '$id_usuarios', '$fecha', '$pago', '$actual')";

    return db_query($q, 0);
}

function eliminarPago(){

    $id = params_get("id");

    $q = "DELETE FROM `tbl_pagos` 
          WHERE `id_pago` = $id";

    return db_query($q, 0);
}

function obtenerPagos(){

    $id = params_get("id");
    $q = "SELECT * FROM `tbl_pagos`
    WHERE `id_pago` =  $id";

    return db_query($q, 1);
}

function editarPagos(){

    $id = params_get("id");
    $id_cuenta = params_get("id_cuenta");
    $id_usuarios = params_get("id_usuarios");
    $fecha = params_get("fecha");
    $pago = params_get("pago");
    $actual = params_get("actual");

    $q = "UPDATE `tbl_pagos` 
    SET `id_cuenta` = '$id_cuenta', 
    `id_usuarios` = '$id_usuarios',
    `fecha` = '$fecha',
    `pago` = '$pago',
    `actual` = '$actual'

    WHERE `id_pago` = $id";

    //return $q;
    return db_query($q, 0);
}
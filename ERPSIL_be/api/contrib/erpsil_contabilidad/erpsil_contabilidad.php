<?php

function mostrarContabilidad(){

    $eliminar = $q = "DELETE FROM `tbl_contabilidad`";
    db_query($eliminar,0);

    $insertar= "INSERT INTO `tbl_contabilidad`(`total_factura`, `total_pagar`, `total_planilla`, `total`, `total_cliente`, `total_articulos_vendidos`, `total_articulos_disponibles`) 
    VALUES ((select * from suma_facturas),(select * from suma_pagos),(select * from suma_planilla)
    ,((select * from suma_planilla) + (select * from suma_pagos)),(select * from contar_clientes),(select * from contar_articulos),(select * from suma_inventario))";
    db_query($insertar,0);
    $q = "SELECT * FROM `tbl_contabilidad` ORDER BY id_contabilidad DESC LIMIT 1";

    return db_query($q,2);

}
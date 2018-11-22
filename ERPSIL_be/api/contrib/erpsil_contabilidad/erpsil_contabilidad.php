<?php

function mostrarContabilidad(){

    $insert = "INSERT INTO `tbl_contabilidad`(`total_factura`, `total_pagar`, `total_planilla`, `total`) 
    VALUES ((SELECT * FROM `suma_facturas`),(SELECT * FROM `suma_pagos`),(SELECT * FROM `suma_planilla`),
    ((SELECT * FROM `suma_facturas`)+(SELECT * FROM `suma_pagos`)+(SELECT * FROM `suma_planilla`)))";
     db_query($insert ,0);
     $q = "SELECT * FROM `tbl_contabilidad` ORDER BY id_contabilidad DESC LIMIT 1";
 
     return db_query($q ,2);

}
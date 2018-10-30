<?php

function mostrarContabilidad(){

    //$total_factura= "SELECT Sum(`total`) FROM `tbl_factura`";
    //$total_pagos= "SELECT Sum(`pago`) FROM `tbl_pagos`";
    //$total_planilla= "SELECT Sum(`salario_neto`) FROM `tbl_planilla`";
    //$sql= "INSERT INTO `tbl_contabilidad` (`total_factura`, `total_pagar`, `total_planilla`)
    //VALUES ('$total_factura',4,5)";
    //db_query($sql,0);
    $q = "SELECT * FROM `tbl_contabilidad` ORDER BY id_contabilidad DESC LIMIT 1";

    return db_query($q,2);

}
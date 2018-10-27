<?php


function mostrarContabilidad(){
|/*ignorar esto
    $sql= "INSERT INTO `tbl_contabilidad` (`total_factura`, `total_pagar`, `total_planilla`)
     values ((select Sum(`total`) from `tbl_factura`),(select Sum(`pago`) from `tbl_pagos`),(select Sum(`salario_neto`) from `tbl_planilla`));"
    /*$q = "SELECT top 1 * FROM `tbl_contabilidad`
    order by `id_contabilidad`";*/ 

     $q = "SELECT * FROM `tbl_contabilidad`";

    return db_query($q, 2);

}
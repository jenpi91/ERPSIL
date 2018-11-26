<?php


function mostrarPlanilla(){

    $q = "SELECT * FROM `tbl_planilla`";
    return db_query($q, 2);

}

function agregarPlanilla(){

    $id_empleado = params_get("id_empleado");
    $salario_bruto = params_get("salario_bruto");
    $ccss = params_get("ccss");
    $rebaja = params_get("rebaja");
    $salario_neto = params_get("salario_neto");

    $q = "INSERT INTO `tbl_planilla` (`id_empleado`, `salario_bruto`, `ccss`, `rebaja`, `salario_neto`) 
    VALUES ('$id_empleado', '$salario_bruto', '$ccss', '$rebaja', '$salario_neto')";

    return db_query($q, 0);
}

function eliminarPlanilla(){

    $id = params_get("id");
    $q = "DELETE FROM `tbl_planilla` 
          WHERE `id_planilla` = $id";

    return db_query($q, 0);
}

function obtenerPlanilla(){
    $id = params_get("id");
    $q = "SELECT * FROM `tbl_planilla`
    WHERE `id_planilla` =  $id";

    return db_query($q, 1);
}

function editarPlanilla(){
    $id_empleado = params_get("id_empleado");
    $salario_bruto = params_get("salario_bruto");
    $ccss = params_get("ccss");
    $rebaja = params_get("rebaja");
    $salario_neto = params_get("salario_neto");
    $id_planilla = params_get("id_planilla");

    $q = "UPDATE `tbl_planilla` 
    SET `id_empleado` = '$id_empleado', 
    `salario_bruto` = '$salario_bruto',
    `ccss` = '$ccss',
    `rebaja` = '$rebaja',
    `salario_neto` = '$salario_neto'

     WHERE `id_planilla` = $id";

    return db_query($q, 0);
}

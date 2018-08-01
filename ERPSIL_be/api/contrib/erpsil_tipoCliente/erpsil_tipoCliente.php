<?php

function mostrarTipoCliente(){
    $q = "SELECT * FROM `tbl_tipocliente`";

    return db_query($q, 2);
}

function agregarTipoCliente(){
    $nombre = params_get("nombre");
    $descripcion = params_get("descripcion");
    $ganancia_global = params_get("ganancia_global");
    $dias_credito = params_get("dias_credito");

    $q = "INSERT INTO `tbl_tipocliente` (`nombre`, `descripcion`, `ganancia_global`, `dias_credito`) 
          VALUES ('$nombre', '$descripcion', '$ganancia_global', '$dias_credito')";

    
    //return($q);
    return db_query($q, 0);
}

function eliminarTipoCliente(){
    $id = params_get("id");

    $q = "DELETE FROM `tbl_tipocliente` 
    WHERE `id_tipoCliente` = $id ";

    //return "Eliminar Proveedor!";
    return db_query($q, 0);
}

function editarTipoCliente(){

    $id = params_get("id");
    $nombre = params_get("nombre");
    $descripcion = params_get("descripcion");
    $$descripcion = params_get("ganancia_global");
    $dias_credito = params_get("dias_credito");

    $q = "UPDATE `tbl_tipocliente` SET `nombre` = '$nombre',
    `descripcion` = '$descripcion',
    `ganancia_global` = '$descripcion',
    `dias_credito` = '$dias_credito'
    
    WHERE `id_tipoCliente` = $id";

    return db_query($q, 0);

}

function obtenerTipoCliente(){
    $id = params_get("id");

    $q = "SELECT * FROM `tbl_tipocliente` 
    WHERE `id_tipoCliente` = $id";

    //return $q;
    return db_query($q, 1);
}

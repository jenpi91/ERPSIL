<?php

function agregarRoles(){

    $nombre = params_get("nombre");
    $descripcion = params_get("descripcion");

    $q = "INSERT INTO `tbl_roles` (`nombre`, `descripcion`) 
          VALUES ('$nombre', '$descripcion')";

    //return($q);
    return db_query($q, 0);
}

function mostrarRoles(){
    $q = "SELECT * FROM `tbl_roles`";

    return db_query($q, 2);
}

function eliminarRoles(){
    $id = params_get("id");

    $q = "DELETE FROM `tbl_roles` 
    WHERE `id_roles` = $id ";

    //return "Eliminar Proveedor!";
    return db_query($q, 0);
}

function obtenerRoles(){

    $id = params_get("id");

    $q = "SELECT * FROM `tbl_roles`
    WHERE `id_roles` = $id";

    //return $q;
    return db_query($q, 1);
}

function editarRoles(){

    $id = params_get("id");
    $nombre = params_get("nombre");
    $descripcion = params_get("descripcion");

    $q = "UPDATE `tbl_roles` SET `nombre` = '$nombre', `descripcion` = '$descripcion'
     WHERE `id_roles` = $id";

    //return $q;
    return db_query($q, 0);
}

<?php

function mostrarPermisosRol(){
    $q = "SELECT * FROM `tbl_permisosrol`";

    return db_query($q, 2);
}

function agregarPermisosRol(){
    $id_rol = params_get("id_rol");
    $estado = params_get("estado");


    $q = "INSERT INTO `tbl_permisosrol` (`id_rol`, `estado`) 
          VALUES ('$id_rol', '$estado')";

    
    //return $q;
    return db_query($q, 0);
}

function obtenerPermisosRol(){
    $id = params_get("id");

    $q = "SELECT * FROM `tbl_permisosrol` 
    WHERE `id_permiso` = $id";

    return db_query($q, 1);
}

function editarPermisoRol(){

    $id_permiso = params_get("id_permiso");
    $id_rol = params_get("id_rol");
    $estado = params_get("estado");


    $q = "UPDATE `tbl_permisosrol` 
          SET `id_rol` = '$id_rol', `estado` = '$estado' WHERE `id_permiso` = $id_permiso";

    return db_query($q, 0);

}

function eliminarPermisoRol(){
    $id = params_get("id");

    $q = "DELETE FROM `tbl_permisosrol` 
          WHERE `id_permiso` = $id";

    return db_query($q, 0);
}
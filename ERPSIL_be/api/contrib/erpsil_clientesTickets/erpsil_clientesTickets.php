<?php

function mostrarClienteTickets(){
    $q = "SELECT * FROM `tbl_clientetickets`";
    
    //return $q;
    return db_query($q, 2);
}

function agregarClienteTickets(){

    $stamp = date("Y-m-d");
    $id_cliente = params_get("id_cliente");
    //$stamp = params_get("stamp");
    $titulo = params_get("titulo");
    $comentario = params_get("comentario");
    $status = params_get("status");

    $q = "INSERT INTO `tbl_clientetickets` (`id_cliente`, `stamp`, `titulo`, `comentario`, `status`) 
          VALUES ('$id_cliente', '$stamp', '$titulo', '$comentario', '$status')";

    //return $q;
    return db_query($q, 0);
}

function editarClientesTickets(){
    $id = params_get("id");
    $id_cliente = params_get("id_cliente");
    $stamp = params_get("stamp");
    $titulo = params_get("titulo");
    $comentario = params_get("comentario");
    $status = params_get("status");

    $q = "UPDATE `tbl_clientetickets` 
    SET `id_cliente` = '$id_cliente',
    `stamp` = '$stamp',
    `titulo` = '$titulo',
    `comentario` = '$comentario',
    `status` = '$status'
    
    WHERE `id_ticket` = $id";

    return db_query($q, 0);


}

function obtenerClientesTickets(){
    $id = params_get("id");

    $q = "SELECT * FROM `tbl_clientetickets` 
    WHERE `id_ticket` = $id";

    return db_query($q, 1);
}

function eliminarClientesTickets(){
    $id = params_get("id");

    $q = "DELETE FROM `tbl_clientetickets` 
          WHERE `id_ticket` = $id";

    return db_query($q, 0);
}
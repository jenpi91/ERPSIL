<?php

function mostrarPedido(){
    $q = "SELECT * FROM `tbl_pedidos`";

    return db_query($q, 2);   
}

function agregarPedido(){

    $id_cliente = params_get("id_cliente");
    $stamp_pedido = params_get("stamp_pedido");
    $stamp_entrega = params_get("stamp_entrega");
    $cant_rollos = params_get("cant_rollos");
    $status = params_get("status");
    $descripcion = params_get("descripcion");
    $precio = params_get("precio");

    $q = "INSERT INTO `tbl_pedidos` (`id_cliente`, `stamp_pedido`, `stamp_entrega`, `cant_rollos`, `status`, `descripcion`, `precio`) 
    VALUES ('$id_cliente', '$stamp_pedido', '$stamp_entrega', '$cant_rollos', '$status', '$descripcion', '$precio')";

    return db_query($q, 0);

}

function eliminarPedido(){

    $id = params_get("id");

    $q = "DELETE FROM `tbl_pedidos` 
          WHERE `id_pedido` = $id";

    return db_query($q, 0);
}

function obtenerPedido(){

    $id = params_get("id");
    $q = "SELECT * FROM `tbl_pedidos`
    WHERE `id_pedido` =  $id";

    return db_query($q, 1);
}

function agregarEditarPedido(){

    $id_pedido = params_get("id_pedido");
    $id_cliente = params_get("id_cliente");
    $stamp_pedido = params_get("stamp_pedido");
    $stamp_entrega = params_get("stamp_entrega");
    $cant_rollos = params_get("cant_rollos");
    $status = params_get("status");
    $descripcion = params_get("descripcion");
    $precio = params_get("precio");

    $q = "UPDATE `tbl_pedidos` 
    SET `id_cliente` = '$id_cliente', 
    `stamp_pedido` = '$stamp_pedido',
    `stamp_entrega` = '$stamp_entrega',
    `cant_rollos` = '$cant_rollos',
    `status` = '$status',
    `descripcion` = '$descripcion',
    `precio` = '$precio'

    WHERE `id_pedido` = $id_pedido";

    //return $q;
    return db_query($q, 0);
}
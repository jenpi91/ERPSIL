<?php


function mostrarFactura(){

    $q = "SELECT * FROM `tbl_factura`";

    return db_query($q, 2);

}

function agregarFactura(){

    $id_cliente = params_get("id_cliente");
    $stamp = params_get("stamp");
    $cantidad = params_get("cantidad");
    $descripcion = params_get("descripcion");
    $subTotal = params_get("subTotal");
    $descuentoTotal = params_get("descuentoTotal");
    $total = params_get("total");

    $q = "INSERT INTO `tbl_factura` (`nom_cliente`, `detalle`, `cantidad_productos`, `stamp`, `subtotal`, `desc_total`, `total`) 
    VALUES ('$id_cliente', '$descripcion', '$cantidad', '$stamp', '$subTotal', '$stamp', '$descuentoTotal', '$total')";

    //return $q;    
    return db_query($q, 0);

}

function eliminarFactura(){

    $id = params_get("id");

    $q = "DELETE FROM `tbl_factura` 
          WHERE `id_factura` = $id";

    return db_query($q, 0);
}



function obtenerFactura(){
    $id = params_get("id");
    $q = "SELECT * FROM `tbl_factura`
    WHERE `id_factura` =  $id";

    return db_query($q, 1);
}
function editarFactura(){
    $cantidad = params_get("cantidad");
    $descripcion = params_get("descripcion");
    $id_cliente = params_get("id_cliente");
    $stamp = params_get("stamp");
    $total = params_get("total");
    $id_factura = params_get("id_factura");

    $q = "UPDATE `tbl_factura` 
    SET `cantidad` = '$cantidad', 
    `descripcion` = '$descripcion',
    `id_cliente` = '$id_cliente',
    `stamp` = '$stamp',
    `total` = '$total'

     WHERE `id_factura` = $id";

    return db_query($q, 0);
}

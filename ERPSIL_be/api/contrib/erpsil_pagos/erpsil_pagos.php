<?php

function mostrarPagos(){
    
    $q = "SELECT * FROM `tbl_pagos`";

    return db_query($q, 2);
}
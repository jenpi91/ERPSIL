<?php

function mostrarCuentasPagar(){
    $q = "SELECT * FROM `tbl_cuentaspagar`";

    return db_query($q, 2);
}
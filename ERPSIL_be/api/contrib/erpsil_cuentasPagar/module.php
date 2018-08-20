<?php
/** @file module.php
* A brief file description.
* A more elaborated file description.
*/

/** \addtogroup Core
*  @{
*/

/**
* \defgroup Module
* @{
*/


/**
* Boot up procedure
*/
function erpsil_cuentasPagar_bootMeUp(){
    // Just booting up
}

/**
* Init function
*/

//mismo nombre de la carpeta
function erpsil_cuentasPagar_init(){

    $paths = array(
        array(
            'r' => 'agregar_cuentasPagar',
            'action' => 'agregarCuentasPagar',
            'access' => 'users_loggedIn',
            'access_params' => 'accessName',
             array(
                array("key" => "id_proveedor", "def" => "", "req" => true),
                array("key" => "codigoReferencia", "def" => "", "req" => true),
                array("key" => "saldo", "def" => "", "req" => true),
                array("key" => "estado", "def" => "", "req" => true),
                array("key" => "vence", "def" => "", "req" => true),
                array("key" => "descripcion", "def" => "", "req" => true),
            ),
            'file' => 'erpsil_cuentasPagar.php'
        ),
        array(
            'r' => 'agregarEditar_cuentasPagar',
            'action' => 'agregarEditarCuentasPagar',
            'access' => 'users_loggedIn',
            'access_params' => 'accessName',
            array(
                array("key" => "id_cuentasPagar", "def" => "", "req" => true),
                array("key" => "id_proveedor", "def" => "", "req" => true),
                array("key" => "codigo_referencia", "def" => "", "req" => true),
                array("key" => "saldo", "def" => "", "req" => true),
                array("key" => "estado", "def" => "", "req" => true),
                array("key" => "vence", "def" => "", "req" => true),
                array("key" => "descripcion", "def" => "", "req" => true),
                array("key" => "stampfecha", "def" => "", "req" => true)
            ),
            'file' => 'erpsil_cuentasPagar.php'
        ),
        array(
            'r' => 'eliminar_cuentasPagar',
            'action' => 'eliminarCuentasPagar',
            'access' => 'users_loggedIn',
            'access_params' => 'accessName',
            'params' => array(
                array("key" => "id", "def" => "", "req" => true)
            ),
            'file' => 'erpsil_cuentasPagar.php'
        ),      
        array(
            'r' => 'mostrar_cuentasPagar',
            'action' => 'mostrarCuentasPagar',
            'access' => 'users_loggedIn',
            'access_params' => 'accessName',
            'file' => 'erpsil_cuentasPagar.php'
        ),
        array(
            'r' => 'obtener_cuentasPagar',
            'action' => 'obtenerCuentasPagar',
            'access' => 'users_loggedIn',
            'access_params' => 'accessName',
            'params' => array(
                array("key" => "id", "def" => "", "req" => true)
            ),
            'file' => 'erpsil_cuentasPagar.php'
        )
        );

    return $paths;
}


/**************************************************/
//In the access you can use users_openAccess if you want anyone can use the function
// or users_loggedIn if the user must be logged in
/**************************************************/



/**
* Get the perms for this module
*/
function erpsil_cuentasPagar_access(){

    $perms = array(
        array(
            # A human readable name
            'name'        => 'Do something with this module',
            # Something to remember what it is for
            'description' => 'What can be achieved with this permission',
            # Internal machine name, no spaces, no funny symbols, same rules as a variable
            # Use yourmodule_ prefix
            'code'        => 'mymodule_access_one',
            # Default value in case it is not set
            'def'        => false, //Or true, you decide
        ),
    );

}

/**@}*/
/** @}*/



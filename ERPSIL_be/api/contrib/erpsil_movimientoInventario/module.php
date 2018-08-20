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
function erpsil_movimientoInventario_bootMeUp(){
    // Just booting up
}

/**
* Init function
*/


function erpsil_movimientoInventario_init(){

    $paths = array(
        array(
            'r' => 'agregar_movimientoInventario',
            'action' => 'agregarMovimientoInventario',
            'access' => 'users_loggedIn',
            'access_params' => 'accessName',
            'params' => array(
                array("key" => "id_usuario", "def" => "", "req" => true),
                array("key" => "id_producto", "def" => "", "req" => true),
                array("key" => "razon", "def" => "", "req" => true),
                array("key" => "descripcion", "def" => "", "req" => true),
                array("key" => "costo", "def" => "", "req" => true)           
           ),
            'file' => 'erpsil_movimientoInventario.php'
       ),
       array(
            'r' => 'agregarEditar_movimientoInventario',
            'action' => 'editarMovimientoInventario',
            'access' => 'users_loggedIn',
            'access_params' => 'accessName',
            array(
                array("key" => "id_movInv", "def" => "", "req" => true),
                array("key" => "id_usuario", "def" => "", "req" => true),
                //array("key" => "id_caja", "def" => "", "req" => true),
                array("key" => "id_producto", "def" => "", "req" => true),
                array("key" => "fecha", "def" => "", "req" => true),
                array("key" => "razon", "def" => "", "req" => true),
                array("key" => "descripcion", "def" => "", "req" => true),
                array("key" => "costo", "def" => "", "req" => true)
            ),
            'file' => 'erpsil_movimientoInventario.php'
        ),
        array(
            'r' => 'eliminar_movimientoInventario',
            'action' => 'eliminarMovimientoInventario',
            'access' => 'users_loggedIn',
            'access_params' => 'accessName',
            'params' => array(
                array("key" => "id", "def" => "", "req" => true) 
            ),
            'file' => 'erpsil_movimientoInventario.php'
        ),      
        array(
            'r' => 'editar_movimientoInventario',
            'action' => 'editarMovimientoInventario',
            'access' => 'users_loggedIn',
            'access_params' => 'accessName',
            'params' => array(
                array("key" => "id_usuario", "def" => "", "req" => true),
                array("key" => "id_producto", "def" => "", "req" => true),
                array("key" => "razon", "def" => "", "req" => true),
                array("key" => "descripcion", "def" => "", "req" => true),
                array("key" => "costo", "def" => "", "req" => true)   
            ),
            'file' => 'erpsil_movimientoInventario.php'
        ),
        array(
            'r' => 'mostrar_movimientoInventario',
            'action' => 'mostrarMovimientoInventario',
            'access' => 'users_loggedIn',
            'access_params' => 'accessName',
            'file' => 'erpsil_movimientoInventario.php'
        ),
        array(
            'r' => 'obtener_movimientoInventario',
            'action' => 'obtenerMovimientoInventario',
            'access' => 'users_loggedIn',
            'access_params' => 'accessName',
            'params' => array(
                array("key" => "id", "def" => "", "req" => true)
            ),
            'file' => 'erpsil_movimientoInventario.php'
        ),
        array(
            'r' => 'erp',
            'action' => 'test',
            'access' => 'users_openAccess',
            'access_params' => 'accessName',
            'file' => 'erpsil_historialPrecio.php'
    ),
        array(
            'r' => 'mostrar_clientetickets',
            'action' => 'mostrarhistorialPrecios',
            'access' => 'users_loggedIn',
            'access_params' => 'accessName',
            'file' => 'erpsil_historialPrecio.php'
        ),
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
function erpsil_movimientoInventario_access(){

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



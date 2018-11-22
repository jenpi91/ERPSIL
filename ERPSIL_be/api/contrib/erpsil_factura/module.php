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
function erpsil_factura_bootMeUp(){
	// Just booting up
}

/**
 * Init function
 */


function erpsil_factura_init(){

	$paths = array(
        array(
			'r' => 'editar_factura',
			'action' => 'editarFactura',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
                array("key" => "cantidad", "def" => "", "req" => true),
                array("key" => "descripcion", "def" => "", "req" => true),
                array("key" => "id_cliente", "def" => "", "req" => true),
				array("key" => "id_factura", "def" => "", "req" => true),
				array("key" => "stamp", "def" => "", "req" => true),
				array("key" => "total", "def" => "", "req" => true),
			),
			'file' => 'erpsil_factura.php'
		),
		array(
			'r' => 'agregar_factura',
			'action' => 'agregarFactura',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			array(
				array("key" => "id_cliente", "def" => "", "req" => true),
				array("key" => "stamp", "def" => "", "req" => true),
				array("key" => "cantidad", "def" => "", "req" => true),
				array("key" => "descripcion", "def" => "", "req" => true),
				array("key" => "subTotal", "def" => "", "req" => true),
				array("key" => "descuentoTotal", "def" => "", "req" => true),
				array("key" => "total", "def" => "", "req" => true)
			),
			'file' => 'erpsil_factura.php'
		),array(
			'r' => 'eliminar_factura',
			'action' => 'eliminarFactura',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			array(
				array("key" => "id", "def" => "", "req" => true)  
			),
			'file' => 'erpsil_factura.php'
		),
		
		array(
			'r' => 'mostrar_factura',
			'action' => 'mostrarFactura',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'file' => 'erpsil_factura.php'
			),
		array(
			'r' => 'obtener_factura',
			'action' => 'obtenerFactura',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)
			),
			'file' => 'erpsil_factura.php'
		),
		array(
			'r' => 'obtener_nombre',
			'action' => 'mostrarNombre',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)
			),
			'file' => 'erpsil_factura.php'
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
 function erpsil_factura_access(){

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
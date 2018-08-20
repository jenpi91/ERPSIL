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
function erpsil_pedido_bootMeUp(){
	// Just booting up
}

/**
 * Init function
 */
function erpsil_pedido_init(){

	$paths = array(
		array(
			'r' => 'mostrar_pedido',
			'action' => 'mostrarPedido',
			'access' => 'users_loggedIn',
			'access_params' => 'accessName',
			//'params' => array(array("key" => "", "def" => "", "req" => true)),
			'file' => 'erpsil_pedido.php'
        ),array(
			'r' => 'agregar_pedido',
			'action' => 'agregarPedido',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			array(
				array("key" => "id_cliente", "def" => "", "req" => true),
				array("key" => "stamp_pedido", "def" => "", "req" => true),
				array("key" => "stamp_entrega", "def" => "", "req" => true),
				array("key" => "cant_rollos", "def" => "", "req" => true),
				array("key" => "status", "def" => "", "req" => true),
				array("key" => "descripcion", "def" => "", "req" => true),
				array("key" => "precio", "def" => "", "req" => true)
			),
			'file' => 'erpsil_pedido.php'
		),array(
			'r' => 'eliminar_pedido',
			'action' => 'eliminarPedido',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			array(
				array("key" => "id", "def" => "", "req" => true)  
			),
			'file' => 'erpsil_pedido.php'
		),array(
			'r' => 'obtener_pedido',
			'action' => 'obtenerPedido',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			array(
				array("key" => "id", "def" => "", "req" => true)  
			),
			'file' => 'erpsil_pedido.php'
		),array(
			'r' => 'agregar_EditarPedido',
			'action' => 'agregarEditarPedido',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			array(
				array("key" => "id_pedido", "def" => "", "req" => true),  
				array("key" => "id_cliente", "def" => "", "req" => true),  
				array("key" => "stamp_pedido", "def" => "", "req" => true),  
				array("key" => "stamp_entrega", "def" => "", "req" => true),  
				array("key" => "cant_rollos", "def" => "", "req" => true),  
				array("key" => "status", "def" => "", "req" => true),  
				array("key" => "descripcion", "def" => "", "req" => true),  
				array("key" => "precio", "def" => "", "req" => true)  
			),
			'file' => 'erpsil_pedido.php'
		),				
	);

	return $paths;
}

/**
 * Get the perms for this module
 */
function erpsil_pedido_access(){

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

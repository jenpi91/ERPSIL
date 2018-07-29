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
function erpsil_cliente_bootMeUp(){
	// Just booting up
}

/**
 * Init function
 */

//mismo nombre de la carpeta
function erpsil_cliente_init(){

	$paths = array(
		array(
			'r' => 'agregar_cliente',
			'action' => 'agregarCliente',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "nombre", "def" => "", "req" => true),
				array("key" => "cedula", "def" => "", "req" => true),
				array("key" => "email", "def" => "", "req" => true),
				array("key" => "direccion", "def" => "", "req" => true),
				array("key" => "telefono", "def" => "", "req" => true),
				array("key" => "descripcion", "def" => "", "req" => true),
				array("key" => "saldo_maximo", "def" => "", "req" => true),
				array("key" => "saldo", "def" => "", "req" => true),
				array("key" => "tipo", "def" => "", "req" => true),
			),
			'file' => 'erpsil_cliente.php'
		),
		array(
			'r' => 'eliminar_cliente',
			'action' => 'eliminarCliente',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)
			),
			'file' => 'erpsil_cliente.php'
		),		
		array(
			'r' => 'editar_cliente',
			'action' => 'editarCliente',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "nombre", "def" => "", "req" => true),
				array("key" => "cedula", "def" => "", "req" => true),
				array("key" => "email", "def" => "", "req" => true),
				array("key" => "direccion", "def" => "", "req" => true),
				array("key" => "telefono", "def" => "", "req" => true),
				array("key" => "descripcion", "def" => "", "req" => true),
				array("key" => "saldo_maximo", "def" => "", "req" => true),
				array("key" => "saldo", "def" => "", "req" => true),
				array("key" => "tipo", "def" => "", "req" => true),
			),
			'file' => 'erpsil_cliente.php'
		),
		array(
			'r' => 'mostrar_cliente',
			'action' => 'mostrarCliente',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'file' => 'erpsil_cliente.php'
		),
		array(
			'r' => 'obtener_cliente',
			'action' => 'obtenerCliente',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)
			),
			'file' => 'erpsil_cliente.php'
		),
			array(
				'r' => 'agregarEditar_cliente',
				'action' => 'editarCliente',
				'access' => 'users_loggedIn', 
				'access_params' => 'accessName',
				'params' => array(
					array("key" => "id", "def" => "", "req" => true),
					array("key" => "nombre", "def" => "", "req" => true),
					array("key" => "cedula", "def" => "", "req" => true),
					array("key" => "email", "def" => "", "req" => true),
					array("key" => "direccion", "def" => "", "req" => true),
					array("key" => "telefono", "def" => "", "req" => true),
					array("key" => "descripcion", "def" => "", "req" => true),
					array("key" => "saldo_maximo", "def" => "", "req" => true),
					array("key" => "saldo", "def" => "", "req" => true),
					array("key" => "tipo", "def" => "", "req" => true),
				),
				'file' => 'erpsil_cliente.php'
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
function erpsil_cliente_access(){

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

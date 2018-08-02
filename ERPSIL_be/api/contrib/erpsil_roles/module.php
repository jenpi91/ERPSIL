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
function erpsil_roles_bootMeUp(){
	// Just booting up
}

/**
 * Init function
 */


function erpsil_roles_init(){

	$paths = array(
		array(
			'r' => 'agregar_roles',
			'action' => 'agregarRoles',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "nombre", "def" => "", "req" => true),
				array("key" => "descripcion", "def" => "", "req" => true),
			),
			'file' => 'erpsil_roles.php'
		),
		array(
			'r' => 'agregar_cliente',
			'action' => 'agregarCliente',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "nombre", "def" => "", "req" => true),
				array("key" => "nombre", "def" => "", "req" => true)
			),
			'file' => 'erpsil_roles.php'
		),
		array(
			'r' => 'mostrar_roles',
			'action' => 'mostrarRoles',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'file' => 'erpsil_roles.php'
		),array(
			'r' => 'eliminar_roles',
			'action' => 'eliminarRoles',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true),
			),
			'file' => 'erpsil_roles.php'
		),
		array(
			'r' => 'agregarEditar_roles',
			'action' => 'editarRoles',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
                array("key" => "nombre", "def" => "", "req" => true),
                array("key" => "descripcion", "def" => "", "req" => true),
		),
		'file' => 'erpsil_roles.php'
		),
		array(
			'r' => 'obtener_roles',
			'action' => 'obtenerRoles',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true),
			),
			'file' => 'erpsil_roles.php'
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
function erpsil_roles_access(){

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

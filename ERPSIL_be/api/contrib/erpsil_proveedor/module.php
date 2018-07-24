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
function MODULENAME_bootMeUp(){
	// Just booting up
}

/**
 * Init function
 */


function MODULE_NAME_init(){

	$paths = array(
		array(
			'r' => 'agregar_proveedor',
			'action' => 'agregarproveedor',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "nombre", "def" => "", "req" => true),
				array("key" => "apellido1", "def" => "", "req" => true),
				array("key" => "apellido2", "def" => "", "req" => true),
				array("key" => "cedula", "def" => "", "req" => true),
				array("key" => "direccion", "def" => "", "req" => true),
				array("key" => "telefono", "def" => "", "req" => true),
				array("key" => "descripcion", "def" => "", "req" => true),
			),
			'file' => 'erpsil_proveedor.php'
		),
		array(
			'r' => 'eliminar_proveedor',
			'action' => 'eliminarproveedor',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "nombre", "def" => "", "req" => true),
				array("key" => "apellido1", "def" => "", "req" => true),
				array("key" => "apellido2", "def" => "", "req" => true),
				array("key" => "cedula", "def" => "", "req" => true),
				array("key" => "direccion", "def" => "", "req" => true),
				array("key" => "telefono", "def" => "", "req" => true),
				array("key" => "descripcion", "def" => "", "req" => true),
			),
			'file' => 'erpsil_proveedor.php'
		),		
		array(
			'r' => 'editar_proveedor',
			'action' => 'editarproveedor',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "nombre", "def" => "", "req" => true),
				array("key" => "apellido1", "def" => "", "req" => true),
				array("key" => "apellido2", "def" => "", "req" => true),
				array("key" => "cedula", "def" => "", "req" => true),
				array("key" => "direccion", "def" => "", "req" => true),
				array("key" => "telefono", "def" => "", "req" => true),
				array("key" => "descripcion", "def" => "", "req" => true),
			),
			'file' => 'erpsil_proveedor.php'
		),
		array(
			'r' => 'mostrar_proveedor',
			'action' => 'mostrarproveedor',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "nombre", "def" => "", "req" => true),
				array("key" => "apellido1", "def" => "", "req" => true),
				array("key" => "apellido2", "def" => "", "req" => true),
				array("key" => "cedula", "def" => "", "req" => true),
				array("key" => "direccion", "def" => "", "req" => true),
				array("key" => "telefono", "def" => "", "req" => true),
				array("key" => "descripcion", "def" => "", "req" => true),
			),
			'file' => 'erpsil_proveedor.php'
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
function MODULENAME_access(){

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
+
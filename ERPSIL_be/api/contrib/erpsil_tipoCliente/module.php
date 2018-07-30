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
function erpsil_tipoCliente_bootMeUp(){
	// Just booting up
}

/**
 * Init function
 */


function erpsil_tipoCliente_init(){

	$paths = array(
		array(
			'r' => 'agregar_tipoCliente',
			'action' => 'agregarTipoCliente',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "nombre", "def" => "", "req" => true),
				array("key" => "descripcion", "def" => "", "req" => true),
				array("key" => "ganancia_global", "def" => "", "req" => true),
				array("key" => "dias_credito", "def" => "", "req" => true),
			),
			'file' => 'erpsil_tipoCliente.php'
		),
		array(
			'r' => 'eliminar_tipoCliente',
			'action' => 'eliminarTipoCliente',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true),
			),
			'file' => 'erpsil_tipoCliente.php'
		),		
		array(
			'r' => 'editar_tipoCliente',
			'action' => 'editarTipoCliente',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "nombre", "def" => "", "req" => true),
				array("key" => "descripcion", "def" => "", "req" => true),
				array("key" => "ganancia_global", "def" => "", "req" => true),
				array("key" => "dias_Credito", "def" => "", "req" => true),
			),
			'file' => 'erpsil_tipoCliente.php'
		),
		array(
			'r' => 'mostrar_tipoCliente',
			'action' => 'mostrarTipoCliente',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'file' => 'erpsil_tipoCliente.php'
		),
		array(
			'r' => 'agregarEditar_tipoCliente',
			'action' => 'editarTipoCliente',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
                array("key" => "nombre", "def" => "", "req" => true),
                array("key" => "descripcion", "def" => "", "req" => true),
                array("key" => "ganancia_global", "def" => "", "req" => true),
				array("key" => "dias_credito", "def" => "", "req" => true),
		),
		'file' => 'erpsil_tipoCliente.php'
	),
	array(
		'r' => 'obtener_tipoCliente',
		'action' => 'obtenerTipoCliente',
		'access' => 'users_loggedIn', 
		'access_params' => 'accessName',
		'params' => array(
			array("key" => "id", "def" => "", "req" => true)
		),
		'file' => 'erpsil_tipoCliente.php'
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
function erpsil_tipoCliente_access(){

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

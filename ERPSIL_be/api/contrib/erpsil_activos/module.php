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
function erpsil_activos_bootMeUp(){
	// Just booting up
}

/**
 * Init function
 */


function erpsil_activos_init(){

	$paths = array(
		array(
			'r' => 'agregar_activos',
			'action' => 'agregarActivos',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "nombre", "def" => "", "req" => true),
				array("key" => "cantidad", "def" => "", "req" => true),
				array("key" => "vence", "def" => "", "req" => true),
			),
			'file' => 'erpsil_activos.php'
		),
		array(
			'r' => 'eliminar_activos',
			'action' => 'eliminarActivos',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true),
			),
			'file' => 'erpsil_activos.php'
		),		
		array(
			'r' => 'obtener_activos',
			'action' => 'obtenerActivos',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true),
			),
			'file' => 'erpsil_activos.php'
		),
		array(
			'r' => 'mostrar_Activos',
			'action' => 'mostrarActivos',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'file' => 'erpsil_activos.php'
		),
		array(
			'r' => 'agregarEditar_activos',
			'action' => 'editarActivos',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
                array("key" => "nombre", "def" => "", "req" => true),
                array("key" => "cantidad", "def" => "", "req" => true),
                array("key" => "vencimiento", "def" => "", "req" => true),
		),
		'file' => 'erpsil_activos.php'
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
function erpsil_activos_access(){

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

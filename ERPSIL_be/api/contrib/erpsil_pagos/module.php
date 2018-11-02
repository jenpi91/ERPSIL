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
function erpsil_pagos_bootMeUp(){

}

/**
 * Init function
 */


function erpsil_pagos_init(){

	$paths = array(
		array(
			'r' => 'mostrar_pagos',
			'action' => 'mostrarPagos',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'file' => 'erpsil_pagos.php'
		),
		array(
			'r' => 'agregarEditar_pagos',
			'action' => 'editarPagos',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			array(
				array("key" => "id", "def" => "", "req" => true),
				array("key" => "id_cuenta", "def" => "", "req" => true),
				array("key" => "id_usuarios", "def" => "", "req" => true),
				array("key" => "fecha", "def" => "", "req" => true),
				array("key" => "pago", "def" => "", "req" => true),
				array("key" => "actual", "def" => "", "req" => true)
			),
			'file' => 'erpsil_pagos.php'
		),
		array(
			'r' => 'agregar_pagos',
			'action' => 'agregarPagos',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			array(
			array("key" => "id_cuenta", "def" => "", "req" => true),
			array("key" => "id_usuarios", "def" => "", "req" => true),
			array("key" => "pago", "def" => "", "req" => true),
			array("key" => "fecha", "def" => "", "req" => true),
			array("key" => "actual", "def" => "", "req" => true)
			),
			'file' => 'erpsil_pagos.php'
		),
		array(
			'r' => 'eliminar_pagos',
			'action' => 'eliminarPago',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)  
			),
			'file' => 'erpsil_pagos.php'
		),		
		array(
			'r' => 'obtener_pagos',
			'action' => 'obtenerPagos',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)
			),
			'file' => 'erpsil_pagos.php'
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
function erpsil_pagos_access(){
/*
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
*/
}

/**@}*/
/** @}*/

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
			'r' => 'agregar_pagos',
			'action' => 'editarPagos',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			array(
			array("key" => "id_cuenta", "def" => "", "req" => true),
			array("key" => "id_usuarios", "def" => "", "req" => true),
			array("key" => "pago", "def" => "", "req" => true),
			array("key" => "pago", "def" => "", "req" => true)
			),
			'file' => 'erpsil_permisosRol.php'
		),
		array(
			'r' => 'eliminar_permisoRol',
			'action' => 'eliminarPermisoRol',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)  
			),
			'file' => 'erpsil_permisosRol.php'
		),		
		array(
			'r' => 'editar_clientesTickets',
			'action' => 'editarClientesTickets',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id_ticket", "def" => "", "req" => true),
				array("key" => "id_cliente", "def" => "", "req" => true),
				array("key" => "stamp", "def" => "", "req" => true),
				array("key" => "titulo", "def" => "", "req" => true),
				array("key" => "comentario", "def" => "", "req" => true),
				array("key" => "status", "def" => "", "req" => true)
			),
			'file' => 'erpsil_clientesTickets.php'
		),
		array(
			'r' => 'agregar_permisosRol',
			'action' => 'agregarPermisosRol',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
                array("key" => "id_rol", "def" => "", "req" => true),
				array("key" => "estado", "def" => "", "req" => true)
			),
			'file' => 'erpsil_permisosRol.php'
		),
		array(
			'r' => 'obtener_permisosRol',
			'action' => 'obtenerPermisosRol',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)
			),
			'file' => 'erpsil_permisosRol.php'
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

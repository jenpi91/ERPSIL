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
function erpsil_empleado_bootMeUp(){
	// Just booting up
}

/**
 * Init function
 */


function erpsil_empleado_init(){

	$paths = array(
		array(
			'r' => 'agregar_empleado',
			'action' => 'agregarEmpleado',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
                array("key" => "nombre", "def" => "", "req" => true),
                array("key" => "apellido1", "def" => "", "req" => true),
                array("key" => "apellido2", "def" => "", "req" => true),
				array("key" => "telefono", "def" => "", "req" => true),
				array("key" => "cedula", "def" => "", "req" => true),
				array("key" => "direccion", "def" => "", "req" => true),
				array("key" => "ingreso", "def" => "", "req" => true),
				array("key" => "observacion", "def" => "", "req" => true),
				array("key" => "puesto", "def" => "", "req" => true),
				array("key" => "jornada", "def" => "", "req" => true),
			),
			'file' => 'erpsil_empleado.php'
		),
		array(
			'r' => 'eliminar_empleado',
			'action' => 'eliminarEmpleado',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
                array("key" => "id", "def" => "", "req" => true),
                ),
			'file' => 'erpsil_empleado.php'
		),		
		array(
			'r' => 'editar_empleado',
			'action' => 'editarEmpleado',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
                array("key" => "nombre", "def" => "", "req" => true),
                array("key" => "apellido1", "def" => "", "req" => true),
                array("key" => "apellido2", "def" => "", "req" => true),
				array("key" => "telefono", "def" => "", "req" => true),
				array("key" => "cedula", "def" => "", "req" => true),
				array("key" => "direccion", "def" => "", "req" => true),
				array("key" => "ingreso", "def" => "", "req" => true),
				array("key" => "observacion", "def" => "", "req" => true),
				array("key" => "puesto", "def" => "", "req" => true),
				array("key" => "jornada", "def" => "", "req" => true),
			),
			'file' => 'erpsil_empleado.php'
		),
		array(
			'r' => 'mostrar_empleado',
			'action' => 'mostrarEmpleado',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'file' => 'erpsil_empleado.php'
			),
		array(
			'r' => 'obtener_empleado',
			'action' => 'obtenerEmpleado',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)
			),
			'file' => 'erpsil_empleado.php'
		),
		array(
			'r' => 'agregarEditar_empleado',
			'action' => 'editarEmpleado',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
                array("key" => "nombre", "def" => "", "req" => true),
                array("key" => "apellido1", "def" => "", "req" => true),
                array("key" => "apellido2", "def" => "", "req" => true),
				array("key" => "telefono", "def" => "", "req" => true),
				array("key" => "cedula", "def" => "", "req" => true),
				array("key" => "direccion", "def" => "", "req" => true),
				array("key" => "ingreso", "def" => "", "req" => true),
				array("key" => "observacion", "def" => "", "req" => true),
				array("key" => "puesto", "def" => "", "req" => true),
				array("key" => "jornada", "def" => "", "req" => true),
			),
			'file' => 'erpsil_empleado.php'
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
 function erpsil_empleado_access(){

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

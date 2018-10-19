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
function erpsil_planilla_bootMeUp(){
	// Just booting up
}

/**
 * Init function
 */


function erpsil_planilla_init(){

	$paths = array(
        array(
			'r' => 'editar_planilla',
			'action' => 'editarPlanilla',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
                array("key" => "id_planilla", "def" => "", "req" => true),
                array("key" => "id_empleado", "def" => "", "req" => true),
                array("key" => "salario_bruto", "def" => "", "req" => true),
				array("key" => "ccss", "def" => "", "req" => true),
				array("key" => "rebaja", "def" => "", "req" => true),
				array("key" => "salario_neto", "def" => "", "req" => true),
			),
			'file' => 'erpsil_planilla.php'
		),
		
		array(
			'r' => 'mostrar_planilla',
			'action' => 'mostrarPlanilla',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'file' => 'erpsil_planilla.php'
			),
		array(
				'r' => 'agregar_planilla',
				'action' => 'agregarPlanilla',
				'access' => 'users_loggedIn', 
				'access_params' => 'accessName',
				array(
					array("key" => "id_empleado", "def" => "", "req" => true),
					array("key" => "salario_bruto", "def" => "", "req" => true),
					array("key" => "ccss", "def" => "", "req" => true),
					array("key" => "rebaja", "def" => "", "req" => true),
					array("key" => "salario_neto", "def" => "", "req" => true)
				),
				'file' => 'erpsil_planilla.php'
			),
		array(
				'r' => 'eliminar_planilla',
				'action' => 'eliminarPlanilla',
				'access' => 'users_loggedIn', 
				'access_params' => 'accessName',
				array(
					array("key" => "id", "def" => "", "req" => true)  
				),
				'file' => 'erpsil_planilla.php'
			),

		array(
			'r' => 'obtener_planilla',
			'action' => 'obtenerPlanilla',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)
			),
			'file' => 'erpsil_planilla.php'
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
 function erpsil_planilla_access(){

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
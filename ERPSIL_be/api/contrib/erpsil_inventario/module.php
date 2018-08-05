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
function erpsil_inventario_bootMeUp(){
	// Just booting up
}

/**
 * Init function
 */


function erpsil_inventario_init(){

	$paths = array(
		array(
			'r' => 'agregar_inventario',
			'action' => 'agregarInventario',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "cantidad", "def" => "", "req" => true),
				array("key" => "unidad", "def" => "", "req" => true),
				array("key" => "codigo_interno", "def" => "", "req" => true),
				array("key" => "codigo_barras", "def" => "", "req" => true),
				array("key" => "categoria", "def" => "", "req" => true),
				array("key" => "cantidad_minima", "def" => "", "req" => true),
                array("key" => "descripcion", "def" => "", "req" => true),
                array("key" => "impuesto_venta", "def" => "", "req" => true),
                array("key" => "ganancia_minima", "def" => "", "req" => true),
                array("key" => "costo", "def" => "", "req" => true),
                array("key" => "status", "def" => "", "req" => true)            
            ),
			'file' => 'erpsil_inventario.php'
		),
		array(
			'r' => 'eliminar_inventario',
			'action' => 'eliminarInventario',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)  
			),
			'file' => 'erpsil_inventario.php'
		),		
		array(
			'r' => 'editar_inventario',
			'action' => 'editarInventario',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "cantidad", "def" => "", "req" => true),
				array("key" => "unidad", "def" => "", "req" => true),
				array("key" => "codigo_interno", "def" => "", "req" => true),
				array("key" => "codigo_barras", "def" => "", "req" => true),
				array("key" => "categoria", "def" => "", "req" => true),
				array("key" => "cantidad_minima", "def" => "", "req" => true),
                array("key" => "descripcion", "def" => "", "req" => true),
                array("key" => "impuesto_venta", "def" => "", "req" => true),
                array("key" => "ganancia_minima", "def" => "", "req" => true),
                array("key" => "costo", "def" => "", "req" => true),
                array("key" => "status", "def" => "", "req" => true)   
			),
			'file' => 'erpsil_inventario.php'
		),
		array(
			'r' => 'mostrar_inventario',
			'action' => 'mostrarInventario',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'file' => 'erpsil_inventario.php'
		),
		array(
			'r' => 'agregarEditar_inventario',
			'action' => 'editarInventario',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
                array("key" => "cantidad", "def" => "", "req" => true),
                array("key" => "unidad", "def" => "", "req" => true),
                array("key" => "codigo_interno", "def" => "", "req" => true),
				array("key" => "codigo_barras", "def" => "", "req" => true),
				array("key" => "categoria", "def" => "", "req" => true),
				array("key" => "cantidad_minima", "def" => "", "req" => true),
				array("key" => "descripcion", "def" => "", "req" => true),
				array("key" => "impuesto_venta", "def" => "", "req" => true),
				array("key" => "ganancia_minima", "def" => "", "req" => true),
				array("key" => "costo", "def" => "", "req" => true),
				array("key" => "status", "def" => "", "req" => true)
			),
			'file' => 'erpsil_inventario.php'
		),
		array(
			'r' => 'obtener_inventario',
			'action' => 'obtenerInventario',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)
			),
			'file' => 'erpsil_inventario.php'
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
function erpsil_inventario_access(){

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

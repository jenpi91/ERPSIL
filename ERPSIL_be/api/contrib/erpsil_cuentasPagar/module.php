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
function erpsil_cuentasPagar_bootMeUp(){
	// Just booting up
}

/**
 * Init function
 */

//mismo nombre de la carpeta
function erpsil_cuentasPagar_init(){

	$paths = array(
		array(
			'r' => 'agregar_historialPrecio',
			'action' => 'agregarhistorialPrecio',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id_inventario", "def" => "", "req" => true),
				array("key" => "id_proveedor", "def" => "", "req" => true),
				array("key" => "costo", "def" => "", "req" => true),
				array("key" => "fecha", "def" => "", "req" => true),
			),
			'file' => 'erpsil_historialPrecios.php'
		),
		array(
			'r' => 'eliminar_historialPrecio',
			'action' => 'eliminarHistorialPrecio',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'params' => array(
				array("key" => "id", "def" => "", "req" => true)
			),
			'file' => 'erpsil_historialPrecios.php'
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
			'r' => 'mostrar_cuentasPagar',
			'action' => 'mostrarCuentasPagar',
			'access' => 'users_loggedIn', 
			'access_params' => 'accessName',
			'file' => 'erpsil_cuentasPagar.php'
		),
		array(
			'r' => 'obtener_historialPrecios',
			'action' => 'obtenerHistorialPrecios',
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
function erpsil_cuentasPagar_access(){

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

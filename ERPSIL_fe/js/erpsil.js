var debug = true;

function boot_erpsil() {
    calaApi_checkLogin(function (d) {
        erpsil_debug("Estamos log");
        //erpsil_debug(d);
        //erpsil_agregarClienteWindow();
        erpsil_listarCliente();
    }, function () {
       // erpsil_debug("No estamos log");
        /* Mostrar paginas */
        //agregarUsuario();
        erpsil_loginWindow();

        /*********Cliente********/
        //erpsil_agregarCliente();
        //erpsil_mostrarCliente();
        //erpsil_editarCliente();
        //erpsil_detalleCliente();

        /*********Tipo Cliente*******/
        //erpsil_agregarTipoCliente();
        //erpsil_mostrarTipoCliente();
        //erpsil_editarTipoCliente();
        //erpsil_detalleTipoCliente();

        /*********Empleado********/
        //erpsil_agregarEmpleado();
        //erpsil_mostrarEmpleado();
        //erpsil_editarEmpleado();
        //erpsil_detalleEmpleado();
        
        /*********Proveedor********/
        //erpsil_agregarProveedor();
        //erpsil_mostrarProveedor();
        //erpsil_editarProveedor();
        //erpsil_detalleProveedor();
        
        /*********Inventario*******/
        //erpsil_agregarInventario();
        //erpsil_mostrarInventario();
        //erpsil_editarInventario();
        //erpsil_detalleInventario();

    });
    //success, error, timeout
}
/*********************************************************/
/*                       Login                           */
/*********************************************************/
function erpsil_loginWindow() {
    //var loginWindow = "Aca va la ventana de login";
    var loginWindow = ""
+    "<div class='login-form'>"
+        "<h2 class='text-center'>Log in</h2>"
+        "<div class='form-group'>"
+           " <input type='text' class='form-control' placeholder='Username' required='required' id='inputUser'>"
+        "</div>"
+        "<div class='form-group'>"
+            "<input type='password' class='form-control' placeholder='Password' required='required' id='inputPassword'>"
+        "</div>"
+        "<div class='form-group'>"
+            "<button onClick='erpsil_login()' class='btn btn-primary btn-block'>Log in</button>"
+        "</div>"
+   " </div>"
                           
    erpsil_setContent(loginWindow);
}

function erpsil_menuWindow() {
    //var loginWindow = "Aca va la ventana de login";
    var menuWindow = ""

+    "<h2>Menu</h2>"

+    "<ul>"
+    "  <li><a href='#home'>Home</a></li>"
+    "  <li><a href=''>Agregar Cliente</a></li>"
+    "  <li><a href='#contact'>Contact</a></li>"
+    "  <li><a href='#abou'>About</a></li>"
+    "</ul>"
                           
    erpsil_setContent(menuWindow);
}

/*********************************************************/
/*                  Gestion Cliente                      */
/*********************************************************/

/*****************Agregar cliente*************************/
function erpsil_agregarClienteWindow() {
    //var loginWindow = "Aca va la ventana de login";
    var agregarClienteWindow = ""

    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Agregar cliente</h2>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre' required='required' id='inputName'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Cedula' required='required' id='inputCedula'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Email' required='required' id='inputEmail'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<input type='password' class='form-control' placeholder='Direccion' required='required' id='inputDireccion'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Telefono' required='required' id='inputTelefono'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Descripcion' required='required' id='inputDescripcion'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Saldo Maximo' required='required' id='inputSaldoMa'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='saldo' required='required' id='inputSaldo'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Tipo' required='required' id='inputTipo'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<button onClick='erpsil_agregarCliente()' class='btn btn-primary btn-block'>Agregar</button>"
    +        "</div>"
    +   " </div>"

    erpsil_setContent(agregarClienteWindow);
}

/******************Mostrar cliente*************************/
function erpsil_mostrarClienteWindow() {

    var MostrarClienteWindow = ""

+      "<div class='table-responsive'>"
+         "<table class='table table-striped table-hover'>"
+            "<tr>"
+                "<th>ID </th>"
+                "<th>Nombre </th>"
+                "<th>Cedula </th>"
+                "<th>Email </th>"
+                "<th>Direccion </th>"
+                "<th>Teléfono </th>"
+                "<th>Descripcion </th>"
+                "<th>Saldo Maximo </th>"
+                "<th>Saldo</th>"
+                "<th>Tipo</th>"
+            "</tr>"
+            "<tr>"
+                "<td> </td>"
+                "<td> </td>"
+                "<td> </td>"
+                "<td> </td>"
+                "<td> </td>"
+                "<td> </td>"
+                "<td> </td>"
+                "<td> </td>"
+                "<td> </td>"
+                "<td> </td>"
+                
+            "</td>"

+                "<td>"
+                    "<a href='' title='Editar' onclick='' class='btn btn-warning btn-sm'><span class='' aria-hidden='true'>Editar</span></a>"
+                    "<a href='' title='Eliminar' onclick='' class='btn btn-danger btn-sm'><span class='' aria-hidden='true'>Eliminar</span></a>"
+                "</td>"
+            "</tr>"
+         "</table>"
+      "</div>"


    erpsil_setContent(MostrarClienteWindow);
}

/*******************Editar Cliente*************************/
function erpsil_editarCliente() {

    var editarClienteWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar cliente</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' name='id_cliente' value='' class='form-control' placeholder='ID' required>"
+             "</div>"
+           "<label class='col-sm-3 control-label'>Nombres</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text' name='nombre' value='' class='form-control' placeholder='Nombre' required>"
+           "</div>"
+           "<label class='col-sm-3 control-label'>Cedula</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' name='cedula' value='' class='form-control' placeholder='Cedula' required>"
+           "</div>"
+       "<label class='col-sm-3 control-label'>Email</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' name='email' value='' class='form-control' placeholder='Email' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Direccion</label>"
+        "<div class='col-sm-4'>"
+            "<textarea name='direccion' class='form-control' placeholder='Dirección'></textarea>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Telefono</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' name='telefono' value='' class='form-control' placeholder='Telefono' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Descripcion</label>"
+        "<div class='col-sm-4'>"
+            "<textarea name='direccion' class='form-control' placeholder='Descripcion'></textarea>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Saldo Maximo</label>"
+        "<div class='col-sm-3'>"
+            "<textarea name='saldo_maximo' class='form-control' placeholder='Saldo Maximo'></textarea>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Saldo</label>"
+        "<div class='col-sm-3'>"
+            "<input type='text' name='saldo' value='' class='form-control' placeholder='Saldo' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Tipo</label>"
+       " <div class='col-sm-3'>"           
+            "<input type='text' name='tipo' value='' class='form-control' placeholder='Tipo' required>"
+        "</div>"    
+            "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<input type='submit' name=' ' class='btn btn-sm btn-primary' value='Guardar datos'>"
+                "<a href=' ' class='btn btn-sm btn-danger'>Cancelar</a>"
+                 "</div>"
+            "</form>"
+        "</div>"
+       "</div>"
+       "</div>"


    erpsil_setContent(editarClienteWindow);
}

/*******************Detalles Cliente***********************/
function erpsil_detalleCliente() {

    var detalleClienteWindow = ""

+        "<table class='table table-striped table-condensed'>"
+            "<tr>"
+                "<th width='20%'>ID del cliente</th>"
+               "<td><?php echo $row['id_cliente']; ?></td>"
+           "</tr>"
+           "<tr>"
+                "<th>Nombre del cliente</th>"
+                "<td><?php echo $row['nombres']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Cedula</th>"
+               "<td><?php echo $row['cedula']; ?></td>"
+           "</tr>"
+           "<tr>"
+               "<th>Email</th>"
+                "<td><?php echo $row['email']; ?></td>"
+            "</tr>"
+            "<tr>"
+            "<th>Direccion</th>"
+            "<td><?php echo $row['direccion']; ?></td>"
+            "</tr>"
+            "<tr>"
+               "<th>Teléfono</th>"
+                "<td><?php echo $row['telefono']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Descripcion</th>"
+                "<td><?php echo $row['descripcion']; ?></td>"
+            "</tr>"
+            "<tr>"
+               "<th>Saldo Maximo</th>"
+                "<td><?php echo $row['saldo_maximo']; ?></td>"
+           "</tr>"
+            "<tr>"
+                "<th>Saldo</th>"
+                "<td><?php echo $row['saldo']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Tipo</th>"
+                "<td><?php echo $row['tipo']; ?></td>"
+            "</tr>"
+        "</table >"
+                "<a href='' class='btn btn-sm btn-info'><span class='glyphicon glyphicon-refresh' aria-hidden='true'></span> Regresar</a>"
+                "<a href='' class='btn btn-sm btn-success'><span class='glyphicon glyphicon-edit' aria-hidden='true'></span> Editar datos</a>"
+                "<a href='' class='btn btn-sm btn-danger' onclick='return confirm('Esta seguro de borrar los datos <?php echo $row['nombres']; ?><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> Eliminar</a>"
+        "</div>"
+    "</div>"


    erpsil_setContent(detalleClienteWindow);
}


/*********************************************************/
/*               Gestion del tipo cliente                */
/*********************************************************/

/*****************Agregar tipo cliente***********************/
function erpsil_agregarTipoCliente() {
    //var loginWindow = "Aca va la ventana de login";
    var agregarTipoClienteWindow = ""

    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Tipo de cliente</h2>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre' required='required' id='inputNombre'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<input type='password' class='form-control' placeholder='Descripcion' required='required' id='inpu'Descripcion'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Ganancia Global' required='required' id='inputGananciaG'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Dias de Credito'' required='required' id='inputDiasCredito'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<button onClick='erpsil_registrarProveedor()' class='btn btn-primary btn-block'>Agregar</button>"
    +        "</div>"
    +   " </div>"
                       
    erpsil_setContent(agregarTipoClienteWindow);
}

/******************Mostrar tipo cliente*************************/
function erpsil_mostrarTipoCliente() {

    var MostrarTipoClienteWindow = ""

+      "<div class='table-responsive'>"
+         "<table class='table table-striped table-hover'>"
+            "<tr>"
+                "<th>ID</th>"
+                "<th>Nombre</th>"
+                "<th>Descripcion</th>"
+                "<th>Ganancia global</th>"
+                "<th>Dias de credito</th>"
+            "</tr>"
+            "<tr>"
+                "<td>'.$id_tipoCliente.'</td>"
+                "<td>'.$row['nombre'].'</td>"
+                "<td>'$row['descripcion']</td>"
+                "<td>'.$row['ganancia_global'].'</td>"
+                "<td>'.$row['dias_credito'].'</td>"
+                "<td>"
+            "</td>"
+            "</tr>"
+                "<td>"
+                    "<a href='' title='Editar' onclick='' class='btn btn-warning btn-sm'><span class='' aria-hidden='true'>Editar</span></a>"
+                    "</br>"
+                    "</br>"
+                    "<a href='' title='Eliminar' onclick='' class='btn btn-danger btn-sm'><span class='' aria-hidden='true'>Eliminar</span></a>"
+                "</td>"
+         "</table>"
+      "</div>"


    erpsil_setContent(MostrarTipoClienteWindow);
}

/*******************Editar tipo clienter*************************/
function erpsil_editarTipoCliente() {

    var editarProveedorWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar cliente</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' name='id_tipoCliente' value='' class='form-control' placeholder='ID' required>"
+             "</div>"
+           "<label class='col-sm-3 control-label'>Nombre</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text' name='nombre' value='' class='form-control' placeholder='Nombre' required>"
+           "</div>"
+           "<label class='col-sm-3 control-label'>Descripcion</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' name='descripcion' value='' class='form-control' placeholder='Descripcion' required>"
+           "</div>"
+       "<label class='col-sm-3 control-label'>Ganancia global</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' name='ganancia_global' value='' class='form-control' placeholder='Ganancia global' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Dias de credito</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' name='dias_credito' value='' class='form-control' placeholder='Dias de credito' required>"
+        "</div>"
+            "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<input type='submit' name=' ' class='btn btn-sm btn-primary' value='Guardar datos'>"
+               "</br>"  
+                "<a href=' ' class='btn btn-sm btn-danger'>Cancelar</a>"
+           "</div>"
+         "</form>"
+        "</div>"
+       "</div>"
+       "</div>"


    erpsil_setContent(editarProveedorWindow);
}

/*******************Detalles tipo clienter***********************/
function erpsil_detalleTipoCliente() {

    var detalleProveedorWindow = ""
+     "<div class= 'container'>"
+        "<table class='table table-striped table-condensed'>"
+            "<tr>"
+                "<th width='20%'>ID del cliente</th>"
+               "<td><?php echo $row['id_tipoCliente']; ?></td>"
+           "</tr>"
+           "<tr>"
+                "<th>Nombre del cliente</th>"
+                "<td><?php echo $row['nombre']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Descripcion</th>"
+               "<td><?php echo $row['descripcion']; ?></td>"
+           "</tr>"
+            "<tr>"
+                "<th>Ganancia global</th>"
+               "<td><?php echo $row['ganancia_global']; ?></td>"
+           "</tr>"
+            "<tr>"
+                "<th>Dias de credito </th>"
+               "<td><?php echo $row['dias_credito']; ?></td>"
+           "</tr>"
+        "</table >"
+                "<a href='' class='btn btn-sm btn-info'><span class='glyphicon glyphicon-refresh' aria-hidden='true'></span> Regresar</a>"
+                "</br>"
+                "<a href='' class='btn btn-sm btn-success'><span class='glyphicon glyphicon-edit' aria-hidden='true'></span> Editar datos</a>"
+                "</br>"
+                "<a href='' class='btn btn-sm btn-danger' onclick='return confirm('Esta seguro de borrar los datos <?php echo $row['nombres']; ?><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> Eliminar</a>"
+        "</div>"
+    "</div>"
+    "</div>"


    erpsil_setContent(detalleProveedorWindow);
}

/*********************************************************/
/*                 Gestion Proveedor                     */
/*********************************************************/

/*******************Agregar proveedor*******************************/
function erpsil_agregarProveedor() {
    //var loginWindow = "Aca va la ventana de login";
    var agregarProveedorWindow = ""

    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Agregar proveedor</h2>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre' required='required' id='inputName'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Primer Apellido' required='required' id='inputApe1'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Segundo Apellido'' required='required' id='inputApe2'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Direccion' required='required' id='inputDireccion'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<input type='password' class='form-control' placeholder='Descripcion' required='required' id='inpu'Descripcion'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Cedula' required='required' id='inputCedula'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<button onClick='erpsil_registrarProveedor()' class='btn btn-primary btn-block'>Agregar</button>"
    +        "</div>"
    +   " </div>"
                       
    erpsil_setContent(agregarProveedorWindow);
}

/******************Mostrar Proveedor*************************/
function erpsil_mostrarProveedor() {

    var MostrarProveedorWindow = ""

+      "<div class='table-responsive'>"
+         "<table class='table table-striped table-hover'>"
+            "<tr>"
+                "<th>ID </th>"
+                "<th>Nombre</th>"
+                "<th>Primer Apellido</th>"
+                "<th>Segundo Apellido</th>"
+                "<th>Direccion</th>"
+                "<th>Teléfono</th>"
+                "<th>Descripcion</th>"
+                "<th>Cedula</th>"
+            "</tr>"
+            "<tr>"
+                "<td>'.$id_proveedor.'</td>"
+                "<td>'.$row['Nombre'].'</td>"
+                "<td>'$row['apellido1']</td>"
+                "<td>'.$row['apellido2'].'</td>"
+                "<td>'.$row['direccion'].'</td>"
+                "<td>'.$row['telefono'].'</td>"
+                "<td>'.$row['descripcion'].'</td>"
+                "<td>'.$row['cedula'].'</td>"
+                "<td>"
+            "</td>"
+                "<td>"
+                    "<a href='' title='Editar' onclick='' class='btn btn-warning btn-sm'><span class='' aria-hidden='true'>Editar</span></a>"
+                    "<a href='' title='Eliminar' onclick='' class='btn btn-danger btn-sm'><span class='' aria-hidden='true'>Eliminar</span></a>"
+                "</td>"
+            "</tr>"
+         "</table>"
+      "</div>"


    erpsil_setContent(MostrarProveedorWindow);
}

/*******************Editar Proveedor*************************/
function erpsil_editarProveedor() {

    var editarProveedorWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar cliente</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' name='id_proveedor' value='' class='form-control' placeholder='ID' required>"
+             "</div>"
+           "<label class='col-sm-3 control-label'>Nombre</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text' name='nombre' value='' class='form-control' placeholder='Nombre' required>"
+           "</div>"
+           "<label class='col-sm-3 control-label'>Primer Apellido</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' name='apellido1' value='' class='form-control' placeholder='Primer Apellido' required>"
+           "</div>"
+       "<label class='col-sm-3 control-label'>Segudo Apellido</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' name='apellido2' value='' class='form-control' placeholder='Segudo Apellido' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Cedula</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' name='cedula' value='' class='form-control' placeholder='Cedula' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Direccion</label>"
+        "<div class='col-sm-4'>"
+            "<textarea name='direccion' class='form-control' placeholder='Dirección'></textarea>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Telefono</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' name='telefono' value='' class='form-control' placeholder='Telefono' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Descripcion</label>"
+        "<div class='col-sm-4'>"
+            "<textarea name='direccion' class='form-control' placeholder='Descripcion'></textarea>"
+        "</div>"
+            "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<input type='submit' name=' ' class='btn btn-sm btn-primary' value='Guardar datos'>"
+                "<a href=' ' class='btn btn-sm btn-danger'>Cancelar</a>"
+                 "</div>"
+            "</form>"
+        "</div>"
+       "</div>"
+       "</div>"


    erpsil_setContent(editarProveedorWindow);
}

/*******************Detalles Proveedor***********************/
function erpsil_detalleProveedor() {

    var detalleProveedorWindow = ""

+        "<table class='table table-striped table-condensed'>"
+            "<tr>"
+                "<th width='20%'>ID del proveedor</th>"
+               "<td><?php echo $row['id_proveedor']; ?></td>"
+           "</tr>"
+           "<tr>"
+                "<th>Nombre del proveedor</th>"
+                "<td><?php echo $row['nombre']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Primer Apellido</th>"
+               "<td><?php echo $row['apellido1']; ?></td>"
+           "</tr>"
+            "<tr>"
+                "<th>Segundo Apellido</th>"
+               "<td><?php echo $row['apellido2']; ?></td>"
+           "</tr>"
+            "<tr>"
+                "<th>Celdula </th>"
+               "<td><?php echo $row['cedula']; ?></td>"
+           "</tr>"
+            "<tr>"
+            "<th>Direccion</th>"
+            "<td><?php echo $row['direccion']; ?></td>"
+            "</tr>"
+           "<tr>"
+               "<th>Teléfono</th>"
+                "<td><?php echo $row['telefono']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Descripcion</th>"
+                "<td><?php echo $row['descripcion']; ?></td>"
+            "</tr>"
+        "</table >"
+                "<a href='' class='btn btn-sm btn-info'><span class='glyphicon glyphicon-refresh' aria-hidden='true'></span> Regresar</a>"
+                "</br>"
+                "<a href='' class='btn btn-sm btn-success'><span class='glyphicon glyphicon-edit' aria-hidden='true'></span> Editar datos</a>"
+                "</br>"
+                "<a href='' class='btn btn-sm btn-danger' onclick='return confirm('Esta seguro de borrar los datos <?php echo $row['nombres']; ?><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> Eliminar</a>"
+        "</div>"
+    "</div>"

    erpsil_setContent(detalleProveedorWindow);
}

/*********************************************************/
/*                 Gestion empleado                     */
/*********************************************************/

/***************Agregar empleado*********************/
function erpsil_agregarEmpleado(){
    var agregarEmpleadoWindow = ""

    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Agregar empleado</h2>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre' required='required' id='inputName'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Primer Apellido' required='required' id='inputApellido1'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Segundo Apellido' required='required' id='inputApellido2'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Telefono' required='required' id='inputTelefono'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<input type='password' class='form-control' placeholder='Cedula' required='required' id='inputCedula'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Dirección' required='required' id='inputDireccion'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Ingreso' required='required' id='inputIngreso'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Observacion' required='required' id='inputObservacion'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Puesto' required='required' id='inputPuesto'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Jornada' required='required' id='inputJornada'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<button onClick='erpsil_registrarEmpleado()' class='btn btn-primary btn-block'>Agregar</button>"
    +        "</div>"
    +   " </div>"
                       
    erpsil_setContent(agregarEmpleadoWindow);
}

/******************Mostrar Empleado*************************/
function erpsil_mostrarEmpleado() {

    var MostrarEmpleadoWindow = ""

+      "<div class='table-responsive'>"
+         "<table class='table table-striped table-hover'>"
+            "<tr>"
+                "<th>ID</th>"
+                "<th>Nombre</th>"
+                "<th>Primer Apellido</th>"
+                "<th>Segundo Apellido</th>"
+                "<th>Teléfono</th>"
+                "<th>Cedula</th>"
+                "<th>Ingreso</th>"
+                "<th>Direccion</th>"
+                "<th>Descripcion</th>"
+                "<th>Observaciones</th>"
+                "<th>Puesto</th>"
+                "<th>Jornada</th>"
+            "</tr>"
+            "<tr>"
+                "<td>'.$row[$'id_empleado'].</td>"
+                "<td>'.$row['nombre'].'</td>"
+                "<td>'.$row['apellido1']</td>"
+                "<td>'.$row['apellido2'].'</td>"
+                "<td>'.$row['telefono'].'</td>"
+                "<td>'.$row['cedula'].'</td>"
+                "<td>'.$row['direccion'].'</td>"
+                "<td>'.$row['ingreso'].'</td>"
+                "<td>'.$row['observaciones'].'</td>"
+                "<td>'.$row['Puesto'].'</td>"
+                "<td>'.$row['Jornada'].'</td>"
+                "<td>"
+            "</td>"
+                "<td>"
+                    "<a href='' title='Editar' onclick='' class='btn btn-warning btn-sm'><span class='' aria-hidden='true'>Editar</span></a>"
+                    "<a href='' title='Eliminar' onclick='' class='btn btn-danger btn-sm'><span class='' aria-hidden='true'>Eliminar</span></a>"
+                "</td>"
+            "</tr>"
+         "</table>"
+      "</div>"


    erpsil_setContent(MostrarEmpleadoWindow);
}

/*******************Editar Proveedor*************************/
function erpsil_editarEmpleado() {

    var editarEmpleadoWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar cliente</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' name='id_proveedor' value='' class='form-control' placeholder='ID' required>"
+             "</div>"
+           "<label class='col-sm-3 control-label'>Nombre</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text' name='nombre' value='' class='form-control' placeholder='Nombre' required>"
+           "</div>"
+           "<label class='col-sm-3 control-label'>Primer Apellido</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' name='apellido1' value='' class='form-control' placeholder='Primer Apellido' required>"
+           "</div>"
+       "<label class='col-sm-3 control-label'>Segudo Apellido</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' name='apellido2' value='' class='form-control' placeholder='Segudo Apellido' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Telefono</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' name='telefono' value='' class='form-control' placeholder='Telefono' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Cedula</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' name='cedula' value='' class='form-control' placeholder='Cedula' required>"
+        "</div>"     
+       "<label class='col-sm-3 control-label'>Direccion</label>"
+        "<div class='col-sm-4'>"
+            "<textarea name='direccion' class='form-control' placeholder='Dirección'></textarea>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Ingreso</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' name='ingreso' value='' class='form-control' placeholder='Ingreso' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Observaciones</label>"
+        "<div class='col-sm-4'>"
+            "<textarea name='observaciones' class='form-control' placeholder='Observaciones'></textarea>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Puesto</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' name='puesto' value='' class='form-control' placeholder='Puesto' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Jornada</label>"
+        "<div class='col-sm-4'>"
+             "<input type='text' name='jornada' value='' class='form-control' placeholder='Jornada' required>"
+        "</div>"
+           "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<input type='submit' name=' ' class='btn btn-sm btn-primary' value='Guardar datos'>"
+                "<a href=' ' class='btn btn-sm btn-danger'>Cancelar</a>"
+                 "</div>"
+            "</form>"
+        "</div>"
+       "</div>"
+       "</div>"


    erpsil_setContent(editarEmpleadoWindow);
}

/*******************Detalles Empleado***********************/
function erpsil_detalleEmpleado() {

    var detalleEmpleadoWindow = ""

+        "<table class='table table-striped table-condensed'>"
+            "<tr>"
+                "<th width='20%'>ID del empleado</th>"
+               "<td><?php echo $row['empleado']; ?></td>"
+           "</tr>"
+           "<tr>"
+                "<th>Nombre del empleado</th>"
+                "<td><?php echo $row['nombre']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Primer Apellido</th>"
+               "<td><?php echo $row['apellido1']; ?></td>"
+           "</tr>"
+            "<tr>"
+                "<th>Segundo Apellido</th>"
+               "<td><?php echo $row['apellido2']; ?></td>"
+           "</tr>"
+           "<tr>"
+               "<th>Teléfono</th>"
+                "<td><?php echo $row['telefono']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Cedula</th>"
+               "<td><?php echo $row['cedula']; ?></td>"
+           "</tr>"
+            "<tr>"
+            "<th>Direccion</th>"
+            "<td><?php echo $row['direccion']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Ingreso</th>"
+                "<td><?php echo $row['ingreso']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Puesto</th>"
+                "<td><?php echo $row['puesto']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Jornada</th>"
+                "<td><?php echo $row['jornada']; ?></td>"
+            "</tr>"
+        "</table >"
+                "<a href='' class='btn btn-sm btn-info'><span class='glyphicon glyphicon-refresh' aria-hidden='true'></span> Regresar</a>"
+                "</br>"
+                "<a href='' class='btn btn-sm btn-success'><span class='glyphicon glyphicon-edit' aria-hidden='true'></span> Editar datos</a>"
+                "</br>"
+                "<a href='' class='btn btn-sm btn-danger' onclick='return confirm('Esta seguro de borrar los datos <?php echo $row['nombres']; ?><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> Eliminar</a>"
+        "</div>"
+    "</div>"

    erpsil_setContent(detalleEmpleadoWindow);
}

/************************************************************/

/***************Agregar inventario*********************/

function erpsil_agregarInventario(){
    //var loginWindow = "Aca va la ventana de login";
    var agregarInventarioWindow = ""
    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Agregar Inventario</h2>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre' required='required' id='inputNomvre'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Cantidad' required='required' id='inputCantidad'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Unidad' required='required' id='inputUnidad'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Código Interno' required='required' id='inputCodigoInter'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +            "<input type='password' class='form-control' placeholder='Código de Barras' required='required' id='inputCodigoBarra'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +           "<input type='text' class='form-control' placeholder='Categoria' required='required' id='inputCategoria'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +           "<input type='text' class='form-control' placeholder='Cantidad Minima' required='required' id='inputCantidadMin'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Descripción' required='required' id='inputDescripcion'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Impuesto Venta' required='required' id='inputImpuestoVenta'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Ganacia Minima' required='required' id='inputGananciaMin'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Costo' required='required' id='inputCosto'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Estatus' required='required' id='inputEstatus'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +            "<button onClick='erpsil_registrarInventario()' class='btn btn-primary btn-block'>Agregar</button>"
    +        "</div>"
    +   " </div>"
                       
    erpsil_setContent(agregarInventarioWindow);
}

/******************Mostrar Empleado*************************/
function erpsil_mostrarInventario() {

    var MostrarEInventarioWindow = ""

+      "<div class='table-responsive'>"
+         "<table class='table table-striped table-hover'>"
+            "<tr>"
+                "<th>ID</th>"
+                "<th>Nombre</th>"
+                "<th>Cantidad</th>"
+                "<th>Unidad</th>"
+                "<th>Codigo interno</th>"
+                "<th>Codigo de barras</th>"
+                "<th>Categoria</th>"
+                "<th>Cantidad minina</th>"
+                "<th>Descripcion</th>"
+                "<th>Impuesto de venta</th>"
+                "<th>Ganancia minima</th>"
+                "<th>Costo</th>"
+                "<th>Estatus</th>"
+            "</tr>"
+            "<tr>"
+                "<td>'.$row[$'id_inventario'].</td>"
+                "<td>'.$row['cantidad'].'</td>"
+                "<td>'.$row['unidad']</td>"
+                "<td>'.$row['codigo_intern'].'</td>"
+                "<td>'.$row['codigo_barras'].'</td>"
+                "<td>'.$row['categoria'].'</td>"
+                "<td>'.$row['cantidad_minima'].'</td>"
+                "<td>'.$row['descripcion'].'</td>"
+                "<td>'.$row['impuesto_venta'].'</td>"
+                "<td>'.$row['ganancia_minima'].'</td>"
+                "<td>'.$row['costo'].'</td>"
+                "<td>'.$row['status'].'</td>"
+                "<td>"
+            "</td>"
+                "<td>"
+                    "<a href='' title='Editar' onclick='' class='btn btn-warning btn-sm'><span class='' aria-hidden='true'>Editar</span></a>"
+                    "<a href='' title='Eliminar' onclick='' class='btn btn-danger btn-sm'><span class='' aria-hidden='true'>Eliminar</span></a>"
+                "</td>"
+            "</tr>"
+         "</table>"
+      "</div>"


    erpsil_setContent(MostrarEInventarioWindow);
}

/*******************Editar Inventario*************************/
function erpsil_editarInventario() {

    var editarInventarioWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar inventario</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' name='id_inventario' value='' class='form-control' placeholder='ID' required>"
+             "</div>"
+           "<label class='col-sm-3 control-label'>Cantidad</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text' name='cantidad' value='' class='form-control' placeholder='Cantidad' required>"
+           "</div>"
+           "<label class='col-sm-3 control-label'>Unidad</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' name='unidad' value='' class='form-control' placeholder='Unidad' required>"
+           "</div>"
+       "<label class='col-sm-3 control-label'>Codigo interno</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' name='codigo_interno' value='' class='form-control' placeholder='Codigo interno' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Codigo de barras</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' name='codigo_barras' value='' class='form-control' placeholder='Codigo de barras' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Categoria</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' name='Categoria' value='' class='form-control' placeholder='Categoria' required>"
+        "</div>"     
+        "<label class='col-sm-3 control-label'>Cantidad minima</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' name='cantidad_minima' value='' class='form-control' placeholder='Cantidad minima' required>"
+        "</div>"     
+       "<label class='col-sm-3 control-label'>Descripcion</label>"
+        "<div class='col-sm-4'>"
+            "<textarea name='descripcion' class='form-control' placeholder='Descripcion'></textarea>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Impuesto de venta</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' name='impuesto_venta' value='' class='form-control' placeholder='Impuesto de venta' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Ganancia minima</label>"
+        "<div class='col-sm-4'>"
+            "<textarea name='ganancia_minima' class='form-control' placeholder='Ganancia minima'></textarea>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Costo</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' name='costo' value='' class='form-control' placeholder='Costo' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Estatus</label>"
+        "<div class='col-sm-4'>"
+             "<input type='text' name='estatus' value='' class='form-control' placeholder='Estatus' required>"
+        "</div>"
+           "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<input type='submit' name=' ' class='btn btn-sm btn-primary' value='Guardar datos'>"
+                "<a href=' ' class='btn btn-sm btn-danger'>Cancelar</a>"
+                 "</div>"
+            "</form>"
+        "</div>"
+       "</div>"
+       "</div>"


    erpsil_setContent(editarInventarioWindow);
}

/*******************Detalles Inventario***********************/
function erpsil_detalleInventario() {

    var detalleInventarioWindow = ""

+        "<table class='table table-striped table-condensed'>"
+            "<tr>"
+                "<th width='20%'>ID del inventarioo</th>"
+               "<td><?php echo $row['id_inventario']; ?></td>"
+           "</tr>"
+           "<tr>"
+                "<th>Cantidad inventario</th>"
+                "<td><?php echo $row['cantidad']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Unidad</th>"
+               "<td><?php echo $row['unidad']; ?></td>"
+           "</tr>"
+            "<tr>"
+                "<th>Codigo interno</th>"
+               "<td><?php echo $row['codigo_interno']; ?></td>"
+           "</tr>"
+           "<tr>"
+               "<th>Codigo de barras</th>"
+                "<td><?php echo $row['codigo_barras']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Categoria</th>"
+               "<td><?php echo $row['categoria']; ?></td>"
+           "</tr>"
+            "<tr>"
+            "<th>Cantidad minima</th>"
+            "<td><?php echo $row['cantidad_minima']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Descripcion</th>"
+                "<td><?php echo $row['descripcion']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Impuesto de venta</th>"
+                "<td><?php echo $row['impuesto_venta']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Ganancia minima</th>"
+                "<td><?php echo $row['ganancia_minima']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Costo</th>"
+                "<td><?php echo $row['costo']; ?></td>"
+            "</tr>"
+            "<tr>"
+                "<th>Estatus</th>"
+                "<td><?php echo $row['status']; ?></td>"
+            "</tr>"
+        "</table >"
+                "<a href='' class='btn btn-sm btn-info'><span class='glyphicon glyphicon-refresh' aria-hidden='true'></span> Regresar</a>"
+                "</br>"
+                "<a href='' class='btn btn-sm btn-success'><span class='glyphicon glyphicon-edit' aria-hidden='true'></span> Editar datos</a>"
+                "</br>"
+                "<a href='' class='btn btn-sm btn-danger' onclick='return confirm('Esta seguro de borrar los datos <?php echo $row['nombres']; ?><span class='glyphicon glyphicon-trash' aria-hidden='true'></span> Eliminar</a>"
+        "</div>"
+    "</div>"

    erpsil_setContent(detalleInventarioWindow);
}

/*************funciones de agregados****************/

function erpsil_login(){
    var userName = $("#inputUser").val();
    var passUser = $("#inputPassword").val();

    //(userData, success, error
    var userData = {
        userName:userName, 
        pwd:passUser
    };

    calaApiApi_login(userData, function(a){
        //console.log(a);
        erpsil_menuWindow();
    }, function(b){
        console.log(b);    
    });

    //console.log("Antes de algo");
    //erpsil_debug(userName);
    //erpsil_debug(passUser);
}

/**************Agregar cliente**********************/
function erpsil_agregarCliente(){
    var nombreCliente = $("#inputName").val();
    var cedulaCliente = $("#inputCedula").val();
    var emailCliente = $("#inputEmail").val();
    var direccionCliente = $("#inputDireccion").val();
    var telefonoCliente = $("#inputTelefono").val();
    var descripcionCliente = $("#inputDescripcion").val();
    var saldoMaCliente = $("#inputSaldoMa").val();
    var saldoCliente = $("#inputSaldo").val();
    var tipoCliente = $("#inputTipo").val();

    if(nombreCliente != "" && cedulaCliente != "" && emailCliente != "" && direccionCliente != "" 
    && telefonoCliente != "" && descripcionCliente != "" && saldoMaCliente != "" && saldoMaCliente != ""
    && tipoCliente != ""){

        var clienteData = {
            w:"erpsil_cliente",
            r:"agregar_cliente",
            nombre:nombreCliente, 
            cedula:cedulaCliente,
            email:emailCliente,
            direccion:direccionCliente,
            telefono:telefonoCliente,
            descripcion:descripcionCliente,
            saldo_maximo:saldoMaCliente,
            saldo:saldoCliente,
            tipo:tipoCliente
        };
    
        calaApi_postRequest(clienteData, function (d) {
            console.log("agregado" + d);
        }, function (d) {
            console.log("No agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

function erpsil_listarCliente() {
    var clienteData = {
        w: "erpsil_cliente",
        r: "mostrar_cliente"
    };

    calaApi_postRequest(clienteData, function (d) {
        console.log(d);






        var MostrarClienteWindow = ""

        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID </th>"
        +                "<th>Nombre </th>"
        +                "<th>Cedula </th>"
        +                "<th>Email </th>"
        +                "<th>Direccion </th>"
        +                "<th>Teléfono </th>"
        +                "<th>Descripcion </th>"
        +                "<th>Saldo Maximo </th>"
        +                "<th>Saldo</th>"
        +                "<th>Tipo</th>"
        +            "</tr>";
for(x in d.resp){
    var a = d.resp[x];
    MostrarClienteWindow += ""
    
       +            "<tr>"
        +                "<td> "+ d.id_cliente +" </td>"
        +                "<td> "+ d.nombre +" </td>"
        +                "<td> "+ d.cedula +" </td>"
        +                "<td> "+ d.email +" </td>"
        +                "<td> "+ d.direccion +" </td>"
        +                "<td> "+ d.telefono +" </td>"
        +                "<td> "+ d.descripcion +" </td>"
        +                "<td> "+ d.saldo_maximo +" </td>"
        +                "<td> "+ d.saldo +" </td>"
        +                "<td> "+ d.tipo +" </td>"
        +            "</tr>";
}
            MostrarClienteWindow += ""
        +                "<td>"
        +                    "<a href='' title='Editar' onclick='' class='btn btn-warning btn-sm'><span class='' aria-hidden='true'>Editar</span></a>"
        +                    "<a href='' title='Eliminar' onclick='' class='btn btn-danger btn-sm'><span class='' aria-hidden='true'>Eliminar</span></a>"
        +                "</td>"
        +            "</tr>"
        +         "</table>"
        +      "</div>";



        erpsil_setContent(MostrarClienteWindow);

    }, function (d) {
        console.log(d);
    });
}


/*****************Agregar un usuario******************/
function agregarUsuario(){
    var req = {

        fullName: "Daniel",
        userName: "olsen",
        userEmail: "algkkkoff@aa.com",
        pwd: "123",
        about: "abc",
        userCountry: "cr"
    };

    calaApi_registerUser(req, function(a){
        console.log(a + "Log exitoso");
    }, function(b){
        console.log(b + "Falla del log");
    });
}

/******************Redireccion a otra pag**********************/

function erpsil_setContent(content) {
    $("#erpsil_content").empty();
    $("#erpsil_content").append(content);
}

function erpsil_debug(mensaje) {
    if (debug) {
        console.log("erpsil >> " + mensaje);
    }
}


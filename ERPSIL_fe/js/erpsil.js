var debug = true;
var cache = "";

function boot_erpsil() {
    calaApi_checkLogin(function (d) {
        erpsil_debug("Estamos log");
        //erpsil_debug(d);
        //erpsil_agregarClienteWindow();
        //erpsil_listarCliente();
        //erpsil_agregarEmpleadoWindow();
        //erpsil_listarEmpleado();      
        //erpsil_agregarProveedorWindow();
        //erpsil_listarProveedor();
        //erpsil_listarInventario();
        //erpsil_agregarInventarioWindow();
        //erpsil_listarTipoCliente();
        //erpsil_agregarTipoClienteWindow();
        //erpsil_agregarActivosWindow();
        //erpsil_listarActivos();
        //erpsil_agregarUsuarioWindow();
        erpsil_menuWindow();
        //agregarUsuario();

    }, function () {
       // erpsil_debug("No estamos log");
        /* Mostrar paginas */
        //agregarUsuario();
        erpsil_loginWindow();

    });
    //success, error, timeout
}

/*********************************************************/
/*                 Gestion login                         */
/*********************************************************/

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
        //erpsil_listarCliente();
        //erpsil_agregarEmpleado();
        //erpsil_agregarEmpleadoWindow();
        //erpsil_listarEmpleado();
        //erpsil_listarProveedor();
        //erpsil_agregarInventarioWindow();

    }, function(b){
        console.log(b);    
    });

    //console.log("Antes de algo");
    //erpsil_debug(userName);
    //erpsil_debug(passUser);
}

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
+    "  <div class='form-control' onClick='erpsil_menuWindow()'Menu</div>"
+    "  <div class='form-control' onClick='erpsil_listarCliente()'>Cliente</div>"
+    "  <div class='form-control' onClick='erpsil_listarProveedor()'>Proveedor</div>"
+    "  <div class='form-control' onClick='erpsil_agregarTipoCliente()'>Empleado</div>"
+    "  <div class='form-control' onClick='erpsil_listarRoles()'>Roles</div>"
+    "  <div class='form-control' onClick='erpsil_listarTipoCliente()'>Tipo Cliente</div>"
+    "  <div class='form-control' onClick='erpsil_listarInventario()'>Inventario</div>"
+    "  <div class='form-control' onClick='erpsil_listarActivos()'>Activos</div>"
+    "  <div class='form-control' onClick='erpsil_listarClientesTickets()'>listar ticketes</div>"
+    "  <div class='form-control' onClick='erpsil_agregarClientesTicketsWindow()'>Usuario</div>"
+    "  <div class='form-control' onClick='erpsil_listarPermisoRol()'>Permisos rol</div>"
+    "  <div class='form-control' onClick='erpsil_listarCuentasPagar()'>Cuentas pagar</div>"
+    "  <div class='form-control' onClick='erpsil_listarHistorialPrecio()'>Historial Precio</div>"
+    "  <div class='form-control' onClick='erpsil_listarPagos()'> Pagos</div>"

+    "</ul>"
                           
    erpsil_setContent(menuWindow);
}

/*********************************************************/
/*           Gestion del tbl_clientesTickets             */
/*********************************************************/

function erpsil_listarClientesTickets(){
    var ClientesTicketsData = {
        w:"erpsil_clientesTickets",
        r:"mostrar_clientesTickets"
    };

    calaApi_postRequest(ClientesTicketsData, function (d) {
 
        var ClientesTicketsWindow = ""

        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID ticket</th>"
        +                "<th>id cliente</th>"
        +                "<th>fecha</th>"
        +                "<th>titulo</th>"
        +                "<th>comentario</th>"
        +                "<th>status</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            ClientesTicketsWindow += ""

        +            "<tr>"
        +                "<td> "+ a.id_ticket +" </td>"
        +                "<td> "+ a.id_cliente +" </td>"
        +                "<td> "+ a.stamp +" </td>"
        +                "<td> "+ a.titulo +" </td>"
        +                "<td> "+ a.comentario +" </td>"
        +                "<td> "+ a.status +" </td>"

        +                "<td> <div id='editar_activos' onclick='erpsil_editarClientesTickets(" + a.id_ticket + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarClienteTicket("+ a.id_ticket +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                ClientesTicketsWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='editar_activos' onclick='erpsil_agregarClientesTicketsWindow()' class='btn btn-warning btn-sm'>Agregar</div></td>"
        +      "</div>";

        erpsil_setContent(ClientesTicketsWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_agregarClientesTicketsWindow() {

    var clienteticketsData = {
        w: "erpsil_cliente",
        r: "mostrar_cliente"
    };

    calaApi_postRequest(clienteticketsData, function(d){

        var selectD = "<select class='custom-select' id='inputDrow'> ";
        var i = 1;
        for(a in d.resp){ 
            var x = d.resp[a];
            selectD += "<option>" + i + " - " + x.nombre + " - id = (" + x.id_cliente + ")</option>";
            i++;
        }

        selectD += "</select>";

        console.log(d);
        var agregarClientesTicketsWindow = ""

        +    "<div class='login-form'>"
        +        "<h2 class='text-center'>Ticket de cliente</h2>"

        +        "<label class='col-sm-3 control-label'>Id cliente</label>"
        +        "<div class='form-group'>"
        +        selectD
        +        "</div>"
        //+        "<label class='col-sm-3 control-label'>Stamp</label>"
        //+        "<div class='form-group'>"
        //+           " <input type='text' class='form-control' placeholder='Ganancia Global' required='required' id='inputStamp'>"
        //+        "</div>"
        +        "<label class='col-sm-3 control-label'>Titulo</label>"
        +        "<div class='form-group'>"
        +           " <input type='text' class='form-control' placeholder='Titulo' required='required' id='inputTitulo'>"
        +        "</div>"
        +        "<label class='col-sm-3 control-label'>Comentario</label>"
        +        "<div class='form-group'>"
        +           " <input type='text' class='form-control' placeholder='Comentario' required='required' id='inputComentario'>"
        +        "</div>"
        +        "<label class='col-sm-3 control-label'>Status</label>"
        +        "<div class='form-group'>"
        +           " <input type='text' class='form-control' placeholder='Status' required='required' id='inputStatus'>"
        +        "</div>"
        +        "<div class='form-group'>"
        +            "<div onClick='erpsil_agregarClientesTickets()' class='btn btn-primary btn-block'>Agregar</div>"
        +            "<div onClick='erpsil_listarClientesTickets()' class='btn btn-primary btn-block'>Volver</div>"           
        +         "</div>"
        +   " </div>"
        console.log(selectD);  
        erpsil_setContent(agregarClientesTicketsWindow);
    }, function(){
        console.log("Error!");
    });


}

function erpsil_agregarClientesTickets(){

    var d = $("#inputDrow");
    var id = d[0].value;
    id = id.split("(")[1].split(")")[0];

    var idClientesTickets = id;
    var fechaClientesTickets = $("#inputStamp").val();
    var tituloClientesTickets = $("#inputTitulo").val();
    var comentariosClientesTickets = $("#inputComentario").val();
    var statusClientesTickets = $("#inputStatus").val();


    if(idClientesTickets != "" && fechaClientesTickets != "" && tituloClientesTickets != "" && comentariosClientesTickets != "" && statusClientesTickets != "" ){
        
        var tipoClientesTicketsData = {
            w: "erpsil_clientesTickets",
            r: "agregar_clientesTickets",
            id_cliente:idClientesTickets,
            stamp:fechaClientesTickets,
            titulo:tituloClientesTickets,
            comentario:comentariosClientesTickets,
            status:statusClientesTickets

        };  
        
        calaApi_postRequest(tipoClientesTicketsData, function (d) {
            console.log(tipoClientesTicketsData);
            erpsil_listarClientesTickets();
        }, function (d) {
            console.log("Tipo de cliente ticket no agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

function erpsil_editarClienteTicketsWindow(data) {

    var editarClienteTicketsWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar ticket cliente</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' id='inputId_ticket' value='" + data.id_ticket + "' class='form-control' placeholder='ID' disabled>"
+             "</div>"
+           "<label class='col-sm-3 control-label'>Id del cliente</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text' id='inputId_Cliente' value='" + data.id_cliente + "' class='form-control' placeholder='Nombre' disabled>"
+           "</div>"
+           "<label class='col-sm-3 control-label'>Fecha</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' id='inputStamp' value='" + data.stamp  + "' class='form-control' placeholder='Cedula' required>"
+           "</div>"
+       "<label class='col-sm-3 control-label'>Titulo</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputTitulo' value='" +data.titulo  + "' class='form-control' placeholder='Email' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Comentario</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputComentario' value='" +data.comentario  + "' class='form-control' placeholder='Dirección' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Status</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputStatus' value='" + data.status  + "' class='form-control' placeholder='Telefono' required>"
+        "</div>"
+            "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<div class='btn btn-sm btn-primary' onclick='erpsil_guadarEditarClienteTicket()' >Guardar</div>"
+                "<div class='btn btn-sm btn-danger' onclick='erpsil_listarClientesTickets()'>Cancelar</div>"
+                 "</div>"
+          "</form>"
+        "</div>"
+       "</div>"
+       "</div>"


    erpsil_setContent(editarClienteTicketsWindow);
}

function erpsil_editarClientesTickets(id){
    var req = {
        w: "erpsil_clientesTickets",
        r: "obtener_clientesTickets",
        id:id
    }

    calaApi_postRequest(req, function(d){
        //console.log(req);
        erpsil_editarClienteTicketsWindow(d.resp);
    }, function(){
        console.log("Activos no editado");
    });
}

function erpsil_guadarEditarClienteTicket(){

    var id_ticket = $("#inputId_ticket").val();
    var id_cliente = $("#inputId_Cliente").val();
    var stamp = $("#inputStamp").val();
    var titulo = $("#inputTitulo").val();
    var comentario = $("#inputComentario").val();
    var status = $("#inputStatus").val();

    if(id_ticket != "" && id_cliente != "" && stamp != "" && titulo != "" && comentario != "" && status != ""){
        
        var clienteTicket = {
            w:"erpsil_clientesTickets",
            r:"agregar_EditarclientesTickets",
            id:id_ticket,
            id_cliente:id_cliente,
            stamp:stamp,
            titulo:titulo,
            comentario:comentario,
            status:status,
        };
        calaApi_postRequest(clienteTicket, function (d) {
            //console.log(clienteTicket);
            erpsil_listarClientesTickets();
        }, function (d) {
            console.log("clienteTicket no agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

function erpsil_eliminarClienteTicket(id){
    var req = {
        w: "erpsil_clientesTickets",
        r: "eliminar_clientesTickets",
        id:id
    };

    calaApi_postRequest(req, function(){
        //console.log(req);
        erpsil_listarClientesTickets();
    }, function(){
        console.log("Cliente  ticket no eliminarado");
    });
    
}

/*********************************************************/
/*               Gestion del Permisos Rol                */
/*********************************************************/

function erpsil_listarPermisoRol(){
    var permisoRolData = {
        w: "erpsil_permisosRol",
        r: "mostrar_permisosRol"
    };

    calaApi_postRequest(permisoRolData, function (d) {
 
        var MostrarPermisoRolWindow = ""

        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>Id permiso</th>"
        +                "<th>Id rol</th>"
        +                "<th>Estado</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarPermisoRolWindow += ""
    
        +            "<tr>"
        +                "<td> "+ a.id_permiso +" </td>"
        +                "<td> "+ a.id_rol +" </td>"
        +                "<td> "+ a.estado +" </td>"

        +                "<td> <div id='editar_tipoCliente' onclick='erpsil_editarPermisoRol(" + a.id_permiso + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarPermisoRol("+ a.id_permiso +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarPermisoRolWindow += ""
        +            "</tr>"
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarPermisoRolWindow()' class='btn btn-danger btn-sm'>Agregar</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarPermisoRolWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_agregarPermisoRolWindow() {

    var permisoRolData = {
        w: "erpsil_roles",
        r: "mostrar_roles"
    };

     calaApi_postRequest(permisoRolData, function(d){

        var selectR = "<select class='custom-select' id='inputDown'> "
        var i = 1;
        for(a in d.resp){
            var x = d.resp[a];
            selectR += "<option>" + i + " - " + x.nombre + " id = (" + x.id_roles + ")</option>";
            i++;
        }

        selectR += "</select>";

        console.log(d);

        var agregarPermisoRolWindow = ""

            + "<div class='login-form'>"
            + "<h2 class='text-center'>Permisos rol</h2>"
            +"<label class='col-sm-3 control-label'>Id cliente</label>"
            +"<div class='form-group'>"
            +selectR
            +"</div>"
            + "<label class='col-sm-3 control-label'>Estado</label>"
            + "<div class='form-group'>"
            + " <input type='text' class='form-control' placeholder='Estado' required='required' id='inputEstado'>"
            + "</div>"
            + "<div class='form-group'>"
            + "<div onClick='erpsil_agregarPermisoRol()' class='btn btn-primary btn-block'>Agregar</div>"
            + "<div onClick='erpsil_listarPermisoRol()' class='btn btn-primary btn-block'>Volver</div>"
            + "</div>"
            + " </div>"

        erpsil_setContent(agregarPermisoRolWindow);

    }, function () {
        console.log("Error!");
    });
}

function erpsil_agregarPermisoRol(){
    var d = $("#inputDown");
    var id = d[0].value;
    id = id.split("(")[1].split(")")[0];

    var id_rol = id;
    var estadoPermisoRol = $("#inputEstado").val();

    if(id_rol != "" && estadoPermisoRol != "" ){
        
        var permosoRolData = {
            w: "erpsil_permisosRol",
            r: "agregar_permisosRol",
            id_rol:id_rol,
            estado:estadoPermisoRol
        };  
        
        calaApi_postRequest(permosoRolData, function (d) {
            console.log(permosoRolData);
        }, function (d) {
            console.log("Tipo de cliente ticket no agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

function erpsil_editarPermisoRolWindow(data) {
 
    var editarPermisoRolWindow = ""
 +        "<div class='container'>"
 +        "<h2 class='text-center'>Editar cuentas por pagar</h2>"
 +       "<form class='form-horizontal' action='' method='post'>"
 +              "<label class='col-sm-3 control-label'>Id permisos</label>"
 +              "<div class='col-sm-2'>"
 +                   "<input type='text' id='inputIdPermiso' value='" + data.id_permiso + "' class='form-control' placeholder='ID' required>"
 +             "</div>"
 +           "<label class='col-sm-3 control-label'>Id Rol</label>"
 +           "<div class='col-sm-4'>"
 +                "<input type='text' id='inputIdRol' value='" + data.id_rol + "' class='form-control' placeholder='Saldo' required>"
 +           "</div>"
 +           "<label class='col-sm-3 control-label'>Estado</label>"
 +           "<div class='col-sm-4'>"
 +               "<input type='text' id='inputEstado' value='" + data.estado + "' class='form-control' placeholder='Estado' required>"
 +           "</div>"
 +            "<label class='col-sm-3 control-label'>&nbsp;</label>"
 +           " <div class='col-sm-6'>"
 +               "<div class='btn btn-sm btn-primary' onclick='erpsil_guardarEditarPermisoRol()' >Guardar</div>"
 +                "<div onclick='erpsil_listarPermisoRol()' class='btn btn-sm btn-danger'>Cancelar</div>"
 +           "</div>"
 +         "</form>"
 +        "</div>"
 +       "</div>"
 +       "</div>"
 
 
    erpsil_setContent(editarPermisoRolWindow);
}

function erpsil_editarPermisoRol(id) {
    var req = {
        w: "erpsil_permisosRol",
        r: "obtener_permisosRol",
        id: id
    }

    calaApi_postRequest(req, function (d) {
        //console.log(req);
        erpsil_editarPermisoRolWindow(d.resp);
    }, function () {
        console.log("Rol no editado");
    });
}

function erpsil_guardarEditarPermisoRol(){

    var id_permiso = $("#inputIdPermiso").val();
    var id_Rol = $("#inputIdRol").val();
    var estado = $("#inputEstado").val();

    if(id_permiso != "" && id_Rol != "" && estado != "" ){
        
        var permisoRol = {
            w:"erpsil_permisosRol",
            r:"agregar_EditarPermisoRol",
            id_permiso:id_permiso,
            id_Rol:id_Rol,
            estado:estado,
        };

        calaApi_postRequest(permisoRol, function (d) {
            console.log(permisoRol);
            erpsil_listarPermisoRol();
        }, function (d) {
            console.log("clienteTicket no agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

function erpsil_eliminarPermisoRol(id){
    var req = {
        w:"erpsil_permisosRol",
        r:"eliminar_permisoRol",
        id:id
    };

    calaApi_postRequest(req, function(){
        //console.log(req);
        erpsil_listarPermisoRol();
    }, function(){
        console.log("Tipo cliente no eliminarado");
    });

}

/*********************************************************/
/*                 Gestion de tbl_cuentasPagar           */
/*********************************************************/

function erpsil_listarCuentasPagar(){
    var cuentasPagarData = {
        w: "erpsil_cuentasPagar",
        r: "mostrar_cuentasPagar"
    };
    calaApi_postRequest(cuentasPagarData, function (d) {
        var MostrarCuentasPagarWindow = ""
        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>ID Proveedor</th>"
        +                "<th>Código de Referencia</th>"
        +                "<th>Saldo</th>"
        +                "<th>Estado</th>"
        +                "<th>Vence</th>"
        +                "<th>Descripción</th>"
        +                "<th>StampFecha</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarCuentasPagarWindow += ""
  
        +            "<tr>"
        +                "<td> "+ a.id_cuentasPagar +" </td>"
        +                "<td> "+ a.id_proveedor +" </td>"
        +                "<td> "+ a.codigo_referencia +" </td>"
        +                "<td> "+ a.saldo +" </td>"
        +                "<td> "+ a.estado +" </td>"
        +                "<td> "+ a.vence +" </td>"
        +                "<td> "+ a.descripcion +" </td>"
        +                "<td> "+ a.stampfecha +" </td>"
      
        +                "<td> <div id='editar_cuentasPagar' onclick='erpsil_editarCuentasPagar(" + a.id_cuentasPagar + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarCuentasPagar("+ a.id_cuentasPagar +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarCuentasPagarWindow += ""
        +            "</tr>"
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarCuentasPagarWindow()' class='btn btn-danger btn-sm'>Agregar</div></td>"
        +      "</div>";
        erpsil_setContent(MostrarCuentasPagarWindow);
    }, function (d) {
        console.log(d);
    });
}
 
function erpsil_agregarCuentasPagarWindow() {
    var agregarCuentasPagarWindow = ""
 
    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Cuentas por pagar</h2>"
    +        "<label class='col-sm-3 control-label'>Codigo referencia</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Codigo referencia' required='required' id='inputCodigo_Referencia'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Saldo</label>"
    +        "<div class='form-group'>"
    +            "<input type='password' class='form-control' placeholder='Saldo' required='required' id='inputSaldo'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Estado</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Estado' required='required' id='inputEstado'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Vencimiento</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Vencimiento' required='required' id='inputVence'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Descripcion</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Descripcion' required='required' id='inputDescripcion'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>stampfecha</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='stampfecha' required='required' id='inputStampfecha'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<div onClick='erpsil_agregarCuentasPagar()' class='btn btn-primary btn-block'>Agregar</div>"
    +            "<div onClick='erpsil_listarCuentasPagar()' class='btn btn-primary btn-block'>Volver</div>"          
    +         "</div>"
    +   " </div>"
                      
    erpsil_setContent(agregarCuentasPagarWindow);
}
 
function erpsil_editarCuentasPagarWindow(data) {
 
    var editarCuentasPagarWindow = ""
 +        "<div class='container'>"
 +        "<h2 class='text-center'>Editar cuentas por pagar</h2>"
 +       "<form class='form-horizontal' action='' method='post'>"
 +              "<label class='col-sm-3 control-label'>Codigo referencia</label>"
 +              "<div class='col-sm-2'>"
 +                   "<input type='text' id='inputCodigoReferencia' value='" + data.codigo_referencia + "' class='form-control' placeholder='ID' required>"
 +             "</div>"
 +           "<label class='col-sm-3 control-label'>Saldo</label>"
 +           "<div class='col-sm-4'>"
 +                "<input type='text' id='inputSaldo' value='" + data.saldo + "' class='form-control' placeholder='Saldo' required>"
 +           "</div>"
 +           "<label class='col-sm-3 control-label'>Estado</label>"
 +           "<div class='col-sm-4'>"
 +               "<input type='text' id='inputEstado' value='" + data.estado + "' class='form-control' placeholder='Estado' required>"
 +           "</div>"
 +       "<label class='col-sm-3 control-label'>Vence</label>"
 +        "<div class='col-sm-4'>"
 +            "<input type='text' id='inpuVence' value='" + data.vence + "' class='form-control' placeholder='Vence' required>"
 +        "</div>"
 +        "<label class='col-sm-3 control-label'>Descripcion</label>"
 +        "<div class='col-sm-4'>"
 +               "<input type='text' id='inputDescripcion' value='" + data.descripcion + "' class='form-control' placeholder='Descripcion' required>"
 +        "</div>"
 +        "<label class='col-sm-3 control-label'>stampfecha</label>"
 +        "<div class='col-sm-4'>"
 +               "<input type='text' id='inputStampfecha' value='" + data.stampfecha + "' class='form-control' placeholder='stampfecha' required>"
 +        "</div>"
 +            "<label class='col-sm-3 control-label'>&nbsp;</label>"
 +           " <div class='col-sm-6'>"
 +               "<div class='btn btn-sm btn-primary' onclick='erpsil_guardarCuentasPagar()' >Guardar</div>"
 +                "<div onclick='erpsil_listarCuentasPagar()' class='btn btn-sm btn-danger'>Cancelar</div>"
 +           "</div>"
 +         "</form>"
 +        "</div>"
 +       "</div>"
 +       "</div>"
 
 
    erpsil_setContent(editarCuentasPagarWindow);
}

/*********************************************************/
/*             Gestion de tbl_historialPrecios           */ //falta editar****
/*********************************************************/
 
function erpsil_listarHistorialPrecio(){
    var historialPreciosData = {
        w: "erpsil_historialPrecios",
        r: "mostrar_historialPrecios"
    };
 
    calaApi_postRequest(historialPreciosData, function (d) {
        var MostrarHistorialPreciosWindow = ""
 
        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>Id historial</th>"
        +                "<th>Id inventario</th>"
        +                "<th>Costo</th>"
        +                "<th>Fecha</th>"
        +                "<th>ID provedor</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarHistorialPreciosWindow += ""
   
        +            "<tr>"
        +                "<td> "+ a.id_historialPrecio +" </td>"
        +                "<td> "+ a.id_inventario +" </td>"
        +                "<td> "+ a.costo +" </td>"
        +                "<td> "+ a.fecha +" </td>"
        +                "<td> "+ a.id_proveedor +" </td>"
       
        +                "<td> <div id='editar_historialPrecios' onclick='erpsil_editarHistorialPrecios(" + a.id_historialPrecio + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarHistorialPrecio("+ a.id_historialPrecio +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"        +            "</tr>";
                    }
                }
                MostrarHistorialPreciosWindow += ""
        +            "</tr>"
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarHistorialPrecioWindow()' class='btn btn-danger btn-sm'>Agregar</div></td>"
        +      "</div>";
 
        erpsil_setContent(MostrarHistorialPreciosWindow);
 
    }, function (d) {
        console.log(d);
    });
}
 
function erpsil_agregarHistorialPrecioWindow() {
    var historialPrecioData = {
       w: "erpsil_inventario",
       r: "mostrar_inventario"
    };
    var proveedorData = {
       w: "erpsil_proveedor",
       r: "mostrar_proveedor"
    };

    calaApi_postRequest(historialPrecioData, function(d){
       
       var selectH = "<select class='custom-select' id='inputDown1'>"  
       var i = 1;
       for(a in d.resp){
           var x = d.resp[a];
           selectH += "<option>" + i + " - " + x.unidad + " id = (" + x.id_inventario + ")</option>";
           i++;
       }
       selectH += "</select>";
       console.log(d);


       calaApi_postRequest(proveedorData, function(p){
       
           var selectP = "<select class='custom-select' id='inputDown2'>"  
           var i = 1;
           for(a in p.resp){
               var y = p.resp[a];
               selectP += "<option>" + i + " - " + y.nombre + " id = (" + y.id_proveedor + ")</option>";
               i++;
           }
           selectP += "</select>";

           var agregarHistorialPreciosWindow = ""
     
           +    "<div class='login-form'>"
           +        "<h2 class='text-center'>Historial de precios</h2>"
           +        "<label class='col-sm-3 control-label'>Id inventario</label>"
           +        "<div class='form-group'>"
           +       selectH
           +        "</div>"
           +        "<label class='col-sm-3 control-label'>Costo</label>"
           +        "<div class='form-group'>"
           +           " <input type='text' class='form-control' placeholder='Costo' required='required' id='inputCosto'>"
           +        "</div>"
           // +        "<label class='col-sm-3 control-label'>Fecha</label>"
           //+        "<div class='form-group'>"
           // +            "<input type='text' class='form-control' placeholder='Fecha' required='required' id='inputFecha'>"
           // +        "</div>"
            +        "<label class='col-sm-3 control-label'>ID preveedor</label>"
            +        "<div class='form-group'>"
            +        selectP
            +        "</div>"

            +        "<div class='form-group'>"
            +            "<div onClick='erpsil_agregarHistorialPrecio()' class='btn btn-primary btn-block'>Agregar</div>"
            +            "<div onClick='erpsil_listarHistorialPrecios()' class='btn btn-primary btn-block'>Volver</div>"          
            +         "</div>"
            +   " </div>"
                             
           erpsil_setContent(agregarHistorialPreciosWindow);
           console.log(d);
        }, function(){
            console.log("error");
        });
    }, function(){
        console.log("error");
    });

}
 
function erpsil_agregarHistorialPrecio(){
    var d = $("#inputDown1");
    var id = d[0].value;
   id = id.split("(")[1].split(")")[0];

    var d2 = $("#inputDown2");
    var id2 = d[0].value;
   id2 = id2.split("(")[1].split(")")[0];

   var id_inventario = id;
   var id_proveedor = id2;
   var costo = $("#inputCosto").val();
   var fecha = $("#inputFecha").val();

       if(id_inventario != "" && id_proveedor != "" &&  costo != "" && fecha != ""){

           var permosoHistorialPrecio = {
               w: "erpsil_historialPrecios",
               r: "agregar_historialPrecio",
               id_inventario:id_inventario,
               id_proveedor:id_proveedor,
               costo:costo,
               fecha:fecha
           };

           calaApi_postRequest(permosoHistorialPrecio, function (d) {
               console.log(permosoHistorialPrecio);
               erpsil_listarHistorialPrecio();
           }, function (d) {
               console.log("Historial precio no agregado" + d);
           });
       } else {
           console.log("Error!");
       }

   
}

function erpsil_editarHistorialPrecioWindow(data) {
 
    var editarHistorialPreciosWindow = ""
 +        "<div class='container'>"
 +        "<h2 class='text-center'>Editar historial de precios</h2>"
 +       "<form class='form-horizontal' action='' method='post'>"
 +              "<label class='col-sm-3 control-label'>Costo</label>"
 +              "<div class='col-sm-2'>"
 +                   "<input type='text' id='inputCosto' value='" + data.costo + "' class='form-control' placeholder='Costo' required>"
 +             "</div>"
 +           "<label class='col-sm-3 control-label'>Fecha</label>"
 +           "<div class='col-sm-4'>"
 +                "<input type='text' id='inpuFecha' value='" + data.fecha + "' class='form-control' placeholder='Fecha' required>"
 +           "</div>"
 +           "<label class='col-sm-3 control-label'>ID proveedor</label>"
 +           "<div class='col-sm-4'>"
 +               "<input type='text' id='inputId_proveedor' value='" + data.Id_proveedor + "' class='form-control' placeholder='ID proveedor' required>"
 +           "</div>"
 +            "<label class='col-sm-3 control-label'>&nbsp;</label>"
 +           " <div class='col-sm-6'>"
 +               "<div class='btn btn-sm btn-primary' onclick='erpsil_guardarHistorialPrecios()' >Guardar</div>"
 +                "<div onclick='erpsil_listarHistorialPrecios()' class='btn btn-sm btn-danger'>Cancelar</div>"
 +           "</div>"
 +         "</form>"
 +        "</div>"
 +       "</div>"
 +       "</div>"
 
 
    erpsil_setContent(editarHistorialPreciosWindow);
}

function erpsil_eliminarHistorialPrecio(id){
    var req = {
       w: "erpsil_historialPrecios",
       r: "eliminar_historialPrecio",
       id:id
    };

    calaApi_postRequest(req, function(){
       //console.log(req);
       erpsil_listarHistorialPrecio();
   }, function(){
       console.log("Historial precio no eliminarado");
   });
}
/*********************************************************/
/*             Gestion de tbl_Pagos                      */
/*********************************************************/
 
function erpsil_listarPagos(){
    var pagosData = {
        w: "erpsil_pagos",
        r: "mostrar_pagos"
    };
 
    calaApi_postRequest(pagosData, function (d) {
        var MostrarPagosWindow = ""
 
        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID Pago</th>"
        +                "<th>ID cuenta</th>"
        +                "<th>ID Usuarios</th>"
        +                "<th>Fecha</th>"
        +                "<th>Pago</th>"
        +                "<th>Actual</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarPagosWindow += ""
   
        +            "<tr>"
        +                "<td> "+ a.id_pago +" </td>"
        +                "<td> "+ a.id_cuenta +" </td>"
        +                "<td> "+ a.id_usuarios +" </td>"
        +                "<td> "+ a.fecha +" </td>"
        +                "<td> "+ a.pago +" </td>"
        +                "<td> "+ a.actual +" </td>"
       
        +                "<td> <div id='editar_pagos' onclick='erpsil_editarPagos(" + a.id_pago + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarPagos("+ a.id_pago +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarPagosWindow += ""
        +            "</tr>"
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarPagosWindow()' class='btn btn-danger btn-sm'>Agregar</div></td>"
        +      "</div>";
 
        erpsil_setContent(MostrarPagosWindow);
 
    }, function (d) {
        console.log(d);
    });
}
 
function erpsil_agregarPagosWindow() {

    var cuentasPagarData = {
        w: "erpsil_cuentasPagar",
        r: "mostrar_cuentasPagar"
    };

    var usuarioData = {
        w: "erpsil_usuario",
        r: "mostrar_usuario"
    };

    calaApi_postRequest(cuentasPagarData, function(d){

        var selectCuentasPagar = "<select class='custom-select' id='inputDown1'>"  
        var i = 1;
        for(a in d.resp){
            var x = d.resp[a];
            selectCuentasPagar += "<option>" + i + " - id de la cuenta a pagar = (" + x.id_cuentasPagar + ")</option>";
            i++;
        }
        selectCuentasPagar += "</select>";

        console.log(d);

        calaApi_postRequest(usuarioData, function(p){

            var selectPUsuario= "<select class='custom-select' id='inputDown2'>"  
            var i = 1;
            for(a in p.resp){
                var y = p.resp[a];
                selectPUsuario += "<option>" + i + " - " + y.fullName +  " - "  + " id = (" + y.idUser + ")</option>";
                i++;
            }
            selectPUsuario += "</select>";
 

        var agregarPagosWindow = ""
 
        +    "<div class='login-form'>"
        +        "<h2 class='text-center'>Pagos</h2>"
        +        "<label class='col-sm-3 control-label'>ID cuentas</label>"
        +        "<div class='form-group'>"
        +         selectCuentasPagar
        //+           " <input type='text' class='form-control' placeholder='ID cuenta' required='required' id='inputId_cuenta'>"
        +        "</div>"
        +        "<label class='col-sm-3 control-label'>ID Usuario</label>"
        +        "<div class='form-group'>"
        +           " <input type='text' class='form-control' placeholder='ID usuarios' required='required' id='inputId_usuarios'>"
        +        "</div>"
        +         selectPUsuario

        +        "<label class='col-sm-3 control-label'>Pago</label>"
        +        "<div class='form-group'>"
        +           " <input type='text' class='form-control' placeholder='Pago' required='required' id='inputPago'>"
        +        "</div>"
        +        "<label class='col-sm-3 control-label'>Actual</label>"
        +        "<div class='form-group'>"
        +           " <input type='text' class='form-control' placeholder='Actual' required='required' id='inputActual'>"
        +        "</div>"
        +        "<div class='form-group'>"
        +            "<div onClick='erpsil_agregarPagos()' class='btn btn-primary btn-block'>Agregar</div>"
        +            "<div onClick='erpsil_listarPagos()' class='btn btn-primary btn-block'>Volver</div>"          
        +         "</div>"
        +   " </div>"
                          
        erpsil_setContent(agregarPagosWindow);
        console.log(d);
    }, function(){
        console.log("error");
    });
}, function(){
    console.log("error");
});

}

function erpsil_agregarPagos(){

    var d = $("#inputDown1");
    var id = d[0].value;
    id = id.split("(")[1].split(")")[0];

    var d2 = $("#inputDown2");
    var id2 = d[0].value;
    id2 = id2.split("(")[1].split(")")[0];

    var id_cuenta = id;
    var id_usuarios = id2;
    var pago = $("#inputPago").val();
    var actual = $("#inputActual").val();

    if(id_cuenta != "" && id_usuarios != "" && pago != "" && actual != "" ){

        var pago = {
            w: "erpsil_pagos",
            r: "agregar_pagos",
            id_cuenta:id_cuenta,
            id_usuarios:id_usuarios,
            pago:pago,
            actual:actual
        }
        calaApi_postRequest(pago, function (d) {
            console.log(pago);
            erpsil_listarPagos();
        }, function (d) {
            console.log("Pago no agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}




function erpsil_editarPagosWindow(data) {
 
    var editarPagosWindow = ""
 +        "<div class='container'>"
 +        "<h2 class='text-center'>Editar pago</h2>"
 +       "<form class='form-horizontal' action='' method='post'>"
 +              "<label class='col-sm-3 control-label'>id cuenta</label>"
 +              "<div class='col-sm-2'>"
 +                   "<input type='text' id='inputId_cuenta' value='" + data.id_cuenta + "' class='form-control' placeholder='ID cuenta' required>"
 +             "</div>"
 +           "<label class='col-sm-3 control-label'>Id usuario</label>"
 +           "<div class='col-sm-4'>"
 +                "<input type='text' id='inpuId_usuarios' value='" + data.id_usuarios + "' class='form-control' placeholder='ID usuario' required>"
 +           "</div>"
 +           "<label class='col-sm-3 control-label'>Fecha</label>"
 +           "<div class='col-sm-4'>"
 +               "<input type='text' id='inputFecha' value='" + data.fecha + "' class='form-control' placeholder='Fecha' required>"
 +           "</div>"
 +           "<label class='col-sm-3 control-label'>pago</label>"
 +           "<div class='col-sm-4'>"
 +               "<input type='text' id='inputPago' value='" + data.pago + "' class='form-control' placeholder='pago' required>"
 +           "</div>"
 +           "<label class='col-sm-3 control-label'>Actual</label>"
 +           "<div class='col-sm-4'>"
 +               "<input type='text' id='inpuActual' value='" + data.actual + "' class='form-control' placeholder='Actual' required>"
 +           "</div>"
 +            "<label class='col-sm-3 control-label'>&nbsp;</label>"
 +           " <div class='col-sm-6'>"
 +               "<div class='btn btn-sm btn-primary' onclick='erpsil_guardarPagos()' >Guardar</div>"
 +                "<div onclick='erpsil_listarPagos()' class='btn btn-sm btn-danger'>Cancelar</div>"
 +           "</div>"
 +         "</form>"
 +        "</div>"
 +       "</div>"
 +       "</div>"
 
 
    erpsil_setContent(editarPagosWindow);
}
 
/*********************************************************/
/*             Gestion de movimiento Inventario          */
/*********************************************************/
 
function erpsil_listarMovimientoInventario(){
    var movimientoInventarioData = {
        w: "erpsil_movimientoInventario",
        r: "mostrar_movimientoInventario"
    };
 
    calaApi_postRequest(movimientoInventarioData, function (d) {
        var MostrarMovimientoInventarioWindow = ""
 
        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID movimiento inventario</th>"
        +                "<th>ID usuario</th>"
        +                "<th>ID caja</th>"
        +                "<th>ID producto</th>"
        +                "<th>Fecha</th>"
        +                "<th>Razon</th>"
        +                "<th>Descripcion</th>"
        +                "<th>Costo</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarMovimientoInventarioWindow += ""
   
        +            "<tr>"
        +                "<td> "+ a.id_movInv +" </td>"
        +                "<td> "+ a.id_usuario +" </td>"
        +                "<td> "+ a.id_caja +" </td>"
        +                "<td> "+ a.id_producto +" </td>"
        +                "<td> "+ a.fecha +" </td>"
        +                "<td> "+ a.razon +" </td>"
        +                "<td> "+ a.descripcion +" </td>"
        +                "<td> "+ a.costo +" </td>"
       
        +                "<td> <div id='editar_movimientoInventario' onclick='erpsil_editarMovimientoInventario(" + a.id_movInv + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarMovimientoInventario("+ a.id_movInv +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarMovimientoInventarioWindow += ""
        +            "</tr>"
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarMovimientoInventarioWindow()' class='btn btn-danger btn-sm'>Agregar</div></td>"
        +      "</div>";
 
        erpsil_setContent(MostrarMovimientoInventarioWindow);
 
    }, function (d) {
        console.log(d);
    });
}
 
function erpsil_agregarMovimientoInventarioWindow() {
    var agregarMovimientoInventarioWindow = ""
 
    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Movimiento de inventario</h2>"
    +        "<label class='col-sm-3 control-label'>ID usuario</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='ID usuario' required='required' id='inputId_usuario'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>ID caja</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='ID caja' required='required' id='inputId_caja'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Id producto</label>"
    +        "<div class='form-group'>"
    +            "<input type='text' class='form-control' placeholder='Id producto' required='required' id='inputId_producto'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Fecha</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Fecha' required='required' id='inputFecha'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Razon</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Razon' required='required' id='inputRazon'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Descripcion</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Descripcion' required='required' id='inputDescripcion'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Costo</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Costo' required='required' id='inputCosto'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<div onClick='erpsil_agregarMovimientoInventario()' class='btn btn-primary btn-block'>Agregar</div>"
    +            "<div onClick='erpsil_listarMovimientoInventario()' class='btn btn-primary btn-block'>Volver</div>"          
    +         "</div>"
    +   " </div>"
                      
    erpsil_setContent(agregarMovimientoInventarioWindow);
}
 
function erpsil_editarMovimientoInventarioWindow(data) {
 
    var editarMovimientoInventarioWindow = ""
 +        "<div class='container'>"
 +        "<h2 class='text-center'>Editar movimiento de inventario</h2>"
 +       "<form class='form-horizontal' action='' method='post'>"
 +              "<label class='col-sm-3 control-label'>id usuario</label>"
 +              "<div class='col-sm-2'>"
 +                   "<input type='text' id='inputId_usuario' value='" + data.id_usuario + "' class='form-control' placeholder='ID usuario' required>"
 +             "</div>"
 +           "<label class='col-sm-3 control-label'>Id caja</label>"
 +           "<div class='col-sm-4'>"
 +                "<input type='text' id='inpuId_caja' value='" + data.id_caja + "' class='form-control' placeholder='ID caja' required>"
 +           "</div>"
 +           "<label class='col-sm-3 control-label'>Id producto</label>"
 +           "<div class='col-sm-4'>"
 +               "<input type='text' id='inputId_producto' value='" + data.Id_producto + "' class='form-control' placeholder='Id producto' required>"
 +           "</div>"
 +           "<label class='col-sm-3 control-label'>Fecha</label>"
 +           "<div class='col-sm-4'>"
 +               "<input type='text' id='inputFecha' value='" + data.fecha + "' class='form-control' placeholder='Fecha' required>"
 +           "</div>"
 +           "<label class='col-sm-3 control-label'>Razon</label>"
 +           "<div class='col-sm-4'>"
 +               "<input type='text' id='inpuRazon' value='" + data.razon + "' class='form-control' placeholder='Razon' required>"
 +           "</div>"
 +           "<label class='col-sm-3 control-label'>Descripcion</label>"
 +           "<div class='col-sm-4'>"
 +               "<input type='text' id='inpuDescripcion' value='" + data.descripcion + "' class='form-control' placeholder='Descripcion' required>"
 +           "</div>"
 +           "<label class='col-sm-3 control-label'>Costo</label>"
 +           "<div class='col-sm-4'>"
 +               "<input type='text' id='inpuCosto' value='" + data.costo + "' class='form-control' placeholder='Costo' required>"
 +           "</div>"
 +            "<label class='col-sm-3 control-label'>&nbsp;</label>"
 +           " <div class='col-sm-6'>"
 +               "<div class='btn btn-sm btn-primary' onclick='erpsil_guardarMovimientoInventario()' >Guardar</div>"
 +                "<div onclick='erpsil_listarMovimientoInventario()' class='btn btn-sm btn-danger'>Cancelar</div>"
 +           "</div>"
 +         "</form>"
 +        "</div>"
 +       "</div>"
 +       "</div>"
 
 
    erpsil_setContent(editarMovimientoInventarioWindow);
}

/*********************************************************/
/*               Gestion del tipo cliente                */
/*********************************************************/

function erpsil_listarTipoCliente(){

    var tipoClienteData = {
        w: "erpsil_tipoCliente",
        r: "mostrar_tipoCliente"
    };

    calaApi_postRequest(tipoClienteData, function (d) {
 
        var MostrarTipoClienteWindow = ""

        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Nombre</th>"
        +                "<th>Descripcion</th>"
        +                "<th>Ganancia global</th>"
        +                "<th>Dias de credito</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarTipoClienteWindow += ""
    
        +            "<tr>"
        +                "<td> "+ a.id_tipoCliente +" </td>"
        +                "<td> "+ a.nombre +" </td>"
        +                "<td> "+ a.descripcion +" </td>"
        +                "<td> "+ a.ganancia_global +" </td>"
        +                "<td> "+ a.dias_credito +" </td>"

        +                "<td> <div id='editar_tipoCliente' onclick='erpsil_editarTipoCliente(" + a.id_tipoCliente + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarTipoCliente("+ a.id_tipoCliente +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarTipoClienteWindow += ""
        +            "</tr>"
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarTipoClienteWindow()' class='btn btn-danger btn-sm'>Agregar</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarTipoClienteWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_agregarTipoClienteWindow() {
    var agregarTipoClienteWindow = ""

    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Tipo de cliente</h2>"
    +        "<label class='col-sm-3 control-label'>Nombre</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre' required='required' id='inputNombre'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Descripción</label>"
    +        "<div class='form-group'>"
    +            "<input type='password' class='form-control' placeholder='Descripcion' required='required' id='inputDescripcion'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Ganancias</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Ganancia Global' required='required' id='inputGanancia'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Dias de Credito</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Dias de Credito' required='required' id='inputDiasCredito'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<div onClick='erpsil_agregarTipoCliente()' class='btn btn-primary btn-block'>Agregar</div>"
    +            "<div onClick='erpsil_listarTipoCliente()' class='btn btn-primary btn-block'>Volver</div>"           
    +         "</div>"
    +   " </div>"
                       
    erpsil_setContent(agregarTipoClienteWindow);
}

function erpsil_agregarTipoCliente(){


    var nombreTipoCliente = $("#inputNombre").val();
    var descripcionTipoCliente = $("#inputDescripcion").val();
    var gananciaTipoCliente = $("#inputGanancia").val();
    var diasTipoCliente = $("#inputDiasCredito").val();

    if(nombreTipoCliente != "" && descripcionTipoCliente != "" && gananciaTipoCliente != "" && diasTipoCliente != "" ){
        
        var tipoClienteData = {
            w: "erpsil_tipoCliente",
            r: "agregar_tipoCliente",
            nombre:nombreTipoCliente,
            descripcion:descripcionTipoCliente,
            ganancia_global:gananciaTipoCliente,
            dias_credito:diasTipoCliente
        };  
        
        calaApi_postRequest(tipoClienteData, function (d) {
            console.log(tipoClienteData);
        }, function (d) {
            console.log("Tipo de cliente no agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

function erpsil_eliminarTipoCliente(id) {
    var req = {
        w: "erpsil_tipoCliente",
        r: "eliminar_tipoCliente",
        id:id
    };

    calaApi_postRequest(req, function(){
        erpsil_listarTipoCliente();
    }, function(){
        console.log("Tipo cliente no eliminarado");
    });
    
}

function erpsil_editarTipoClienteWindow(data) {

    var editartipoClienteWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar cliente</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' id='inputId_tipoCliente' value='" + data.id_tipoCliente + "' class='form-control' placeholder='ID' disabled>"
+             "</div>"
+           "<label class='col-sm-3 control-label'>Nombre</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text' id='inputNombre' value='" + data.nombre + "' class='form-control' placeholder='Nombre' required>"
+           "</div>"
+           "<label class='col-sm-3 control-label'>Descripcion</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' id='inputDescripcion' value='" + data.descripcion + "' class='form-control' placeholder='Descripcion' required>"
+           "</div>"
+       "<label class='col-sm-3 control-label'>Ganancia global</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputGanancia_global' value='" + data.ganancia_global + "' class='form-control' placeholder='Ganancia global' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Dias de credito</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' id='inputDias_credito' value='" + data.dias_credito + "' class='form-control' placeholder='Dias de credito' required>"
+        "</div>"
+            "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<div class='btn btn-sm btn-primary' onclick='erpsil_guardarEditarTipoCliente()' >Guardar</div>"
+                "<div onclick='erpsil_listarTipoCliente()' class='btn btn-sm btn-danger'>Cancelar</div>"
+           "</div>"
+         "</form>"
+        "</div>"
+       "</div>"
+       "</div>"


    erpsil_setContent(editartipoClienteWindow);
}

function erpsil_editarTipoCliente(id){
    var req = {
        w: "erpsil_tipoCliente",
        r: "obtener_tipoCliente",
        id:id
    };
    
    calaApi_postRequest(req, function(d){
        //console.log(req);
        erpsil_editarTipoClienteWindow(d.resp);
    }, function(){
        console.log("Tipo cliente no editado");
    });
}

function erpsil_guardarEditarTipoCliente() {

    var id_tipoCliente = $("#inputId_tipoCliente").val();
    var nombreTipoCliente = $("#inputNombre").val();
    var descripcionTipoCliente = $("#inputDescripcion").val();
    var ganancia_localTipoCliente = $("#inputGanancia_global").val();
    var dias_creditoTipoCliente = $("#inputDias_credito").val();

    if(nombreTipoCliente != "" && descripcionTipoCliente != "" && ganancia_localTipoCliente != "" && dias_creditoTipoCliente != "" ){
        
        var tipoClienteData = {
            w: "erpsil_tipoCliente",
            r: "agregarEditar_tipoCliente",
            id:id_tipoCliente,
            nombre:nombreTipoCliente,
            descripcion:descripcionTipoCliente,
            ganancia_global:ganancia_localTipoCliente,
            dias_credito:dias_creditoTipoCliente
        };  
        
        calaApi_postRequest(tipoClienteData, function (d) {
            erpsil_listarTipoCliente();
            //console.log(tipoClienteData);
        }, function (d) {
            console.log("Tipo de cliente no agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

/*********************************************************/
/*                  Gestion activos                      */
/*********************************************************/

function erpsil_agregarActivosWindow() {
    var agregarActivosWindow = ""

    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Activo</h2>"
    +        "<label class='col-sm-3 control-label'>Nombre</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre' required='required' id='inputNombre'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Cantidad</label>"
    +        "<div class='form-group'>"
    +            "<input type='text' class='form-control' placeholder='Cantidad' required='required' id='inputCantidad'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Vencimiento</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Vencimiento' required='required' id='inputVecimiento'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<div onClick='erpsil_agregarActivos()' class='btn btn-primary btn-block'>Agregar</div>"
    +            "<div onClick='erpsil_listarActivos()' class='btn btn-primary btn-block'>Volver</div>"
    +        "</div>"
    +   " </div>"
                       
    erpsil_setContent(agregarActivosWindow);
}

function erpsil_agregarActivos(){

    var nombreActivos = $("#inputNombre").val();
    var cantidadActivos = $("#inputCantidad").val();
    var vencimientoActivos = $("#inputVecimiento").val();

    if(nombreActivos != "" && cantidadActivos != "" && vencimientoActivos != ""){
        
        var activosData = {
            w: "erpsil_activos",
            r: "agregar_activos",
            nombre:nombreActivos,
            cantidad:cantidadActivos,
            vence:vencimientoActivos
        };  
        
        calaApi_postRequest(activosData, function (d) {
            //console.log(activosData);
            console.log("Tipo de cliente agregado" + d);
            erpsil_listarActivos();
        }, function (d) {
            console.log("Tipo de cliente no agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

function erpsil_listarActivos(){

    var ActivosData = {
        w: "erpsil_activos",
        r: "mostrar_Activos"
    };

    calaApi_postRequest(ActivosData, function (d) {
 
        var MostrarActivosWindow = ""

        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Nombre</th>"
        +                "<th>Cantidad</th>"
        +                "<th>Vencimiento</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarActivosWindow += ""

        +            "<tr>"
        +                "<td> "+ a.id_activo +" </td>"
        +                "<td> "+ a.nombre +" </td>"
        +                "<td> "+ a.cantidad +" </td>"
        +                "<td> "+ a.vence +" </td>"

        +                "<td> <div id='editar_activos' onclick='erpsil_editarActivos(" + a.id_activo + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarActivos("+ a.id_activo +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarActivosWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='editar_activos' onclick='erpsil_agregarActivosWindow()' class='btn btn-warning btn-sm'>Agregar</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarActivosWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_eliminarActivos(id) {
    var req = {
        w: "erpsil_activos",
        r: "eliminar_activos",
        id:id
    };

    calaApi_postRequest(req, function(){
        //console.log(req);
        erpsil_listarActivos();
    }, function(){
        console.log("Tipo cliente no eliminarado");
    });
    
}

function erpsil_editarActivosWindow(data) {

    var editarActivosWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar cliente</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' id='inputId_activos' value='" + data.id_activo + "' class='form-control' placeholder='ID' disabled>"
+             "</div>"
+           "<label class='col-sm-3 control-label'>Nombre</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text' id='inputNombre' value='" + data.nombre + "' class='form-control' placeholder='Nombre' required>"
+           "</div>"
+           "<label class='col-sm-3 control-label'>Cantidad</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' id='inputCantidad' value='" + data.cantidad + "' class='form-control' placeholder='Cantidad' required>"
+           "</div>"
+       "<label class='col-sm-3 control-label'>Ganancia global</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputVencimiento' value='" + data.vence + "' class='form-control' placeholder='Vencimiento' required>"
+        "</div>"
+            "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<div class='btn btn-sm btn-primary' onclick='erpsil_guardarEditarActivos()' >Guardar</div>"
+               "<div class='btn btn-sm btn-danger' onclick='erpsil_listarActivos()'>Cancelar</div>"
+           "</div>"
+         "</form>"
+        "</div>"
+       "</div>"
+       "</div>"


    erpsil_setContent(editarActivosWindow);
}

function erpsil_editarActivos(id){
    var req = {
        w: "erpsil_activos",
        r: "obtener_activos",
        id:id
    };
    
    calaApi_postRequest(req, function(d){
        //console.log(req);
        erpsil_editarActivosWindow(d.resp);
    }, function(){
        console.log("Activos no editado");
    });
}

function erpsil_guardarEditarActivos() {

    var id_activos = $("#inputId_activos").val();
    var nombreActivos = $("#inputNombre").val();
    var cantidadActivos = $("#inputCantidad").val();
    var vencimientoActivos = $("#inputVencimiento").val();

    if(nombreActivos != "" && cantidadActivos != "" && vencimientoActivos != "" ){
        
        var tipoClienteData = {
            w: "erpsil_activos",
            r: "agregarEditar_activos",
            id:id_activos,
            nombre:nombreActivos,
            cantidad:cantidadActivos,
            vencimiento:vencimientoActivos,
        };  
        
        calaApi_postRequest(tipoClienteData, function (d) {
            erpsil_listarActivos();
        }, function (d) {
            console.log("Activo no agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

/*********************************************************/
/*                  Gestion roles                        */
/*********************************************************/

function erpsil_agregarRolWindow(){
    var agregarRolesWindow = ""

    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Activo</h2>"

    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre de Rol' required='required' id='inputNombre'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +            "<input type='text' class='form-control' placeholder='Descripcion' required='required' id='inputDescripcion'>"
    +        "</div>"

    +        "<div class='form-group'>"
    +            "<div onClick='erpsil_agregarRoles()' class='btn btn-primary btn-block'>Agregar</div>"
    +            "<div onClick='()' class='btn btn-primary btn-block'>Volver</div>"
    +        "</div>"
    +   " </div>"
                       
    erpsil_setContent(agregarRolesWindow);
}

function erpsil_agregarRoles(){

    var nombreRoles = $("#inputNombre").val();
    var descripcionRoles = $("#inputDescripcion").val();

    if(nombreRoles != "" && descripcionRoles != "" ){
        var rolesData = {
            w: "erpsil_roles",
            r: "agregar_roles",
            nombre:nombreRoles,
            descripcion:descripcionRoles,
        };  
        calaApi_postRequest(rolesData, function (d) {
            //console.log(activosData);
            console.log("Rol agregado" + d);
            erpsil_listarRoles();
        }, function (d) {
            console.log("Rol no agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

function erpsil_listarRoles(){

    var RolesData = {
        w: "erpsil_roles",
        r: "mostrar_roles"
    };

    calaApi_postRequest(RolesData, function (d) {
 
        var MostrarRolesWindow = ""

        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Nombre</th>"
        +                "<th>Descripcion</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarRolesWindow += ""

        +            "<tr>"
        +                "<td> "+ a.id_roles +" </td>"
        +                "<td> "+ a.nombre +" </td>"
        +                "<td> "+ a.descripcion +" </td>"
        +                "<td> <div id='editar_activos' onclick='erpsil_editarRoles(" + a.id_roles + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarRoles("+ a.id_roles +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarRolesWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='editar_activos' onclick='erpsil_agregarRolesWindow()' class='btn btn-warning btn-sm'>Agregar</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarRolesWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_eliminarRoles(id) {
    var req = {
        w: "erpsil_roles",
        r: "eliminar_roles",
        id:id
    };

    calaApi_postRequest(req, function(){
        erpsil_listarRoles();
    }, function(){
        console.log("Roles no eliminarado");
    });
    
}

function erpsil_editarRolesWindow(data) {

    var editarRolesWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar Roles</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' id='inputId_roles' value='" + data.id_roles + "' class='form-control' placeholder='ID' disabled>"
+             "</div>"
+           "<label class='col-sm-3 control-label'>Nombre</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text' id='inputNombre' value='" + data.nombre + "' class='form-control' placeholder='Nombre' required>"
+           "</div>"
+           "<label class='col-sm-3 control-label'>Cantidad</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' id='inputDescripcion' value='" + data.descripcion + "' class='form-control' placeholder='Cantidad' required>"
+           "</div>"
+            "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<div class='btn btn-sm btn-primary' onclick='erpsil_guardarEditarRoles()' >Guardar</div>"
+               "<div class='btn btn-sm btn-danger' onclick='erpsil_listarRoles()'>Vover</div>"
+           "</div>"
+         "</form>"
+        "</div>"
+       "</div>"
+       "</div>"

    erpsil_setContent(editarRolesWindow);
}

function erpsil_editarRoles(id){
    var req = {
        w: "erpsil_roles",
        r: "obtener_roles",
        id:id
    };
    
    calaApi_postRequest(req, function(d){
        erpsil_editarRolesWindow(d.resp);
    }, function(){
        console.log("Rol no editado");
    });
}

function erpsil_guardarEditarRoles() {

    var id_Roles = $("#inputId_roles").val();
    var nombreRoles = $("#inputNombre").val();
    var descripcionRoles = $("#inputDescripcion").val();

    if(nombreRoles != "" && descripcionRoles != ""){
        
        var rolesData = {
            w: "erpsil_roles",
            r: "agregarEditar_roles",
            id:id_Roles,
            nombre:nombreRoles,
            descripcion:descripcionRoles,
        };  
        
        calaApi_postRequest(rolesData, function (d) {
            console.log(rolesData);
            erpsil_listarRoles();
        }, function (d) {
            console.log("Activo no agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

/*********************************************************/
/*                 Gestion inventario                    */
/*********************************************************/

function erpsil_listarInventario(){

    var inventarioData = {
        w: "erpsil_inventario",
        r: "mostrar_inventario"
    };

    calaApi_postRequest(inventarioData, function (d) {
        
        var MostrarInventarioWindow = ""

        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Cantidad</th>"
        +                "<th>Unidad</th>"
        +                "<th>Codigo interno</th>"
        +                "<th>Codigo barras</th>"
        +                "<th>Categoria</th>"
        +                "<th>Cantidad minima</th>"
        +                "<th>Descripcion</th>"
        +                "<th>I.V</th>"
        +                "<th>Ganancia minima</th>"
        +                "<th>Costo</th>"
        +                "<th>Status</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
            for(x in d.resp){
                var a = d.resp[x];
                MostrarInventarioWindow += ""

        +    "<tr>"
        +        "<td> "+ a.id_inventario +" </td>"
        +        "<td> "+ a.cantidad +" </td>"
        +        "<td> "+ a.unidad +" </td>"
        +        "<td> "+ a.codigo_interno +" </td>"
        +        "<td> "+ a.codigo_barras +" </td>"
        +        "<td> "+ a.categoria +" </td>"
        +        "<td> "+ a.cantidad_minima +" </td>"
        +        "<td> "+ a.descripcion +" </td>"
        +        "<td> "+ a.impuesto_venta +" </td>"
        +        "<td> "+ a.ganancia_minima +" </td>"
        +        "<td> "+ a.costo +" </td>"
        +        "<td> "+ a.status +" </td>"

        +        "<td> <div id='editar_cliente' onclick='erpsil_editarInventario(" + a.id_inventario + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +        "<td> <div onclick='erpsil_eliminarInventario("+ a.id_inventario +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +    "</tr>";        
            }
        }
        MostrarInventarioWindow += ""
        +            "</tr>"
        +         "</table>"
        +      "</div>";
        erpsil_setContent(MostrarInventarioWindow);
    }, function (d) {
        console.log(d);
    });
}

function erpsil_agregarInventarioWindow(){
    //var loginWindow = "Aca va la ventana de login";
    var agregarInventarioWindow = ""
    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Agregar Inventario</h2>"
    +        "<label class='col-sm-3 control-label'>Cantidad</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Cantidad' required='required' id='inputCantidad'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Unidad</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Unidad' required='required' id='inputUnidad'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Interno</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Código Interno' required='required' id='inputCodigoInter'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Código de Barras</label>"
    +        "<div class='form-group'>"
    +            "<input type='password' class='form-control' placeholder='Código de Barras' required='required' id='inputCodigoBarra'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Categoria</label>"
    +        "<div class='form-group'>"
    +           "<input type='text' class='form-control' placeholder='Categoria' required='required' id='inputCategoria'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Cantidad Minima</label>"
    +        "<div class='form-group'>"
    +           "<input type='text' class='form-control' placeholder='Cantidad Minima' required='required' id='inputCantidadMin'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Descripción</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Descripción' required='required' id='inputDescripcion'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Impuesto de Venta</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Impuesto Venta' required='required' id='inputImpuestoVenta'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Ganacia Minima</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Ganacia Minima' required='required' id='inputGananciaMin'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Costo</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Costo' required='required' id='inputCosto'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Estatus</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Estatus' required='required' id='inputStatus'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<div onclick='erpsil_agregarInventario()' class='btn btn-primary btn-block'>Agregar</div>"
    +        "</div>"
    +   " </div>"
                       
    erpsil_setContent(agregarInventarioWindow);
}

function erpsil_agregarInventario(){

    var cantidadInventario = $("#inputCantidad").val();
    var unidadInventario = $("#inputUnidad").val();
    var codigoIntInventario = $("#inputCodigoInter").val();
    var codigoBarrasInventario = $("#inputCodigoBarra").val();
    var categoriaInventario = $("#inputCategoria").val();
    var cantidadMinimaInventario = $("#inputCantidadMin").val();
    var descripcionInventario = $("#inputDescripcion").val();
    var impuestoInventario = $("#inputImpuestoVenta").val();
    var gananciaInventario = $("#inputGananciaMin").val();
    var costoInventario = $("#inputCosto").val();
    var statusInventario = $("#inputStatus").val();

    if(cantidadInventario != "" && unidadInventario != "" && codigoIntInventario != "" &&
    codigoBarrasInventario != "" && categoriaInventario != "" && cantidadMinimaInventario != "" &&
    descripcionInventario != "" && impuestoInventario != "" && gananciaInventario != "" &&
    costoInventario != "" && statusInventario != ""){
    
        var inventarioData = {
            w:"erpsil_inventario",
            r:"agregar_inventario",
            cantidad:cantidadInventario,
            unidad:unidadInventario,
            codigo_interno:codigoIntInventario,
            codigo_barras:codigoBarrasInventario,
            categoria:categoriaInventario,
            cantidad_minima:cantidadMinimaInventario,
            descripcion:descripcionInventario,
            impuesto_venta:impuestoInventario,
            ganancia_minima:gananciaInventario,
            costo:costoInventario,
            status:statusInventario
        };
    calaApi_postRequest(inventarioData, function (d) {
        console.log("Inventario agregado" + d);
        erpsil_listarInventario();
    }, function (d) {
        console.log("Inventario no agregado" + d);

    });
    }else{
        console.log("Error!");
    }
}

function erpsil_eliminarInventario(id){

    var req = {
        w: "erpsil_inventario",
        r: "eliminar_inventario",
        id:id
    };

    calaApi_postRequest(req, function(){
        erpsil_listarInventario();
        }, function(){
        console.log("Inventario no eliminarado");
    });
}

function erpsil_editarInventarioWindow(data) {

    var editarInventarioWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar inventario</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' id='id_inventario' value='" +data.id_inventario+ "' class='form-control' placeholder='ID' disabled>"
+             "</div>"

+           "<label class='col-sm-3 control-label'>Cantidad</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text' id='cantidad' value='" +data.cantidad+ "' class='form-control' placeholder='Cantidad' required>"
+           "</div>"

+           "<label class='col-sm-3 control-label'>Unidad</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' id='unidad'  value='" +data.unidad+ "' class='form-control' placeholder='Unidad' required>"
+           "</div>"

+           "<label class='col-sm-3 control-label'>Codigo interno</label>"
+            "<div class='col-sm-4'>"
+            "<input type='text' id='codigo_interno' value='" +data.codigo_interno+ "' class='form-control' placeholder='Codigo interno' required>"
+            "</div>"

+         "<label class='col-sm-3 control-label'>Codigo de barras</label>"
+         "<div class='col-sm-4'>"
+            "<input type='text' id='codigo_barras' value='" +data.codigo_barras+ "' class='form-control' placeholder='Codigo de barras' required>"
+          "</div>"

+         "<label class='col-sm-3 control-label'>Categoria</label>"
+          "<div class='col-sm-4'>"
+               "<input type='text' id='categoria' value='" +data.categoria+ "' class='form-control' placeholder='Categoria' required>"
+        "</div>"  

+        "<label class='col-sm-3 control-label'>Cantidad minima</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' id='cantidad_minima' value='" +data.cantidad_minima+ "' class='form-control' placeholder='Cantidad minima' required>"
+        "</div>"  

+       "<label class='col-sm-3 control-label'>Descripcion</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='descripcion' value='" +data.descripcion+ "' class='form-control' placeholder='Descripcion'></input>"
+        "</div>"

+       "<label class='col-sm-3 control-label'>Impuesto de venta</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' id='impuesto_venta' value='" +data.impuesto_venta+ "' class='form-control' placeholder='Impuesto de venta' required>"
+        "</div>"

+        "<label class='col-sm-3 control-label'>Ganancia minima</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' id='ganancia_minima' value='" +data.ganancia_minima+ "' class='form-control' placeholder='Ganancia minima' required>"
+        "</div>"

+       "<label class='col-sm-3 control-label'>Costo</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='costo' value='" +data.costo+ "' class='form-control' placeholder='Costo' required>"
+        "</div>"

+       "<label class='col-sm-3 control-label'>Estatus</label>"
+        "<div class='col-sm-4'>"
+             "<input type='text' id='status' value='" + data.status + "' class='form-control' placeholder='Estatus' required>"
+        "</div>"

+           "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<div class='btn btn-sm btn-primary' onclick='erpsil_guardarEditarInventario()'>Guardar inventario</div>"
+                "<a href=' ' class='btn btn-sm btn-danger'>Cancelar</a>"
+                 "</div>"
+            "</form>"
+        "</div>"
+       "</div>"
+       "</div>"


    erpsil_setContent(editarInventarioWindow);
}

function erpsil_editarInventario(id){

    var req = {
        w: "erpsil_inventario",
        r: "obtener_inventario",
        id:id
    };

    calaApi_postRequest(req, function(d){
        //console.log(d.req);
        erpsil_editarInventarioWindow(d.resp);
    }, function(){
        console.log("Inventario no agregado");
    });
}

function erpsil_guardarEditarInventario(){

    var idInventario = $("#id_inventario").val();
    var cantidadInventario = $("#cantidad").val();
    var unidadInventario = $("#unidad").val();
    var codigoInternoInventario = $("#codigo_interno").val();
    var codigoBarrasInventario = $("#codigo_barras").val();
    var categoriaInventario = $("#categoria").val();
    var cantidadMinimaInventario = $("#cantidad_minima").val();
    var descripcionInventario = $("#descripcion").val();
    var impuestoVentaInventario = $("#impuesto_venta").val();
    var gananciaMinimaInventario = $("#ganancia_minima").val();
    var costoInventario = $("#costo").val();
    var statusInventario = $("#status").val();

    if(cantidadInventario != "" && unidadInventario != "" && codigoInternoInventario != "" &&
        codigoBarrasInventario != "" && categoriaInventario != "" && cantidadMinimaInventario != "" &&
        descripcionInventario != "" && impuestoVentaInventario != "" && gananciaMinimaInventario != "" &&
        costoInventario != "" && statusInventario != ""){

        var inventarioData = {
            w:"erpsil_inventario",
            r:"agregarEditar_inventario",
            id:idInventario,
            cantidad:cantidadInventario,
            unidad:unidadInventario,
            codigo_interno:codigoInternoInventario,
            codigo_barras:codigoBarrasInventario,
            categoria:categoriaInventario,
            cantidad_minima:cantidadMinimaInventario,
            descripcion:descripcionInventario,
            impuesto_venta:impuestoVentaInventario,
            ganancia_minima:gananciaMinimaInventario,
            costo:costoInventario,
            status:statusInventario
        };

        calaApi_postRequest(inventarioData, function (d) {
            erpsil_listarInventario();
        }, function (d) {
            console.log("Inventario no agregado" + d);
        });
    } else {
        console.log("Error!");
    }

}

/*********************************************************/
/*                 Gestion proveedor                     */
/*********************************************************/

function erpsil_agregarProveedorWindow() {
    //var loginWindow = "Aca va la ventana de login";
    var agregarProveedorWindow = ""

    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Agregar proveedor</h2>"
    +        "<label class='col-sm-3 control-label'>Nombre</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre' required='required' id='inputName'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Primer Apellido</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Primer Apellido' required='required' id='inputApe1'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Segundo Apellido</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Segundo Apellido' required='required' id='inputApe2'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Cedula</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Cedula' required='required' id='inputCedula'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Telefono</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Telefono' required='required' id='inputTelefono'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Direccion</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Direccion' required='required' id='inputDireccion'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Descripcion</label>"
    +        "<div class='form-group'>"
    +            "<input type='password' class='form-control' placeholder='Descripcion' required='required' id='inputDescripcion'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<div onClick='erpsil_agregarProveedor()' class='btn btn-primary btn-block'>Agregar</div>"
    +        "</div>"
    +   " </div>"
                       
    erpsil_setContent(agregarProveedorWindow);
}

function erpsil_agregarProveedor(){

    var nombreProveedor = $("#inputName").val();
    var apellido1Proveedor = $("#inputApe1").val();
    var apellido2Proveedor = $("#inputApe2").val();
    var cedulaProveedor = $("#inputCedula").val();
    var telefonoProveedor = $("#inputTelefono").val();
    var direccionProveedor = $("#inputDireccion").val();
    var descripcionProveedor = $("#inputDescripcion").val();

    if(nombreProveedor != "" && apellido1Proveedor != "" && apellido2Proveedor != "" 
    && direccionProveedor != "" && descripcionProveedor != "" && cedulaProveedor != "" && telefonoProveedor != ""){

        var proveedorData = {
            w: "erpsil_proveedor",
            r: "agregar_proveedor",
            nombre:nombreProveedor,
            apellido1:apellido1Proveedor,
            apellido2:apellido2Proveedor,
            cedula:cedulaProveedor,
            telefono:telefonoProveedor,
            direccion:direccionProveedor,
            descripcion:descripcionProveedor
        };

        calaApi_postRequest(proveedorData, function (d) {
            console.log("nuevos agregado" + d);
        }, function (d) {
            console.log("No agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

function erpsil_listarProveedor(){
    var proveedorData = {
        w: "erpsil_proveedor",
        r: "mostrar_proveedor"
    };

    calaApi_postRequest(proveedorData, function (d) {
 
        var MostrarProveedorWindow = ""

        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Nombre</th>"
        +                "<th>Primer apellido</th>"
        +                "<th>Segundo apellido</th>"
        +                "<th>Cedula</th>"
        +                "<th>Teléfono</th>"
        +                "<th>Direccion</th>"
        +                "<th>Descripcion</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarProveedorWindow += ""
    
        +            "<tr>"
        +                "<td> "+ a.id_proveedor +" </td>"
        +                "<td> "+ a.nombre +" </td>"
        +                "<td> "+ a.apellido1 +" </td>"
        +                "<td> "+ a.apellido2 +" </td>"
        +                "<td> "+ a.cedula +" </td>"
        +                "<td> "+ a.direccion +" </td>"
        +                "<td> "+ a.telefono +" </td>"
        +                "<td> "+ a.descripcion +" </td>"

        +                "<td> <div id='editar_cliente' onclick='erpsil_editarProveedor(" + a.id_proveedor + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarProveedor("+ a.id_proveedor +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarProveedorWindow += ""
        +            "</tr>"
        +         "</table>"
        +      "</div>";

        erpsil_setContent(MostrarProveedorWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_eliminarProveedor(id){
    var req = {
        w: "erpsil_proveedor",
        r: "eliminar_proveedor",
        id:id
    };

    calaApi_postRequest(req, function(){
        erpsil_listarProveedor();
    }, function(){
        console.log("Proveedor no eliminarado");
    });
}

function erpsil_editarProveedor(id){

    var req = {
        w: "erpsil_proveedor",
        r: "obtener_proveedor",
        id:id
    };
    
    calaApi_postRequest(req, function(d){
        //console.log(d.req);
        erpsil_editarProveedorWindow(d.resp);
    }, function(){
        console.log("Proveedor no editado");
    });
}

function erpsil_guadarEditarProveedor(){

    var id_proveedor = $("#inputIdProveedor").val();
    var nombreProveedor = $("#inputNombre").val();
    var apellido1Proveedor = $("#inputApellido1").val();
    var apellido2Proveedor = $("#inputApellido2").val();
    var cedulaProveedor = $("#inputCedula").val();
    var direccionProveedor = $("#inputDireccion").val();
    var telefonoProveedor = $("#inputTelefono").val();
    var descripcionProveedor = $("#inputDescripcion").val();

    if(nombreProveedor != "" && apellido1Proveedor != "" && apellido2Proveedor != "" && cedulaProveedor != "" 
    && direccionProveedor != "" && telefonoProveedor != "" && descripcionProveedor != ""){

        var proveedorData = {
            w: "erpsil_proveedor",
            r: "agregarEditar_proveedor",
            id:id_proveedor,
            nombre:nombreProveedor,
            apellido1:apellido1Proveedor,
            apellido2:apellido2Proveedor,
            cedula:cedulaProveedor,
            direccion:direccionProveedor,
            telefono:telefonoProveedor,
            descripcion:descripcionProveedor
        };

        calaApi_postRequest(proveedorData, function (d) {       
            erpsil_listarProveedor();
        }, function (d) {
            console.log("No agregado" + d);
        });
    } else {
        console.log("Error!");
    }

}

function erpsil_editarProveedorWindow(data) {

    var editarProveedorWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar cliente</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' id='inputIdProveedor' value='" +data.id_proveedor+ "' class='form-control' placeholder='ID' disabled>"
+             "</div>"
+           "<label class='col-sm-3 control-label'>Nombre</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text' id='inputNombre' value='" +data.nombre+ "' class='form-control' placeholder='Nombre' required>"
+           "</div>"
+           "<label class='col-sm-3 control-label'>Primer Apellido</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' id='inputApellido1' value='" +data.apellido1+ "' class='form-control' placeholder='Primer Apellido' required>"
+           "</div>"
+       "<label class='col-sm-3 control-label'>Segudo Apellido</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputApellido2' value='" +data.apellido2+ "' class='form-control' placeholder='Segudo Apellido' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Cedula</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' id='inputCedula' value='" +data.cedula+ "' class='form-control' placeholder='Cedula' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Telefono</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputTelefono' value='" +data.telefono+ "' class='form-control' placeholder='Telefono' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Direccion</label>"
+        "<div class='col-sm-4'>"
+            "<input id='inputDireccion' class='form-control' value='" +data.direccion+ "' placeholder='Dirección'></input>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Descripcion</label>"
+        "<div class='col-sm-4'>"
+            "<input id='inputDescripcion' class='form-control' value='" +data.descripcion + "' placeholder='Descripcion'></input>"
+        "</div>"
+            "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<div class='btn btn-sm btn-primary' onclick='erpsil_guadarEditarProveedor()'>Guardar Proveedor</div>"
+                "<div class='btn btn-sm btn-danger'>Cancelar</div>"
+                 "</div>"
+            "</form>"
+        "</div>"
+       "</div>"
+       "</div>"


    erpsil_setContent(editarProveedorWindow);
}

/*********************************************************/
/*                 Gestion cliente                       */
/*********************************************************/

function erpsil_agregarClienteWindow() {
    //var loginWindow = "Aca va la ventana de login";
    var agregarClienteWindow = ""

    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Agregar cliente</h2>"
    +        "<label class='col-sm-3 control-label'>Nombre</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre' required='required' id='inputName'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Cedula</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Cedula' required='required' id='inputCedula'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Email</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Email' required='required' id='inputEmail'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Direccion</label>"
    +        "<div class='form-group'>"
    +            "<input type='password' class='form-control' placeholder='Direccion' required='required' id='inputDireccion'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Telefono</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Telefono' required='required' id='inputTelefono'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Descripcion</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Descripcion' required='required' id='inputDescripcion'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Saldo Maximo</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Saldo Maximo' required='required' id='inputSaldoMa'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Saldo</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Saldo' required='required' id='inputSaldo'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Tipo</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Tipo' required='required' id='inputTipo'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<button onClick='erpsil_agregarCliente()' class='btn btn-primary btn-block'>Agregar</button>"
    +        "</div>"
    +   " </div>"

    erpsil_setContent(agregarClienteWindow);
}

function erpsil_editarClienteWindow(data) {

    var editarClienteWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar cliente</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' id='inputId_cliente' value='" + data.id_cliente + "' class='form-control' placeholder='ID' disabled>"
+             "</div>"
+           "<label class='col-sm-3 control-label'>Nombres</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text' id='inputNombre' value='" + data.nombre + "' class='form-control' placeholder='Nombre' required>"
+           "</div>"
+           "<label class='col-sm-3 control-label'>Cedula</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' id='inputCedula' value='" + data.cedula  + "' class='form-control' placeholder='Cedula' required>"
+           "</div>"
+       "<label class='col-sm-3 control-label'>Email</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputEmail' value='" +data.email  + "' class='form-control' placeholder='Email' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Direccion</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputDireccion' value='" +data.direccion  + "' class='form-control' placeholder='Dirección' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Telefono</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputTelefono' value='" + data.telefono  + "' class='form-control' placeholder='Telefono' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Descripcion</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputDescripcion' value='" + data.descripcion  + "' class='form-control' placeholder='Descripcion' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Saldo Maximo</label>"
+        "<div class='col-sm-4'>"
+            "<input type='textarea' id='inputSaldo_maximo' value='" + data.saldo_maximo  + "' class='form-control' placeholder='Saldo Maximo'></textarea>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Saldo</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputSaldo' value='" + data.saldo  + "' class='form-control' placeholder='Saldo' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Tipo</label>"
+       " <div class='col-sm-4'>"           
+            "<input type='text' id='inputTipo' value='" + data.tipo  + "' class='form-control' placeholder='Tipo' required>"
+        "</div>"    
+            "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<div class='btn btn-sm btn-primary' onclick='erpsil_guadarEditarCliente()' >Guardar</div>"
+                "<div class='btn btn-sm btn-danger'>Cancelar</div>"
+                 "</div>"
+          "</form>"
+        "</div>"
+       "</div>"
+       "</div>"


    erpsil_setContent(editarClienteWindow);
}

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
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarClienteWindow += ""
    
        +            "<tr>"
        +                "<td> "+ a.id_cliente +" </td>"
        +                "<td> "+ a.nombre +" </td>"
        +                "<td> "+ a.cedula +" </td>"
        +                "<td> "+ a.email +" </td>"
        +                "<td> "+ a.direccion +" </td>"
        +                "<td> "+ a.telefono +" </td>"
        +                "<td> "+ a.descripcion +" </td>"
        +                "<td> "+ a.saldo_maximo +" </td>"
        +                "<td> "+ a.saldo +" </td>"
        +                "<td> "+ a.tipo +" </td>"
        +                "<td> <div id='editar_cliente' onclick='erpsil_editarCliente(" + a.id_cliente + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarCliente("+ a.id_cliente +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +            "</tr>";
                    }
        }
                MostrarClienteWindow += ""
        +            "</tr>"
        +         "</table>"
        +      "</div>";

        erpsil_setContent(MostrarClienteWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_eliminarCliente(id){
    console.log(id);

    var req = {
        w: "erpsil_cliente",
        r: "eliminar_cliente",
        id:id
    };
    calaApi_postRequest(req, function(){
        erpsil_listarCliente();
    }, function(){
        console.log("no eliminar");
    });
}

function erpsil_editarCliente(id){
    var req = {
        w: "erpsil_cliente",
        r: "obtener_cliente",
        id:id
    };

    $("#editar_cliente").empty();
    $("#editar_cliente").append("Cargando...");

    calaApi_postRequest(req, function(d){
        erpsil_editarClienteWindow(d.resp);
    }, function(){
        console.log("Cliente no editado");
    });
}

function erpsil_guadarEditarCliente(){
    
    var idCliente = $("#inputId_cliente").val();
    var nombreCliente = $("#inputNombre").val();
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
            r:"agregarEditar_cliente",
            id:idCliente,
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
            erpsil_listarCliente();
        }, function (d) {
            console.log("No agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

/*********************************************************/
/*                 Gestion empleado                      */
/*********************************************************/

//este creo que no
function erpsil_agregarEmpleadoWindow(){
    var agregarEmpleadoWindow = ""
    
    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Agregar empleado</h2>"
    +        "<label class='col-sm-3 control-label'>Nombre</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre' required='required' id='inputName'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Primer Apellido</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Primer Apellido' required='required' id='inputApellido1'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Segundo Apellido</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Segundo Apellido' required='required' id='inputApellido2'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Telefono</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Telefono' required='required' id='inputTelefono'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Cedula</label>"
    +        "<div class='form-group'>"
    +            "<input type='password' class='form-control' placeholder='Cedula' required='required' id='inputCedula'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Direccion</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Dirección' required='required' id='inputDireccion'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Ingreso</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Ingreso' required='required' id='inputIngreso'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Observación</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Observacion' required='required' id='inputObservacion'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Puesto</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Puesto' required='required' id='inputPuesto'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Jornada</label>"    
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Jornada' required='required' id='inputJornada'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<button onClick='erpsil_agregarEmpleado()' class='btn btn-primary btn-block'>Agregar</button>"
    +        "</div>"
    +   " </div>"
    
    erpsil_setContent(agregarEmpleadoWindow);
}

function erpsil_editarEmpleadoWindow(data) {
    
    var editarEmpleadoWindow = ""
+        "<div class='container'>"
+        "<h2 class='text-center'>Editar Empleado</h2>"
+       "<form class='form-horizontal' action='' method='post'>"
+              "<label class='col-sm-3 control-label'>ID</label>"
+              "<div class='col-sm-2'>"
+                   "<input type='text' id='inputId_empleado' value='" + data.id_empleado + "'  class='form-control' placeholder='ID' disabled>"
+             "</div>"
+           "<label class='col-sm-3 control-label'>Nombre</label>"
+           "<div class='col-sm-4'>"
+                "<input type='text'  id='inputName' value='" + data.nombre + "' class='form-control' placeholder='Nombre' required>"
+           "</div>"
+           "<label class='col-sm-3 control-label'>Primer Apellido</label>"
+           "<div class='col-sm-4'>"
+               "<input type='text' id='inputApellido1' value='" + data.apellido1 + "' class='form-control' placeholder='Primer Apellido' required>"
+           "</div>"
+       "<label class='col-sm-3 control-label'>Segudo Apellido</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputApellido2' value='" + data.apellido2 + "' class='form-control' placeholder='Segudo Apellido' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Telefono</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputTelefono' value='" + data.telefono + "' class='form-control' placeholder='Telefono' required>"
+        "</div>"
+        "<label class='col-sm-3 control-label'>Cedula</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' id='inputCedula' value='" + data.cedula + "' class='form-control' placeholder='Cedula' required>"
+        "</div>"     
+       "<label class='col-sm-3 control-label'>Direccion</label>"
+        "<div class='col-sm-4'>"
+            "<input id='inputDireccion' value='" + data.direccion + "' class='form-control' placeholder='Dirección'></textarea>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Ingreso</label>"
+        "<div class='col-sm-4'>"
+               "<input type='text' id='inputIngreso' value='" + data.ingreso + "' class='form-control' placeholder='Ingreso' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Observaciones</label>"
+        "<div class='col-sm-4'>"
+            "<input id='inputObservacion' value='" + data.observacion + "' class='form-control' placeholder='Observaciones'></textarea>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Puesto</label>"
+        "<div class='col-sm-4'>"
+            "<input type='text' id='inputPuesto' value='" + data.puesto + "' class='form-control' placeholder='Puesto' required>"
+        "</div>"
+       "<label class='col-sm-3 control-label'>Jornada</label>"
+        "<div class='col-sm-4'>"
+             "<input type='text' id='inputJornada' value='" + data.jornada + "' class='form-control' placeholder='Jornada' required>"
+        "</div>"
+           "<label class='col-sm-3 control-label'>&nbsp;</label>"
+           " <div class='col-sm-6'>"
+               "<div type='submit' class='btn btn-sm btn-primary' onclick='erpsil_guardarEditarEmpleado()' >Guardar</div>"
+                "<div class='btn btn-sm btn-danger'>Cancelar</div>"
+                 "</div>"
+            "</form>"
+        "</div>"
+       "</div>"
+       "</div>"


erpsil_setContent(editarEmpleadoWindow);
}

function erpsil_agregarEmpleado(){

    var nombreEmpleado = $("#inputName").val();
    var apellido1Empleado = $("#inputApellido1").val();
    var apellido2Empleado = $("#inputApellido2").val();
    var telefonoEmpleado = $("#inputTelefono").val();
    var cedulaEmpleado = $("#inputCedula").val();
    var direccionEmpleado = $("#inputDireccion").val();
    var ingresoEmpleado = $("#inputIngreso").val();
    var observacionEmpleado = $("#inputObservacion").val();
    var puestoEmpleado= $("#inputPuesto").val();
    var jornadaEmpleado = $("#inputJornada").val();

    if(nombreEmpleado != "" && apellido1Empleado != "" && apellido2Empleado != "" && telefonoEmpleado != "" 
    && cedulaEmpleado != "" && direccionEmpleado != "" && ingresoEmpleado != "" && observacionEmpleado != ""
    && puestoEmpleado != "" && jornadaEmpleado != ""){

        var empleadoData = {
            w:"erpsil_empleado",
            r:"agregar_empleado",
            nombre:nombreEmpleado, 
            apellido1:apellido1Empleado,
            apellido2:apellido2Empleado,
            telefono:telefonoEmpleado,
            cedula:cedulaEmpleado,
            direccion:direccionEmpleado,
            ingreso:ingresoEmpleado,
            observacion:observacionEmpleado,
            puesto:puestoEmpleado,
            jornada:jornadaEmpleado
        };
    
        calaApi_postRequest(empleadoData, function (d) {
            console.log("empleado agregado" + d);
        }, function (d) {
            console.log("empleado no agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

function erpsil_listarEmpleado() {
    var empleadoData = {
        w: "erpsil_empleado",
        r: "mostrar_empleado"
    };

    calaApi_postRequest(empleadoData, function (d) {
 
        var MostrarEmpleadoWindow = ""

        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID </th>"
        +                "<th>Nombre </th>"
        +                "<th>Apellido1 </th>"
        +                "<th>Apellido2 </th>"
        +                "<th>Telefono </th>"
        +                "<th>Cedula </th>"
        +                "<th>Direccion </th>"
        +                "<th>Ingreso </th>"
        +                "<th>Obseracion</th>"
        +                "<th>Puesto</th>"
        +                "<th>Jornada</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarEmpleadoWindow += ""
    
        +            "<tr>"
        +                "<td> "+ a.id_empleado +" </td>"
        +                "<td> "+ a.nombre +" </td>"
        +                "<td> "+ a.apellido1 +" </td>"
        +                "<td> "+ a.apellido1 +" </td>"
        +                "<td> "+ a.telefono +" </td>"
        +                "<td> "+ a.cedula +" </td>"
        +                "<td> "+ a.direccion +" </td>"
        +                "<td> "+ a.ingreso +" </td>"
        +                "<td> "+ a.observacion +" </td>"
        +                "<td> "+ a.puesto +" </td>"
        +                "<td> "+ a.jornada +" </td>"
        +                "<td> <div id='editar_empleado' onClick='erpsil_editarEmpleado(" + a.id_empleado + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onClick='erpsil_eliminarEmpleado("+ a.id_empleado +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +                "<td> <div onClick='erpsil_listarEmpleado()' class='btn btn-danger btn-sm'>Volver</div></td>"
        +            "</tr>";
                    }
        }
                        MostrarEmpleadoWindow += ""
        +            "</tr>"
        +         "</table>"
        +      "</div>";

        erpsil_setContent(MostrarEmpleadoWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_eliminarEmpleado(id){
    console.log(id);
    var req = {
        w: "erpsil_empleado",
        r: "eliminar_empleado",
        id:id
    };
    calaApi_postRequest(req, function(){
        erpsil_listarEmpleado();
    }, function(){
        console.log("no eliminar");
    });
}

function erpsil_editarEmpleado(id){
    var req = {
        w: "erpsil_empleado",
        r: "obtener_empleado",
        id:id
    };

    $("#editar_empleado").empty();
    $("#editar_empleado").append("Cargando...");

    calaApi_postRequest(req, function(d){
        erpsil_editarEmpleadoWindow(d.resp);
    }, function(){
        console.log("no eliminar");
    });
}

function erpsil_guardarEditarEmpleado(){

    var idEmpleado = $("#inputId_empleado").val();
    var nombreEmpleado = $("#inputName").val();
    var apellido1Empleado = $("#inputApellido1").val();
    var apellido2Empleado = $("#inputApellido2").val();
    var telefonoEmpleado = $("#inputTelefono").val();
    var cedulaEmpleado = $("#inputCedula").val();
    var direccionEmpleado = $("#inputDireccion").val();
    var ingresoEmpleado = $("#inputIngreso").val();
    var observacionEmpleado = $("#inputObservacion").val();
    var puestoEmpleado= $("#inputPuesto").val();
    var jornadaEmpleado = $("#inputJornada").val();

    if(nombreEmpleado != "" && apellido1Empleado != "" && apellido2Empleado != "" && telefonoEmpleado != "" 
    && cedulaEmpleado != "" && direccionEmpleado != "" && ingresoEmpleado != "" && observacionEmpleado != ""
    && puestoEmpleado != "" && jornadaEmpleado != ""){

    var empleadoData = {
        w: "erpsil_empleado",
        r: "agregarEditar_empleado",
            id:idEmpleado,
            nombre:nombreEmpleado, 
            apellido1:apellido1Empleado,
            apellido2:apellido2Empleado,
            telefono:telefonoEmpleado,
            cedula:cedulaEmpleado,
            direccion:direccionEmpleado,
            ingreso:ingresoEmpleado,
            observacion:observacionEmpleado,
            puesto:puestoEmpleado,
            jornada:jornadaEmpleado
    };
    calaApi_postRequest(empleadoData, function (d) {
        erpsil_listarEmpleado();
    }, function (d) {
        console.log("No agregado" + d);
    });
    } else {
        console.log("Error!");
    }


}

/*********************************************************/
/*                 Gestion Usuario                       */
/*********************************************************/

function agregarUsuario(){
    var req = {

        fullName: "Daniel",
        userName: "ol",
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

function erpsil_agregarUsuarioWindow(){
    //var loginWindow = "Aca va la ventana de login";
    var agregarUsuarioWindow = ""

    +    "<div class='login-form'>"
    +        "<h2 class='text-center'>Agregar usuario</h2>"
    +        "<label class='col-sm-3 control-label'>Nombre</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre' required='required' id='inputFullName'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Username</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Nombre usuario' required='required' id='inputUserName'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Email</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Email' required='required' id='inputUserEmail'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Contrasena</label>"
    +        "<div class='form-group'>"
    +           " <input type='password' class='form-control' placeholder='Contrasena' required='required' id='inputPwd'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Acerca de</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Acerca' required='required' id='inputAbout'>"
    +        "</div>"
    +        "<label class='col-sm-3 control-label'>Pais</label>"
    +        "<div class='form-group'>"
    +           " <input type='text' class='form-control' placeholder='Pais' required='required' id='inputUserCountry'>"
    +        "</div>"
    +        "<div class='form-group'>"
    +            "<div onClick='erpsil_agregarUsuario()' class='btn btn-primary btn-block'>Agregar</div>"
    +        "</div>"
    +   " </div>"
                       
    erpsil_setContent(agregarUsuarioWindow);
}

function erpsil_agregarUsuario(){
    var nombreUsuario = $("#inputFullName").val();
    var userUsuario = $("#inputUserName").val();
    var emailUsuario = $("#inputUserEmail").val();
    var pwdUsuario = $("#inputPwd").val();
    var acercaUsuario = $("#inputAbout").val();
    var countryUsuario = $("#inputUserCountry").val();

    if(nombreUsuario != "" && userUsuario != "" && emailUsuario != "" && 
    pwdUsuario != "" && acercaUsuario != "" && countryUsuario != ""){
        var usuarioData = {
            w: "erpsil_usuario", 
            r: "agregar_Usuario",
            fullName:nombreUsuario, 
            userName:userUsuario,
            email:emailUsuario,
            pwd:pwdUsuario,
            about:acercaUsuario,
            country:countryUsuario
        };
        calaApi_registerUser(usuarioData, function(d){
            console.log("usuario Agregado" + d); 

        }, function(d){
            console.log("Error al agregar usuario" + d);
        })
    }else{
        console.log("Error");
    }
}

function erpsil_listarUsuario(){
    var UsuarioData = {
        w: "erpsil_usuario",
        r: "mostrar_usuario"
    };

    calaApi_postRequest(UsuarioData, function (d) {
 
        var MostrarUsuarioWindow = ""

        +      "<div class='table-responsive'>"
        +         "<table class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Nombre</th>"
        +                "<th>Username</th>"
        +                "<th>Email</th>"
        +                "<th>Acerca</th>"
        +                "<th>Pais</th>"
        +                "<th>Status</th>"

        +            "</tr>";
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarUsuarioWindow += ""

        +            "<tr>"
        +                "<td> "+ a.idUser +" </td>"
        +                "<td> "+ a.fullName +" </td>"
        +                "<td> "+ a.userName +" </td>"
        +                "<td> "+ a.email +" </td>"
        +                "<td> "+ a.about +" </td>"
        +                "<td> "+ a.country +" </td>"
        +                "<td> "+ a.status +" </td>"

        +                "<td> <div id='editar_activos' onclick='erpsil_editarUsuario(" + a.idUser + ")' class='btn btn-warning btn-sm'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarUsuario("+ a.idUser +")' class='btn btn-danger btn-sm'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarUsuarioWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='editar_activos' onclick='erpsil_agregarUsuarioWindow()' class='btn btn-warning btn-sm'>Agregar</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarUsuarioWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_eliminarUsuario(id){
    var req = {
        w: "erpsil_usuario",
        r: "eliminar_usuario",
        id:id
    };

    calaApi_postRequest(req, function(){
        console.log(req);
        erpsil_listarUsuario();
    }, function(){
        console.log("Usuario no eliminarado");
    });
}

/*********************************************************/
/*                 Otras funciones                       */
/*********************************************************/

function erpsil_setContent(content) {
    $("#erpsil_content").empty();
    $("#erpsil_content").append(content);
}

function erpsil_debug(mensaje) {
    if (debug) {
        console.log("erpsil >> " + mensaje);
    }
}

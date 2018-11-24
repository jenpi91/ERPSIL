var debug = true;
var cache = "";

function boot_erpsil() {
    calaApi_checkLogin(function (d) {
        erpsil_debug("Estamos logueados");
        erpsil_setMenu();
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
        //erpsil_menuWindow();
        //agregarUsuario();
        //erpsil_loginWindow();

    }, function () {
       // erpsil_debug("No estamos log");
        /* Mostrar paginas */
        //agregarUsuario();
        erpsil_loginWindow();

    });
    //success, error, timeout
}

/*********************************************************/
/*                 Gestion de Reportes                   */
/*********************************************************/
/*Funciona pero solo con las tablas*/
function DescargarPDF(ContenidoID,nombre) {

    var pdf = new jsPDF('p', 'pt', 'letter');
	
    html = $('#'+ContenidoID).html();
	
    specialElementHandlers = {};
    
    margins = {top: 0,bottom: 0,left: 0,width: 1000, height: 1000};
	
    pdf.fromHTML(html, margins.left, margins.top, {'width': margins.width},function (dispose) {pdf.save(nombre+'.pdf');}, margins);
	
}

function PdfDescargar(id,nombre){

    var doc = new jsPDF('p', 'pt');
    
    doc.text(nombre, 225, 50);
    var res = doc.autoTableHtmlToJson(document.getElementById(id));
    doc.autoTable(res.columns, res.data, {margin: {top: 80}});
/*
    var header = function(data) {
        doc.setFontSize(18);
        doc.setTextColor(40);
        doc.setFontStyle('normal');

        doc.text("Testing Report", data.settings.margin.left, 50);};

        var options = {
            beforePageContent: header,
            margin: {
              top: 80
            },
            startY: doc.autoTableEndPosY() + 20
          };


         doc.autoTable(res.columns, res.data, options);
         */
        
          doc.save(nombre+".pdf");

}

/*********************************************************/
/*                 Gestión Login                         */
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
        //erpsil_menuWindow();
        erpsil_setMenu();
        //erpsil_listarCliente();
        //erpsil_agregarEmpleado();
        //erpsil_agregarEmpleadoWindow();
        //erpsil_listarEmpleado();
        //erpsil_listarProveedor();
        //erpsil_agregarInventarioWindow();

    }, function(b){
        erpsil_modalMalo();
        console.log(b);    
    });

    //console.log("Antes de algo");
    //erpsil_debug(userName);
    //erpsil_debug(passUser);
}

function erpsil_loginWindow() {
    erpsil_CleanChart();
    
    var loginWindow = ""
    +    "<div class='login'>"
    +        "<h2 class='tituloTablas' >Login</h2>"
    +        "<div>"
    +           " <input type='text'  placeholder='Username' required='required' id='inputUser'>"
    +        "</div>"
    +        "<div>"
    +            "<input type='password' placeholder='Password' required='required' id='inputPassword'>"
    +        "</div>"
    +        "<div>"
    +            "<button onClick='validacionLogin()' class='login-btnRojo'>Login</button>"
    +            "<label onClick='erpsilRecoveryPwdWindow()' class='recPwd' >Recuperar Contraseña</label>"
    +        "</div>"
    +   " </div>"
     
    erpsil_setContent(loginWindow);
}

function validacionLogin(){
    var nick = $("#inputUser").val();
    var pass = $("#inputPassword").val();
    if(pass == "" || nick == ""){
        erpsil_modalMalo();
    }else{
        erpsil_login();
    }
}

function erpsil_setMenu() {
    var content =  "<div id='central'>"

    +   "<div class='contenedorPrincipal'>"
    +       "<div class='contenedorTitulo'>"	    
    +           "<div class='tituloFormularios'>Sistema <b>ERPSIL"
    +       "</div>"
    +   "</div>"
    +   "<div class='back_menu'>"
    +       "<ul class='acorh'>"
    +           "<li><a style='color:#fff;' onClick='dashboard()'>Dashboard</a></li>"
    +           "<li><a style='color:#fff;'>RRHH</a>"
    +               "<ul>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarCliente()'>Clientes</a></li>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarProveedor()'>Proveedor</a></li>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarEmpleado()'>Empleado</a></li>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarTipoCliente()'>Tipo Cliente</a></li>"
  //+                   "<li><a style='color:#fff;' onClick='erpsil_listarClientesTickets()'>Tickets</a></li>"
    +               "</ul>"
    +           "</li>"
    +           "<li><a style='color:#fff;'>Inventario</a>"
    +               "<ul>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarInventario()'>Inventario</a></li>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarPedido()'>Pedido</a></li>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarActivos()'>Activos</a></li>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarMovimientoInventario()'>Movimiento del Inventario</a></li>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarHistorialPrecio()'>Historial de Precios</a></li>"
    +               "</ul>"
    +           "</li>"
    +           "<li><a style='color:#fff;'>Contabilidad</a>"
    +               "<ul>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarContabilidad()'>Lista de Contabilidad</a></li>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarCuentasPagar()'>Cuentas por Pagar</a></li>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarPagos()'>Pagos</a></li>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarPlanilla()'>Planilla</a></li>"
    +                   "<li><a style='color:#fff;' onClick='erpsil_listarFactura()'>Factura</a></li>"
    +               "</ul>"
    +           "</li>"
    +           "<li><a style='color:#fff;'>Sistema</a>"
    +                   "<ul>"
    +                       "<li><a style='color:#fff;' onClick='erpsil_listarUsuario()'>Usuarios</a></li>"
    +                       "<li><a style='color:#fff;' onClick='erpsil_listarRoles()'>Roles</a></li>"
    +                   "</ul>"
    +           "</li>"
    +           "<li><a style='color:#fff;' onClick='erpsil_logout()'>Salir</a></li>"
    +       "</ul>"
    +       "</div>"
    +    "</div>";

    $("#erpsil_modal").empty();
    $("#erpsil_content").empty();
    $("#erpsil_menu").empty();
    $("#erpsil_menu").append(content);
    dashboard();
}

function dashboard(){

    var conta = {
        w: "erpsil_contabilidad",
        r: "mostrar_contabilidad"
     };

     calaApi_postRequest(conta, function(cont){
         var contab_fact;
         var contab_fact;
         var contab_fact;
         var contab_fact;

        for(a in cont.resp){
        var x = cont.resp[a];
        contab_fact = x.total_factura;
        contab_pagar = x.total_pagar;
        contab_planilla = x.total_planilla;
        contab_total = x.total;

    }
        
        var dash = ""
        +   "<div>"
        +       "<div class='cont_Dash'>"
    
        +           "<div class='t_factura' style='margin-right: 10px';>"
        +               "<div class='block_fact'>Total de facturas</div>"
        +               "<div class='fact_num'>"+contab_fact+"</div>"
        +           "</div>"
    
        +           "<div class='t_pagar' style='margin-right: 10px';>"
        +               "<div class= 'block_pagar'>Total a pagar</div>"
        +               "<div class='fact_pag'>"+contab_pagar+"</div>"
        +           "</div>"
    
        +           "<div class='t_planilla' style='margin-right: 10px';>"
        +               "<div class= 'block_plantilla'>Total a planilla</div>"
        +               "<div class='fact_pag'>"+contab_planilla+"</div>"
        +           "</div>"
    
        +           "<div class='t_cantidad' style='margin-left: 10px';>"
        +               "<div class='block_cantidad'>Cantidad total</div>"
        +               "<div class='fact_cant'>"+contab_total+"</div>"
        +           "</div>"
    
        +       "</div>"
        +   "</div>";
    
                         
        erpsil_setContent(dash);
        pie(contab_fact,contab_pagar,contab_planilla,contab_total);
    }, function(){
        console.log("Error!");
        erpsil_modalMalo();
    
}, function(){
    console.log("Error!");
    erpsil_modalMalo();

});
}

function pie(a,b,c,d){
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Total a factura", "Total a pagar", "Total Planilla", "Total"],
            datasets: [{
                label: 'ERPSIL',
                data: [a, b, c, d],
                backgroundColor: [
                    'rgba(95, 183, 96, 0.2)',
                    'rgba(52, 117, 176, 0.2)',
                    'rgba(238, 172, 87, 0.2)',
                    'rgba(215, 84, 82, 0.2)'
                ],
                borderColor: [
                    'rgba(95, 183, 96, 1)',
                    'rgba(52, 117, 176, 1)',
                    'rgba(238, 172, 87, 1)',
                    'rgba(215, 84, 82, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}

/*********************************************************/
/*                       Alertas   malas                 */
/*********************************************************
function erpsil_modalBueno(){

    var modal = ""
+      "<div class='alert alert-success' role='alert'>Agregado correctamente</div>"
    erpsil_setModal(modal);

    calaApi_doSomethingAfter(function(){
        $("#erpsil_modal").empty();
    }, 5000);
}

function erpsil_modalMalo(){

    var modal = ""
+      "<div class='alert alert-danger' role='alert'>Error en el proceso</div>"
    erpsil_setModal(modal);

    calaApi_doSomethingAfter(function(){
        $("#erpsil_modal").empty();
    }, 5000);
}*/

/*********************************************************/
/*                       Alertas                         */
/*********************************************************/
function erpsil_modalBueno(){
    swal({
        position: 'center',
        type: 'success',
        title: 'Proceso correcto!',
        showConfirmButton: false,
        timer: 1500
      });
}

function erpsil_modalMalo(){

    swal({
        position: 'center',
        type: 'error',
        title: 'Proceso incorrecto!',
        showConfirmButton: false,
        timer: 1500
      });
}

function erpsil_validacion(func){

    const swalWithBootstrapButtons = swal.mixin({
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: false,
      })
      
      swalWithBootstrapButtons({
        title: '¿Estás Seguro?',
        text: "El dato seleccionado se eliminará permanentemente!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
            func();
            swal({
                position: 'central',
                type: 'success',
                title: 'Dato eliminado!',
                showConfirmButton: false,
                timer: 1500
              })
            
        } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
        ) {
            swal({
                position: 'central',
                type: 'success',
                title: 'Dato no eliminado!',
                showConfirmButton: false,
                timer: 1500
              })

        }
      })
}

/*********************************************************/
/*                       LogOut                          */
/*********************************************************/

function erpsil_logout(){

    var logOut = {
        w: "users",
        r: "users_log_me_out"
    }

    calaApi_postRequest(logOut, function (d) {
        //console.log("Si Funcionó");
        $("#erpsil_content").empty();
        $("#erpsil_menu").empty();
        erpsil_loginWindow();

    }, function (d) {
        erpsil_modalMalo();
        //console.log("No Funcionó");
    });
}

/*********************************************************/
/*           Gestion del tbl_pedidos                     */
/*********************************************************/

function erpsil_listarPedido(){
    erpsil_CleanChart();
    var pedidoData = {
        w:"erpsil_pedido",
        r:"mostrar_pedido"
    };

    calaApi_postRequest(pedidoData, function (d) {
 
        var pedidoWindow = ""
        +   "<h2 class='tituloTablas'>Lista de Pedidos</h2><br><br>"
        +   "<div  class='form-horizontal-4'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='Pedidos' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID Pedido</th>"
        +                "<th>ID Cliente</th>"
        +                "<th>Fecha de Pedido</th>"
        +                "<th>Fecha de Entrega</th>"
        +                "<th>Cantidad</th>"
        +                "<th>Estatus</th>"
        +                "<th>Descripción</th>"
        +                "<th>Precio</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>"
        +       "</div>"
        +   "</div>"
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            pedidoWindow += ""

        +            "<tr>"
        +                "<td> "+ a.id_pedido +" </td>"
        +                "<td> "+ a.id_cliente +" </td>"
        +                "<td> "+ a.stamp_pedido +" </td>"
        +                "<td> "+ a.stamp_entrega +" </td>"
        +                "<td> "+ a.cant_rollos +" </td>"
        +                "<td> "+ a.status +" </td>"
        +                "<td> "+ a.descripcion +" </td>"
        +                "<td> "+ a.precio +" </td>"
        +                "<td> <div id='editar_activos' onclick='erpsil_editarPedido(" + a.id_pedido + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarPedido("+ a.id_pedido +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                pedidoWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='editar_activos' onclick='erpsil_agregarPedidoWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +                "<td> <div onclick='erpsil_pdfPedidos()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";

        erpsil_setContent(pedidoWindow);

    }, function (d) {
        console.log(d);
        erpsil_modalMalo();
    });
}

function erpsil_pdfPedidos(){
    /*console.log("debug");*/
    PdfDescargar('Pedidos','Reporte de Pedidos');
}

function erpsil_agregarPedidoWindow() {
    erpsil_CleanChart();
    var pedidoData = {
        w: "erpsil_cliente",
        r: "mostrar_cliente"
    };

    calaApi_postRequest(pedidoData, function(d){

        var selectD = "<select class='select' id='inputDrow'> ";
        var i = 1;
        for(a in d.resp){ 
            var x = d.resp[a];
            selectD += "<option>" + i + " - Nombre del cliente: " + x.nombre + " - id = (" + x.id_cliente + ")</option>";
            i++;
        }

        selectD += "</select>";

        var agregarPedidoWindow = ""

        +   "<div class='container centrarDivTxt'>"
        +       "<h2 class='tituloTablas' style = 'margin-bottom: 40px; margin-top: 40px;'>Agregar Pedidos</h2>"
        +       "<div class='form-horizontal'>"

        +           "<label class='form'>ID Cliente</label>"
        +           "<div class='col-sm'>"
        +               selectD
        +           "</div>"

        +           "<label class='form'>Fecha del Pedido</label>"
        +           "<div class='col-sm'>"
        +               "<input type='date' class='date' placeholder='Fecha del Pedido' onkeyup=erpsil_validacionTxt('inputStampP'," + 2 + ") required='required' id='inputStampP'>"
        +           "</div>"

        +           "<label class='form'>Fecha de Entrega</label>"
        +           "<div class='col-sm'>"
        +               "<input type='date' class='date' placeholder='Fecha de Entrega' onkeyup=erpsil_validacionTxt('inputStampE'," + 2 +") required='required' id='inputStampE'>"
        +           "</div>"

        +           "<label class='form'>Cantidad</label>"
        +           "<div class='col-sm'>"
        +               "<input type='text' placeholder='Cantidad' required='required' onkeyup = erpsil_validacionTxt('inputCantidad'," + 2 +") id='inputCantidad'>"
        +           "</div>"

        +           "<label class='form'>Estado</label>"
        +           "<div class='col-sm'>"
        +               "<input type='text' placeholder='Estado' required='required' id='inputStatus' onkeyup = erpsil_validacionTxt('inputStatus'," + 2 +")>"
        +           "</div>"

        +           "<label class='form'>Descripción</label>"
        +           "<div class='col-sm'>"
        +               "<input type='text' placeholder='Descripción' required='required' id='inputDescr'>"
        +           "</div>"

        +           "<label class='form'>Precio</label>"
        +           "<div class='col-sm'>"
        +               "<input type='text' placeholder='Precio' required='required' id='inputPrecio' onkeyup = erpsil_validacionTxt('inputPrecio'," + 2 +")>"
        +           "</div>"

        +           "<div class='col-sm centrarDivTxt'>"
        +               "<div onClick='erpsil_agregarPedido()' class='agregar-BtnVerde' >Agregar</div>"
        +               "<div onClick='erpsil_listarPedido()'  class='regresar-BtnVerde'>Regresar</div>"
        +           "</div>"
        +       "</div>"
        +    "</div>"

        erpsil_setContent(agregarPedidoWindow);
    }, function(){
        erpsil_modalMalo();
        console.log("Error!");
    });

}

function erpsil_agregarPedido(){

    var d = $("#inputDrow");
    var id = d[0].value;
    id = id.split("(")[1].split(")")[0];

    var id_cliente = id;
    var fechaPedido = $("#inputStampP").val();
    var fechaEntrega = $("#inputStampE").val();
    var cantPedido = $("#inputCantidad").val();
    var statusPedido = $("#inputStatus").val();
    var descripcionPedido = $("#inputDescr").val();
    var precioPedido = $("#inputPrecio").val();
    

    if(id_cliente != "" && fechaPedido != "" && fechaEntrega != "" && cantPedido != "" && statusPedido != "" && descripcionPedido != "" && precioPedido != "" ){
        
        var pedidoData = {
            w: "erpsil_pedido",
            r: "agregar_pedido",
            id_cliente:id_cliente,
            stamp_pedido:fechaPedido,
            stamp_entrega:fechaEntrega,
            cant_rollos:cantPedido,
            status:statusPedido,
            descripcion:descripcionPedido,
            precio:precioPedido

        };  
        
        calaApi_postRequest(pedidoData, function (d) {
            erpsil_listarPedido();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Pedido No Agregado");
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

function erpsil_eliminarPedido(id){
    var req = {
        w: "erpsil_pedido",
        r: "eliminar_pedido",
        id:id
    };

    calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarPedido);
    }, function(){
        erpsil_modalMalo();
        console.log("Pedido No Eliminado");
    });
    
}

function erpsil_editarPedidoWindow(data) {
    erpsil_CleanChart();
    var editarClienteTicketsWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas' style = 'margin-bottom: 40px; margin-top: 40px;'>Editar Pedidos</h2>"
    +       "<form action='' method='post'>"
    +       "<div class='form-horizontal'>"

    +           "<label class='form'>ID del Pedido</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' id='inputId_pedido' value='" + data.id_pedido + "' placeholder='ID Pedido' disabled>"
    +           "</div>"

    +           "<label class='form'>ID del Cliente</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' id='inputId_Cliente' value='" + data.id_cliente + "' placeholder='ID Cliente' disabled>"
    +           "</div>"

    +           "<label class='form'>Fecha de Pedido</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='date' class='date' onkeyup = erpsil_validacionTxt('inputStampP'," + 2 +") id='inputStampP' value='" + data.stamp_pedido  + "' placeholder='Fecha de Pedido' required onkeyup = erpsil_validacionTxt('inputStampP')>"
    +           "</div>"

    +           "<label class='form'>Fecha de Entrega</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='date' class='date' onkeyup = erpsil_validacionTxt('inputStampE'," + 2 +") id='inputStampE' onkeyup = erpsil_validacionTxt('inputStampE') value='" +data.stamp_entrega  + "' placeholder='Fecha de Entrega' required>"
    +           "</div>"
        
    +           "<label class='form'>Cantidad de Rollos</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' onkeyup = erpsil_validacionTxt('inputCantidad'," + 2 +") id='inputCantidad' onkeyup = erpsil_validacionTxt('inputCantidad') value='" +data.cant_rollos  + "' placeholder='Cantidad de Rollos' required>"
    +           "</div>"

    +           "<label class='form'>Estatus</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' onkeyup = erpsil_validacionTxt('inputStatus'," + 2 +") id='inputStatus') value='" + data.status  + "' placeholder='Estatus' required>"
    +           "</div>"

    +           "<label class='form'>Descripción</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' id='inputDescr' value='" + data.descripcion  + "' placeholder='Descripción' required>"
    +           "</div>"

    +           "<label class='form'>Precio</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' onkeyup = erpsil_validacionTxt('inputinputPrecioStatus'," + 2 +") id='inputPrecio' onkeyup = erpsil_validacionTxt('inputPrecio') value='" + data.precio  + "' placeholder='Precio' required>"
    +           "</div>"

    +           "<label class='form'>&nbsp;</label>"
    +           "<div class='col-sm centrarDivTxt'>"
    +                   "<div onclick='erpsil_guadarEditarPedido()' class='guardar-BtnVerde' >Guardar</div>"
    +                   "<div onclick='erpsil_listarPedido()' class='cancelar-BtnVerde'>Cancelar</div>"
    +           "</div>"
    +      "</div>"
    +      "</form>"
    +   "</div>"

    erpsil_setContent(editarClienteTicketsWindow);
}

function erpsil_editarPedido(id){
    var req = {
        w: "erpsil_pedido",
        r: "obtener_pedido",
        id:id
    }

    calaApi_postRequest(req, function(d){
        erpsil_editarPedidoWindow(d.resp);
    }, function(){
        erpsil_modalMalo();
        console.log("Pedidos No Editado");
    });
}

function erpsil_guadarEditarPedido(){

    var id_pedido = $("#inputId_pedido").val();
    var id_cliente = $("#inputId_Cliente").val();
    var stamp_pedido = $("#inputStampP").val();
    var stamp_entrega = $("#inputStampE").val();
    var cant_rollos = $("#inputCantidad").val();
    var status = $("#inputStatus").val();
    var descripcion = $("#inputDescr").val();
    var precio = $("#inputPrecio").val();

    if(id_pedido != "" && id_cliente != "" && stamp_pedido != "" && stamp_entrega != "" && cant_rollos != "" && status != "" && descripcion != "" && precio != ""){
        
        var editarPedido = {
            w:"erpsil_pedido",
            r:"agregar_EditarPedido",
            id_pedido:id_pedido,
            id_cliente:id_cliente,
            stamp_pedido:stamp_pedido,
            stamp_entrega:stamp_entrega,
            cant_rollos:cant_rollos,
            status:status,
            descripcion:descripcion,
            precio:precio
        };
        calaApi_postRequest(editarPedido, function (d) {
            erpsil_modalBueno();
            erpsil_listarPedido();
        }, function (d) {
            console.log("Pedido No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

/*********************************************************/
/*           Gestión del tbl_clientesTickets             */
/*********************************************************/

function erpsil_listarClientesTickets(){
    erpsil_CleanChart();
    var ClientesTicketsData = {
        w:"erpsil_clientesTickets",
        r:"mostrar_clientesTickets"
    };

    calaApi_postRequest(ClientesTicketsData, function (d) {
 
        var ClientesTicketsWindow = ""

        +      "<div  class='table-responsive'>"
        +         "<table id='ClientesTickets' class='table table-striped table-hover'>"
        +         "<h2 class='tituloTablas'>Lista de Tickets</h2><br><br>"
        +            "<tr>"
        +                "<th>ID Ticket</th>"
        +                "<th>ID Cliente</th>"
        +                "<th>Fecha</th>"
        +                "<th>Título</th>"
        +                "<th>Comentario</th>"
        +                "<th>Status</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
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

        +                "<td> <div id='editar_activos' onclick='erpsil_editarClientesTickets(" + a.id_ticket + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarClienteTicket("+ a.id_ticket +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                ClientesTicketsWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='editar_activos' onclick='erpsil_agregarClientesTicketsWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +                "<td> <div id='reportes_activos' onclick='erpsil_pdfClientesTickets()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";

        erpsil_setContent(ClientesTicketsWindow);

    }, function (d) {
        erpsil_modalMalo();
        console.log(d);
    });
}

function erpsil_pdfClientesTickets(){
    /*console.log("debug");*/
    PdfDescargar('ClientesTickets','Reporte de Clientes Tickets');
}

function erpsil_agregarClientesTicketsWindow() {
    erpsil_CleanChart();
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

        +    "<div class='container centrarDivTxt'>"
        +        "<h2 class='tituloTablas' style = 'margin-bottom: 40px; margin-top: 40px;'>Agregar Ticket</h2>"

        +        "<label class='col-sm-3 control-label'>ID Cliente</label>"
        +        "<div class='form-group'>"
        +        selectD
        +        "</div>"
        //+        "<label class='col-sm-3 control-label'>Stamp</label>"
        //+        "<div class='form-group'>"
        //+           " <input type='text' class='form-control' placeholder='Ganancia Global' required='required' id='inputStamp'>"
        //+        "</div>"
        +        "<label class='col-sm-3 control-label'>Título</label>"
        +        "<div class='col-sm'>"
        +           " <input type='text' class='form-control' placeholder='Título' required='required' id='inputTitulo'>"
        +        "</div>"
        +        "<label class='col-sm-3 control-label'>Comentario</label>"
        +        "<div class='col-sm'>"
        +           " <input type='text' class='form-control' placeholder='Comentario' required='required' id='inputComentario'>"
        +        "</div>"
        +        "<label class='col-sm-3 control-label'>Status</label>"
        +        "<div class='col-sm'>"
        +           " <input type='text' class='form-control' placeholder='Status' required='required' onkeyup = erpsil_validacionTxt('inputStatus'," + 2 +") id='inputStatus'>"
        +        "</div>"
        +        "<div class='col-sm centrarDivTxt'>"
        +            "<div onClick='erpsil_agregarClientesTickets()' class='agregar-BtnVerde'>Agregar</div>"
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
            erpsil_modalBueno();
            console.log("Tipo de Cliente Ticket No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

function erpsil_editarClienteTicketsWindow(data) {
    erpsil_CleanChart();
    var editarClienteTicketsWindow = ""
    +        "<div class='container centrarDivTxt'>"
    +        "<h2 class='tituloTablas' style = 'margin-bottom: 40px; margin-top: 40px;'>Editar Ticket del Cliente</h2>"
    +       "<form class='form-horizontal' action='' method='post'>"
    +              "<label class='col-sm-3 control-label'>ID Ticket</label>"
    +              "<div class='col-sm'>"
    +                   "<input type='text' id='inputId_ticket' value='" + data.id_ticket + "' class='form-control' placeholder='ID Ticket' disabled>"
    +             "</div>"
    +           "<label class='col-sm-3 control-label'>ID del Cliente</label>"
    +           "<div class='col-sm'>"
    +                "<input type='text' id='inputId_Cliente' value='" + data.id_cliente + "' class='form-control' placeholder='ID del Cliente' disabled>"
    +           "</div>"
    +           "<label class='col-sm-3 control-label'>Fecha</label>"
    +           "<div class='col-sm'>"
    +               "<input type='text' id='inputStamp' value='" + data.stamp  + "' class='form-control' placeholder='Fecha' required>"
    +           "</div>"
    +       "<label class='col-sm-3 control-label'>Título</label>"
    +        "<div class='col-sm'>"
    +            "<input type='text' id='inputTitulo' value='" +data.titulo  + "' class='form-control' placeholder='Título' required>"
    +        "</div>"
    +       "<label class='col-sm-3 control-label'>Comentario</label>"
    +        "<div class='col-sm'>"
    +            "<input type='text' id='inputComentario' value='" +data.comentario  + "' class='form-control' placeholder='Comentario' required>"
    +        "</div>"
    +       "<label class='col-sm-3 control-label'>Status</label>"
    +        "<div class='col-sm'>"
    +            "<input type='text' id='inputStatus' onkeyup = erpsil_validacionTxt('inputStatus'," + 1 +") value='" + data.status  + "' class='form-control' placeholder='Status' required>"
    +        "</div>"
    +            "<label class='col-sm-3 control-label'>&nbsp;</label>"
    +           " <div class='col-sm centrarDivTxt'>"
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
        erpsil_editarClienteTicketsWindow(d.resp);
    }, function(){
        erpsil_modalMalo();
        console.log("Activos No Editado");
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
            erpsil_modalBueno();
            erpsil_listarClientesTickets();
        }, function (d) {
            console.log("Ticket de Cliente No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
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
        erpsil_validacion(erpsil_listarClientesTickets);
        //erpsil_listarClientesTickets();
    }, function(){
        erpsil_modalMalo();
        console.log("Ticket de Cliente No Eliminado");
    });
    
}

/*********************************************************/
/*               Gestion del Permisos Rol                */
/*********************************************************/

function erpsil_listarPermisoRol(){
    erpsil_CleanChart();
    var permisoRolData = {
        w: "erpsil_permisosRol",
        r: "mostrar_permisosRol"
    };

    calaApi_postRequest(permisoRolData, function (d) {
 
        var MostrarPermisoRolWindow = ""

        +      "<div  class='table-responsive'>"
        +         "<table id='PermisosRol' class='table table-striped table-hover'>"
        +         "<h2 class='tituloTablas'>Lista de Permisos de Rol</h2><br><br>"
        +            "<tr>"
        +                "<th>ID Permisos</th>"
        +                "<th>ID Rol</th>"
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

        +                "<td> <div id='editar_tipoCliente' onclick='erpsil_editarPermisoRol(" + a.id_permiso + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarPermisoRol("+ a.id_permiso +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarPermisoRolWindow += ""
        +            "</tr>"
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarPermisoRolWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +          "<td> <div onclick='erpsil_pdfPermisosRol()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarPermisoRolWindow);
        console.log("Bueno POR ACÁ!!!");
    }, function (d) {
        erpsil_modalMalo();
    });
}

function erpsil_pdfPermisosRol(){
    /*console.log("debug");*/
        PdfDescargar('PermisosRol','Reportes');
}

function erpsil_agregarPermisoRolWindow() {
    erpsil_CleanChart();
    var permisoRolData = {
        w: "erpsil_roles",
        r: "mostrar_roles"
    };

     calaApi_postRequest(permisoRolData, function(d){

        var selectR = "<select class='custom-select dropdown' id='inputDown'> "
        var i = 1;
        for(a in d.resp){
            var x = d.resp[a];
            selectR += "<option>" + i + " - " + x.nombre + " id = (" + x.id_roles + ")</option>";
            i++;
        }

        selectR += "</select>";

        console.log(d);

        var agregarPermisoRolWindow = ""

        +    "<div class='container centrarDivTxt'>"
                + "<h2 class='tituloTablas' style = 'margin-bottom: 40px; margin-top: 40px;'>Agregar Permisos Rol</h2>"
                +"<label class='col-sm-3 control-label'>ID Cliente</label>"
                +"<div class='col-sm'>"
                +selectR
                +"</div>"
                + "<label class='col-sm-3 control-label'>Estado</label>"
                + "<div class='col-sm'>"
                + " <input type='text' class='form-control' placeholder='Estado' required='required' id='inputEstado'>"
                 + "</div>"
                +        "<div class='col-sm centrarDivTxt'>"
                + "<div onClick='erpsil_agregarPermisoRol()' class='agregar-BtnVerde'>Agregar</div>"
                + "</div>"
            + " </div>"

        erpsil_setContent(agregarPermisoRolWindow);

    }, function () {
        erpsil_modalMalo();
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
            erpsil_modalBueno();
            erpsil_listarPermisoRol();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Ticket de Tipo Cliente No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

function erpsil_editarPermisoRolWindow(data) {
    erpsil_CleanChart();
    var editarPermisoRolWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas' style = 'margin-bottom: 40px; margin-top: 40px;'>Editar Permisos de Rol</h2>"
    +       "<form class='form-horizontal' action='' method='post'>"
    +           "<div class='col-sm'>"
    
    +               "<label class='form'>ID Permisos</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputIdPermiso' value='" + data.id_permiso + "' placeholder='ID Permisos' required disabled>"
    +               "</div>"
    
    +               "<label class='form'>ID Rol</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputIdRol' value='" + data.id_rol + "' placeholder='ID Rol' required disabled>"
    +               "</div>"
    
    +               "<label class='form'>Estado</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputEstado' value='" + data.estado + "' placeholder='Estado' required>"
    +               "</div>"
    
    +               "<label class='form'>&nbsp;</label>"
    +               "<div class='col-sm centrarDivTxt'>"
    +                       "<div  onclick='erpsil_guardarEditarPermisoRol()' class='guardar-BtnVerde' >Guardar</div>"
    +                       "<div onclick='erpsil_listarPermisoRol()' class='cancelar-BtnVerde'>Cancelar</div>"
    +               "</div>"
    
    +           "</div>"
    +       "</form>"
    +   "</div>"
 
 
    erpsil_setContent(editarPermisoRolWindow);
}

function erpsil_editarPermisoRol(id) {
    var req = {
        w: "erpsil_permisosRol",
        r: "obtener_permisosRol",
        id: id
    }

    calaApi_postRequest(req, function (d) {
        erpsil_editarPermisoRolWindow(d.resp);
    }, function () {
        erpsil_modalMalo();
        console.log("Rol No Editado");
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
            erpsil_modalBueno();
            erpsil_listarPermisoRol();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Ticket de Cliente No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
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
        erpsil_validacion(erpsil_listarPermisoRol);
        //erpsil_modalBueno();
        //erpsil_listarPermisoRol();
    }, function(){
        erpsil_modalMalo();
        console.log("Permiso de Rol No Eliminado");
    });

}

/*********************************************************/
/*                 Gestion de tbl_cuentasPagar           */ 
/*********************************************************/
/*
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
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
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
      
        +                "<td> <div id='editar_cuentasPagar' onclick='erpsil_editarCuentasPagar(" + a.id_cuentasPagar + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarCuentasPagar("+ a.id_cuentasPagar +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarCuentasPagarWindow += ""
        +            "</tr>"
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarCuentasPagarWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +                "<td> <div id='editar_activos' onclick='erpsil_menuWindow()' class='volver-BtnVerde'>Volver</div></td>"
        +      "</div>";
        erpsil_setContent(MostrarCuentasPagarWindow);
    }, function (d) {
        console.log(d);
    });
}
*/

function erpsil_listarCuentasPagar(){
    erpsil_CleanChart();
    var cuentasPagarData = {
        w: "erpsil_cuentasPagar",
        r: "mostrar_cuentasPagar"
    };

    calaApi_postRequest(cuentasPagarData, function (d) {
 
        var MostrarCuentasPagarWindow = ""

        +   "<h2 class='tituloTablas'>Lista de Cuentas por Pagar</h2><br><br>"
        +   "<div  class='form-horizontal-4'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='CuentasPorPagar' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>ID Proveedor</th>"
        +                "<th>Código de Referencia</th>"
        +                "<th>Saldo</th>"
        +                "<th>Estado</th>"
        +                "<th>Vence</th>"
        +                "<th>Descripción</th>"
        +                "<th>Fecha</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>"
        +       "</div>"
        +   "</div>"
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
        
        +                "<td> <div id='editar_cuentasPagar' onclick='erpsil_editarCuentasPagar(" + a.id_cuentasPagar + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarCuentasPagar("+ a.id_cuentasPagar +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarCuentasPagarWindow += ""
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarCuentasPagarWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +          "<td> <div onclick='erpsil_pdfCuentasPorPagar()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarCuentasPagarWindow);

    }, function (d) {
        erpsil_modalMalo();
        console.log(d);
    });
}

function erpsil_pdfCuentasPorPagar(){
    /*console.log("debug");*/
    PdfDescargar('CuentasPorPagar','Reporte de Cuentas por Pagar');
}

function erpsil_agregarCuentasPagarWindow() {
    erpsil_CleanChart();
    var  proveedorData = {
        w: "erpsil_proveedor",
        r: "mostrar_proveedor"
    }
    calaApi_postRequest(proveedorData, function(p){
        var selectP = "<select class='select' id='inputDown'>" 
        var i = 1;
        for(a in p.resp){
            var y = p.resp[a];
            selectP += "<option>" + i + " - " + y.nombre + " id = (" + y.id_proveedor + ")</option>";
            i++;
        }
        selectP += "</select>";
        //console.log(p);
 
        var agregarCuentasPagarWindow = ""
        +    "<div class='container centrarDivTxt'>"
        +        "<h2 class='tituloTablas' style = 'margin-bottom: 40px; margin-top: 40px;'>Agregar Cuentas Por Pagar</h2>"        
        +        "<div class='form-horizontal'>"
        +           "<label class='form'>ID Proveedor</label>"
        +           "<div class='col-sm'>"
        +                   selectP
        +           "</div>"
        
        +           "<label class='form'>Código Referencia</label>"
        +           "<div class='col-sm'>"
        +                   "<input type='text' placeholder='Código Referencia' required='required' onkeyup = erpsil_validacionTxt('inputCodigo_Referencia'," + 2 +") id='inputCodigo_Referencia'>"
        +           "</div>"
        
        +           "<label class='form'>Saldo</label>"
        +           "<div class='col-sm'>"
        +                   "<input type='text' placeholder='Saldo' required='required' onkeyup = erpsil_validacionTxt('inputSaldo'," + 2 +") id='inputSaldo'>"
        +           "</div>"
        
        +           "<label class='form'>Estado</label>"
        +           "<div class='col-sm'>"
        +                   "<input type='text' placeholder='Estado' required='required' onkeyup = erpsil_validacionTxt('inputEstado'," + 2 +") id='inputEstado'>"
        +           "</div>"

        +           "<label class='form'>Fecha</label>"
        +           "<div class='col-sm'>"
        +                   "<input type='date' class='date' placeholder='Fecha' required='required' id='inputFecha'>"
        +           "</div>"

        +           "<label class='form'>Vencimiento</label>"
        +           "<div class='col-sm'>"
        +                   "<input type='text' placeholder='Vencimiento' required='required' onkeyup = erpsil_validacionTxt('inputVence'," + 2 +") id='inputVence'>"
        +           "</div>"
        
        +           "<label class='form'>Descripción</label>"
        +           "<div class='col-sm'>"
        +                   "<input type='text' placeholder='Descripción' required='required' id='inputDescripcion'>"
        +           "</div>"
        
        +           "<div class='col-sm centrarDivTxt'>"
        +                   "<div onClick='erpsil_agregarCuentasPagar()' class='agregar-BtnVerde'>Agregar</div>"
        +           "</div>"
        
        +        "</div>"

        erpsil_setContent(agregarCuentasPagarWindow);
        console.log(p);
    },function(){
        erpsil_modalMalo();
        console.log("Cuentas por Pagar No Agregado");
    });
 
}

function erpsil_agregarCuentasPagar(){
    var d = $("#inputDown");
    var id = d[0].value;
    id = id.split("(")[1].split(")")[0];
 
    var id_proveedor = id;
    var codigoReferencia = $("#inputCodigo_Referencia").val();
    var saldo = $("#inputSaldo").val();
    var estado = $("#inputEstado").val();
    var vence = $("#inputVence").val();
    var fecha = $("#inputFecha").val();
    var descripcion = $("#inputDescripcion").val();
   
 
    if(id_proveedor != "" && codigoReferencia != "" && saldo != "" &&
        estado != "" && vence != "" && descripcion != ""){
        var permisoCuentasPagar = {
            w: "erpsil_cuentasPagar",
            r: "agregar_cuentasPagar",
            id_proveedor:id_proveedor,
            codigoReferencia:codigoReferencia,
            saldo:saldo,
            estado:estado,
            vence:vence,
            fecha:fecha,
            descripcion:descripcion
        };
 
        calaApi_postRequest(permisoCuentasPagar, function (d) {
            console.log(permisoCuentasPagar);
            erpsil_modalBueno();
            erpsil_listarCuentasPagar();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Historial de Precio No Agregado" + d);
        });
    }
 
}
 
function erpsil_editarCuentasPagarWindow(data) {
    erpsil_CleanChart();
    var  proveedorData = {
        w: "erpsil_proveedor",
        r: "mostrar_proveedor"
    }
    calaApi_postRequest(proveedorData, function(p){
        var selectP = "<select class='select' id='inputDown'>" 
        var i = 1;
        for(a in p.resp){
            var y = p.resp[a];
            selectP += "<option>" + i + " - " + y.nombre + " id = (" + y.id_proveedor + ")</option>";
            i++;
        }
        selectP += "</select>";
        console.log(p);
 
        var editarCuentasPagarWindow = ""
 
        +   "<div class='container centrarDivTxt'>"
        +       "<form action='' method='post'>"
        +           "<h2 class='tituloTablas'>Editar Cuentas por Pagar</h2>"
        +           "<div class='form-horizontal'>"
        
        +               "<label class='form'>ID Cuenta A Pagar</label>"
        +               "<div class='col-sm'>"
        +                   "<input type='text' onkeyup = erpsil_validacionTxt('inputid_cuentasPagar'," + 2 +") id='inputid_cuentasPagar' value='" + data.id_cuentasPagar + "' placeholder='ID' required  disabled>"
        +               "</div>"

        +               "<label class='form'>ID Proveedor</label>"
        +               "<div class='col-sm'>"
        +                   selectP
        +               "</div>"

        +               "<label class='form'>Código de Referencia</label>"
        +               "<div class='col-sm'>"
        +                   "<input type='text' onkeyup = erpsil_validacionTxt('inputCodigo_Referencia'," + 2 +") id='inputCodigo_Referencia' value='" + data.codigo_referencia + "' placeholder='ID' required>"
        +               "</div>"

        +               "<label class='form'>Saldo</label>"
        +                   "<div class='col-sm'>"
        +                   "<input type='text' onkeyup = erpsil_validacionTxt('inputSaldo'," + 2 +") id='inputSaldo' value='" + data.saldo + "' placeholder='Saldo' required>"
        +               "</div>"

        +               "<label class='form'>Estado</label>"
        +               "<div class='col-sm'>"
        +                   "<input type='text' onkeyup = erpsil_validacionTxt('inputEstado'," + 2 +") id='inputEstado' value='" + data.estado + "' placeholder='Estado' required>"
        +               "</div>"

        +               "<label class='form'>Vence</label>"
        +               "<div class='col-sm'>"
        +                   "<input type='text' onkeyup = erpsil_validacionTxt('inputVence'," + 2 +") id='inputVence' value='" + data.vence + "' placeholder='Vence' required>"
        +               "</div>"

        +               "<label class='form'>Descripción</label>"
        +               "<div class='col-sm'>"
        +                   "<input type='text' id='inputDescripcion' value='" + data.descripcion + "' placeholder='Descripción' required>"
        +               "</div>"

        +               "<label class='form'>Fecha</label>"
        +               "<div class='col-sm'>"
        +                   "<input type='date' class='date' onkeyup = erpsil_validacionTxt('inputStampfecha'," + 2 +") id='inputStampfecha' value='" + data.stampfecha + "' placeholder='Fecha' required>"
        +               "</div>"

        +               "<label class='form'>&nbsp;</label>"
        +               "<div class='col-sm centrarDivTxt'>"
        +                   "<div onclick='erpsil_guardarEditarCuentasPagar()' class='guardar-BtnVerde' >Guardar</div>"
        +                   "<div onclick='erpsil_listarCuentasPagar()' class='cancelar-BtnVerde'>Cancelar</div>"
        +               "</div>"
        +           "</div>"       
        +       "</form>"
        +   "</div>"
       
                         
        erpsil_setContent(editarCuentasPagarWindow);
        console.log(p);
    },function(){
        erpsil_modalMalo();
        console.log("Cuentas por Pagar No Actualizado.");
    });
 
}
 
function erpsil_editarCuentasPagar(id){
    var req = {
        w: "erpsil_cuentasPagar",
        r: "obtener_cuentasPagar",
        id:id
     };
 
     calaApi_postRequest(req, function(d){
        erpsil_editarCuentasPagarWindow(d.resp);
    }, function(){
        erpsil_modalMalo();
        console.log("Cuentas por Pagar No Editado");
    });
}
 
function erpsil_guardarEditarCuentasPagar(){
    var d = $("#inputDown");
    var id = d[0].value;
    id_proveedor = id.split("(")[1].split(")")[0];
 
    var id_cuentasPagar = $("#inputid_cuentasPagar ").val();
    var id_proveedor = id_proveedor;
    var codigo_referencia = $("#inputCodigo_Referencia").val();
    var saldo = $("#inputSaldo").val();
    var estado = $("#inputEstado").val();
    var vence = $("#inputVence").val();
    var descripcion = $("#inputDescripcion").val();
    var stamp = $("#inputStampfecha").val();
 
    if(id_cuentasPagar != "" && id_proveedor != "" && codigo_referencia != "" && saldo != "" &&
        estado != "" && vence != "" && descripcion != "" && stamp != ""){
        var permisoCuentasPagar = {
            w: "erpsil_cuentasPagar",
            r: "agregarEditar_cuentasPagar",
            id_cuentasPagar:id_cuentasPagar,
            id_proveedor:id_proveedor,
            codigo_referencia:codigo_referencia,
            saldo:saldo,
            estado:estado,
            vence:vence,
            descripcion:descripcion,
            stamp:stamp
        };
 
        calaApi_postRequest(permisoCuentasPagar, function (d) {
            erpsil_listarCuentasPagar();
            erpsil_modalBueno();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Historial de Precio No Actualizado" + d);
        });
    }
}
 
function erpsil_eliminarCuentasPagar(id){
    var req = {
        w: "erpsil_cuentasPagar",
        r: "eliminar_cuentasPagar",
        id:id
     };
 
     calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarCuentasPagar);
        //erpsil_modalBueno();
        //erpsil_listarCuentasPagar();
    }, function(){
        erpsil_modalMalo();
        console.log("Cuentas por Pagar No Eliminado");
    });
}
 
/*********************************************************/
/*             Gestion de tbl_historialPrecios           */ 
/*********************************************************/
 
function erpsil_listarHistorialPrecio(){
    erpsil_CleanChart();
    var historialPreciosData = {
        w: "erpsil_historialPrecios",
        r: "mostrar_historialPrecios"
    };
 
    calaApi_postRequest(historialPreciosData, function (d) {
        var MostrarHistorialPreciosWindow = ""
 
        +   "<h2 class='tituloTablas'>Lista de Historial de Precios</h2><br><br>"
        +   "<div  class='form-horizontal-4'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='HistorialPrecios' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID Historial</th>"
        +                "<th>ID Inventario</th>"
        +                "<th>Costo</th>"
        +                "<th>Fecha</th>"
        +                "<th>ID Proveedor</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>"
        +       "</div>"
        +   "</div>"
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
       
        +                "<td> <div id='editar_historialPrecios' onclick='erpsil_editarHistorialPrecio(" + a.id_historialPrecio + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarHistorialPrecio("+ a.id_historialPrecio +")' class='eliminar-Btn'>Eliminar</div></td>"        +            "</tr>";
                    }
                }
                MostrarHistorialPreciosWindow += ""
        +            "</tr>"
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarHistorialPrecioWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +          "<td> <div onclick='erpsil_pdfHistorialPrecios()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";
 
        erpsil_setContent(MostrarHistorialPreciosWindow);
 
    }, function (d) {
        erpsil_modalMalo();
        console.log(d);
    });
}

function erpsil_pdfHistorialPrecios(){
    /*console.log("debug");*/
    PdfDescargar('HistorialPrecios','Reporte de Historial de Inventarios ');
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
       
       var selectH = "<select class='select' id='inputDown1'>"  
       var i = 1;
       for(a in d.resp){
           var x = d.resp[a];
           selectH += "<option>" + i + " - " + x.unidad + " id = (" + x.id_inventario + ")</option>";
           i++;
       }
       selectH += "</select>";

       calaApi_postRequest(proveedorData, function(p){
       
           var selectP = "<select class='select' id='inputDown2'>"  
           var i = 1;
           for(a in p.resp){
               var y = p.resp[a];
               selectP += "<option>" + i + " - " + y.nombre + " id = (" + y.id_proveedor + ")</option>";
               i++;
           }
           selectP += "</select>";

           var agregarHistorialPreciosWindow = ""
     
           +    "<div class='container centrarDivTxt'>"
           +        "<h2 class='tituloTablas'>Historial de Precios</h2>"
           +        "<div class='form-horizontal'>"

           +            "<label class='form'>ID Inventario</label>"
           +            "<div class='col-sm'>"
           +                selectH
           +            "</div>"

           +            "<label class='form'>Costo</label>"
           +            "<div class='col-sm'>"
           +                "<input type='text' placeholder='Costo' required='required' onkeyup = erpsil_validacionTxt('inputCosto'," + 2 +") id='inputCosto'>"
           +            "</div>"
        
        // +            "<label class='form'>Fecha</label>"
        // +            "<div class='form'>"
        // +                "<input type='date' class='date' placeholder='Fecha' required='required' id='inputFecha'>"
        // +            "</div>"
        
           +            "<label class='form'>ID Proveedor</label>"
           +            "<div class='col-sm'>"
           +                selectP
           +            "</div>"
           
           +            "<div class='col-sm centrarDivTxt'>"
           +                "<div onClick='erpsil_agregarHistorialPrecio()' class='agregar-BtnVerde'>Agregar</div>"
           +                "<div onClick='erpsil_listarHistorialPrecio()' class='regresar-BtnVerde'>Regresar</div>"
           +            "</div>"

           +        "</div>"
           +    "</div>"  
                             
           erpsil_setContent(agregarHistorialPreciosWindow);
           console.log(d);
        }, function(){
            erpsil_modalMalo();
            console.log("Error!");
        });
    }, function(){
        erpsil_modalMalo();
        console.log("Error!");
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

       if(id_inventario != "" && id_proveedor != "" &&  costo != ""){

           var permosoHistorialPrecio = {
               w: "erpsil_historialPrecios",
               r: "agregar_historialPrecio",
               id_inventario:id_inventario,
               id_proveedor:id_proveedor,
               costo:costo,
           };

           calaApi_postRequest(permosoHistorialPrecio, function (d) {
               erpsil_modalBueno();
               erpsil_listarHistorialPrecio();
           }, function (d) {
               console.log("Historial Precio No Agregado" + d);
           });
       } else {
        erpsil_modalMalo();
        console.log("Error!");
       }
}

function erpsil_editarHistorialPrecioWindow(data) {
    erpsil_CleanChart();
 
    var historialPrecioData = {
        w: "erpsil_inventario",
        r: "mostrar_inventario"
    };
    var proveedorData = {
        w: "erpsil_proveedor",
        r: "mostrar_proveedor"
    };
 
     calaApi_postRequest(historialPrecioData, function(d){
        
        var selectH = "<select class='select' id='inputDown1'>"  
        var i = 1;
        for(a in d.resp){
            var x = d.resp[a];
            selectH += "<option>" + i + " - " + x.unidad + " id = (" + x.id_inventario + ")</option>";
            i++;
        }
        selectH += "</select>";

        calaApi_postRequest(proveedorData, function(p){
        
            var selectP = "<select class='select' id='inputDown2'>"  
            var i = 1;
            for(a in p.resp){
                var y = p.resp[a];
                selectP += "<option>" + i + " - " + y.nombre + " id = (" + y.id_proveedor + ")</option>";
                i++;
            }
            selectP += "</select>";
 
            var editarHistorialPreciosWindow = ""
            +   "<div class='container centrarDivTxt'>"
            +       "<h2 class='tituloTablas'>Editar Historial de Precios</h2>"
            +       "<div class='form-horizontal'>"
            +           "<form action='' method='post'>"
            +               "<label class='form'>ID Historial</label>"
            +               "<div class='col-sm'>"
            +                   "<input type='text' id='inputIdHistorial' value='" + data.id_historialPrecio + "' placeholder='Costo' required disabled>"
            +               "</div>"
            
            +               "<label class='form'>ID Inventario</label>"
            +               "<div class='col-sm'>"
            +                   selectH
        //  +                   "<input type='text' id='inputInventario' value='" + data.id_inventario + "' placeholder='Costo' required>"
            +               "</div>"
            
            +               "<label class='form'>Costo</label>"
            +               "<div class='col-sm'>"
            +                   "<input type='text' onkeyup = erpsil_validacionTxt('inputCosto'," + 2 +") id='inputCosto' value='" + data.costo + "' placeholder='Fecha' required>"
            +               "</div>"
            
            +               "<label class='form'>Fecha</label>"
            +               "<div class='col-sm'>"
            +                   "<input type='date' class='date' id='inputFecha' value='" + data.fecha + "'  placeholder='Fecha' required>"
            +               "</div>"
            
            +               "<label class='form'>ID Proveedor</label>"
            +               "<div class='col-sm'>"
            +                   selectP
          //+                   "<input type='text' id='inputId_proveedor' value='" + data.Id_proveedor + "' placeholder='ID proveedor' required>"
            +               "</div>"
            
            +               "<label class='form'>&nbsp;</label>"
            +               "<div class='col-sm centrarDivTxt'>"
            +                   "<div onclick='erpsil_guardarEditarHistorialPago()' class='guardar-BtnVerde' >Guardar</div>"
            +                   "<div onclick='erpsil_listarHistorialPrecio()' class='cancelar-BtnVerde'>Cancelar</div>"
            +               "</div>"
            +           "</form>"
            +       "</div>"
            +   "</div>"

            erpsil_setContent(editarHistorialPreciosWindow);
            console.log(d);
        }, function () {
            erpsil_modalMalo();
            console.log("Error!!");
        });
    }, function () {
        erpsil_modalMalo();
        console.log("Error!!");
    });
}

function erpsil_editarHistorialPrecio(id){
    var req = {
        w: "erpsil_historialPrecios",
        r: "obtener_historialPrecio",
        id:id
     };

     calaApi_postRequest(req, function (d) {
        erpsil_editarHistorialPrecioWindow(d.resp);
    }, function () {
        erpsil_modalMalo();
        console.log("Historial de Precio No Editado");
    });
}

function erpsil_eliminarHistorialPrecio(id){
    var req = {
       w: "erpsil_historialPrecios",
       r: "eliminar_historialPrecio",
       id:id
    };

    calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarHistorialPrecio);
        //erpsil_modalBueno();
        //erpsil_listarHistorialPrecio();
   }, function(){
       erpsil_modalMalo();
       console.log("Historial de Precio No Eliminado");
   });
}

function erpsil_guardarEditarHistorialPago(){

    var d = $("#inputDown1");
    var id = d[0].value;
    id = id.split("(")[1].split(")")[0];

    var d2 = $("#inputDown2");
    var id2 = d2[0].value;
    id2 = id2.split("(")[1].split(")")[0];

    var id_historial = $("#inputIdHistorial").val();
    var id_inventario = id;
    var costo = $("#inputCosto").val();
    var fecha = $("#inputFecha").val();
    var id_proveedor = id2;

    if(id_historial != "", id_inventario != "", costo != "", fecha != "", id_proveedor != ""){
        
        var historialPago = {
            w: "erpsil_historialPrecios",
            r: "agregarEditar_Historialpagos",
            id:id_historial,
            id_inventario:id_inventario,
            costo:costo,
            fecha:fecha,
            id_proveedor:id_proveedor
        }
        calaApi_postRequest(historialPago, function (d) {
            console.log(historialPago);
            erpsil_modalBueno();
            erpsil_listarHistorialPrecio();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Pago No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

/*********************************************************/
/*             Gestion de tbl_Pagos                      */ 
/*********************************************************/
 
function erpsil_listarPagos(){
    erpsil_CleanChart();
    var pagosData = {
        w: "erpsil_pagos",
        r: "mostrar_pagos"
    };
 
    calaApi_postRequest(pagosData, function (d) {
        var MostrarPagosWindow = ""
 
        +   "<h2 class='tituloTablas'>Lista de Pagos</h2><br><br>"
        +   "<div  class='form-horizontal-4'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='Pagos' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID Pago</th>"
        +                "<th>ID Cuenta</th>"
        +                "<th>ID Usuarios</th>"
        +                "<th>Fecha</th>"
        +                "<th>Pago</th>"
        +                "<th>Actual</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>"
        +       "</div>"
        +   "</div>"
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
       
        +                "<td> <div id='editar_pagos' onclick='erpsil_editarPagos(" + a.id_pago + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarPago("+ a.id_pago +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarPagosWindow += ""
        +            "</tr>"
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarPagosWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +          "<td> <div onclick='erpsil_pdfPagos()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";
 
        erpsil_setContent(MostrarPagosWindow);
 
    }, function (d) {
        erpsil_modalMalo();
        console.log(d);
    });
}

function erpsil_pdfPagos(){
    /*console.log("debug");*/
    PdfDescargar('Pagos','Reporte de Pagos');
}
 
function erpsil_agregarPagosWindow() {
    erpsil_CleanChart();
    var cuentasPagarData = {
        w: "erpsil_cuentasPagar",
        r: "mostrar_cuentasPagar"
    };

    var usuarioData = {
        w: "erpsil_usuario",
        r: "mostrar_usuario"
    };

    calaApi_postRequest(cuentasPagarData, function(d){

        var selectCuentasPagar = "<select class='select' id='inputDown1'>"  
        var i = 1;
        for(a in d.resp){
            var x = d.resp[a];
            selectCuentasPagar += "<option>" + i + " - ID de la cuenta a pagar = (" + x.id_cuentasPagar + ")</option>";
            i++;
        }
        selectCuentasPagar += "</select>";

        console.log(d);

        calaApi_postRequest(usuarioData, function(p){

            var selectPUsuario= "<select class='select' id='inputDown2'>"  
            var i = 1;
            for(a in p.resp){
                var y = p.resp[a];
                selectPUsuario += "<option>" + i + " - " + y.fullName +  " - "  + " id = (" + y.idUser + ")</option>";
                i++;
            }
            selectPUsuario += "</select>";
 

        var agregarPagosWindow = ""
 
        +    "<div class='container centrarDivTxt'>"
        +       "<h2 class='tituloTablas'>Pagos</h2>"
        +       "<div class='form-horizontal'>"

        +           "<label class='form'>ID Cuentas</label>"
        +           "<div class='col-sm'>"
        +               selectCuentasPagar
    //  +               "<input type='text' placeholder='ID cuenta' required='required' id='inputId_cuenta'>"
        +           "</div>"
        
        +           "<label class='form'>ID Usuario</label>"
        +           "<div class='col-sm'>"
        +               selectPUsuario
    //  +               "<input type='text' placeholder='ID Usuarios' required='required' id='inputId_usuarios'>"
        +           "</div>"
        
        +           "<label class='form'>Pago</label>"
        +           "<div class='col-sm'>"
        +               "<input type='text' placeholder='Pago' required='required' onkeyup = erpsil_validacionTxt('inputPago'," + 2 +") id='inputPago'>"
        +           "</div>"
        
        +           "<label class='form'>Saldo Actual</label>"
        +           "<div class='col-sm'>"
        +               "<input type='text' placeholder='Saldo Actual' required='required' onkeyup = erpsil_validacionTxt('inputActual'," + 2 +") id='inputActual'>"
        +           "</div>"
        
        +           "<div class='col-sm'>"
        +               "<div onClick='erpsil_agregarPagos()' class='agregar-BtnVerde'>Agregar</div>"
        +               "<div onClick='erpsil_listarPagos()' class='regresar-BtnVerde'>Regresar</div>"
        +           "</div>"
        +       "</div>"
        +    "</div>"    
        erpsil_setContent(agregarPagosWindow);
        console.log(d);
    }, function(){
        erpsil_modalMalo();
        console.log("Error!");
    });
}, function(){
    erpsil_modalMalo();
    console.log("Error!");
});
}

function erpsil_agregarPagos(){

    var d = $("#inputDown1");
    var id = d[0].value;
    id = id.split("(")[1].split(")")[0];

    var d2 = $("#inputDown2");
    var id2 = d2[0].value;
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
            erpsil_modalBueno();
            erpsil_listarPagos();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Pago No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

function erpsil_eliminarPago(id){

    var req = {
        w: "erpsil_pagos",
        r: "eliminar_pagos",
        id:id
     };
 
     calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarPagos);
        //erpsil_modalBueno();
        //erpsil_listarPagos();
    }, function(){
        erpsil_modalMalo();
        console.log("Pago No Agregado");
    });
}

function erpsil_editarPagos(id){
    var req = {
        w: "erpsil_pagos",
        r: "obtener_pagos",
        id:id
    };
    
    calaApi_postRequest(req, function(d){
        erpsil_editarPagosWindow(d.resp);
    }, function(){
        erpsil_modalMalo();
        console.log("Pago No Editado");
    });
}

function erpsil_editarPagosWindow(data) {
    erpsil_CleanChart();
    var cuentasPagarData = {
        w: "erpsil_cuentasPagar",
        r: "mostrar_cuentasPagar"
    };

    var usuarioData = {
        w: "erpsil_usuario",
        r: "mostrar_usuario"
    };

    calaApi_postRequest(cuentasPagarData, function(d){

        var selectCuentasPagar = "<select class='select' id='inputDown1'>"  
        var i = 1;
        for(a in d.resp){
            var x = d.resp[a];
            selectCuentasPagar += "<option>" + i + " - ID de la Cuenta a Pagar = (" + x.id_cuentasPagar + ")</option>";
            i++;
        }
        selectCuentasPagar += "</select>";

        console.log(d);

        calaApi_postRequest(usuarioData, function(p){

            var selectPUsuario= "<select class='select' id='inputDown2'>"  
            var i = 1;
            for(a in p.resp){
                var y = p.resp[a];
                selectPUsuario += "<option>" + i + " - " + y.fullName +  " - "  + " id = (" + y.idUser + ")</option>";
                i++;
            }
            selectPUsuario += "</select>";

        var editarPagosWindow = ""
        +   "<div class='container centrarDivTxt'>"
        +       "<h2 class='tituloTablas'>Editar Pago</h2>"
        +       "<div class='form-horizontal'>"
        +           "<form action='' method='post'>"

        +               "<label class='form'>ID Pago</label>"
        +               "<div class='col-sm'>"
        +                   "<input type='text' id='inputId_Pago' value='" + data.id_pago + "' placeholder='ID Pago' required disabled>"
        +               "</div>"
       
        +               "<label class='form'>ID Cuenta</label>"
        +               "<div class='col-sm'>"
        +                    selectCuentasPagar
    //  +                  "<input type='text' id='inputId_cuenta' value='" + data.id_cuenta + "' placeholder='ID cuenta' required>"
        +               "</div>"
        
        +               "<label class='form'>ID Usuario</label>"
        +               "<div class='col-sm'>"
        +                   selectPUsuario
      //+                   "<input type='text' id='inpuId_usuarios' value='" + data.id_usuarios + "' placeholder='ID usuario' required>"
        +               "</div>"
        
        +               "<label class='form'>Fecha</label>"
        +               "<div class='col-sm'>"
        +                   "<input type='date' class='date' id='inputFecha' value='" + data.fecha + " placeholder='Fecha' required>"
        +               "</div>"
        
        +               "<label class='form'>Pago</label>"
        +                   "<div class='col-sm'>"
        +               "<input type='text' onkeyup = erpsil_validacionTxt('inputPago'," + 2 +") id='inputPago' value='" + data.pago + "' placeholder='Pago' required>"
        +               "</div>"

        +               "<label class='form'>Saldo Actual</label>"
        +               "<div class='col-sm'>"
        +                   "<input type='text' onkeyup = erpsil_validacionTxt('inputActual'," + 2 +") id='inputActual' value='" + data.actual + "' placeholder='Saldo Actual' required>"
        +               "</div>"

        +               "<label class='col-sm'>&nbsp;</label>"
        +               "<div class='col-sm'>"
        +                   "<div class='guardar-BtnVerde' onclick='erpsil_guardarEditarPago()' >Guardar</div>"
        +                   "<div onclick='erpsil_listarPagos()' class='cancelar-BtnVerde'>Cancelar</div>"
        +               "</div>"
        +           "</form>"
        +       "</div>"
        +   "</div>"
        
        
        erpsil_setContent(editarPagosWindow);
                          
        console.log(d);
    }, function(){
        erpsil_modalMalo();
        console.log("Error!");
    });
}, function(){
    erpsil_modalMalo();
    console.log("Error!");
});
}

function erpsil_guardarEditarPago(){

    var d = $("#inputDown1");
    var id = d[0].value;
    id = id.split("(")[1].split(")")[0];

    var d2 = $("#inputDown2");
    var id2 = d2[0].value;
    id2 = id2.split("(")[1].split(")")[0];

    var id_pagos = $("#inputId_Pago").val();
    var id_cuenta = id;
    var id_usuarios = id2;
    var pago = $("#inputPago").val();
    var fecha = $("#inputFecha").val();
    var actual = $("#inputActual").val();

    if(id_cuenta != "" && id_usuarios != "" && pago != "" && actual != "" ){

    var pago = {
            w: "erpsil_pagos",
            r: "agregarEditar_pagos",
            id:id_pagos,
            id_cuenta:id_cuenta,
            id_usuarios:id_usuarios,
            fecha:fecha,
            pago:pago,
            actual:actual
        }
        calaApi_postRequest(pago, function (d) {
            erpsil_modalBueno();
            erpsil_listarPagos();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Pago No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}
 
/*********************************************************/
/*             Gestion de movimiento Inventario          */
/*********************************************************/

function erpsil_listarMovimientoInventario(){
    erpsil_CleanChart();
    var movimientoInventarioData = {
        w: "erpsil_movimientoInventario",
        r: "mostrar_movimientoInventario"
    };
    calaApi_postRequest(movimientoInventarioData, function (d) {
        var MostrarMovimientoInventarioWindow = ""
        +   "<h2 class='tituloTablas'>Lista de Movimiento de Inventario</h2><br><br>"
        +   "<div  class='form-horizontal-4'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='MovimientoInventario' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID Movimiento Inventario</th>"
        +                "<th>ID Usuario</th>"
        +                "<th>ID Caja</th>"
        +                "<th>ID Producto</th>"
        +                "<th>Fecha</th>"
        +                "<th>Razon</th>"
        +                "<th>Descripción</th>"
        +                "<th>Costo</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>"
        +       "</div>"
        +   "</div>"
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarMovimientoInventarioWindow += ""
  
        +            "<tr>"
        +                "<td> "+ a.id_movInv+" </td>"
        +                "<td> "+ a.id_usuario +" </td>"
        +                "<td> "+ a.id_caja +" </td>"
        +                "<td> "+ a.id_producto +" </td>"
        +                "<td> "+ a.fecha +" </td>"
        +                "<td> "+ a.razon +" </td>"
        +                "<td> "+ a.descripcion +" </td>"
        +                "<td> "+ a.costo +" </td>"
      
        +                "<td> <div id='editar_movimientoInventario' onclick='erpsil_editarMovimientoInventario(" + a.id_movInv + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarMovimientoInventario("+ a.id_movInv +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarMovimientoInventarioWindow += ""
        +            "</tr>"
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarMovimientoInventarioWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +          "<td> <div onclick='erpsil_pdfMovimientosInventario()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";
        erpsil_setContent(MostrarMovimientoInventarioWindow);
    }, function (d) {
        console.log(d);
    });
}

function erpsil_pdfMovimientosInventario(){
    /*console.log("debug");*/
    PdfDescargar('MovimientoInventario','Reporte de Movimientos de Inventario');
}

function erpsil_agregarMovimientoInventarioWindow() {
    erpsil_CleanChart();
    var productoData = {
        w: "erpsil_inventario",
        r: "mostrar_inventario"
    };
 
    var usuarioData = {
        w: "erpsil_usuario",
        r: "mostrar_usuario"
    };
 
    calaApi_postRequest(productoData, function(inv){
        var selectIn = "<select class='select' id='inputDown1'>" 
        var i = 1;
        for(b in inv.resp){
            var v = inv.resp[b];
            selectIn += "<option>" + i + " - ID del Producto  = (" + v.id_inventario + ")</option>";
            i++;
        }
        selectIn += "</select>";

        calaApi_postRequest(usuarioData, function(usu){
            var selectUsu = "<select class='select' id='inputDown2'>" 
            var i = 1;
            for(a in usu.resp){
            var x = usu.resp[a];
            selectUsu += "<option>" + i + " - ID del Usuario  = (" + x.idUser + ")  Nombre del Usuario = ("+x.fullName+")</option>";
            i++;
            }
            selectUsu += "</select>";

            var agregarMovimientoInventarioWindow = ""
        
            +   "<div class='container centrarDivTxt'>"
            +       "<h2 class='tituloTablas'>Agregar Movimiento de Inventario</h2>"
            +       "<div class='form-horizontal'>"

            +           "<label class='form'>ID Usuario</label>"
            +           "<div class='col-sm'>"
            +                   selectUsu
            +           "</div>"
            
            +           "<label class='form'>ID Producto</label>"
            +           "<div class='col-sm'>"
            +                   selectIn
            +           "</div>"

            +           "<label class='form'>Razón</label>"
            +           "<div class='col-sm'>"
            +                   "<input type='text' placeholder='Razón' required='required' onkeyup = erpsil_validacionTxt('inputRazon'," + 1 +") id='inputRazon'>"
            +           "</div>"
            
            +           "<label class='form'>Descripción</label>"
            +           "<div class='col-sm'>"
            +                   "<input type='text'  placeholder='Descripción' required='required' id='inputDescripcion'>"
            +           "</div>"
            
            +           "<label class='form'>Costo</label>"
            +           "<div class='col-sm'>"
            +                   "<input type='text' placeholder='Costo' required='required' onkeyup = erpsil_validacionTxt('inputCosto'," + 2 +") id='inputCosto'>"
            +           "</div>"
            
            +           "<div class='col-sm'>"
            +                   "<div onClick='erpsil_agregarMovimientoInventario()' class='agregar-BtnVerde'>Agregar</div>"
            +                   "<div onClick='erpsil_listarMovimientoInventario()' class='regresar-BtnVerde'>Regresar</div>"
            +           "</div>"
            +   " </div>"
                             
            erpsil_setContent(agregarMovimientoInventarioWindow);
        }, function(){
            console.log("error");
            erpsil_modalMalo();
        });
    }, function(){
        console.log("error");
        erpsil_modalMalo();

    });
}

function erpsil_agregarMovimientoInventario(){
 
    var d = $("#inputDown1");
    var id = d[0].value;
    id = id.split("(")[1].split(")")[0];
 
    var d2 = $("#inputDown2");
    var id2 = d2[0].value;
    id2 = id2.split("(")[1].split(")")[0];
 
    var id_usuario = id2;
    var id_producto = id;
    var razon = $("#inputRazon").val();
    var descripcion = $("#inputDescripcion").val();
    var costo = $("#inputCosto").val();
 
    if(id_usuario != "" && id_producto != "" && razon != "" && descripcion != "" && costo != ""){
 
        var movimientoInventario = {
            w: "erpsil_movimientoInventario",
            r: "agregar_movimientoInventario",
            id_usuario:id_usuario,
            id_producto:id_producto,
            razon:razon,
            descripcion:descripcion,
            costo:costo
        }
        calaApi_postRequest(movimientoInventario, function (d) {
            erpsil_modalBueno();
            erpsil_listarMovimientoInventario();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Movimiento de Inventario No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}
 
function erpsil_editarMovimientoInventarioWindow(data) {
    var productoData = {
        w: "erpsil_inventario",
        r: "mostrar_inventario"
    };
 
    var usuarioData = {
        w: "erpsil_usuario",
        r: "mostrar_usuario"
    };
 
    calaApi_postRequest(productoData, function(inv){
        var selectIn = "<select class='select' id='inputDown1'>" 
        var i = 1;
        for(b in inv.resp){
            var v = inv.resp[b];
            selectIn += "<option>" + i + " - ID del Producto  = (" + v.id_inventario + ")</option>";
            i++;
        }
        selectIn += "</select>";
 
        console.log(inv);
 
 
        calaApi_postRequest(usuarioData, function(usu){
            var selectUsu = "<select class='select' id='inputDown2'>" 
            var i = 1;
            for(a in usu.resp){
            var x = usu.resp[a];
            selectUsu += "<option>" + i + " - ID del Usuario  = (" + x. idUser+ ")  Nombre del Usuario = ("+x.fullName+")</option>";
            i++;
            }
            selectUsu += "</select>";
 
            console.log(usu);
 
            var editarMovimientoInventarioWindow = ""
        
            +   "<div class='container centrarDivTxt'>"
            +       "<h2 class='tituloTablas'>Movimiento de Inventario</h2>"
            +       "<form action='' method='post'>"
            +           "<div class='form-horizontal'>"
            
            +               "<label class='form'>ID Movimiento de Inventario</label>"
            +               "<div class='col-sm'>"
            +                       "<input type='text' value = '"+ data.id_movInv +"' placeholder='ID' required='required' id='inputIdMov' disabled>"
            +               "</div>"

            +               "<label class='form'>ID Usuario</label>"
            +               "<div class='col-sm'>"
            +                       selectUsu
            +               "</div>"

            +               "<label class='form'>ID Producto</label>"
            +               "<div class='col-sm'>"
            +                       selectIn
            +               "</div>"
            
            +               "<label class='form'>Fecha</label>"
            +               "<div class='col-sm'>"
            +                       "<input type='date' class='date' value = '"+ data.fecha + "' placeholder='Descripción' required='required' id='inputStamp'>"
            +               "</div>"

            +               "<label class='form'>Razón</label>"
            +               "<div class='col-sm'>"
            +                       "<input type='text' value = '"+ data.razon +"' placeholder='Razón' required='required' onkeyup = erpsil_validacionTxt('inputRazon'," + 1 +") id='inputRazon'>"
            +               "</div>"
            
            +               "<label class='form'>Descripción</label>"
            +               "<div class='col-sm'>"
            +                       "<input type='text' value = '"+ data.descripcion + "'placeholder='Descripción' required='required' id='inputDescripcion'>"
            +               "</div>"
            
            +               "<label class='form'>Costo</label>"
            +               "<div class='col-sm'>"
            +                       "<input type='text' value = '"+ data.costo+ "' placeholder='Costo' required='required' onkeyup = erpsil_validacionTxt('inputCosto'," + 2 +") id='inputCosto'>"
            +               "</div>"
            
            +               "<div class='col-sm centrarDivTxt'>"
            +                       "<div onClick='erpsil_guardarEditarMovimientoInventario()' class='agregar-BtnVerde'>Agregar</div>"
            +                       "<div onClick='erpsil_listarMovimientoInventario()' class='regresar-BtnVerde'>Regresar</div>"         
            +               "</div>"
            +           "</div>"                 
            +       "</form>"
            +   "</div>"
                             
            erpsil_setContent(editarMovimientoInventarioWindow);
        }, function(){
            erpsil_modalMalo();
            console.log("Error!");
        });
    }, function(){
        erpsil_modalMalo();
        console.log("Error!");
    });
}
 
function erpsil_editarMovimientoInventario(id){
    var req = {
        w: "erpsil_movimientoInventario",
        r: "obtener_movimientoInventario",
        id:id
    };
   
    calaApi_postRequest(req, function(d){
        erpsil_editarMovimientoInventarioWindow(d.resp);
    }, function(){
        erpsil_modalMalo();
        console.log("Movimiento de Inventario No Editado");
    });
}
 
function erpsil_guardarEditarMovimientoInventario(){
 
    var d = $("#inputDown1");
    var id = d[0].value;
    id = id.split("(")[1].split(")")[0];
 
    var d2 = $("#inputDown2");
    var id2 = d2[0].value;
    id2 = id2.split("(")[1].split(")")[0];
 
    var id_movInv = $("#inputIdMov").val();
    var id_usuario = id2;
    var id_producto = id;
    var razon = $("#inputRazon").val();
    var fecha = $("#inputStamp").val();
    var descripcion = $("#inputDescripcion").val();
    var costo = $("#inputCosto").val();
 
    if(id_movInv != "" && id_usuario != "" && id_producto != "" && fecha != "" && razon != "" && descripcion != "" && costo != ""){
 
        var movimientoInventario = {
            w: "erpsil_movimientoInventario",
            r: "agregarEditar_movimientoInventario",
            id_movInv:id_movInv,
            id_usuario:id_usuario,
            id_producto:id_producto,
            fecha:fecha,
            razon:razon,
            descripcion:descripcion,
            costo:costo
        }
        calaApi_postRequest(movimientoInventario, function (d) {
            erpsil_listarMovimientoInventario();
            erpsil_modalBueno();
        }, function (d) {
            console.log("Movimiento de Inventario No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}
 
function erpsil_eliminarMovimientoInventario(id){
 
    var req = {
        w: "erpsil_movimientoInventario",
        r: "eliminar_movimientoInventario",
        id:id
     };
     calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarMovimientoInventario);
        //erpsil_modalBueno();
        //erpsil_listarMovimientoInventario();
    }, function(){
        erpsil_modalMalo();
        console.log("Movimiento de Inventario No Eliminado");
    });
}

/*********************************************************/
/*               Gestion del Tipo Cliente                */
/*********************************************************/

function erpsil_listarTipoCliente(){
    erpsil_CleanChart();
    var tipoClienteData = {
        w: "erpsil_tipoCliente",
        r: "mostrar_tipoCliente"
    };

    calaApi_postRequest(tipoClienteData, function (d) {
 
        var MostrarTipoClienteWindow = ""

        +   "<h2 class='tituloTablas'>Lista de Tipo de Cliente</h2><br><br>"
        +   "<div  class='form-horizontal-4'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='TipoCliente' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Nombre</th>"
        +                "<th>Descripción</th>"
        +                "<th>Ganancia Global</th>"
        +                "<th>Días de Crédito</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>"
        +       "</div>"
        +   "</div>"
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

        +                "<td> <div id='editar_tipoCliente' onclick='erpsil_editarTipoCliente(" + a.id_tipoCliente + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarTipoCliente("+ a.id_tipoCliente +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarTipoClienteWindow += ""
        +            "</tr>"
        +         "</table>"
        +          "<td> <div onclick='erpsil_agregarTipoClienteWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +          "<td> <div onclick='erpsil_pdfTipoCliente()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarTipoClienteWindow);
        //Eliminar el grafico
        erpsil_CleanChart();
    }, function (d) {
        erpsil_modalMalo();
        console.log(d);
    });
}

function erpsil_pdfTipoCliente(){
    /*console.log("debug");*/
    PdfDescargar('TipoCliente','Reporte de Pagos');
}

function erpsil_agregarTipoClienteWindow() {
    erpsil_CleanChart();
    var agregarTipoClienteWindow = ""

    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Agregar Tipo de Cliente</h2>"
    +       "<div class='form-horizontal'>" 
    
    +           "<label class='form'>Nombre</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Nombre' required='required' id='inputNombre'>"
    +           "</div>"

    +           "<label class='form'>Descripción</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Descripción' required='required' id='inputDescripcion'>"
    +           "</div>"

    +           "<label class='form'>Ganancias</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Ganancia Global' required='required' onkeyup = erpsil_validacionTxt('inputGanancia'," + 2 +") id='inputGanancia'>"
    +           "</div>"

    +           "<label class='form'>Días de Crédito</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Días de Crédito' required='required' onkeyup = erpsil_validacionTxt('inputCredito'," + 2 +") id='inputDiasCredito'>"
    +           "</div>"

    +           "<div class='col-sm centrarDivTxt'>"
    +                   "<div onClick='erpsil_agregarTipoCliente()' class='agregar-BtnVerde'>Agregar</div>"
    +                   "<div onClick='erpsil_listarTipoCliente()' class='regresar-BtnVerde'>Regresar</div>"
    +           "</div>"
    +       "</div>"
    +   "</div>";
                       
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
            erpsil_modalBueno();
            erpsil_listarTipoCliente();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Tipo de Cliente No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
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
        erpsil_validacion(erpsil_listarTipoCliente);
        //erpsil_modalBueno();
        //erpsil_listarTipoCliente();
    }, function(){
        erpsil_modalMalo();
        console.log("Tipo de Cliente No Eliminado");
    });
    
}

function erpsil_editarTipoClienteWindow(data) {
    erpsil_CleanChart();
    var editartipoClienteWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Editar Tipo de Cliente</h2>"
    +       "<form action='' method='post'>"
    +           "<div class='form-horizontal'>"

    +               "<label class='form'>ID Cliente</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputId_tipoCliente' value='" + data.id_tipoCliente + "' placeholder='ID Cliente' disabled>"
    +               "</div>"

    +               "<label class='form'>Nombre</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputNombre' value='" + data.nombre + "' placeholder='Nombre' required>"
    +               "</div>"

    +               "<label class='form'>Descripción</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputDescripcion' value='" + data.descripcion + "' placeholder='Descripción' required>"
    +               "</div>"
               
    +               "<label class='form'>Ganancia Global</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputGanancia_global'," + 2 +") id='inputGanancia_global' value='" + data.ganancia_global + "' placeholder='Ganancia global' required>"
    +               "</div>"
    
    +               "<label class='form'>Días de Crédito</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputGanancia_global'," + 2 +") id='inputGanancia_global' value='" + data.dias_credito + "' placeholder='Días de Crédito' required>"
    +               "</div>"
    
    +               "<label class='form'>&nbsp;</label>"
    +               "<div class='col-sm centrarDivTxt'>"
    +                       "<div onclick='erpsil_guardarEditarTipoCliente()' class='guardar-BtnVerde' >Guardar</div>"
    +                       "<div onclick='erpsil_listarTipoCliente()' class='cancelar-BtnVerde'>Cancelar</div>"
    +               "</div>"
    +           "</div>"
    +       "</form>"
    +   "</div>"

    erpsil_setContent(editartipoClienteWindow);
}

function erpsil_editarTipoCliente(id){
    var req = {
        w: "erpsil_tipoCliente",
        r: "obtener_tipoCliente",
        id:id
    };
    
    calaApi_postRequest(req, function(d){
        erpsil_editarTipoClienteWindow(d.resp);
    }, function(){
        erpsil_modalMalo();
        console.log("Tipo de Cliente No Editado");
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
            erpsil_modalBueno();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Tipo de Cliente No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

/*********************************************************/
/*                  Gestión Activos                      */
/*********************************************************/

function erpsil_agregarActivosWindow() {
    erpsil_CleanChart();
    var agregarActivosWindow = ""

    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Agregar Activo</h2>"
    +       "<div class='form-horizontal'>"
    
    +           "<label class='form'>Nombre</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Nombre' required='required' onkeyup = erpsil_validacionTxt('inputNombre'," + 1 +") id='inputNombre'>"
    +           "</div>"

    +           "<label class='form'>Cantidad</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Cantidad' required='required' onkeyup = erpsil_validacionTxt('inputCantidad'," + 2 +")id='inputCantidad'>"
    +           "</div>"
    
    +           "<label class='form'>Vencimiento</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Vencimiento' required='required' id='inputVecimiento'>"
    +           "</div>"
    
    +           "<div class='col-sm'>"
    +                   "<div onClick='erpsil_agregarActivos()' class='agregar-BtnVerde'>Agregar</div>"
    +                   "<div onClick='erpsil_listarActivos()' class='regresar-BtnVerde'>Regresar</div>"
    +           "</div>"
    +       "</div>"
    +   "</div>"                                    
    erpsil_setContent(agregarActivosWindow);
}

//Línea de Revisión
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
            erpsil_modalBueno();
            console.log("Tipo de Cliente Agregado" + d);
            erpsil_listarActivos();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Tipo de Cliente No Agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

function erpsil_listarActivos(){

    erpsil_CleanChart();
    var ActivosData = {
        w: "erpsil_activos",
        r: "mostrar_Activos"
    };

    calaApi_postRequest(ActivosData, function (d) {
 
        var MostrarActivosWindow = ""

        +   "<h2 class='tituloTablas'>Lista de Activos</h2><br><br>"
        +   "<div  class='form-horizontal-4'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='Activos' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Nombre</th>"
        +                "<th>Cantidad</th>"
        +                "<th>Vencimiento</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>"
        +       "</div>"
        +   "</div>"
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarActivosWindow += ""

        +            "<tr>"
        +                "<td> "+ a.id_activo +" </td>"
        +                "<td> "+ a.nombre +" </td>"
        +                "<td> "+ a.cantidad +" </td>"
        +                "<td> "+ a.vence +" </td>"

        +                "<td> <div id='editar_activos' onclick='erpsil_editarActivos(" + a.id_activo + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarActivos("+ a.id_activo +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarActivosWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='editar_activos' onclick='erpsil_agregarActivosWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +                "<td> <div id='reportes_activos' onclick='erpsil_pdfActivo()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarActivosWindow);
        var cantidad = a.cantidad;
        console.log(cantidad);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_pdfActivo(){
    /*console.log("debug");*/
    PdfDescargar('Activos','Reporte de Activos');
}

function erpsil_eliminarActivos(id) {
    var req = {
        w: "erpsil_activos",
        r: "eliminar_activos",
        id:id
    };

    calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarActivos);
        //erpsil_modalBueno();
        //erpsil_listarActivos();
    }, function(){
        erpsil_modalMalo();
        console.log("Tipo Cliente No Eliminado");
    });
    
}

function erpsil_editarActivosWindow(data) {
    erpsil_CleanChart();

    var editarActivosWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Editar Activo</h2>"
    +       "<form action='' method='post'>"
    +           "<div class='form-horizontal'>"

    +               "<label class='form'>ID de Activo</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputId_activos' value='" + data.id_activo + "' placeholder='ID de Activo' disabled>"
    +               "</div>"

    +               "<label class='form'>Nombre</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputNombre'," + 1 +") id='inputNombre' value='" + data.nombre + "' placeholder='Nombre' required>"
    +               "</div>"

    +               "<label class='form'>Cantidad</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputCantidad'," + 2 +") id='inputCantidad' value='" + data.cantidad + "' placeholder='Cantidad' required>"
    +               "</div>"
    
    +               "<label class='form'>Ganancia Global</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputVencimiento' value='" + data.vence + "' placeholder='Vencimiento' required>"
    +               "</div>"

    +               "<label class='form'>&nbsp;</label>"
    +               "<div class='col-sm centrarDivTxt'>"
    +                       "<div onclick='erpsil_guardarEditarActivos()' class='guardar-BtnVerde' >Guardar</div>"
    +                       "<div onclick='erpsil_listarActivos()' class='cancelar-BtnVerde'>Cancelar</div>"
    +               "</div>"

    +           "</div>"
    +       "</form>"
    +   "</div>"

    erpsil_setContent(editarActivosWindow);
}

function erpsil_editarActivos(id){
    var req = {
        w: "erpsil_activos",
        r: "obtener_activos",
        id:id
    };
    
    calaApi_postRequest(req, function(d){
        erpsil_editarActivosWindow(d.resp);
    }, function(){
        erpsil_modalMalo();
        console.log("Activos No Editado");
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
            erpsil_modalBueno();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Activo No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

/*********************************************************/
/*                  Gestion roles                        */
/*********************************************************/

function erpsil_agregarRolWindow(){
    erpsil_CleanChart();
    var agregarRolesWindow = ""

    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Agregar Rol</h2>"
    +       "<div class='form-horizontal'>"
    
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Nombre de Rol' required='required' onkeyup = erpsil_validacionTxt('inputNombre'," + 1 +") id='inputNombre'>"
    +           "</div>"

    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Descripción' required='required' id='inputDescripcion'>"
    +           "</div>"

    +           "<div class='col-sm centrarDivTxt'>"
    +                   "<div onClick='erpsil_agregarRoles()' class='agregar-BtnVerde'>Agregar</div>"
    +                   "<div onClick='erpsil_listarRoles()' class='regresar-BtnVerde'>Regresar</div>"
    +           "</div>"
    +       "</div>"
    +   "</div>"
                       
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
            erpsil_modalBueno();
            console.log("Rol Agregado" + d);
            erpsil_listarRoles();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Rol No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

function erpsil_listarRoles(){
    erpsil_CleanChart();
    var RolesData = {
        w: "erpsil_roles",
        r: "mostrar_roles"
    };
    
    calaApi_postRequest(RolesData, function (d) {
        var MostrarRolesWindow = ""
        +   "<h2 class='tituloTablas'>Lista de Roles</h2><br><br>"
        +   "<div  class='form-horizontal-4'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='Roles' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Nombre</th>"
        +                "<th>Descripción</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>"
        +       "</div>"
        +   "</div>"
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarRolesWindow += ""

        +            "<tr>"
        +                "<td> "+ a.id_roles +" </td>"
        +                "<td> "+ a.nombre +" </td>"
        +                "<td> "+ a.descripcion +" </td>"
        +                "<td> <div id='editar_activos' onclick='erpsil_editarRoles(" + a.id_roles + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarRoles("+ a.id_roles +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarRolesWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='editar_activos' onclick='erpsil_agregarRolWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +                "<td> <div id='Roles_Reporte' onclick='erpsil_pdfRoles()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarRolesWindow);
        

    }, function (d) {
        erpsil_modalMalo();
        console.log(d);
    });
}
function erpsil_pdfRoles(){
    /*console.log("debug");*/
    PdfDescargar('Roles','Reporte de Roles');
}

function erpsil_eliminarRoles(id) {
    var req = {
        w: "erpsil_roles",
        r: "eliminar_roles",
        id:id
    };

    calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarRoles);
        //erpsil_listarRoles();
        //erpsil_modalBueno();
    }, function(){
        erpsil_modalMalo();
        console.log("Roles No Eliminado");
    });
    
}

function erpsil_editarRolesWindow(data) {
    erpsil_CleanChart();
    var editarRolesWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Editar Roles</h2>"
    +       "<form action='' method='post'>"
    +           "<div class='form-horizontal'>"    
    
    +               "<label class='form'>ID Rol</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputId_roles' value='" + data.id_roles + "' placeholder='ID Rol' disabled>"
    +               "</div>"
    
    +               "<label class='form'>Nombre</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputNombre'," + 1 +") id='inputNombre' value='" + data.nombre + "' placeholder='Nombre' required>"
    +               "</div>"
    
    +               "<label class='form'>Cantidad</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputDescripcion' value='" + data.descripcion + "' placeholder='Cantidad' required>"
    +               "</div>"
    
    +               "<label class='form'>&nbsp;</label>"
    +               "<div class='col-sm centrarDivTxt'>"
    +                       "<div onclick='erpsil_guardarEditarRoles()' class='guardar-BtnVerde' >Guardar</div>"
    +                       "<div onclick='erpsil_listarRoles()' class='regresar-BtnVerde'>Regresar</div>"
    +               "</div>"
    +           "<div>"
    +       "</form>"
    +   "</div>"

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
        erpsil_modalMalo();
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
            erpsil_modalBueno();
            erpsil_listarRoles();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Activo No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

/*********************************************************/
/*                 Gestión Inventario                    */
/*********************************************************/

function erpsil_listarInventario(){
    erpsil_CleanChart();
    var inventarioData = {
        w: "erpsil_inventario",
        r: "mostrar_inventario"
    };

    calaApi_postRequest(inventarioData, function (d) {
        
        var MostrarInventarioWindow = ""

        +   "<h2 class='tituloTablas'>Lista de Inventario</h2><br><br>"
        +   "<div  class='form-horizontal-6'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='Inventarios' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th class='font-size:11px'>ID</th>"
        +                "<th>Cantidad</th>"
        +                "<th>Unidad (nombre)</th>"
        +                "<th>Código Interno</th>"
        +                "<th>Código Barras</th>"
        +                "<th>Categoría</th>"
        +                "<th>Cantidad Mínima</th>"
        +                "<th>Descripción</th>"
        +                "<th>I.V.</th>"
        +                "<th>Ganancia Mínima</th>"
        +                "<th>Costo</th>"
        +                "<th>Estatus</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>";
        +       "</div>"
        +   "</div>"
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

        +        "<td> <div id='editar_cliente' onclick='erpsil_editarInventario(" + a.id_inventario + ")' class='editar-Btn'>Editar</div></td>"
        +        "<td> <div onclick='erpsil_eliminarInventario("+ a.id_inventario +")' class='eliminar-Btn'>Eliminar</div></td>"
        +    "</tr>";        
            }
        }
        MostrarInventarioWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='editar_activos' onclick='erpsil_agregarInventarioWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +                "<td> <div  onclick='erpsil_pdfInventarios()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";
        erpsil_setContent(MostrarInventarioWindow);

    }, function (d) {
        console.log(d);
});
}

function erpsil_pdfInventarios(){
    /*console.log("debug");*/
    PdfDescargar('Inventarios','Reporte de Inventario');
}

function erpsil_agregarInventarioWindow(){
    erpsil_CleanChart();
    var agregarInventarioWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Agregar Inventario</h2>"
    +       "<div class='form-horizontal'>"
    
    +           "<label class='form'>Cantidad</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Cantidad' required='required' onkeyup = erpsil_validacionTxt('inputCantidad'," + 2 +") id='inputCantidad'>"
    +           "</div>"

    +           "<label class='form'>Nombre</label>"
    +           "<div class='col-sm'>"
    +               "<input type='text' placeholder='Nombre' required='required' onkeyup = erpsil_validacionTxt('inputUnidad'," + 2 +") id='inputUnidad'>"
    +           "</div>"

    +           "<label class='form'>Código Interno</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Código Interno' required='required' onkeyup = erpsil_validacionTxt('inputCodigoInter'," + 2 +") id='inputCodigoInter'>"
    +           "</div>"

    +           "<label class='form'>Código de Barras</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Código de Barras' required='required' onkeyup = erpsil_validacionTxt('inputCodigoBarras'," + 2 +") id='inputCodigoBarra'>"
    +           "</div>"

    +           "<label class='form'>Categoría</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Categoría' required='required' id='inputCategoria'>"
    +           "</div>"

    +           "<label class='form'>Cantidad Mínima</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Cantidad Mínima' required='required' onkeyup = erpsil_validacionTxt('inputCantidadMin'," + 2 +") id='inputCantidadMin'>"
    +           "</div>"

    +           "<label class='form'>Descripción</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Descripción' required='required' onkeyup = erpsil_validacionTxt('inputDescripcion'," + 2 +") id='inputDescripcion'>"
    +           "</div>"

    +           "<label class='form'>Impuesto de Venta</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Impuesto Venta' required='required' onkeyup = erpsil_validacionTxt('inputImpuestoVenta'," + 2 +") id='inputImpuestoVenta'>"
    +           "</div>"

    +           "<label class='form'>Ganacia Mínima</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Ganacia Mínima' required='required' onkeyup = erpsil_validacionTxt('inputGananciaMin'," + 2 +") id='inputGananciaMin'>"
    +           "</div>"

    +           "<label class='form'>Costo</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Costo' required='required' onkeyup = erpsil_validacionTxt('inputCosto'," + 2 +") id='inputCosto'>"
    +           "</div>"
    
    +           "<label class='form'>Estatus</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Estatus' required='required' onkeyup = erpsil_validacionTxt('inputStatus'," + 2 +") id='inputStatus'>"
    +           "</div>"

    +           "<div class='col-sm centrarDivTxt'>"
    +                   "<div onclick='erpsil_agregarInventario()' class='agregar-BtnVerde'>Agregar</div>"
    +                   "<div onclick='erpsil_listarInventario()' class='regresar-BtnVerde'>Regresar</div>"
    +           "</div>"
    +       "</div>"
    +   "</div>"
                       
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
        console.log("Inventario Agregado" + d);
        erpsil_modalBueno();
        erpsil_listarInventario();
    }, function (d) {
        erpsil_modalMalo();
        console.log("Inventario No Agregado" + d);

    });
    }else{
        erpsil_modalMalo();
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
        erpsil_validacion(erpsil_listarInventario);
        //erpsil_modalBueno();
        //erpsil_listarInventario();
        }, function(){
        erpsil_modalMalo();
        console.log("Inventario No Eliminado");
    });
}

function erpsil_editarInventarioWindow(data) {
    erpsil_CleanChart();
    var editarInventarioWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Editar Inventario</h2>"
    +       "<form action='' method='post'>"
    +           "<div class='form-horizontal'>"

    +               "<label class='form'>ID de Inventario</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='id_inventario' value='" +data.id_inventario+ "' placeholder='ID Inventario' disabled>"
    +               "</div>"

    +               "<label class='form'>Cantidad</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('cantidad'," + 2 +") id='cantidad' value='" +data.cantidad+ "' placeholder='Cantidad' required>"
    +               "</div>"

    +               "<label class='form'>Unidad</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('unidad'," + 1 +") id='unidad'  value='" +data.unidad+ "' placeholder='Unidad' required>"
    +               "</div>"

    +               "<label class='form'>Código Interno</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('codigo_interno'," + 2 +") id='codigo_interno' value='" +data.codigo_interno+ "' placeholder='Código Interno' required>"
    +               "</div>"

    +               "<label class='form'>Código de Barras</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('codigo_barras'," + 2 +") id='codigo_barras' value='" +data.codigo_barras+ "' placeholder='Código de Barras' required>"
    +               "</div>"

    +               "<label class='form'>Categoría</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('categoria'," + 2 +") id='categoria' value='" +data.categoria+ "' placeholder='Categoría' required>"
    +               "</div>"  

    +               "<label class='form'>Cantidad Mínima</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('cantidad_minima'," + 2 +") id='cantidad_minima' value='" +data.cantidad_minima+ "' placeholder='Cantidad Mínima' required>"
    +               "</div>"  

    +               "<label class='form'>Descripción</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='descripcion' value='" +data.descripcion+ "' placeholder='Descripción'></input>"
    +               "</div>"

    +               "<label class='form'>Impuesto de Venta</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('impuesto_venta'," + 2 +") id='impuesto_venta' value='" +data.impuesto_venta+ "' placeholder='Impuesto de Venta' required>"
    +               "</div>"

    +               "<label class='form'>Ganancia Mínima</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('ganancia_minima'," + 2 +") id='ganancia_minima' value='" +data.ganancia_minima+ "' placeholder='Ganancia Mínima' required>"
    +               "</div>"

    +               "<label class='form'>Costo</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='costo' value='" +data.costo+ "' placeholder='Costo' required>"
    +               "</div>"

    +               "<label class='form'>Estatus</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='status' value='" + data.status + "' placeholder='Estatus' required>"
    +               "</div>"

    +               "<label class='form'>&nbsp;</label>"
    +               "<div class='col-sm centrarDivTxt'>"
    +                       "<div onclick='erpsil_guardarEditarInventario()' class='guardar-BtnVerde' >Guardar Inventario</div>"
    +                       "<div onclick='erpsil_listarInventario()' class='cancelar-BtnVerde'>Cancelar</div>"
    +               "</div>"
    +           "</div>"
    +       "</form>"
    +   "</div>"
   
    erpsil_setContent(editarInventarioWindow);
}

function erpsil_editarInventario(id){

    var req = {
        w: "erpsil_inventario",
        r: "obtener_inventario",
        id:id
    };

    calaApi_postRequest(req, function(d){
        erpsil_editarInventarioWindow(d.resp);
    }, function(){
        erpsil_modalMalo();
        console.log("Inventario No Agregado");
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
            erpsil_modalBueno();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Inventario No Agregado" + d);
        });
    } else {
        console.log("Error!");
    }

}

/*********************************************************/
/*                 Gestión Proveedor                     */
/*********************************************************/

function erpsil_agregarProveedorWindow() {
    erpsil_CleanChart();
    var agregarProveedorWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Agregar Proveedor</h2>"
    +       "<div class='form-horizontal'>"

    +           "<label class='form'>Nombre</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Nombre' required='required' onkeyup = erpsil_validacionTxt('inputNombre'," + 1 +") id='inputName'>"
    +           "</div>"

    +           "<label class='form'>Primer Apellido</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Primer Apellido' required='required' onkeyup = erpsil_validacionTxt('inputApe1'," + 1 +") id='inputApe1'>"
    +           "</div>"

    +           "<label class='form'>Segundo Apellido</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Segundo Apellido' required='required' onkeyup = erpsil_validacionTxt('inputApe2'," + 1 +") id='inputApe2'>"
    +           "</div>"

    +           "<label class='form'>Cédula</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Cédula' required='required' onkeyup = erpsil_validacionTxt('inputCedula'," + 2 +") id='inputCedula'>"
    +           "</div>"

    +           "<label class='form'>Teléfono</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Teléfono' required='required' onkeyup = erpsil_validacionTxt('inputTelefono'," + 2 +") id='inputTelefono'>"
    +           "</div>"

    +           "<label class='form'>Dirección</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Dirección' required='required' id='inputDireccion'>"
    +           "</div>"

    +           "<label class='form'>Descripción</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='password' placeholder='Descripción' required='required' id='inputDescripcion'>"
    +           "</div>"

    +           "<div class='col-sm centrarDivTxt'>"
    +                   "<div onClick='erpsil_agregarProveedor()' class='agregar-BtnVerde'>Agregar</div>"
    +                   "<div onClick='erpsil_listarProveedor()' class='regresar-BtnVerde'>Regresar</div>"
    +           "</div>"
    +       "</div>"
    +   "</div>"
                       
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
            console.log("Nuevo Agregado" + d);
            erpsil_modalBueno();
            erpsil_listarProveedor();
        }, function (d) {
            erpsil_modalMalo();
            console.log("No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

function erpsil_listarProveedor(){
    erpsil_CleanChart();
    var proveedorData = {
        w: "erpsil_proveedor",
        r: "mostrar_proveedor"
    };

    calaApi_postRequest(proveedorData, function (d) {
 
        var MostrarProveedorWindow = ""
        +   "<h2 class='tituloTablas'>Lista de Proveedores</h2><br><br>"
        +   "<div class='form-horizontal-4'>"
        +       "<div class='table-responsive'>"
        +         "<table id='Proveedor' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Nombre</th>"
        +                "<th>Primer apellido</th>"
        +                "<th>Segundo apellido</th>"
        +                "<th>Cédula</th>"
        +                "<th>Teléfono</th>"
        +                "<th>Dirección</th>"
        +                "<th>Descripción</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>"
        +       "</div>"
        +   "</div>"
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

        +                "<td> <div id='editar_cliente' onclick='erpsil_editarProveedor(" + a.id_proveedor + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarProveedor("+ a.id_proveedor +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarProveedorWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='editar_activos' onclick='erpsil_agregarProveedorWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +                "<td> <div onclick='erpsil_pdfProveedor()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarProveedorWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_pdfProveedor(){
    /*console.log("debug");*/
    PdfDescargar('Proveedor','Reporte de Proovedores');
}

function erpsil_eliminarProveedor(id){
    var req = {
        w: "erpsil_proveedor",
        r: "eliminar_proveedor",
        id:id
    };

    calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarProveedor);
        //erpsil_listarProveedor();
        //erpsil_modalBueno();
    }, function(){
        erpsil_modalMalo();
        console.log("Proveedor No Eliminado");
    });
}

function erpsil_editarProveedor(id){

    var req = {
        w: "erpsil_proveedor",
        r: "obtener_proveedor",
        id:id
    };
    
    calaApi_postRequest(req, function(d){
        erpsil_editarProveedorWindow(d.resp);
    }, function(){
        erpsil_modalMalo();
        console.log("Proveedor No Editado");
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
            erpsil_modalBueno();
        }, function (d) {
            erpsil_modalMalo();
            console.log("No Agregado" + d);
        });
    } else {
        console.log("Error!");
    }

}

function erpsil_editarProveedorWindow(data) {
    erpsil_CleanChart();
    var editarProveedorWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Editar Proveedor</h2>"
    +       "<form action='' method='post'>"
    +           "<div class='form-horizontal'>"
    
    +               "<label class='form'>ID de Proveedor</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputIdProveedor' value='" +data.id_proveedor+ "' placeholder='ID de Proveedor' disabled>"
    +               "</div>"

    +               "<label class='form'>Nombre</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputNombre'," + 1 +") id='inputNombre' value='" +data.nombre+ "' placeholder='Nombre' required>"
    +               "</div>"

    +               "<label class='form'>Primer Apellido</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputApellido1'," + 1 +") id='inputApellido1' value='" +data.apellido1+ "' placeholder='Primer Apellido' required>"
    +               "</div>"

    +               "<label class='form'>Segudo Apellido</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputApellido2'," + 1 +") id='inputApellido2' value='" +data.apellido2+ "' placeholder='Segudo Apellido' required>"
    +               "</div>"

    +               "<label class='form'>Cédula</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputCedula'," + 2 +") id='inputCedula' value='" +data.cedula+ "' placeholder='Cédula' required>"
    +               "</div>"
    
    +               "<label class='form'>Teléfono</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputTelefono'," + 2 +") id='inputTelefono' value='" +data.telefono+ "' placeholder='Teléfono' required>"
    +               "</div>"
    
    +               "<label class='form'>Dirección</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputDireccion' value='" +data.direccion+ "' placeholder='Dirección'></input>"
    +               "</div>"

    +               "<label class='form'>Descripción</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputDescripcion' value='" +data.descripcion + "' placeholder='Descripción'></input>"
    +               "</div>"

    +               "<label class='form'>&nbsp;</label>"
    +               "<div class='col-sm centrarDivTxt'>"
    +                       "<div class='guardar-BtnVerde' onclick='erpsil_guadarEditarProveedor()'>Guardar Proveedor</div>"
    +                       "<div class='cancelar-BtnVerde' onclick='erpsil_listarProveedor()'>Cancelar</div>"
    +               "</div>"
    +           "</div>"
    +       "</form>"
    +   "</div>"

    erpsil_setContent(editarProveedorWindow);
}

/*********************************************************/
/*                 Gestión Cliente                       */
/*********************************************************/

function erpsil_agregarClienteWindow() {
    erpsil_CleanChart();
    var agregarClienteWindow = ""

    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas' style = 'margin-bottom: 40px; margin-top: 40px;'>Agregar Cliente</h2>"
    +       "<div class='form-horizontal'>"

    +           "<label class='form'>Nombre</label>"
    +           "<div class='col-smp'>"
    +                   "<input type='text' placeholder='Nombre' required='required' onkeyup = erpsil_validacionTxt('inputNombre'," + 1 +") id='inputName'>"
    +           "</div>"
    
    +           "<label class='form'>Cédula</label>"
    +           "<div class='col-smp'>"
    +                   "<input type='text' placeholder='Cédula' required='required' onkeyup = erpsil_validacionTxt('inputCedula'," + 2 +") id='inputCedula'>"
    +           "</div>"
    
    +           "<label class='form'>Email</label>"
    +           "<div class='email'>"
    +                   "<input type='email' placeholder='Email' required='required' id='inputEmail'>"
    +           "</div>"
    
    +           "<label class='form'>Dirección</label>"
    +           "<div class='col-smp'>"
    +                   "<input type='text' placeholder='Dirección' required='required' id='inputDireccion'>"
    +           "</div>"
    
    +           "<label class='form'>Teléfono</label>"
    +           "<div class='col-smp'>"
    +               "<input type='text' placeholder='Teléfono' required='required' onkeyup = erpsil_validacionTxt('inputTelefono'," + 2 +") id='inputTelefono'>"
    +           "</div>"
    
    +           "<label class='form'>Descripción</label>"
    +           "<div class='col-smp'>"
    +                   "<input type='text' placeholder='Descripción' required='required' id='inputDescripcion'>"
    +           "</div>"
    
    +           "<label class='form'>Saldo Máximo</label>"
    +           "<div class='col-smp'>"
    +                   "<input type='text' placeholder='Saldo Máximo' required='required' onkeyup = erpsil_validacionTxt('inputSaldoMa'," + 2 +") id='inputSaldoMa'>"
    +           "</div>"
    
    +           "<label class='form'>Saldo</label>"
    +           "<div class='col-smp'>"
    +                   "<input type='text' placeholder='Saldo' required='required' onkeyup = erpsil_validacionTxt('inputSaldo'," + 2 +") id='inputSaldo'>"
    +           "</div>"
    
    +           "<label class='form'>Tipo</label>"
    +           "<div class='col-smp'>"
    +                   "<input type='text' placeholder='Tipo' required='required' id='inputTipo'>"
    +           "</div>"
    
    +           "<div class='col-sm centrarDivTxt'><br><br>"
    +                   "<div onClick='erpsil_agregarCliente()' class='agregar-BtnVerde'>Agregar</div>"
    +                   "<div onClick='erpsil_listarCliente()' class='regresar-BtnVerde'>Regresar</div>"
    +           "</div>"
    +       "</div>"
    +   "</div>"

    erpsil_setContent(agregarClienteWindow);
}

function erpsil_editarClienteWindow(data) {
    erpsil_CleanChart();
    var editarClienteWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Editar Cliente</h2>"
    +       "<form action='' method='post'>"
    +           "<div class='form-horizontal'>"

    +               "<label class='form'>ID Cliente</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputId_cliente' value='" + data.id_cliente + "' placeholder='ID Cliente' disabled>"
    +               "</div>"
    
    +               "<label class='form'>Nombre</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputNombre'," + 2 +") id='inputNombre' value='" + data.nombre + "' placeholder='Nombre' required>"
    +               "</div>"
    
    +               "<label class='form'>Cédula</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputCedula'," + 2 +") id='inputCedula' value='" + data.cedula  + "' placeholder='Cédula' required>"
    +               "</div>"
    
    +               "<label class='form'>Email</label>"
    +               "<div class='email'>"
    +                       "<input type='email' id='inputEmail' value='" +data.email  + "' placeholder='Email' required>"
    +               "</div>"
    
    +               "<label class='form'>Dirección</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputDireccion' value='" +data.direccion  + "' placeholder='Dirección' required>"
    +               "</div>"
    
    +               "<label class='form'>Teléfono</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputTelefono'," + 2 +") id='inputTelefono' value='" + data.telefono  + "' placeholder='Teléfono' required>"
    +               "</div>"
    
    +               "<label class='form'>Descripción</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputDescripcion' value='" + data.descripcion  + "' placeholder='Descripción' required>"
    +               "</div>"

    +               "<label class='form'>Saldo Máximo</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputSaldo_maximo'," + 2 +") id='inputSaldo_maximo' value='" + data.saldo_maximo  + "' placeholder='Saldo Máximo'>"
    +               "</div>"

    +               "<label class='form'>Saldo</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputSaldo'," + 2 +") id='inputSaldo' value='" + data.saldo  + "' placeholder='Saldo' required>"
    +               "</div>"
    
    +               "<label class='form'>Tipo</label>"
    +               "<div class='col-sm'>"           
    +                       "<input type='text' id='inputTipo' value='" + data.tipo  + "' placeholder='Tipo' required>"
    +               "</div>"    
    
    +               "<label class='form'>&nbsp;</label>"
    +               "<div class='col-sm centrarDivTxt'>"
    +                       "<div onclick='erpsil_guadarEditarCliente()' class='guardar-BtnVerde' >Guardar</div>"
    +                       "<div onclick='erpsil_listarCliente()' class='cancelar-BtnVerde'>Cancelar</div>"
    +               "</div>"
    +           "</div>"
    +       "</form>"
    +   "</div>"

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
            console.log("Agregado" + d);
            erpsil_modalBueno();
            erpsil_listarCliente();
        }, function (d) {
            erpsil_modalMalo();
            console.log("No Agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

function erpsil_listarCliente() {
    erpsil_CleanChart();
    var clienteData = {
        w: "erpsil_cliente",
        r: "mostrar_cliente"
    };

    calaApi_postRequest(clienteData, function (d) {
 
        var MostrarClienteWindow = ""

        +   "<h2 class='tituloTablas'>Lista de Clientes</h2><br><br>"
        +   "<div class='form-horizontal-4'>"
        +       "<div class='table-responsive'>"
        +         "<table id='Cliente' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Nombre</th>"
        +                "<th>Cédula</th>"
        +                "<th>Email</th>"
        +                "<th>Dirección</th>"
        +                "<th>Teléfono</th>"
        +                "<th>Descripción</th>"
        +                "<th>Saldo Máximo</th>"
        +                "<th>Saldo</th>"
        +                "<th>Tipo</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>"
        +       "</div>"
        +   "</div>"
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
        +                "<td> <div id='editar_cliente' onclick='erpsil_editarCliente(" + a.id_cliente + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarCliente("+ a.id_cliente +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
        }
                MostrarClienteWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='editar_activos' onclick='erpsil_agregarClienteWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +                "<td> <div onclick='erpsil_pdfCliente()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarClienteWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_pdfCliente(){
    /*console.log("debug");*/
    PdfDescargar('Cliente','Reporte de Clientes');
}

function erpsil_eliminarCliente(id){
    console.log(id);

    var req = {
        w: "erpsil_cliente",
        r: "eliminar_cliente",
        id:id
    };
    calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarCliente);
        //erpsil_listarCliente();
        //erpsil_modalBueno();
    }, function(){
        erpsil_modalMalo();
        console.log("No Eliminar");
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
        erpsil_modalMalo();
        console.log("Cliente No Editado");
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
    var saldoMaCliente = $("#inputSaldo_maximo").val();
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
            erpsil_modalBueno();
        }, function (d) {
            erpsil_modalMalo();
            console.log("No Agregado" + d);
        });
    } else {
        console.log("Error!");
    }
}

/*********************************************************/
/*                 Gestión Empleado                      */
/*********************************************************/

function erpsil_agregarEmpleadoWindow(){
    erpsil_CleanChart();
    var agregarEmpleadoWindow = ""
    
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Agregar Empleado</h2>"
    +       "<div class='form-horizontal'>"
    
    +           "<label class='form'>Nombre</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Nombre' required='required' onkeyup = erpsil_validacionTxt('inputNombre'," + 1 +") id='inputName'>"
    +           "</div>"
    
    +           "<label class='form'>Primer Apellido</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Primer Apellido' required='required' onkeyup = erpsil_validacionTxt('inputApellido1'," + 1 +") id='inputApellido1'>"
    +           "</div>"
    
    +           "<label class='form'>Segundo Apellido</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Segundo Apellido' required='required' onkeyup = erpsil_validacionTxt('inputApellido2'," + 1 +") id='inputApellido2'>"
    +           "</div>"
    
    +           "<label class='form'>Teléfono</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Teléfono' required='required' onkeyup = erpsil_validacionTxt('inputTelefono'," + 2 +") id='inputTelefono'>"
    +           "</div>"
    
    +           "<label class='form'>Cédula</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Cédula' required='required' onkeyup = erpsil_validacionTxt('inputCedula'," + 2 +") id='inputCedula'>"
    +           "</div>"
    
    +           "<label class='form'>Dirección</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Dirección' required='required' id='inputDireccion'>"
    +           "</div>"
    
    +           "<label class='form'>Ingreso</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Ingreso' required='required' onkeyup = erpsil_validacionTxt('inputIngreso'," + 2 +") id='inputIngreso'>"
    +           "</div>"
    
    +           "<label class='form'>Observación</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Observación' required='required' id='inputObservacion'>"
    +           "</div>"
    
    +           "<label class='form'>Puesto</label>"
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Puesto' required='required' onkeyup = erpsil_validacionTxt('inputPuesto'," + 1 +") id='inputPuesto'>"
    +           "</div>"
    
    +           "<label class='form'>Jornada</label>"    
    +           "<div class='col-sm'>"
    +                   "<input type='text' placeholder='Jornada' required='required' onkeyup = erpsil_validacionTxt('inputJornada'," + 1 +") id='inputJornada'>"
    +           "</div>"
    
    +           "<div class='col-sm centrarDivTxt'>"
    +               "<button onClick='erpsil_agregarEmpleado()' class='agregar-BtnVerde'>Agregar</button>"
    +               "<button onClick='erpsil_listarEmpleado()' class='regresar-BtnVerde'>Regresar</button>"
    +           "</div>"
    +       "</div>"
    +   "</div>"    
    erpsil_setContent(agregarEmpleadoWindow);
}

function erpsil_editarEmpleadoWindow(data) {
    erpsil_CleanChart();
    var editarEmpleadoWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Editar Empleado</h2>"
    +       "<form action='' method='post'>"
    +           "<div class='form-horizontal'>"

    +               "<label class='form'>ID del Empleado</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputId_empleado' value='" + data.id_empleado + "'  placeholder='ID del Empleado' disabled>"
    +               "</div>"
    
    +               "<label class='form'>Nombre</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputName'," + 1 +") id='inputName' value='" + data.nombre + "' placeholder='Nombre' required>"
    +               "</div>"
    
    +               "<label class='form'>Primer Apellido</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputApellido1'," + 1 +") id='inputApellido1' value='" + data.apellido1 + "' placeholder='Primer Apellido' required>"
    +               "</div>"
    
    +               "<label class='form'>Segudo Apellido</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputApellido2'," + 1 +") id='inputApellido2' value='" + data.apellido2 + "' placeholder='Segudo Apellido' required>"
    +               "</div>"
    
    +               "<label class='form'>Teléfono</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputTelefono'," + 2 +") id='inputTelefono' value='" + data.telefono + "' placeholder='Teléfono' required>"
    +               "</div>"
    
    +               "<label class='form'>Cédula</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputCedula'," + 2 +") id='inputCedula' value='" + data.cedula + "' placeholder='Cédula' required>"
    +               "</div>"     
    
    +               "<label class='form'>Dirección</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputDireccion' value='" + data.direccion + "' placeholder='Dirección'></textarea>"
    +               "</div>"
    
    +               "<label class='form'>Ingreso</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputIngreso'," + 2 +") id='inputIngreso' value='" + data.ingreso + "' placeholder='Ingreso' required>"
    +               "</div>"
    
    +               "<label class='form'>Observaciones</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputObservacion' value='" + data.observacion + "' placeholder='Observaciones'></textarea>"
    +               "</div>"
    
    +               "<label class='form'>Puesto</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputPuesto'," + 1 +") id='inputPuesto' value='" + data.puesto + "' placeholder='Puesto' required>"
    +               "</div>"
    
    +               "<label class='form'>Jornada</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputJornada'," + 1 +")id='inputJornada' value='" + data.jornada + "' placeholder='Jornada' required>"
    +               "</div>"
    
    +               "<label class='form'>&nbsp;</label>"
    +               "<div class='col-sm centrarDivTxt'>"
    +                       "<div type='submit' onclick='erpsil_guardarEditarEmpleado()' class='guardar-BtnVerde'>Guardar</div>"
    +                       "<div onclick='erpsil_listarEmpleado()' class='cancelar-BtnVerde'>Cancelar</div>"
    +               "</div>"
    +           "</div>"
    +       "</form>"
    +   "</div>"


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
            erpsil_modalBueno();
            erpsil_listarEmpleado();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Empleado No Agregado" + d);
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

function erpsil_listarEmpleado() {
    erpsil_CleanChart();
    var empleadoData = {
        w: "erpsil_empleado",
        r: "mostrar_empleado"
    };

    calaApi_postRequest(empleadoData, function (d) {
 
        var MostrarEmpleadoWindow = ""
        +   "<h2 class='tituloTablas'>Lista de Empleados</h2><br><br>"
        +   "<div  class='form-horizontal-5'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='Empleados' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Nombre</th>"
        +                "<th>Primer Apellido</th>"
        +                "<th>Segundo Apellido</th>"
        +                "<th>Teléfono</th>"
        +                "<th>Cédula</th>"
        +                "<th>Dirección</th>"
        +                "<th>Ingreso</th>"
        +                "<th>Obseración</th>"
        +                "<th>Puesto</th>"
        +                "<th>Jornada</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>"
        +       "</div>"
        +   "</div>"
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
        +                "<td> <div id='editar_empleado' onClick='erpsil_editarEmpleado(" + a.id_empleado + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onClick='erpsil_eliminarEmpleado("+ a.id_empleado +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
    }
}
MostrarEmpleadoWindow += ""
+            "</tr>"
+         "</table>"
+                "<td> <div id='editar_activos' onclick='erpsil_agregarEmpleadoWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
+                "<td> <div id='Reporte' onclick='erpsil_pdfEmpleados()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";



        erpsil_setContent(MostrarEmpleadoWindow);

    }, function (d) {
        console.log(d);

    });   
}

function erpsil_pdfEmpleados(){
/*console.log("debug");*/
    PdfDescargar('Empleados','Reporte de Empleados');
}

function erpsil_eliminarEmpleado(id){
    console.log(id);
    var req = {
        w: "erpsil_empleado",
        r: "eliminar_empleado",
        id:id
    };
    calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarEmpleado);
        //erpsil_listarEmpleado();
        //erpsil_modalBueno();
    }, function(){
        erpsil_modalMalo();
        console.log("No Eliminar!");
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
        erpsil_modalMalo();
        console.log("No Eliminar!");
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
        erpsil_modalBueno();
    }, function (d) {
        erpsil_modalMalo();
        console.log("No Agregado" + d);
    });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

/*********************************************************/
/*           Gestión Factura                             */
/*********************************************************/

function erpsil_listarFactura(){
    erpsil_CleanChart();
    var facturaData = {
        w:"erpsil_factura",
        r:"mostrar_factura"
    };

    calaApi_postRequest(facturaData, function (d) {
 
        var facturaWindow = ""
        +   "<h2 class='tituloTablas'>Lista de Facturas</h2><br><br>"
        +   "<div  class='form-horizontal-4'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='Factura' class='table table-striped table-hover'>"
        +           "<tr>"
        +               "<th>ID Factura</th>"
        +               "<th>Nombre Cliente</th>"
        +               "<th>Fecha</th>"
        +               "<th>Cantidad</th>"
        +               "<th>Detalle</th>"
        +               "<th>Total</th>"
     // +               "<th>Editar</th>"
     // +               "<th>Eliminar</th>"
        +            "</tr>";
        +       "</div>"
        +   "</div>"
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            facturaWindow += ""
    
        +            "<tr>"
        +                "<td> "+ a.id_factura +" </td>"
        +                "<td> "+a.id_cliente+" </td>"
        +                "<td> "+ a.stamp +" </td>"
        +                "<td> "+ a.detalle +" </td>"
        +                "<td> "+ a.total +" </td>"

        //+                "<td> <div id='editar_factura' onclick='erpsil_editarFactura(" + a.id_factura + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarFactura("+ a.id_factura +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                facturaWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='agregar_factura' onclick='erpsil_agregarFacturaWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +                "<td> <div onclick='erpsil_pdfFactura()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";

        erpsil_setContent(facturaWindow);
    }, function (d) {
        console.log(d);
        erpsil_modalMalo();
    });
}

function erpsil_pdfFactura(){
    //console.log("debug");
    PdfDescargar('Factura',"Reporte de Facturas");
}

function erpsil_agregarFacturaWindow() {
    erpsil_CleanChart();
    var facturaData = {
        w: "erpsil_cliente",
        r: "mostrar_cliente"
    };

    calaApi_postRequest(facturaData, function(d){
        var selectD = "<select class='select' id='inputDrow'> ";
        var i = 1;
        for(a in d.resp){ 
            var x = d.resp[a];
            selectD += "<option>" +i+"- Cliente:" + x.nombre +" - id =("+x.id_cliente+")</option>";
            i++;
        }
        
        selectD += "</select>";
        
        var agregarFacturaWindow = ""
        
        +   "<div id='Prueba' class='container centrarDivTxt'>"
        +       "<h2 class='tituloTablas' style = 'margin-bottom: 40px; margin-top: 40px;'>Agregar Factura</h2>"
        +       "<div class='form-horizontal'>"

        +           "<label class='form'>Nombre del Cliente</label>"
        +           "<div class='col-sm'>"
        +                   selectD
        +           "</div>"
        
        +           "<label class='form'>Fecha</label>"
        +           "<div class='col-sm'>"
        +                   "<input type='date' class='date' placeholder='Fecha' required='required' id='inputStamp'>"
        +           "</div>"
        +       "</div>"

        +       "<hr/>"
        +       "<h2 class='tituloTablas'>Líneas de Detalle</h2>"
        +       "<hr/>"

+       "<div class='form-horizontal-2'>"
        +           "<div class='table-responsive'>"
        +               "<table class='' >"
        +                   "<thead class='tituloTablas'>"
        +                       "<tr>"
        +                           "<th>Producto</th>"
        +                           "<th>Código de Referencia</th>"
        +                           "<th>Cantidad</th>"
        +                           "<th>Precio Unitario</th>"
        +                           "<th>Descuento</th>"
        +                           "<th>I.V.</th>"
        +                           "<th>SubTotal</th>"
        +                           "<th>Precio Total</th>"
        +                           "<th>Acción</th>"
        +                       "</tr>"
        +                   "</thead>"
        +                   "<tbody id='tabla'></tbody>"
        +                   "<tfoot>"
        +                       "<td class='form-2'></td>"
        +                       "<td class='form-2'></td>"
        +                       "<td class='form-2'></td>"
        +                       "<td class='form-2'></td>"
        +                       "<td class='form-2'></td>"
        +                       "<td class='form-2'></td>"
        +                       "<td class='form-2'></td>"
        +                       "<td class='form-2'></td>"
        +                       "<td>"
        +                           "<button onclick='erpsil_addRow();' class='agregar-BtnVerde' data-toggle='tooltip' data-placement='bottom' title='' data-original-title='Agregar'>"
        +                                   "Agregar"
        +                           "</button>"
        +                       "</td>"
        +                 "</tfoot>"
        +             "</table>"
        +         "</div>"
        +       "</div>"
        +       "<hr/>"
        +       "<div class='row'>"
        +           "<div class='col-md-6'>"
        +               "<div class='form'> "
        +                   "<label class='tituloTablas' for='note'>Descripción:    </label>"
        +                   "<hr/>"
        +                   "<textarea readonly name='note' id='note' cols='50' rows='10'></textarea>"
        +               "</div>"
        +           "</div>"
        +           "<div class='form-horizontal-3'>"
        +               "<div class='card card-body card-subtotals bg-light'>"
        +                   "<ul class='list-unstyled'>"
        +                       "<li>"
        +                           "<div class='form' >Cantidad de Productos</div>"
        +                           "<div><input value='0' readonly type='text' id='cantidad' placeholder=''></div>"
        +                       "</li>"                                                
        +                       "<li>"
        +                           "<div class='form'>Subtotal</div>"
        +                           "<div><input value='0' readonly type='text' id='subTotal1'  placeholder=''></div>"
        +                       "</li>"
        +                       "<li>"
        +                           "<div class='form'>Descuento Total</div>"
        +                           "<div><input value='0' readonly type='text' id='descuenteTotal'  placeholder=''></div>"
        +                       "</li>"
        +                       "<li>"
        +                           "<div class='form'>Impuesto Total</div>"
        +                           "<div><input value='0' readonly type='text' id='impuestoTotal'  placeholder='></div>"
        +                       "</li>"
        +                   "</ul>"
        +                   "<hr/>"
        +                   "<div class='d-flex align-items-center '>"
        +                       "<hr/>"
        +                       "<strong class='form'>Total:   </strong>"
        +                       "<strong><input value='0' readonly type='text' id='total'  placeholder='></strong>"
        +                   "</div>" 
        
        +                   "<div class='form'>"
        +                       "<hr/>"
        +                       "<button onclick='erpsil_agregarFactura()' class='generarFactura-BtnVerde'' >Generar Factura</button>"
        +                       "<button onclick='erpsil_pdfFacturaInside()' class='factura-BtnVerde' >Factura</button>"
        +                   "</div>"
        +               "</div>"
        +           "</div>"
        +       "</div>"
        +   "</div>"

        erpsil_setContent(agregarFacturaWindow);
        //Eliminar el grafico
        erpsil_CleanChart();
    }, function(){
        erpsil_modalMalo();
        console.log("Error!");
    });
}

function erpsil_agregarRow(){


  
}

function erpsil_addRow() {
    erpsil_CleanChart();
    $("#tabla").append('<tr >' +
            '          <td onfocusout="erpsil_formUpdate()">' +
            '              <input  onchange="erpsil_formUpdate();" type="text" class="form-control" placeholder="Cámara">' +
            '          </td>' +
            '          <td ><input onfocusout="erpsil_formUpdate()" onchange="erpsil_formUpdate();" type="text" class="form-control"  placeholder=""></td>' +
            '          <td ><input onfocusout="erpsil_formUpdate()" value="0" onchange="erpsil_formUpdate();" type="number" class="form-control"  placeholder=""></td>' +
            '          <td ><input onfocusout="erpsil_formUpdate()"  value="0" onchange="erpsil_formUpdate();" type="number" class="form-control" placeholder=""></td>' +
            '          <td ><input onfocusout="erpsil_formUpdate()" value="0" onchange="erpsil_formUpdate()" type="number" class="form-control"  placeholder=""></td>' +
            '          <td ><input onfocusout="erpsil_formUpdate()"  value="13" onchange="erpsil_formUpdate()" type="number" class="form-control"  placeholder=""></td>' +
            '          <td ><input onfocusout="erpsil_formUpdate()" value="0" readonly onchange="erpsil_formUpdate()" type="number" class="form-control"  placeholder=""></td>' +
            '          <td ><input onfocusout="erpsil_formUpdate()" value="0" readonly onchange="erpsil_formUpdate()" type="number" class="form-control"  placeholder=""></td>' +
            '          <td class="text-center">' +
            '              <button style=onfocusout="erpsil_formUpdate()" onclick="$(this).parent().parent().remove();erpsil_formUpdate();" class="borrar-BtnVerde" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Borrar">' +
            '                  Borrar'+
            '              </button>' +
            '          </td>' +
            '      </tr>');
}

//Esta funcion resive 3 parametros
//table=tabla de donde vamos a contar
//columna=columnas a sumar
//id=id de html que vamos a remplazar
function erpsil_sumar_call(table, columna, id) {
    var cantidadLineas = document.getElementById(table).getElementsByTagName("tr").length;
    var cantidadColumnas = document.getElementById(table).rows[0].getElementsByTagName("td").length - 1;
    var data = [];
    for (i = 0; i < cantidadLineas; i++) {
        data[i] = [];
        for (j = 0; j < cantidadColumnas; j++) {
            data[i][j] = document.getElementById(table).rows[i].cells[j].getElementsByTagName('input')[0].value;
        }
    }
    var total = 0;
    var cantidad = 0;
    columna = parseInt(columna);
    for (r = 0; r < cantidadLineas; r++) {
        total = parseInt(total) + parseInt(data[r][columna]);
        cantidad = parseInt(cantidad) + parseInt(data[r][2]);
    }

    document.getElementById("total").value = total;
    document.getElementById("cantidad").value = cantidad;

}

//Esta funcion recibe 3 parametros
//table=tabla de donde vamos a contar
//columna=columnas a sumar
//id=id de html que vamos a remplazar
function erpsil_CalculaSubTotal(table, columna, id) {
    var cantidadLineas = document.getElementById(table).getElementsByTagName("tr").length;
    var cantidadColumnas = document.getElementById(table).rows[0].getElementsByTagName("td").length - 1;
    var data = [];
    for (i = 0; i < cantidadLineas; i++) {
        data[i] = [];
        for (j = 0; j < cantidadColumnas; j++) {
            data[i][j] = document.getElementById(table).rows[i].cells[j].getElementsByTagName('input')[0].value;
        }
    }
    var subTotal = 0;
    columna = parseInt(columna);
    for (r = 0; r < cantidadLineas; r++) {
        var precioTotal = (data[r][2] * parseInt(data[r][3])); // cantidad * unidad
        var descuento = precioTotal * (parseInt(data[r][4]) / 100);
        var IV = precioTotal * parseInt(data[r][5]) / 100;
        var subTotal = precioTotal - descuento + IV;
    }
    document.getElementById("subTotal1").value = subTotal;
    //document.getElementById("subTotal1").value = subTotal1;
}

function erpsil_CalculaLineas(table) {
    var cantidadLineas = document.getElementById(table).getElementsByTagName("tr").length;
    var cantidadColumnas = document.getElementById(table).rows[0].getElementsByTagName("td").length - 1;
    var data = [];
    for (i = 0; i < cantidadLineas; i++) {
        data[i] = [];
        for (j = 0; j < cantidadColumnas; j++) {
            data[i][j] = document.getElementById(table).rows[i].cells[j].getElementsByTagName('input')[0].value;
        }
    }
    var precioTotal = 0;
    var subTotal = 0;
    var subTotal1 = 0;
    var subTotal2 = 0;
    var descuento1 = 0;
    var productos = new Array();


    for (r = 0; r < cantidadLineas; r++) {
        precioTotal = (data[r][2] * parseInt(data[r][3])); // cantidad * unidad
        subTotal1 = parseInt(data[r][6]);
        var descuento = precioTotal * (parseInt(data[r][4]) / 100);
        var IV = precioTotal * parseInt(data[r][5]) / 100;
        var subTotal = precioTotal - descuento + IV;
        var subTotal2 = subTotal2 + subTotal1;
        descuento1 = descuento1 + descuento; 


        //productos = [data[r][0]];
        productos.push(data[r][0]);
        console.log("ACÁ está la jugada= "+ productos[1]);
        
        document.getElementById(table).rows[r].cells[6].getElementsByTagName('input')[0].value=precioTotal;
        document.getElementById(table).rows[r].cells[7].getElementsByTagName('input')[0].value=subTotal;
        document.getElementById("subTotal1").value = subTotal2;
        document.getElementById("descuenteTotal").value = descuento1;
        document.getElementById("note").value = productos;
        
    }
}

function erpsil_formUpdate() {
    erpsil_sumar_call('tabla', 0, 'producto');
    erpsil_sumar_call('tabla', 2, 'cantidad');
    erpsil_sumar_call('tabla', 4, 'descuenteTotal');
    erpsil_sumar_call('tabla', 5, 'impuestoTotal');
    erpsil_sumar_call('tabla', 6, 'subTotal');
    erpsil_sumar_call('tabla', 7, 'total');
    erpsil_CalculaLineas('tabla');
}

function erpsil_sumaFactura(){
    var total = 0;
    
    var cantidad =  $("#inputCantidad").val();
    var precio = $("#inputDescr").val();

    if(cantidad == null || precio == null){
        document.getElementById('inputCantidad').value = "Ingresar un Valor";
        document.getElementById('inputDescr').value = "Ingresar un Valor";
    }else{
        total = cantidad * precio;
        document.getElementById("inputTotal").value = total;
    }
}

function erpsil_agregarFactura(){

    var d = $("#inputDrow");
    var id = d[0].value;
    id = id.split("(")[1].split(")")[0];
    
    var id_cliente = id;
    var stamp = $("#inputStamp").val();
    var cantidad = $("#cantidad").val();
    var descripcion = $("#note").val();
    var subTotal = $("#subTotal1").val();
    var descuentoTotal = $("#descuenteTotal").val();
    var total = $("#total").val();
    

    if(id_cliente != "" && stamp != "" && cantidad != "" && descripcion != "" && subTotal != "" && total != "" && descuentoTotal != ""){
        
        var facturaData = {
            w: "erpsil_factura",
            r: "agregar_factura",
            id_cliente:id_cliente,
            stamp:stamp,
            cantidad:cantidad,
            descripcion:descripcion,
            subTotal:subTotal,
            descuentoTotal:descuentoTotal,
            total:total

        };  
        
        calaApi_postRequest(facturaData, function (d) {
            console.log(facturaData);
            erpsil_modalBueno();
            erpsil_listarFactura();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Factura No Agregada");
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

function erpsil_pdfFacturaInside(){
    console.log("debug");
        DescargarPDF('Prueba',"Factura");
}

function erpsil_eliminarFactura(id){
    var req = {
        w: "erpsil_factura",
        r: "eliminar_factura",
        id:id
    };

    calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarFactura);
        //erpsil_modalBueno();
        //erpsil_listarFactura();
    }, function(){
        erpsil_modalMalo();
        console.log("Factura No Eliminada");
    });
    
}

function erpsil_editarFacturaWindow(data) {
    erpsil_CleanChart();
    var editarFacturaWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Editar Factura</h2>"
    +       "<form action='' method='post'>"
    +           "<div class='form-horizontal'>"
 
    +               "<label class='form'>ID Factura</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputId_factura' value='" + data.id_factura + "'  placeholder='ID Factura' disabled>"
    +               "</div>"
 
    +               "<label class='form'>Cliente</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputCliente'," + 2 +") id='inputCliente' value='" + data.id_cliente + "' placeholder='Cliente' required>"
    +               "</div>"
 
    +               "<label class='form'>Descripción</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputDescripcion' value='" + data.descripcion + "' placeholder='Descripción' required>"
    +               "</div>"
 
    +               "<label class='form'>Cantidad</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputCantidad'," + 2 +") id='inputCantidad' value='" + data.cantidad + "' placeholder='Cantidad' required>"
    +               "</div>"
 
    +               "<label class='form'>Total</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputTotal'," + 2 +") id='inputTotal' value='" + data.total + "' placeholder='Total' required>"
    +               "</div>"
 
  //+               "<label class='form'>stamp</label>"
  //+               "<div class='col-sm'>"
  //+                       "<input type='date' id='inputstamp' value='" + data.stamp + "' placeholder='stamp' required>"
  //+               "</div>"
 
    +               "<label class='form'>&nbsp;</label>"
    +               "<div class='col-sm centrarDivTxt'>"
    +                       "<div type='submit' onclick='erpsil_guardarEditarFactura()' class='guardar-BtnVerde' >Guardar</div>"
    +                       "<div onclick='erpsil_listarFactura()' class='cancelar-BtnVerde'>Cancelar</div>"
    +               "</div>"
    +           "</div>"
    +       "</form>"
    +   "</div>"

erpsil_setContent(editarFacturaWindow);
}

function erpsil_editarFactura(id){
    var req = {
        w: "erpsil_factura",
        r: "obtener_factura",
        id:id
    };

    $("#editar_factura").empty();
    $("#editar_factura").append("Cargando...");

    calaApi_postRequest(req, function(d){
        erpsil_editarFacturaWindow(d.resp);
    }, function(){
        erpsil_modalMalo();
        console.log("No Eliminar");
    });
}

function erpsil_guardarEditarFactura(){

    var idFactura = $("#inputId_factura").val();
    var idCliente = $("#inputCliente").val();
    var descripcionFactura = $("#inputDescripcion").val();
    var cantidadFactura = $("#inputCantidad").val();
    var totalFactura = $("#inputTotal").val();
    var stampFactura = $("#inputstamp").val();

    if(idFactura != "" && idCliente != "" && descripcionFactura != "" && cantidadFactura != "" 
    && totalFactura != "" && stampFactura != ""){

    var facturaData = {
        w: "erpsil_factura",
        r: "agregarEditar_factura",
        id_factura:idFactura,
        id_cliente:idCliente, 
        descripcion:descripcionFactura,
        cantidad:cantidadFactura,
        total:totalFactura,
        stamp:stampFactura
    };
    calaApi_postRequest(facturaData, function (d) {
        erpsil_listarFactura();
        erpsil_modalBueno();
    }, function (d) {
        erpsil_modalMalo();
        console.log("No Agregado" + d);
    });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }


}

/*********************************************************/
/*           Gestion Contabilidad                        */
/*********************************************************/
function erpsil_listarContabilidad() { 
    erpsil_CleanChart();
    var contabilidadData = {
        w: "erpsil_contabilidad",
        r: "mostrar_contabilidad"
    };
    calaApi_postRequest(contabilidadData, function (d) {
 
        var MostrarContabilidadWindow = ""

        +   "<h2 class='tituloTablas'>Contabilidad</h2><br><br>"
        +   "<div  class='form-horizontal-4'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='Contabilidad' class='table table-striped table-hover'>"
        +                "<tr>"
        +                    "<th>Total de Facturas</th>"
        +                    "<th>Total a Pagar</th>"
        +                    "<th>Total en Planillas </th>"
        +                    "<th>Deuda Total de la Empresa (Pagos + Planilla) </th>"
        +                    "<th>Total de Clientes </th>"
        +                    "<th>Total de Articulos Vendidos </th>"
        +               "</tr>"
        +           "</div>"
        +       "</div>"
        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarContabilidadWindow += ""
    
        +            "<tr>"
        +                "<td> "+ a.total_factura+" </td>"
        +                "<td> "+ a.total_pagar+" </td>"
        +                "<td> "+ a.total_planilla+" </td>"
        +                "<td> "+ a.total+" </td>"
        +                "<td> "+ a.total_cliente +" </td>"
        +                "<td> "+ a.total_articulos_vendidos +" </td>"
        +            "</tr>"      
                }
            }
        MostrarContabilidadWindow += ""
        +            "</table>" 
        +       "<td> <div id='reporte_contabilidad' onclick='erpsil_pdfPlanilla()' class='reporte-BtnVerde'>Reporte</div></td>" 
        +   "</div>";
        erpsil_setContent(MostrarContabilidadWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_pdfContabilidad(){
    //console.log("debug");
    PdfDescargar('Contabilidad',"Reporte de Contabilidad");
}

/*********************************************************/
/*           Gestión Planilla                            */
/*********************************************************/

function erpsil_listarPlanilla() {
    erpsil_CleanChart();
    var planillaData = {
        w: "erpsil_planilla",
        r: "mostrar_planilla"
    };

    calaApi_postRequest(planillaData, function (d) {
 
        var MostrarPlanillaWindow = ""

        +   "<h2 class='tituloTablas'>Lista de Planillas</h2><br><br>"
        +   "<div  class='form-horizontal-4'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='Planilla' class='table table-striped table-hover'>"
        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Empleado</th>"
        +                "<th>Salario Bruto</th>"
        +                "<th>CCSS</th>"
        +                "<th>Rebajas </th>"
        +                "<th>Salario Neto</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>"
        +       "</div>"

        if(d.resp != ERROR_DB_NO_RESULTS_FOUND){
                    for(x in d.resp){
                            var a = d.resp[x];
                            MostrarPlanillaWindow += ""
    
        +            "<tr>"
        +                "<td> "+ a.id_planilla +" </td>"
        +                "<td> "+ a.id_empleado +" </td>"
        +                "<td> "+ a.salario_bruto +" </td>"
        +                "<td> "+ a.ccss +" </td>"
        +                "<td> "+ a.rebaja +" </td>"
        +                "<td> "+ a.salario_neto +" </td>"
        +                "<td> <div id='editar_planilla' onClick='erpsil_editarPlanilla(" + a.id_planilla + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onClick='erpsil_eliminarPlanilla("+ a.id_planilla +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
    }
}
    MostrarPlanillaWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='agregar_planilla' onclick='erpsil_agregarPlanillaWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +                "<td> <div id='reporte_planilla' onclick='erpsil_pdfPlanilla()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarPlanillaWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_pdfPlanilla(){
    /*console.log("debug");*/
    PdfDescargar('Planilla','Reporte de Planillas');
}

function erpsil_agregarPlanillaWindow() {

    var planillaData = {
        w: "erpsil_empleado",
        r: "mostrar_empleado"
    };

    calaApi_postRequest(planillaData, function(d){
        erpsil_CleanChart();
       var selectD = "<select class='select' id='inputDrow'> ";
        var i = 1;
        for(a in d.resp){ 
            var x = d.resp[a];
            selectD += "<option>" + i + " - Nombre de Empleado: " + x.nombre + " - id = (" + x.id_empleado + ")</option>";
            i++;
        }
        selectD += "</select>";

        //console.log(d);
        var agregarPlanillaWindow = ""

        +   "<div class='container centrarDivTxt'>"
        +       "<h2 class='tituloTablas' style = 'margin-bottom: 40px; margin-top: 40px;'>Agregar Planilla</h2>"
        +       "<div class='form-horizontal'>"
        
        +           "<label class='form'>ID Empleado</label>"
        +           "<div class='col-sm'>"
        +                   selectD
        +           "</div>"

        +           "<label class='form'>Salario Bruto</label>"
        +           "<div class='col-sm'>"
        +                   "<input type='text' placeholder='Salario Bruto' required='required' onkeyup = erpsil_validacionTxt('inputSalaB'," + 2 +") id='inputSalaB'>"
        +           "</div>"

        +           "<label class='form'>CCSS</label>"
        +           "<div class='col-sm'>"
        +                   "<input type='text' placeholder='CCSS' required='required' onkeyup = erpsil_validacionTxt('inputccss'," + 2 +") id='inputccss'>"
        +           "</div>"

        +           "<label class='form'>Rebaja</label>"
        +           "<div class='col-sm'>"
        +                   "<input type='text' placeholder='Rebaja' required='required' onkeyup = erpsil_validacionTxt('inputRebaja'," + 2 +") id='inputRebaja'>"
        +           "</div>"

        +           "<label class='form'>Salario Neto</label>"
        +           "<div class='col-sm'>"
        +                   "<input type='text' placeholder='Salario Neto' required='required' onkeyup = erpsil_validacionTxt('inputSalaN'," + 2 +") id='inputSalaN'>"
        +           "</div>"

        +           "<div class='col-sm centrarDivTxt'>"
        +                   "<div onClick='erpsil_agregarPlanilla()' class='agregar-BtnVerde'>Agregar</div>"
        +                   "<div onClick='erpsil_listarPlanilla()' class='regresar-BtnVerde'>Regresar</div>"
        +           "</div>"
        +       "</div>"
        +   "</div>"
        //console.log(selectD);  
        erpsil_setContent(agregarPlanillaWindow);
    }, function(){
        console.log("Error!");
    });

}

function erpsil_agregarPlanilla(){

    var d = $("#inputDrow");
    var id = d[0].value;
    id = id.split("(")[1].split(")")[0];

    var idEmpleado = id;
    var salarioBruto = $("#inputSalaB").val();
    var ccss = $("#inputccss").val();
    var Rebaja = $("#inputRebaja").val();
    var SalarioNeto = $("#inputSalaN").val();
    

    if( idEmpleado != "" && salarioBruto != "" && ccss != "" && Rebaja != "" && SalarioNeto != ""  ){
        
        var planillaData = {
            w: "erpsil_planilla",
            r: "agregar_planilla",
            id_empleado:idEmpleado,
            salario_bruto:salarioBruto,
            ccss:ccss,
            rebaja:Rebaja,
            salario_neto:SalarioNeto

        };  
        
        calaApi_postRequest(planillaData, function (d) {
            console.log(planillaData);
            erpsil_modalBueno();
            erpsil_listarPlanilla();
        }, function (d) {
            erpsil_modalMalo();
            console.log("Planilla No Agregada");
        });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

function erpsil_eliminarPlanilla(id){
    var req = {
        w: "erpsil_planilla",
        r: "eliminar_planilla",
        id:id
    };

    calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarPlanilla);
        //erpsil_listarPlanilla();
    }, function(){
        erpsil_modalMalo();
        console.log("Planilla No Eliminada");
    });
    
}

function erpsil_editarPlanillaWindow(data) {
    erpsil_CleanChart();
    var editarPlanillaWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Editar Planilla</h2>"
    +       "<form  action='' method='post'>"
    +           "<div class='form-horizontal'>"
    
    +               "<label class='form'>ID</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' id='inputId_planilla' value='" + data.id_planilla + "'  placeholder='ID' disabled>"
    +               "</div>"
    
    +               "<label class='form'>Empleado</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputEmpleado'," + 2 +") id='inputEmpleado' value='" + data.id_empleado + "' placeholder='Cliente' required>"
    +               "</div>"
    
    +               "<label class='form'>Salario Bruto</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputSalariobruto'," + 2 +") id='inputSalariobruto' value='" + data.salario_bruto + "' placeholder='Descripcion' required>"
    +               "</div>"
    
    +               "<label class='form'>CCSS</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputCcss'," + 2 +") id='inputCcss' value='" + data.ccss + "' placeholder='Cantidad' required>"
    +               "</div>"
    
    +               "<label class='form'>Rebajas</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputRebaja'," + 2 +") id='inputRebaja' value='" + data.rebaja + "' placeholder='Rebajas' required>"
    +               "</div>"
    
    +               "<label class='form'>Salario Neto</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputSalarioneto'," + 2 +") id='inputSalarioneto' value='" + data.salario_neto + "' placeholder='Salario Neto' required>"
    +               "</div>"
    
    +               "<label class='form'>&nbsp;</label>"
    +               "<div class='col-sm centrarDivTxt'>"
    +                       "<div type='submit' onclick='erpsil_guardarEditarPlanilla()' class='guardar-BtnVerde' >Guardar</div>"
    +                       "<div onclick='erpsil_listarPlanilla()' class='cancelar-BtnVerde'>Cancelar</div>"
    +               "</div>"
    +           "</div>"
    +       "</form>"
    +   "</div>"


erpsil_setContent(editarPlanillaWindow);
}

function erpsil_editarPlanilla(id){
    var req = {
        w: "erpsil_planilla",
        r: "obtener_planilla",
        id:id
    };

    $("#editar_planilla").empty();
    $("#editar_planilla").append("Cargando...");

    calaApi_postRequest(req, function(d){
        erpsil_editarPlanillaWindow(d.resp);
    }, function(){
        erpsil_modalMalo();
        console.log("No Eliminar");
    });
}

function erpsil_guardarEditarPlanilla(){

    var idPlanilla = $("#inputId_planilla").val();
    var idEmpleado = $("#inputEmpleado").val();
    var salariobrutoPlanilla = $("#inputSalariobruto").val();
    var ccssPlanilla = $("#inputCcss").val();
    var rebajaPlanilla = $("#inputRebaja").val();
    var salarionetoPlanilla = $("#inputSalarioneto").val();

    if(idPlanilla != "" && idEmpleado != "" && salariobrutoPlanilla != "" && ccssPlanilla != "" 
    && rebajaPlanilla != "" && salarionetoPlanilla != ""){

    var planillaData = {
        w: "erpsil_planilla",
        r: "agregarEditar_planilla",
        id_planilla:idPlanilla,
        id_empleado:idEmpleado, 
        salario_bruto:salariobrutoPlanilla,
        ccss:ccssPlanilla,
        rebaja:rebajaPlanilla,
        salario_neto:salarionetoPlanilla
    };
    calaApi_postRequest(planillaData, function (d) {
        erpsil_listarPlanilla();
        erpsil_modalBueno();
    }, function (d) {
        erpsil_modalMalo();
        console.log("No Agregado" + d);
    });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }


}
/*********************************************************/
/*                 Gestion Usuario                       */
/*********************************************************/
//Req directa
function agregarUsuario(){
    var req = {

        fullName: "Daniel",
        userName: "olss",
        userEmail: "algkkkoff@aa.com",
        pwd: "123",
        about: "abc",
        userCountry: "cr"
    };

    calaApi_registerUser(req, function(a){
        console.log(a + "Login Exitoso");
    }, function(b){
        console.log(b + "Falla del Login");
    });
}

function erpsil_agregarUsuarioWindow(){
    erpsil_CleanChart();

    var agregarUsuarioWindow = ""

    +   "<div class='container centrarDivTxt'>"
    +   	"<h2 class='tituloTablas'>Agregar Usuario</h2><br><br>"
    +       "<div class='form-horizontal'>"
    +	        "<label class='form'>Nombre</label>"
    +		    "<div class='form'>"
    +			        "<input type='text' placeholder='Nombre' required='required' onkeyup = erpsil_validacionTxt('inputFullName'," + 1 +") id='inputFullName'>"
    +		    "</div>"

    +		    "<label class='form'>Nombre de Usuario</label>"
    +		    "<div class='form'>"
    +			        "<input type='text' placeholder='Nombre de Usuario' required='required' id='inputUserName'>"
    +		    "</div>"

    +           "<label class='form'>Email</label>"
    +		    "<div class='email'>"
    +			        "<input type='email' placeholder='Email' required='required' id='inputUserEmail'>"
    +		    "</div>"

    +		    "<label class='form'>Contraseña</label>"
    + 		    "<div class='form'>"
    +			        "<input type='password' placeholder='Contraseña' required='required' id='inputPwd'>"
    +		    "</div>"

    +		    "<label class='form'>Acerca de: </label>"
    +		    "<div class='form'>"
    +			        "<input type='text' placeholder='Acerca de: ' required='required' id='inputAbout'>"
    +		    "</div>"

    +		    "<label class='form'>País</label>"
    +		    "<div class='form'>"
    +			        "<input type='text' placeholder='País' required='required' onkeyup = erpsil_validacionTxt('inputUserCountry'," + 1 +") id='inputUserCountry'>"
    +		    "</div>"

    +           "<div class='col-sm centrarDivTxt'>"
    +			        "<div onClick='erpsil_agregarUsuario()' class='agregar-BtnVerde'>Agregar</div>"
    +			        "<div onClick='erpsil_listarUsuario()' class='regresar-BtnVerde'>Regresar</div>"
    +		    "</div>"
    +       "</div>"
    +	"</div>"
                       
    erpsil_setContent(agregarUsuarioWindow);
}

function erpsil_registrarUsuarioWindow(){
    erpsil_CleanChart();

    var agregarUsuarioWindow = ""

    +    "<div class='container centrarDivTxt'>"
    +		"<h2 class='tituloTablas'>Agregar Usuario</h2><br><br>"

    +		"<label class='col-sm-3 control-label'>Nombre</label>"
    +		"<div class='form-group'>"
    +			"<input type='text' class='form-control2' placeholder='Nombre' required='required' id='inputFullName'>"
    +		"</div>"

    +		"<label class='col-sm-3 control-label'>Nombre de Usuario</label>"
    +		"<div class='form-group'>"
    +			"<input type='text' class='form-control2' placeholder='Nombre de Usuario' required='required' id='inputUserName'>"
    +		"</div>"

    +           "<label class='col-sm-3 control-label'>Email</label>"
    +		"<div class='form-group'>"
    +			"<input type='text' class='form-control2' placeholder='Email' required='required' id='inputUserEmail'>"
    +		"</div>"

    +		"<label class='col-sm-3 control-label'>Contraseña</label>"
    + 		"<div class='form-group'>"
    +			"<input type='password' class='form-control2' placeholder='Contraseña' required='required' id='inputPwd'>"
    +		"</div>"

    +		"<label class='col-sm-3 control-label'>Acerca de: </label>"
    +		"<div class='form-group'>"
    +			"<input type='text' class='form-control2' placeholder='Acerca de: ' required='required' id='inputAbout'>"
    +		"</div>"

    +		"<label class='col-sm-3 control-label'>País</label>"
    +		"<div class='form-group'>"
    +			"<input type='text' class='form-control2' placeholder='País' required='required' id='inputUserCountry'>"
    +		"</div>"

    +        "<div class='col-sm centrarDivTxt'>"
    +			"<div onClick='erpsil_registrarUsuario()' class='agregar-BtnVerde'>Agregar</div>"
    +			"<div onClick='erpsil_loginWindow()' class='volver-BtnVerde'>Volver</div>"
    +		"</div>"
    +	"</div>"
                       
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
            //w: "erpsil_usuario", 
            //r: "agregar_Usuario",
            fullName:nombreUsuario, 
            userName:userUsuario,
            userEmail:emailUsuario,
            pwd:pwdUsuario,
            about:acercaUsuario,
            userCountry:countryUsuario
        };

        calaApi_registerUser(usuarioData, function(d){
            erpsil_modalBueno(); 
            erpsil_listarUsuario();
        }, function(d){
            erpsil_modalMalo();
            console.log("Error al Agregar Usuario" + d);
        })

    }else{
        console.log("Error");
    }

}

function erpsil_registrarUsuario(){
    var nombreUsuario = $("#inputFullName").val();
    var userUsuario = $("#inputUserName").val();
    var emailUsuario = $("#inputUserEmail").val();
    var pwdUsuario = $("#inputPwd").val();
    var acercaUsuario = $("#inputAbout").val();
    var countryUsuario = $("#inputUserCountry").val();

    if(nombreUsuario != "" && userUsuario != "" && emailUsuario != "" && 
    pwdUsuario != "" && acercaUsuario != "" && countryUsuario != ""){
        
        var usuarioData = {
            //w: "erpsil_usuario", 
            //r: "agregar_Usuario",
            fullName:nombreUsuario, 
            userName:userUsuario,
            userEmail:emailUsuario,
            pwd:pwdUsuario,
            about:acercaUsuario,
            userCountry:countryUsuario
        };

        calaApi_registerUser(usuarioData, function(d){
            erpsil_modalBueno(); 
            location.reload();
        }, function(d){
            erpsil_modalMalo();
            console.log("Error al Agregar Usuario" + d);
        })

    }else{
        console.log("Error");
    }

}

function erpsil_listarUsuario(){
    erpsil_CleanChart();
    var UsuarioData = {
        w: "erpsil_usuario",
        r: "mostrar_usuario"
    };

    calaApi_postRequest(UsuarioData, function (d) {
 
        var MostrarUsuarioWindow = ""

        +   "<h2 class='tituloTablas'>Lista de Usuarios</h2><br><br>"
        +   "<div  class='form-horizontal-4'>"
        +       "<div  class='table-responsive'>"
        +           "<table id='Usuario' class='table table-striped table-hover'>"

        +            "<tr>"
        +                "<th>ID</th>"
        +                "<th>Nombre</th>"
        +                "<th>Username</th>"
        +                "<th>Email</th>"
        +                "<th>Acerca de:</th>"
        +                "<th>País</th>"
        //+                "<th>Estatus</th>"
        +                "<th>Editar</th>"
        +                "<th>Eliminar</th>"
        +            "</tr>";
        +       "</div>"
        +   "</div>"
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
        //+                "<td> "+ a.status +" </td>"

        +                "<td> <div id='editar_activos' onclick='erpsil_editarUsuario(" + a.idUser + ")' class='editar-Btn'>Editar</div></td>"
        +                "<td> <div onclick='erpsil_eliminarUsuario("+ a.idUser +")' class='eliminar-Btn'>Eliminar</div></td>"
        +            "</tr>";
                    }
                }
                MostrarUsuarioWindow += ""
        +            "</tr>"
        +         "</table>"
        +                "<td> <div id='editar_activos' onclick='erpsil_agregarUsuarioWindow()' class='agregar-BtnVerde'>Agregar</div></td>"
        +                "<td> <div onclick='erpsil_pdfUsuarios()' class='reporte-BtnVerde'>Reporte</div></td>"
        +      "</div>";

        erpsil_setContent(MostrarUsuarioWindow);

    }, function (d) {
        console.log(d);
    });
}

function erpsil_pdfUsuarios(){
    /*console.log("debug");*/
    PdfDescargar('Usuario','Reporte de Usuarios');
}

function erpsil_eliminarUsuario(id){
    var req = {
        w: "erpsil_usuario",
        r: "eliminar_usuario",
        id:id
    };

    calaApi_postRequest(req, function(){
        erpsil_validacion(erpsil_listarUsuario);
        //erpsil_modalBueno();
        //erpsil_listarUsuario();
    }, function(){
        erpsil_modalMalo();
        console.log("Usuario No Eliminado");
    });
}

function erpsil_editarUsuarioWindow(data){
    erpsil_CleanChart();

    var editarUsuarioWindow = ""
    +   "<div class='container centrarDivTxt'>"
    +       "<h2 class='tituloTablas'>Editar Usuario</h2>"
    +       "<form  name='formUsuario' action='' method='post'>"
    +           "<div class='form-horizontal'>"

    +               "<label class='form'>Id</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputName'," + 1 +") id='inputId' value='" + data.idUser + "' disabled >"
    +               "</div>"

    +               "<label class='form'>Nombre</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputName'," + 1 +") id='inputName' value='" + data.fullName + "'  required>"
    +               "</div>"

    +               "<label class='form'>Nombre de usuario</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputUserName'," + 1 +") id='inputUserName' value='" + data.userName + "'  required>"
    +               "</div>"

    +               "<label class='form'>Email</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='text' onkeyup = erpsil_validacionTxt('inputEmail'," + 1 +") id='inputEmail' value='" + data.email + "' required>"
    +               "</div>"

    +               "<label class='form'>Contraseña</label>"
    +               "<div class='col-sm'>"
    +                       "<input type='checkbox'name='opcion' onclick='habilitar()'> <label class='form-3'>Marque la casilla si desea cambiar la contraseña?</label><br>"
    +                       "<input type='text' name ='campoPwd' id='inputPwd' value='' class='oculto form-control' placeholder='Este campo está deshabilitado' disabled>"
    +               "</div>"

    +               "<label class='form'>&nbsp;</label>"
    +               "<div class='col-sm centrarDivTxt'>"
    +                       "<div type='submit' onclick='erpsil_guardarEditarUsuario()' class='guardar-BtnVerde' >Guardar</div>"
    +                       "<div onclick='erpsil_listarUsuario()' class='cancelar-BtnVerde'>Cancelar</div>"
    +               "</div>"
    +           "</div>"
    +       "</form>"
    +   "</div>"
    
    erpsil_setContent(editarUsuarioWindow);

}

function erpsil_editarUsuario(id){
    var req = {
        w: "erpsil_usuario",
        r: "obtener_usuario",
        //w: "users",
        //r: "users_get_my_details",
        id:id,
    };
    
    //$("#editar_usuario").empty();
    //$("#editar_usuario").append("Cargando...");
    
    calaApi_postRequest(req, function(d){
        erpsil_editarUsuarioWindow(d.resp);
    }, function(){
        erpsil_modalMalo();
    });
}

function erpsil_guardarEditarUsuario(){

    var idUsuario = $("#inputId").val();
    var nombreUsuario = $("#inputName").val();
    var Username = $("#inputUserName").val();
    var emailUsuario = $("#inputEmail").val();
    var pwdUsuario = $("#inputPwd").val();


    if(idUsuario != "" && nombreUsuario != "" && emailUsuario != "" && Username != ""){

    var userData = {
        w: "users",
        r: "users_update_profile",
        idUser:idUsuario,
        fullName:nombreUsuario, 
        userName:Username,
        email:emailUsuario,
        pwd:pwdUsuario
    };
    calaApi_postRequest(userData, function (d) {
        console.log("listo");
        erpsil_listarUsuario();
        erpsil_modalBueno();
    }, function (d) {
        erpsil_modalMalo();
    });
    } else {
        erpsil_modalMalo();
        console.log("Error!");
    }
}

function erpsilRecoveryPwdWindow(){
    erpsil_CleanChart();
        //var loginWindow = "Aca va la ventana de login";
        var recoveryPwdWindow = ""

        +   "<div class='container centrarDivTxt'>"
        +	    "<h2 class='tituloTablas'>Recuperar Password</h2><br><br>"
        +		"<div class='form-horizontal'>"
        
        +		    "<label class='form'>Nombre de Usuario</label>"
        +		    "<div class='form'>"
        +			        "<input type='text' placeholder='Nombre de usuario' required='required' id='inputUserName'>"
        +		    "</div>"
    
        +           "<div class='col-sm centrarDivTxt'>"
        +			        "<div onClick='erpsilRecoveryPwd()' class='agregar-BtnVerde'>Agregar</div>"
        +			        "<div onClick='erpsil_loginWindow()' class='regresar-BtnVerde'>Regresar</div>"
        +		    "</div>"
        +	    "</div>"
                           
        erpsil_setContent(recoveryPwdWindow);
}

function erpsilRecoveryPwd(){

    var userUsuario = $("#inputUserName").val();

    
    calaApiApi_recoverPwd(userUsuario, function(){
        console.log(userUsuario);
        erpsil_loginWindow();
    }, function(){
        console.log("No Funcionó");
    });
}

//Habilitar con el checkbox el campo de la contraseña
function habilitar() {
    document.formUsuario.campoPwd.disabled = !document.formUsuario.campoPwd.disabled
    document.formUsuario.campoPwd.placeholder = "Nueva Contraseña"
}

/*********************************************************/
/*                 Otras funciones                       */
/*********************************************************/

function erpsil_validacionTxt(id, type = 1){
    // 1 = Letras
    // 2 = Numeros 
    var string = $("#" + id).val();
    var isNum = false;
    var fString = "";
    for(s in string){
        var letra = string[s];
        var scii = letra.charCodeAt(0);
        if(scii >= 48 && scii <= 57){  
            if(type != 2){
                letra = "";
            }
        }else if(type != 1){
            letra = "";
        }

        if(letra != ""){
            fString += letra;
        }
    }
    $("#" + id).empty();
    $("#" + id).val(fString);
}

function erpsil_setContent(content) {
    $("#erpsil_content").empty();
    $("#erpsil_content").append(content);
}

function erpsil_setModal(content) {
    $("#erpsil_modal").empty();
    $("#erpsil_modal").append(content);
}

function erpsil_CleanChart(){
    
    /* para esconder y no clean
    var pieChartContent = document.getElementById('myChart');
    pieChartContent.innerHTML = '&nbsp;';
    $("#myChart").empty();
    $('#myChart').append('<canvas id="myChart" width="300" height="300"><canvas>');

    ctx = $("#myChart").get(0).getContext("2d");        
    var myPieChart = new Chart(ctx);
    */

    //para clean el canavas
   //var ctx = document.getElementById('myChart').getContext('2d');
   //if (window.grafica) {
    //   window.grafica.clear();
    //   window.grafica.destroy();
   //}
   //window.grafica = new Chart(ctx, {});
   //event.preventDefault();
   var parent = document.getElementById('canvas_div');
   var child = document.getElementById('myChart');          
   parent.removeChild(child);            
   parent.innerHTML ='<canvas id="myChart" style="height:100; width:100;"></canvas>';             
   return;
}

function erpsil_debug(mensaje) {
    if (debug) {
        console.log("ERPSIL >> " + mensaje);
    }
}
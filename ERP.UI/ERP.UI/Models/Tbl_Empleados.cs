using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace ERP.UI.Models
{
    public class Tbl_Empleados
    {
        [AutoIncrement]
        public int Id_Empleado { get; set; }
        public string Nombre { get; set; }
        public string Apellido1 { get; set; }
        public string Apellido2 { get; set; }
        public int Cedula { get; set; }
        public int Telefono { get; set; }
        public DateTime Fecha_Ingreso { get; set; }
        public string Observaciones { get; set; }
        public string Rol { get; set; }
        public bool Despedido { get; set; }

    }
}
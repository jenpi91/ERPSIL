using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack.DataAnnotations;
using System.ComponentModel.DataAnnotations;
namespace ERP.UI.Models
{
    public class Tbl_Cliente
    {
        [AutoIncrement]
        public int Id_Cliente { get; set; }

        public string Nombre { get; set; }

        public string Apellido1 { get; set; }

        public string Apellido2 { get; set; }

        public string Tienda { get; set; }

        public string Telefono { get; set; }

        public string Direccion { get; set; }

        public string Correo_Electronico { get; set; }

        public bool? Desabilitado { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace ERP.UI.Models
{
    public class Tbl_Inventario
    {
        [AutoIncrement]
        public int Id_Inventario { get; set; }
        public string Nombre { get; set; }
        public int Cantidad { get; set; }
        public DateTime Fecha_venci { get; set; }

    }

}
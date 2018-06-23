using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServiceStack.DataAnnotations;


namespace ERP.DATA
{
    [Alias("Tbl_Empleados")]
    public class Empleado
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

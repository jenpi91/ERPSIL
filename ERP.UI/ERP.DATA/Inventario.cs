using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServiceStack.DataAnnotations;

namespace ERP.DATA
{
    [Alias("Tbl_Inventario")]
    public class Inventario
    {
        [AutoIncrement]
        public int Id_Inventario { get; set; }
        public string Nombre { get; set; }
        public int Cantidad { get; set; }
        public DateTime Fecha_venci { get; set; }
    }
}

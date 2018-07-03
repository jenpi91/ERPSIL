using ServiceStack.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.DATA
{
    [Alias("Tbl_Proveedor")]
    public class Proveedor
    {
        [AutoIncrement]
        public int Id_Proveedor { get; set; }

        public string Nombre_Empresa { get; set; }

        public string Direccion { get; set; }

        public int Telefono { get; set; }

        public bool? Desabilitado { get; set; }

    }
}

using System;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ServiceStack.DataAnnotations;

namespace ERP.DATA
{
    [Alias("Tbl_Planilla")]
    public class Planilla
    {
        [AutoIncrement]
        public int Id_Planilla { get; set; }

        public int Id_Empleado { get; set; }

        public int Salario { get; set; }

        public int Vacaciones { get; set; }

        public int Horas_Laboradas { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace ERP.UI.Models
{
    public class Tbl_Planilla
    {
        [AutoIncrement]
        public int Id_Planilla { get; set; }

        public int Id_Empleado { get; set; }

        public int Salario { get; set; }

        public int Vacaciones { get; set; }

        public int Horas_Laboradas { get; set; }

    }
}
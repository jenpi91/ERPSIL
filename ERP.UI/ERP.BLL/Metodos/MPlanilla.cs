using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.DATA;
using ERP.BLL.Interfaces;

namespace ERP.BLL.Metodos
{
    public class MPlanilla : IPlanilla
    {
        DAL.Interfaces.IPlanilla Pla;

        public MPlanilla()
        {
            Pla = new DAL.Metodos.MPlanilla();
        }
        public void ActualizarPlanilla(Planilla planilla)
        {
            Pla.ActualizarPlanilla(planilla);
        }

        public Planilla BuscarPlanilla(int Id_Planilla)
        {
            return Pla.BuscarPlanilla(Id_Planilla);
        }

        public void EliminarPlanilla(int Id_Planilla)
        {
            Pla.BuscarPlanilla(Id_Planilla);
        }

        public void EliminarPlanillaEmpleado(int Id_Empleado)
        {
            Pla.EliminarPlanillaEmpleado(Id_Empleado);
        }

        public void InsertarPlanilla(Planilla planilla)
        {
            Pla.InsertarPlanilla(planilla);
        }

        public List<Planilla> ListarPlanilla()
        {
            return Pla.ListarPlanilla();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.DATA;

namespace ERP.BLL.Interfaces
{
    public interface IPlanilla
    {
        List<Planilla> ListarPlanilla();
        Planilla BuscarPlanilla(int Id_Planilla);
        void InsertarPlanilla(Planilla planilla);
        void ActualizarPlanilla(Planilla planilla);
        void EliminarPlanilla(int Id_Planilla);
        void EliminarPlanillaEmpleado(int Id_Empleado);
    }
}

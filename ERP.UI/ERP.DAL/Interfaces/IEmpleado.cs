using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.DATA;


namespace ERP.DAL.Interfaces
{
    public interface IEmpleado
    {
        List<Empleado> ListarEmpleado();
        Empleado BuscarEmpleado(int Id_Empleado);
        void InsertarEmpleado(Empleado empleado);
        void ActualizarEmpleado(Empleado empleado);
        void EliminarEmpleado(int Id_Empleado);

    }
}

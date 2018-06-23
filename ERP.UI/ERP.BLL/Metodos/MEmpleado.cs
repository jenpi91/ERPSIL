using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.DATA;
using ERP.BLL.Interfaces;

namespace ERP.BLL.Metodos

{
    public class MEmpleado : IEmpleado
    {
        DAL.Interfaces.IEmpleado Emp;

        public MEmpleado()
        {
            Emp = new DAL.Metodos.MEmpleado();
        }

        public void ActualizarEmpleado(Empleado empleado)
        {
            Emp.ActualizarEmpleado(empleado);
        }

        public Empleado BuscarEmpleado(int Id_Empleado)
        {
            return Emp.BuscarEmpleado(Id_Empleado);
        }

        public void EliminarEmpleado(int Id_Empleado)
        {
            Emp.EliminarEmpleado(Id_Empleado);
        }

        public void InsertarEmpleado(Empleado empleado)
        {
            Emp.InsertarEmpleado(empleado);
        }

        public List<Empleado> ListarEmpleado()
        {
            return Emp.ListarEmpleado();
        }
    }
}

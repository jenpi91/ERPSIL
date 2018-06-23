using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.DATA;
using ERP.DAL.Interfaces;
using ServiceStack.OrmLite;
using System.Data;

namespace ERP.DAL.Metodos
{
    public class MEmpleado : IEmpleado
    {
        private OrmLiteConnectionFactory _conexion;
        private IDbConnection _db;

        public MEmpleado()
        {
            _conexion = new OrmLiteConnectionFactory(BD.Default.conexion,
               SqlServerDialect.Provider);
            _db = _conexion.Open();
        }

        public void ActualizarEmpleado(Empleado empleado)
        {
            _db.Update(empleado);
        }

        public Empleado BuscarEmpleado(int Id_Empleado)
        {
            return _db.Select<Empleado>(x => x.Id_Empleado == Id_Empleado).FirstOrDefault();
        }

        public void EliminarEmpleado(int Id_Empleado)
        {
            _db.Delete<Empleado>(x => x.Id_Empleado == Id_Empleado);
        }

        public void InsertarEmpleado(Empleado empleado)
        {
            _db.Insert(empleado);
        }

        public List<Empleado> ListarEmpleado()
        {
            return _db.Select<Empleado>();
        }
    }
}
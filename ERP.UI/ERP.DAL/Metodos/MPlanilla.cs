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
    public class MPlanilla : IPlanilla
    {
        private OrmLiteConnectionFactory _conexion;
        private IDbConnection _db;

        public MPlanilla()
        {
            _conexion = new OrmLiteConnectionFactory(BD.Default.conexion,
               SqlServerDialect.Provider);
            _db = _conexion.Open();
        }
        public void ActualizarPlanilla(Planilla planilla)
        {
            _db.Update(planilla);
        }

        public Planilla BuscarPlanilla(int Id_Planilla)
        {
            return _db.Select<Planilla>(x => x.Id_Planilla == Id_Planilla).FirstOrDefault();
        }

        public void EliminarPlanilla(int Id_Planilla)
        {
            _db.Delete<Planilla>(x => x.Id_Planilla == Id_Planilla);
        }

        public void EliminarPlanillaEmpleado(int Id_Empleado)
        {
            _db.Delete<Planilla>(x => x.Id_Empleado == Id_Empleado);
        }

        public void InsertarPlanilla(Planilla planilla)
        {
            _db.Insert(planilla);
        }

        public List<Planilla> ListarPlanilla()
        {
            return _db.Select<Planilla>();
        }
    }
}

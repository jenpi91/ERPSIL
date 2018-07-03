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
    public class MCliente : ICliente
    {
        private OrmLiteConnectionFactory _conexion;
        private IDbConnection _db;

        public MCliente()
        {
            _conexion = new OrmLiteConnectionFactory(BD.Default.conexion, SqlServerDialect.Provider);
            _db = _conexion.Open();

        }


        public void ActualizarCliente(Cliente cliente)
        {

            _db.Update(cliente);
        }

        public Cliente BuscarCliente(int Id_Cliente)
        {
            return _db.Select<Cliente>(x => x.Id_Cliente == Id_Cliente).FirstOrDefault();
        }

        public void ElimarCliente(int Id_Cliente)
        {
            _db.Delete<Cliente>(x => x.Id_Cliente == Id_Cliente);
        }

        public void InsertarCliente(Cliente cliente)
        {
            _db.Insert(cliente);
        }

        public List<Cliente> ListarCliente()
        {
            return _db.Select<Cliente>();
        }
    }
}

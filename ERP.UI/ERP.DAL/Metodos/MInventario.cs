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
    public class MInventario : IInventario
    {
        private OrmLiteConnectionFactory _conexion;
        private IDbConnection _db;

        public MInventario()
        {
            _conexion = new OrmLiteConnectionFactory(BD.Default.conexion,
               SqlServerDialect.Provider);
            _db = _conexion.Open();
        }

        public void ActualizarInventario(Inventario inventario)
        {
            _db.Update(inventario);
        }

        public Inventario BuscarInventario(int Id_Inventario)
        {
            return _db.Select<Inventario>(x => x.Id_Inventario == Id_Inventario).FirstOrDefault();
        }

        public void EliminarInventario(int Id_Inventario)
        {
            _db.Delete<Inventario>(x => x.Id_Inventario == Id_Inventario);
        }

        public void InsertarInventario(Inventario inventario)
        {
            _db.Insert(inventario);
        }

        public List<Inventario> ListarInvetario()
        {
            return _db.Select<Inventario>();
        }
    }
}

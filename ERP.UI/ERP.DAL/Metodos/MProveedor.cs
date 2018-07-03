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
    public class MProveedor : IProveedor
    {
        private OrmLiteConnectionFactory _conexion;
        private IDbConnection _db;

        public MProveedor()
        {
            _conexion = new OrmLiteConnectionFactory(BD.Default.conexion,
               SqlServerDialect.Provider);
            _db = _conexion.Open();
        }
        public void ActualizarProveedor(Proveedor proveedor)
        {
            _db.Update(proveedor);
        }

        public Proveedor BuscarProveedoro(int Id_Proveedor)
        {
            return _db.Select<Proveedor>(x => x.Id_Proveedor == Id_Proveedor).FirstOrDefault();
        }

        public void EliminarProveedor(int Id_Proveedor)
        {
            _db.Delete<Proveedor>(x => x.Id_Proveedor == Id_Proveedor);
        }

        public void InsertarProveedor(Proveedor proveedor)
        {
            _db.Insert(proveedor);
        }

        public List<Proveedor> ListarProveedor()
        {
            return _db.Select<Proveedor>();
        }
    }
}

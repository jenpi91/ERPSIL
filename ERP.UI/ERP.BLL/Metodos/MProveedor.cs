using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.DATA;
using ERP.BLL.Interfaces;

namespace ERP.BLL.Metodos
{
    public class MProveedor : IProveedor
    {
        DAL.Interfaces.IProveedor Prov;

        public MProveedor()
        {
            Prov = new DAL.Metodos.MProveedor();
        }
        public void ActualizarProveedor(Proveedor proveedor)
        {
            Prov.ActualizarProveedor(proveedor);
        }

        public Proveedor BuscarProveedoro(int Id_Proveedor)
        {
            return Prov.BuscarProveedoro(Id_Proveedor);
        }

        public void EliminarProveedor(int Id_Proveedor)
        {
            Prov.EliminarProveedor(Id_Proveedor);
        }

        public void InsertarProveedor(Proveedor proveedor)
        {
            Prov.InsertarProveedor(proveedor);
        }

        public List<Proveedor> ListarProveedor()
        {
            return Prov.ListarProveedor();
        }
    }
}

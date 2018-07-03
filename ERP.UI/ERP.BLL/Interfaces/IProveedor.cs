using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.DATA;

namespace ERP.BLL.Interfaces
{
    public interface IProveedor
    {
        List<Proveedor> ListarProveedor();
        Proveedor BuscarProveedoro(int Id_Proveedor);
        void InsertarProveedor(Proveedor proveedor);
        void ActualizarProveedor(Proveedor proveedor);
        void EliminarProveedor(int Id_Proveedor);
    }
}

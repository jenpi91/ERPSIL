using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.DATA;


namespace ERP.BLL.Interfaces
{
    public interface IInventario
    {
        List<Inventario> ListarInvetario();
        Inventario BuscarInventario(int Id_Inventario);
        void InsertarInventario(Inventario inventario);
        void ActualizarInventario(Inventario inventario);
        void EliminarInventario(int Id_Inventario);
    }
}

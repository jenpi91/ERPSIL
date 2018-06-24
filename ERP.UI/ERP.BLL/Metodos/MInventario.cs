using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.DATA;
using ERP.BLL.Interfaces;

namespace ERP.BLL.Metodos
{
    public class MInventario : IInventario
    {
        DAL.Interfaces.IInventario Inv;

        public MInventario()
        {
            Inv = new DAL.Metodos.MInventario();
        }

        public void ActualizarInventario(Inventario inventario)
        {
            Inv.ActualizarInventario(inventario);
        }

        public Inventario BuscarInventario(int Id_Inventario)
        {
            return Inv.BuscarInventario(Id_Inventario);
        }

        public void EliminarInventario(int Id_Inventario)
        {
            Inv.EliminarInventario(Id_Inventario);
        }

        public void InsertarInventario(Inventario inventario)
        {
            Inv.InsertarInventario(inventario);
        }

        public List<Inventario> ListarInvetario()
        {
            return Inv.ListarInvetario();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.DATA;
using ERP.BLL.Interfaces;

namespace ERP.BLL.Metodos
{
    public class MCliente : ICliente
    {

        DAL.Interfaces.ICliente cli;

        public MCliente()
        {
            cli = new DAL.Metodos.MCliente();
        }

        public void ActualizarCliente(Cliente cliente)
        {
            cli.ActualizarCliente(cliente);
        }

        public Cliente BuscarCliente(int Id_Cliente)
        {
            return cli.BuscarCliente(Id_Cliente);
        }

        public void ElimarCliente(int Id_Cliente)
        {
            cli.ElimarCliente(Id_Cliente);
        }

        public void InsertarCliente(Cliente cliente)
        {
            cli.InsertarCliente(cliente);
        }

        public List<Cliente> ListarCliente()
        {
            return cli.ListarCliente();
        }
    }
}

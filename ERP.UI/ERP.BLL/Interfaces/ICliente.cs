using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.DATA;

namespace ERP.BLL.Interfaces
{
    public interface ICliente
    {
        List<Cliente> ListarCliente();
        Cliente BuscarCliente(int Id_Cliente);
        void InsertarCliente(Cliente cliente);
        void ActualizarCliente(Cliente cliente);
        void ElimarCliente(int Id_Cliente);

    }
}

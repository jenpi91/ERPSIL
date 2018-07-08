using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;

namespace ERP.UI
{
    public static class AutoMapperConfig
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Models.Tbl_Empleados, DATA.Empleado>();
                cfg.CreateMap<DATA.Empleado, Models.Tbl_Empleados>();

                cfg.CreateMap<Models.Tbl_Inventario, DATA.Inventario>();
                cfg.CreateMap<DATA.Inventario, Models.Tbl_Inventario>();

                cfg.CreateMap<Models.Tbl_Proveedor, DATA.Proveedor>();
                cfg.CreateMap<DATA.Proveedor, Models.Tbl_Proveedor>();

                cfg.CreateMap<Models.Tbl_Cliente, DATA.Cliente>();
                cfg.CreateMap<DATA.Cliente, Models.Tbl_Cliente>();


















                cfg.CreateMap<Models.Tbl_Cliente, DATA.Cliente>();
                cfg.CreateMap<DATA.Cliente, Models.Tbl_Cliente>();

                cfg.CreateMap<Models.Tbl_Cliente, DATA.Cliente>();
                cfg.CreateMap<DATA.Cliente, Models.Tbl_Cliente>();

            });
        }
    }
}
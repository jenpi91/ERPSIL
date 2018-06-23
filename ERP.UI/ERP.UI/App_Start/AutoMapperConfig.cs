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

            });
        }
    }
}
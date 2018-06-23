using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ERP.UI.Models;
using ERP.DAL.Interfaces;
using ERP.DAL.Metodos;
using AutoMapper;

namespace ERP.UI.Controllers
{
    public class EmpleadoController : Controller
    {
        IEmpleado emp;
        public EmpleadoController()
        {
            emp = new MEmpleado();
        }

        // GET: Empleado
        public ActionResult Index()
        {
            var lista = emp.ListarEmpleado();
            var empleado = Mapper.Map<List<Models.Tbl_Empleados>>(lista);
            return View(empleado);
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Models.Tbl_Empleados empleados)
        {
            //aca se inerta los datos a la base de datos
            var EmpleadoInsert = Mapper.Map<DATA.Empleado>(empleados);
            emp.InsertarEmpleado(EmpleadoInsert);
            return RedirectToAction("Index");
        }

        //Seccion del buscar empleado
        public ActionResult Details(int id)
        {
            var empleadoDetails = emp.BuscarEmpleado(id);
            var usuarioBuscar = Mapper.Map<Models.Tbl_Empleados>(empleadoDetails);
            return View(usuarioBuscar);

        }

        public ActionResult Edit(int id)
        {
            var empleadoDetails = emp.BuscarEmpleado(id);
            var usuarioBuscar = Mapper.Map<Models.Tbl_Empleados>(empleadoDetails);
            return View(usuarioBuscar);
        }

        //Editar Empleado
        [HttpPost]
        public ActionResult Edit(Tbl_Empleados empleados)
        {
            var empleadoEditar = Mapper.Map<DATA.Empleado>(empleados);
            emp.ActualizarEmpleado(empleadoEditar);
            return RedirectToAction("Index");
        }

        //Eliminar Empleado
        public ActionResult Delete(int id)
        {
            emp.EliminarEmpleado(id);
            return RedirectToAction("Index");
        }




    }
}
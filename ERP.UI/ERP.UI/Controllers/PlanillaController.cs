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
    public class PlanillaController : Controller
    {
        IPlanilla pla;
        public PlanillaController()
        {
            pla = new MPlanilla();
        }
        // GET: Planilla
        public ActionResult Index()
        {
            var lista = pla.ListarPlanilla();
            var planillas = Mapper.Map<List<Models.Tbl_Planilla>>(lista);
            return View(planillas);
        }
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Models.Tbl_Planilla planillas)
        {
            //aca se inerta los datos a la base de datos
            var PlanillaInsert = Mapper.Map<DATA.Planilla>(planillas);
            pla.InsertarPlanilla(PlanillaInsert);
            return RedirectToAction("Index");
        }
        public ActionResult Details(int id)
        {
            var planillaDetails = pla.BuscarPlanilla(id);
            var planillaBuscar = Mapper.Map<Models.Tbl_Planilla>(planillaDetails);
            return View(planillaBuscar);

        }

        public ActionResult Edit(int id)
        {
            var planillaDetails = pla.BuscarPlanilla(id);
            var planillaBuscar = Mapper.Map<Models.Tbl_Planilla>(planillaDetails);
            return View(planillaBuscar);
        }

        //Editar Empleado
        [HttpPost]
        public ActionResult Edit(Tbl_Planilla planilla)
        {
            var planillaEditar = Mapper.Map<DATA.Planilla>(planilla);
            pla.ActualizarPlanilla(planillaEditar);
            return RedirectToAction("Index");
        }

        //Eliminar Empleado
        public ActionResult Delete(int id)
        {
            pla.EliminarPlanilla(id);
            return RedirectToAction("Index");
        }


    }
}
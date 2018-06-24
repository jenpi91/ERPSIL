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
    public class InventarioController : Controller
    {
        IInventario Inv;
        public InventarioController()
        {
            Inv = new MInventario();
        }

        // GET: Inventario
        public ActionResult Index()
        {
            var lista = Inv.ListarInvetario();
            var inventario = Mapper.Map<List<Models.Tbl_Inventario>>(lista);
            return View(inventario);
        }

        //crear
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Models.Tbl_Inventario inventario)
        {
            var inventarioInsertar = Mapper.Map<DATA.Inventario>(inventario);
            Inv.InsertarInventario(inventarioInsertar);
            return RedirectToAction("Index");
        }

        //buscar
        public ActionResult Details(int id)
        {
            var inventarioBuscar = Inv.BuscarInventario(id);
            var buscarInventario = Mapper.Map<Models.Tbl_Inventario>(inventarioBuscar);
            return View(buscarInventario);
        }

        //editar
        public ActionResult Edit(int id)
        {
            var inventarioDetalis = Inv.BuscarInventario(id);
            var detailsInventario = Mapper.Map<Models.Tbl_Inventario>(inventarioDetalis);
            return View(detailsInventario);
        }

        [HttpPost]
        public ActionResult Edit(Tbl_Inventario inventario)
        {
            var inventarioEditar = Mapper.Map<DATA.Inventario>(inventario);
            Inv.ActualizarInventario(inventarioEditar);
            return RedirectToAction("Index");
        }

        public ActionResult Delete(int id)
        {
            Inv.EliminarInventario(id);
            return RedirectToAction("Index");
        }


    }
}
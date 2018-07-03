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
    public class ProveedorController : Controller
    {
        IProveedor Prov;
        
        public ProveedorController()
        {
            Prov = new MProveedor();
        }

        // GET: Inventario
        public ActionResult Index()
        {
            var lista = Prov.ListarProveedor();
            var proveedor = Mapper.Map<List<Models.Tbl_Proveedor>>(lista);
            return View(proveedor);
        }

        //crear
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Models.Tbl_Proveedor proveedor)
        {
            var proveedorInsertar = Mapper.Map<DATA.Proveedor>(proveedor);
            Prov.InsertarProveedor(proveedorInsertar);
            return RedirectToAction("Index");
        }

        //buscar
        public ActionResult Details(int id)
        {
            var proveedoroBuscar = Prov.BuscarProveedoro(id);
            var buscarProveedor = Mapper.Map<Models.Tbl_Proveedor>(proveedoroBuscar);
            return View(buscarProveedor);
        }

        //editar
        public ActionResult Edit(int id)
        {
            var proveedoroDetalis = Prov.BuscarProveedoro(id);
            var detailsProveedor = Mapper.Map<Models.Tbl_Proveedor>(proveedoroDetalis);
            return View(detailsProveedor);
        }

        [HttpPost]
        public ActionResult Edit(Tbl_Proveedor proveedor)
        {
            var proveedorEditar = Mapper.Map<DATA.Proveedor>(proveedor);
            Prov.ActualizarProveedor(proveedorEditar);
            return RedirectToAction("Index");
        }

        public ActionResult Delete(int id)
        {
            Prov.EliminarProveedor(id);
            return RedirectToAction("Index");
        }
    }
}
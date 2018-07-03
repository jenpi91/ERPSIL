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
    public class ClienteController : Controller
    {
        ICliente cli;
        public ClienteController()
        {
            cli = new MCliente();
        }


        // GET: Cliente
        public ActionResult Index()
        {
            return View();
        }

        //crear
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Models.Tbl_Cliente cliente)
        {
            var clienteInsertar = Mapper.Map<DATA.Cliente>(cliente);
            cli.InsertarCliente(clienteInsertar);
            return RedirectToAction("Index");
        }

        //buscar
        public ActionResult Details(int id)
        {
            var clienteBuscar = cli.BuscarCliente(id);
            var buscarcliente = Mapper.Map<Models.Tbl_Cliente>(clienteBuscar);
            return View(buscarcliente);
        }

        //editar
        public ActionResult Edit(int id)
        {
            var clienteDetails = cli.BuscarCliente(id);
            var detailsCliente = Mapper.Map<Models.Tbl_Cliente>(clienteDetails);
            return View(detailsCliente);
        }

        [HttpPost]
        public ActionResult Edit(Tbl_Cliente cliente)
        {
            var clienteEditar = Mapper.Map<DATA.Cliente>(cliente);
            cli.ActualizarCliente(clienteEditar);
            return RedirectToAction("Index");
        }
        public ActionResult Delete(int id)
        {
            cli.ElimarCliente(id);
            return RedirectToAction("Index");
        }
        


    }
}
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using aspnet.Models;

namespace aspnet.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        
        [HttpGet]
        public IActionResult Soma()
        {
            return View();
        }

        [HttpPost]
         public IActionResult Resultado(string n1, string n2)
        {    
            int sum_result = int.Parse(n1) + int.Parse(n2);
            ViewData["result"] = sum_result.ToString();

            return View();
             
        }

        


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

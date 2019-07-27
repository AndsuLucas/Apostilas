using System;

namespace soma
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Entre com um número");
            double numero  = Convert.ToDouble(Console.ReadLine());
            
            Console.WriteLine("Entre com outro");
            double numero2    = Convert.ToDouble(Console.ReadLine());
            
            double resultado = numero + numero2;
            
            Console.WriteLine(numero+"+"+numero2+"="+resultado);  

           
        }
    }
}

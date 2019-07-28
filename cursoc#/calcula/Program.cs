using System;
using calculadora;

namespace calcula
{   
    class Interface
    {
        static double primeiroNumero;
        static double segundoNumero;
        static void Main(string[] args)
        {
           double resultado = Run();
           
           Console.WriteLine("Resultado = "+resultado);
           
        }
        static double Run()
        {
            while (true)
            {
                Console.WriteLine("--------------");
                Console.WriteLine("+: ADIÇÃO");
                Console.WriteLine("-: SUBTRAÇÃO");
                Console.WriteLine("*: MULTIPLICAÇÃO");
                Console.WriteLine("/: DIVISÃO");
                Console.WriteLine("---------------");
                Console.Write(": ");
                string operador = Console.ReadLine();
               
                switch (operador)
                {
                    case ("+"):
                        
                        Console.WriteLine("insira dois números:");
                        primeiroNumero = Convert.ToDouble(Console.ReadLine());
                        segundoNumero  = Convert.ToDouble(Console.ReadLine());
                        
                        return Calculadora.Sum(primeiroNumero, segundoNumero);

                        break;
                        
                    case ("-"):
                        
                        Console.WriteLine("insira dois números:");
                        primeiroNumero = Convert.ToDouble(Console.ReadLine());
                        segundoNumero  = Convert.ToDouble(Console.ReadLine());
                        
                        return Calculadora.Sub(primeiroNumero, segundoNumero);
                        break;
                    
                    case ("*"):
                        
                        Console.WriteLine("insira dois números:");
                        primeiroNumero = Convert.ToDouble(Console.ReadLine());
                        segundoNumero  = Convert.ToDouble(Console.ReadLine());
                        
                        return Calculadora.Mult(primeiroNumero, segundoNumero);
                        break;
                    
                    case ("/"):
                        
                        Console.WriteLine("insira dois números:");
                        primeiroNumero = Convert.ToDouble(Console.ReadLine());
                        segundoNumero  = Convert.ToDouble(Console.ReadLine());
                        
                        return Calculadora.Div(primeiroNumero, segundoNumero);
                        
                        break;
                    
                }
            
            }
        }
    }
}

using System;

namespace poesia
{
    class Program
    {
        static void Main(string[] args)
        {
           string cor, flor, coisa;
           
           Console.Write("Entre com uma cor:");
           cor = Console.ReadLine();
        
           Console.Write("Entre com uma flor:");
           flor = Console.ReadLine();

           Console.Write("Entre com alguma coisa:");
           coisa = Console.ReadLine();

           Console.WriteLine("Rosas sao "+cor);
           Console.WriteLine(flor+" são azuis");
           Console.WriteLine("Eu gosto de "+coisa);
        
        }
    }
}

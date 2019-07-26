using System;

namespace tabuada
{
    class Program
    {
        static void Main(string[] args)
        {
            int resultado = 0;
            Console.WriteLine("Insira o número para ver sua tabuada: ");
            string numero = Console.ReadLine();

            

            for (int contador = 0; contador <= 10; contador ++){
                resultado = Convert.ToInt32(numero) * contador;
                Console.WriteLine(numero+" x "+contador+" = "+resultado);

            }

        }   
    }
}

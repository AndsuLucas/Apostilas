using System;

namespace fibonacci
{
    class Program
    {
        static void Main(string[] args)
        {   
            int a         = 0;
            int b         = 1;
            int resultado = 0;
            
            int troca     = 0;
            Console.WriteLine("Insira o termo:");
            
            string posicao = Console.ReadLine();
            int contador   = 0;
            
            while (contador <= Convert.ToInt64(posicao)){
            
                resultado = a + b;
                troca     = a;
                a         = resultado;
                b         = troca;
                Console.WriteLine("O número da posicao "+(contador+1)+" é "+(resultado));
                contador ++;
            
            }
        }
    }
}

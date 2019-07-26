using System;

namespace media
{
    class Program
    {
        static void Main(string[] args)
        {
            double media;

            Console.WriteLine("insira 5 notas:");
            
            double nota1 = Convert.ToDouble(Console.ReadLine());
            double nota2 = Convert.ToDouble(Console.ReadLine());
            double nota3 = Convert.ToDouble(Console.ReadLine());
            double nota4 = Convert.ToDouble(Console.ReadLine());
            double nota5 = Convert.ToDouble(Console.ReadLine());


            media = ((nota1 + nota2 + nota3 + nota4 + nota5) / 5);

            Console.WriteLine("Média = "+media);


        }
    }
}

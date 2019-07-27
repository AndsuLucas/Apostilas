using System;

namespace parouimpar
{
    class Program
    {
        static void Main(string[] args)
        {
           Console.WriteLine("Insira o seu numero:");
           double numero = Convert.ToDouble(value: Console.ReadLine());

           double resto = numero % 2;
           
           if (resto == 0){
               Console.WriteLine("O número: "+numero+" è par");
           }else{
               Console.WriteLine("O número: "+numero+" è ímpar");
           }

           


        }
    }
}

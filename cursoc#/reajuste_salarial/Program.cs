using System;

namespace reajuste_salarial
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Insira o valor do salário");
            double salario = Convert.ToDouble(Console.ReadLine());

            if (salario > 300){
                
                salario = salario + ((salario * 30) / 100);

            }else{
                salario = salario + ((salario * 50) / 100);
            }

            Console.WriteLine(salario);
        }
    }
}

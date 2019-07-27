using System;

namespace qtd_maiores
{
    class Program
    {
        static void Main(string[] args)
        {
            int idade;
            int contador           = 0;
            int quantidade_maiores = 0;
            while (contador < 10){
                
                Console.WriteLine("Insira uma idade: ");
                idade = Convert.ToInt32(Console.ReadLine());
                
                if (idade >= 18){
                    
                    quantidade_maiores ++;
                
                }
                contador ++;
            }
            Console.WriteLine("Quantidade de maiores de idade:"+quantidade_maiores);
        }
    }
}

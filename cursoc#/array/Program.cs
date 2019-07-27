using System;

namespace array
{
    class Program
    {
        static void Main(string[] args)
        {   
           //arrays
           int [] meuArray      = {2,3,4,5,6,7,8,9,10};
           string [] palavras   = {"1", "teste", "hello", "2"};
           int [] arrayVazio    = new int[5];

           for (int contador = 0; contador < arrayVazio.Length; contador ++ ) {
               arrayVazio[contador] = contador + 2;
           }
           
           foreach (var numero in arrayVazio) {
                Console.WriteLine(numero);    
           }
        }
    }
}

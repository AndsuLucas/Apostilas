using System;


namespace arnaldo_aula1
{
    class Program
    {
        static void Main(string[] args)
        { 
        
         Console.WriteLine("Insira um numero");
         int numero     = int.Parse(Console.ReadLine());
          
         for (int contador = 0; contador < numero; contador++)
         {
            bool primo = true;
             for (int divisor = 2; divisor < contador; divisor++){
                
                 if (contador % divisor == 0){
                     primo = false;
                 }
             }
            if (primo) {
                Console.WriteLine(contador+" é primo");
            }
         }
        
        }
    }
}

using System;

namespace poo
{
    class Program
    {
        static void Main(string[] args)
        {
            Book book1 = new Book(
                "Lógica da programação avançada",
                "Anderson Lucas",
                650
            );
           
           Console.WriteLine(book1.title);
           Console.WriteLine(book1.author);
           Console.WriteLine(book1.pages);

            
        }
    }
}

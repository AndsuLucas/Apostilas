using System;

namespace metodos
{
    class Program
    {
        static void Main(string[] args)
        {
            SayHi("Anderson");
            int cubedNumber = cube(5);
            Console.WriteLine(cubedNumber);
        }
        static void SayHi(string name)
        {
            Console.WriteLine("Hello world com métodos! Senhor "+name);
        }
        //retornando um valor inteiro
        static int cube( int num )
        {
            int result = num * num * num;
            return result;

        }
    }
}

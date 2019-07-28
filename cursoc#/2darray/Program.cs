using System;

namespace _2darray
{
    class Program
    {
        static void Main(string[] args)
        {
            //array 2d

            int [ , ] numberGrid = {
                {1, 2},
                {3, 4},
                {5, 6}
            };
            int [ , ] novoArray = new int [2, 3];

            Console.WriteLine(numberGrid[2, 0]);
        }
    }
}

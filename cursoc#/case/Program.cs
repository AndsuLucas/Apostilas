using System;

namespace caso
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.WriteLine(GetDay(100));
       
        }
        static string GetDay(int dayNum)
        {
            string dayName;

            switch (dayNum)
            {
                case 0:
                    dayName = "Sunday";
                    break;
                
                case 1:
                    dayName = "Monday";
                    break;

                case 2:
                    dayName = "Tuesday";
                    break;
                case 3:
                    dayName = "Wdnesday";
                    break;
                case 4:
                    dayName = "Friday";
                    break;
                case 5: 
                    dayName = "Saturday";
                    break;
                default:
                    dayName = "Invalid Day Number";
                    break;
                
            }



            return dayName;
        }
    }
}

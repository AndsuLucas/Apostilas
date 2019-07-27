using System;

namespace strings
{
    class Program
    {
        static void Main(string[] args)
        {   
            //trabalhando com stringss
            string frase = "Eu vou aprender"+" c#";
            Console.WriteLine(frase.Length); //tamanho da string
            //mudando tudo para minúsculo
            Console.WriteLine(frase.ToLower());
            //mudando tudo para maiúsculo
            Console.WriteLine(frase.ToUpper());
            //vendo se conteém algo específico
            Console.WriteLine(frase.Contains("c#"));
            //vendo posicoes específicas da string
            Console.WriteLine(frase[0]);
            //qual index tem c#
            Console.WriteLine(frase.IndexOf("c#"));
            //capturando u pedaaço da string
            Console.WriteLine(frase.Substring(0, frase.LastIndexOf(" ")));
                    
        }
    }
}

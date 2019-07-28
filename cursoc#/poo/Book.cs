using System;

namespace poo
{
    //Classe Livro
    class Book
    {
        public string title;
        public string author;
        public int pages;

        //método construtor
        public Book(string bookTitle, string bookAuthor, int bookPages )
        {
           title   = bookTitle;
           author  = bookAuthor;
           pages   = bookPages;

        }
    }
}

class ListaAlunos 
{   //criando uma cópia para que as alterações da lista como parametro
    //não interfira na lista dentro da classe
    constructor(lista)
    {
        this.lista =[].concat(lista);

    }
}
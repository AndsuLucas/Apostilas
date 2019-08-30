class ListaAlunos 
{   //criando uma cópia para que as alterações da lista como parametro
    //não interfira na lista dentro da classe
    constructor(lista)
    {
        this.lista = lista;

    }
    obterPorId(id)
    {   
        return  this.lista.filter( aluno => aluno.id === id)[0];
    
    }

    adicionarAluno(aluno)
    {
        this.lista.push(aluno);
    }

}
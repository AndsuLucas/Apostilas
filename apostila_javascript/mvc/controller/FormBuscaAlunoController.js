class FormBuscaAlunoController
{
    constructor(model,view)
    {
        this.view = view;
        this.model = model;
    }

    buscar(padrao)
    {
        return this.model.lista.filter(
            registro => registro.nome.match(padrao)
        );
        
        
    }
}
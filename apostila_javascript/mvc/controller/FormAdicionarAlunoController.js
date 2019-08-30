
class FormAdicionarAlunoController
{
    constructor(model, view)
    {
        this.model = model;
        this.view  = view;
    }
    limpar(){
        const inputs = this.view.seletor.querySelectorAll("input");
        Array.prototype.map.call( inputs, input => input.value = "");
    }

}
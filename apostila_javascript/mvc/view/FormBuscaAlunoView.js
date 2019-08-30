class FormBuscaAlunoView
{
    constructor(seletor)
    {
        this.seletor = document.querySelector(seletor);
        this.seletor.innerHTML = this.getTemplate();
    }

    getTemplate()
    {
        return `
            <form action='#' id="frm-busca">
                <input type="text" id='nome-busca'>
                <button type='submit'>Buscar</button>
            </form>
        
        `
    }
}
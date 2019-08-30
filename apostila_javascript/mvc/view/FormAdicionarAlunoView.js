class FormAdicionarAlunoView
{
    constructor(seletor)
    {
        this.seletor = document.querySelector(seletor);
        this.seletor.innerHTML = this.getTemplate();
    }

    getTemplate()
    {
        return `
            <form action="#" style="display: block;" id="frm-adiciona-aluno">
                <input type="text" name="aluno-nome" id="aluno-nome">
                <input type="number" step="any" name="nota1" id="nota1" required min="0" max="10" class="nota">
                <input type="number" step="any" name="nota2" id="nota2" required min="0" max="10" class="nota">
                <input type="number" step="any" name="nota3" id="nota3" required min="0" max="10" class="nota">
                <input type="number" step="any" name="nota4" id="nota4" required min="0" max="10" class="nota">
                <button type="submit">Adicionar</submit>
            </form>
        `;
    }
}
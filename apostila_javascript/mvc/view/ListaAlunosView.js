class ListaAlunosView
{
    constructor(seletor)
    {
        this.seletor = document.querySelector(seletor);
    }

    getTemplate(model)
    {
        return  `
            ${model.lista.map( aluno => 
                
                `
                    <tr id='${aluno.id}'>
                        <td>${aluno.nome}</td>
                        <td>${aluno.notas[0]}</td>
                        <td>${aluno.notas[1]}</td>
                        <td>${aluno.notas[2]}</td>
                        <td>${aluno.notas[3]}</td>
                        <td>${aluno.retornarMedia()}</td>                        

                    </tr>
                `
                
            ).join("")}
        `
    }
    atualiza(model)
    {
        this.seletor.innerHTML = this.getTemplate(model);
    }
}
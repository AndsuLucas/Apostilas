const listarAlunos = (elementoHtml, listaAlunos) => {
    
    const elemento = document.querySelector(elementoHtml);

    elemento.innerHTML = listaAlunos.map(aluno => 
        `
            <tr id='${aluno.id}'>

                <td id='nome-aluno'> ${aluno.nome} </td>
                ${aluno.notas.map((nota, i) => 
                    `
                        <td id="${'nota'+i}">${nota}</td>
                    `    
                ).join("")}
                <td id='media-aluno'>${aluno.media}</td>
            </tr>

        `    
    ).join("");

    return;    

}

const retornarFormularioAdicionaAluno = (elementoHtml) => {
    const elemento = document.querySelector(elementoHtml);
    
    elemento.innerHTML = `
            <form action="#" id="adicionar-aluno">
                <input type="number" name="id" id="id">
                <input type="text" name="nome-aluno" id="nome-aluno-form">
                <input type="number" step="any" max="10" min="0" id="nota1" class="nota-aluno-form">
                <input type="number" step="any" max="10" min="0" id="nota2" class="nota-aluno-form">
                <input type="number" step="any" max="10" min="0" id="nota3" class="nota-aluno-form">
                <input type="number" step="any" max="10" min="0" id="nota4" class="nota-aluno-form">
                <button type="submit">Adicionar Aluno</button>
            </form>
            
        `
    return;
}
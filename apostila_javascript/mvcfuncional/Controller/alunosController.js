const adicionarNovoAlunoController = (list, viewFunction) => {
    
    const newList = list;
    
    viewFunction("#alunos-lista", newList);

    return newList;

}

const limparFormulario = (elementosHtml) => {
    Array.prototype.map.call(
        elementosHtml, elemento => elemento.value = "" 
    );

    return;
    
}

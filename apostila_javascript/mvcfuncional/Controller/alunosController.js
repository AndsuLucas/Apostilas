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

const checkIdExiste = (id, lista) => {
    const exists = lista.filter(
        registro => registro.id == id
    );
    console.log(lista);

    return exists.length !== 0 ? true : false; 
}
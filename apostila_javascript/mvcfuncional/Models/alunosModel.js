const novoAluno = (nome, id, ...notas) => {
    
    const aluno = {
        nome: nome,
        id: id,
        notas: notas.map(nota => nota)
    }

    return aluno;
}

const adicionarAlunoLista = (lista, aluno) => {
    lista.push(aluno);

    return lista;
}

const calcularMedia = (notas) => {
    const notasFloat = notas.map( nota => parseFloat(nota) );

    const soma = parseFloat(Array.prototype.reduce.call( 
        notasFloat, (soma, nota) =>  soma + nota
    ));
    const media = parseFloat( soma / notas.length );

    return media;
}
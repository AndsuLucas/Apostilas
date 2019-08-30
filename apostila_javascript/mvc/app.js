
var alunos = ["Daniel", "Anderson", "Joao"];

alunos = alunos.map( (aluno,i) => new Aluno(aluno, i) );

alunos[0].adicionarNotas(1,3,4,5);
alunos[1].adicionarNotas(10,5,2,7);
alunos[2].adicionarNotas(7,2,8,5);

const listaAlunos = new ListaAlunos(alunos);
const listaAlunosView = new ListaAlunosView("#lista-alunos");
const listaAlunosController = new ListaAlunosController(listaAlunos, listaAlunosView);
listaAlunosView.atualiza(listaAlunos);
const formAdicionarAlunoView = new FormAdicionarAlunoView("#form-placeholder"); 
const formAdicionarAlunoController = new FormAdicionarAlunoController(listaAlunos, formAdicionarAlunoView);
const formBuscaAlunoView = new FormBuscaAlunoView("#frm-busca-placeholder");
const formBuscaAlunoController = new FormBuscaAlunoController(listaAlunos, listaAlunosView);
document.querySelector("#frm-adiciona-aluno").addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.querySelector("#aluno-nome").value;

    const dom_notas = document.querySelectorAll('.nota');

    const notas = Array.prototype.map.call(dom_notas, elemento => 
        parseFloat(elemento.value)
    );

    listaAlunosController.adicionarAlunos(nome, notas);
    formAdicionarAlunoController.limpar();
});

document.querySelector("#frm-busca").addEventListener('submit', function(event){
    event.preventDefault();

    let padrao = this;
    padrao = this.querySelector("#nome-busca").value;
    let result = formBuscaAlunoController.buscar(padrao);
    let listaBusca = new ListaAlunos(result);
    listaAlunosView.atualiza(listaBusca);
});




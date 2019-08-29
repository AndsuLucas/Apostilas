
var alunos = ["Daniel", "Anderson", "Joao"];

alunos = alunos.map( aluno => new Aluno(aluno) );

alunos[0].adicionarNotas(1,3,4,5);
alunos[1].adicionarNotas(10,5,2,7);
alunos[2].adicionarNotas(7,2,8,5);


var listaAlunos = new ListaAlunos(alunos);

var view = new ListaAlunosView("#lista-alunos");

view.atualiza(listaAlunos);




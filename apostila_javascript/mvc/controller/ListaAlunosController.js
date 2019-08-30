
class ListaAlunosController
{
    constructor(model, view)
    {
        this.model = model;
        this.view  = view;
        this.view.seletor.addEventListener('click', this.editarAluno.bind(this));
    }
    
    editarAluno(event)
    {
        let registro = event.target.parentNode;
        if (registro){
            let id    = parseInt(registro.getAttribute('id'));
            
            let notas = prompt("Digite as novas notas separadas por virgula")
                        .split(",").map( nota => parseFloat( nota ) );
            
            if (notas.length !== 4) {
                alert("Digite quatro notas separadas por vírgula");
                return;
            }
            const aluno = this.model.obterPorId(id);
            aluno.atualizarNotas(notas);
            this.view.atualiza(this.model);
        }    

    }
    adicionarAlunos(nome, notas)
    {     
        let indices_alunos = this.model.lista.length - 1;
        let ultimo_aluno = this.model.lista.filter( (aluno,i) =>
            i === indices_alunos
        )[0];
        let id_novo_aluno = parseInt(ultimo_aluno.id) + 1;
        
        this.model.adicionarAluno( new Aluno(nome, id_novo_aluno, notas) )
        this.view.atualiza(this.model);
    }
        
}

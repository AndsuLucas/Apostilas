(function(){
   'use strict';
    var listaAlunos = [
        {
            nome: "Anderson",
            id: 1,
            notas: [
                3,5,6,8
            ],
            media: calcularMedia([3,5,6,8])
        },
        {
            nome: "Daniel",
            id: 2,
            notas: [
                3,8,3,10
            ],
            media: calcularMedia([3,8,3,10])
        },
        {
            nome: "Valmiro",
            id: 3,
            notas: [
                6,3.5,8,10
            ],
            media: calcularMedia( [6,3.5,8,10] )
        }

    ];

    listarAlunos("#alunos-lista", listaAlunos);    
    retornarFormularioAdicionaAluno("#frm-adiciona-aluno");    
    
    document.querySelector("#frm-adiciona-aluno").addEventListener("submit", (event) => {
        
        event.preventDefault();
        
        const notas_elemento_html      = document.querySelectorAll(".nota-aluno-form");
        const nome_aluno_elemento_html = document.querySelector("#nome-aluno-form");
        const id_aluno_elemento_html   = document.querySelector("#id"); 
        const notas_float_values       = Array.prototype.map.call(
            notas_elemento_html, elemento => parseFloat(elemento.value)
        ); 

        const novoAluno = {
            nome : nome_aluno_elemento_html.value,
            id   : id_aluno_elemento_html.value,
            notas: notas_float_values, 
            media: calcularMedia(notas_float_values)
        }  
            //return true or false
        if (checkIdExiste(novoAluno.id, listaAlunos)) {
            return;
        }
        console.log("passou");
        const newList = adicionarAlunoLista(listaAlunos, novoAluno);
        adicionarNovoAlunoController( newList, listarAlunos );
        
        const form_input_nodes = document.querySelectorAll("#frm-adiciona-aluno input");
        limparFormulario(form_input_nodes);
    });
    

})();
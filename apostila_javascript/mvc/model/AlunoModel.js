
class Aluno 
{
    
    constructor(nome, id, notas)
    {
        this.nome = nome;
        this.notas = [

        ];
        this.notas = (notas !== undefined) ? notas : []; 
        this.id = id;
        this.media = undefined;
    }

    adicionarNotas()
    {
        //fazendo o arguments herdar o forEach

        Array.prototype.forEach.call(
                       //arrow functions não tem this dinâmico     
            arguments, nota => this.notas.push(nota)
        );

    }

    calcularMedia()
    {   
        let soma = this.notas.reduce( (soma, nota) => {
            return soma + nota;
        });

        this.media = soma / this.notas.length;  
    }


    retornarMedia()
    {
        this.calcularMedia();

        return this.media;
    }
    
    atualizarNotas(notas)
    {
        this.notas = [].concat(notas);
    }
}

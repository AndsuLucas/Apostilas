
class Aluno 
{
    
    constructor(nome)
    {
        this.nome = nome;
        this.notas = [

        ];
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

        let soma  = this.notas.reduce((nota) => {
            return nota + nota;
        });   

        this.media = soma / this.notas.length;
    }

    retornarMedia()
    {
        this.calcularMedia();

        return this.media;
    }
}
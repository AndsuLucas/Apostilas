using System;

namespace calcula_idade
{
    class Idade
    {
        int  ano_atual;
        int  ano_nascimento;
    

        public Idade (int idadeAnoAtual, int idadeAnoNascimento ){
            ano_atual      = idadeAnoAtual;
            ano_nascimento = idadeAnoNascimento; 
        }
        public int GetIdade()
        {
            return ano_atual - ano_nascimento; 
        }
    }
}
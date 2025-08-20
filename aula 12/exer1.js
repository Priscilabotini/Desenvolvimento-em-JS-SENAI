/*Classe Pessoa Básica -atributos  -  nome, idade, endereco, formacao */

class Pessoa{
constructor( nome, idade, endereco, formacao){

    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
    this.formacao = formacao
}




    display(){
    console.log('Nome', this.nome)
    console.log('Idade: ',this.idade)
    console.log('Endereço: ',this.endereco)
    console.log('Formação: ',this.formacao)
    }
}

 // 1:  Classe Pessoa Básica -atributos  -  nome, idade, endereco, formacao


 class Pessoa {
       constructor(){
       this.nome = 'Carlos';
       this.idade = 25;
       this.formacao = 'ADS';

       }

       display(){
         console.log(this.nome, this.idade, this.formacao)
       }

 }

 const nova_pessoa =  new Pessoa()
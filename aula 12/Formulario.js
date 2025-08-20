class form{
    construtor(nome, idade, endereço, emai){
        this.nome =nome;
        this.idade = idade;
        this.endereço = endereço;
        this.email=emai;
    
    }
    display(){
        console.log('Nome: ', this.nome);
        console.log('Idade: ',this.idade);
        console.log('Endereço: ',this.endereco);
        console.log('Email: ',this.email);
    }
}
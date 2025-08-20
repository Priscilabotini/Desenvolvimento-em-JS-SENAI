class Pessoa{
    constructor(nome,ano_nascimento,endereco,curso,peso,altura){//auxiliador da class
        this.nome = nome;
        this.ano_nascimento= ano_nascimento;
        this.enderco= endereco;
        this.curso= curso;
        this.peso = peso;
   
        this.altura = altura;

        }
         displayName() {
            console.log(this.nome)
         }
         calcular_Idade(){
            let ano_atual = parseInt(prompt('Digite o ano atual: '))
            let calculo= ano_atual - this.ano_nascimento
            console.log('Idade: ', calculo)

         }
         imc(){
            let novo_imc;
             novo_imc= this.peso/this.altura**2
            console.log('IMC da ${this.nome}  ${novo_imc.toFixed()}')
         }

        }



outra_pessoa = new Pessoa('Priscila', 1978, 'rua a','Python',80,1.55)

segunda_pessoa = new Pessoa()

outra_pessoa.displayName()
segunda_pessoa.displayName()



segunda_pessoa.calcular_Idade()
outra_pessoa.calcular_Idade()

segunda_pessoa.imc()
outra_pessoa.imc()
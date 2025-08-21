
 class ContaBancaria{
       constructor(saldo){
        this.saldo = saldo
       }
      
       display(){

         console.log(' Saldo  -  R$', this.saldo)
       }

       saque(valor_){
        let calculo = this.saldo - valor_
        return calculo
       }
      
        deposito(valor_){
        let calculo = this.saldo + valor_
        return calculo
       }

 }


 let conta = new ContaBancaria(1000)

    conta.display()
 let v_saque  =  parseFloat(prompt('Digite o valor do saque'))
 console.log('Valor em conta R$', conta.saque(v_saque))
 let v_dep  =  parseFloat(prompt('Digite o valor do deposito'))
 console.log('Valor em conta R$', conta.deposito(v_dep))

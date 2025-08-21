class Carro{
     constructor(velocidade){
     this.velocidade = velocidade
     }
    
      dirigir(){
      let acel = [40,50,60,70,80]   
      if (this.velocidade == 0){
         for (let x = 0; acel.length; x++){
             this.velocidade = this.velocidade + acel
             console.log(this.velocidade)
      }
     
     }
    }
 }

 let carro =  new  Carro(0) 
 carro.dirigir()

class Aluno{

      constructor(){
           this.nome = 'Pedro';
           this.serie = '8ª série'
   
      }
      estudar(metodologia){
      if (metodologia == 'em grupo' || metodologia == 'escrever com caneta'|| metodologia == 'criar resumo'  ){
        console.log('Basta estudar apenas 1h dia')
      }else{
         console.log('estudar ao menos 2h o dia ')
      }  
    } 
}


let aluno  = new Aluno()
aluno.estudar('em grupo')
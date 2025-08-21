class Produto{
     constructor(nome, preco){
      this.nome = nome;
      this.preco = preco
     }
}


class Carrinho{
     constructor(){
      this.carrinho = []
    }

    adicionar_produto(produto){
    this.carrinho.push(produto)
     console.log('produto', produto.nome, 'Adicionado')
    }
    
    remover_produto(nome){
    this.carrinho =  this.carrinho.filter((p) => p.nome !== nome) 
    console.log('produto', nome, 'removido')    
    // console.log(this.carrinho)
    // this.mostrar_carrinho()
    return this.carrinho

    }

    mostrar_carrinho(){
     console.log('Carrinho' )
     this.carrinho.forEach(p => console.log(p.nome, '$', p.preco));

    }

    total(){
      const total   = this.carrinho.reduce((soma, p) => soma +  p.preco, 0)
      const total2 =  this.carrinho[0]
      console.log('$', total)
    }



}


const carrinho =  new Carrinho()
const prod1 =  new Produto('Batom',15.5)
const prod2 =  new Produto('Lapis', 10.0)



carrinho.adicionar_produto(prod1)
carrinho.adicionar_produto(prod2)
carrinho.remover_produto(prod2.nome)
// let car =  remover_produto(prod2)
carrinho.mostrar_carrinho()
carrinho.total()





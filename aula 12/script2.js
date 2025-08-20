class calculadora{
    somar(a,b){
        return a+b
    }
    subtrair(a,b){
        return a-b
    }
    dividir(a,b){
        return a/b
    }
    multiplicacao(a,b){
        return a*b
    }
}

c = new calculadora()

console.log(c.somar(20,30))
console.log(c.dividir(20,30))
console.log(c.multiplicacao(20,30))
console.log(c.subtrair(20,30))
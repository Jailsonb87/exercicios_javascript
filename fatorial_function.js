// RECURSIVIDADE
function fatorial(n){
    if (n == 1) { // SE O NUMERO FOR 1 RETORNA 1
        return 1
        
    }else{ //SE NÃO FOR 1 CALCULAMOS O FATORIAL
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))
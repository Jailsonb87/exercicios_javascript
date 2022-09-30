let num = [4,6,3,8,9,7,1,2]

num.push(5) //Adiciona um novo valor a variavel num
num.sort() //Ordena os valores
let posi = num.indexOf(10) // busca a posiçao do valor 10 

console.log(num)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O primeiro valor é ${num[0]}`)

if(posi == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 10 está na Posição ${posi}`)
}

for(let pos in num){
    console.log(`Posição ${pos} = ${num[pos]}`)
}
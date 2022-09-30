var hora_atual = new Date()
var min_atual = new Date()
var hora = hora_atual.getHours()
var min = min_atual.getMinutes()

console.log(`São extamente ${hora}:${min}`)

if(hora < 12){
    console.log('Bom dia!')
}
else if(hora <= 18){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite')
}
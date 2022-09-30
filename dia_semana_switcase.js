var dia = new Date()
var hora_atual = new Date()
var min_atual = new Date()




var dia_da_semana = dia.getDay()
var hora = hora_atual.getHours()
var min = min_atual.getMinutes()
var sec = new Date().getSeconds()


switch (dia_da_semana) {
    case 0:
        console.log(`Hoje é Domingo, são exatamente ${hora}:${min}:${sec}h `)
        break;
    case 1:
        console.log(`Segunda-Feitaria ${hora}:${min}:${sec}h `)
        break;
    case 2:
        console.log(`Terça-Feira ${hora}:${min}:${sec}h `)
        break;
    case 3:
        console.log(`Quarta ${hora}:${min}:${sec}h `)
        break;
    case 4:
        console.log(`Quinta ${hora}:${min}:${sec}h `)
        break;
    case 5:
        console.log(`Sexta ${hora}:${min}:${sec}h `)
        break;
    case 6:
        console.log(`Sábado ${hora}:${min}h `)
        break;
    
    default:
        console.log('ERRO! Dia inválido!')
        break;
     
}


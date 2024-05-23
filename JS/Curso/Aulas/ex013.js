var agora = new Date()
var hora = 19 // agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else if (hora <=23) {
    console.log('Boa Noite!')
}



function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        img.src = '03.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18) {
        img.src = '02.png'
        document.body.style.background = '#b9846f'
    }else {
        img.src = '01.png'
        document.body.style.background = '#515154'
    }
}
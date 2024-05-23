function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //var img = document.createElement('img')
        //img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            /*
            if (idade >=0 && idade < 10) {   
                img.setAttribute('src', 'Criança Masc.png')
            }else if (idade < 21) {          
                img.setAttribute('src', 'Jovem Masc.png')
            }else if (idade < 50) {          
                img.setAttribute('src', 'Adulto Masc.png')
            }else {                          
                img.setAttribute('src', 'Idoso Masc.png')
            }
            */
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            /*
            if (idade >=0 && idade < 10) {  
                img.setAttribute('src', 'Criança Femi.png')
            }else if (idade < 21) {         
                img.setAttribute('src', 'Jovem Femi.png')
            }else if (idade < 50) {          
                img.setAttribute('src', 'Adulto Femi.png')
            }else {                          
                img.setAttribute('src', 'Idoso Femi.png')
            }
            */
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        //res.appendChild(img)
    }
}
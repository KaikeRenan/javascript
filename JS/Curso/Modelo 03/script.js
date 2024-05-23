function Contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0|| pas.value.length == 0) {
        res.innerHTML = `Impossivel contar, verifique os dados novamente`
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if(p <= 0) {
            window.alert('Passo inválido! Digite Novamente')
        }
        if(i<f) {
            // Contagem crescente
            for(var c = i; c<=f; c +=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // CContagem regressiva
            for(var c = i; c>=f; c-=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}' 
    }
}    
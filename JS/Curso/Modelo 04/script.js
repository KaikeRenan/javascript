function gerar_tabuada() {
    var n = document.getElementById('txtn')
    var n0 = Number(n.value)
    if (n.value.length == 0) {  
        window.alert('Preencha os dados')
    } else {
    var n1 = n0*1
    var n2 = n0*2
    var n3 = n0*3
    var n4 = n0*4
    var n5 = n0*5
    var n6 = n0*6
    var n7 = n0*7
    var n8 = n0*8
    var n9 = n0*9
    var n10 = n0*10
    res.innerHTML = `${n0} x 1 = ${n1} <br>${n0} x 2 = ${n2} <br>${n0} x 3 = ${n3} <br>${n0} x 4 = ${n4} <br>${n0} x 5 = ${n5} 
    <br>${n0} x 6 = ${n6} <br>${n0} x 7 = ${n7} <br>${n0} x 8 = ${n8} <br>${n0} x 9 = ${n9} <br>${n0} x 10 = ${n10}`
    }
}
/*
function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ``
        while (c<=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
*/
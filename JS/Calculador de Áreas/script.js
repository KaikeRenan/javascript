function triangulo() {
var ba = document.getElementById('b')
var hi = document.getElementById('h')
var b = Number(ba.value)
var h = Number(hi.value)
    var tri = b*h/2
    var cm = tri*100
    var km = tri/1000
    res.innerHTML = `A área de seu triangulo é igual a: ${tri} m`
}
function quadrado() {
    var la = document.getElementById('l')
    var l = Number(la.value)
    var qua = l**2
    res.innerHTML = `A área de seu quadrado é igual a: ${qua} m`
}
function retangulo() {
    var ba = document.getElementById('b')
    var hi = document.getElementById('h')
    var b = Number(ba.value)
    var h = Number(hi.value)
        var ret = b*h
        res.innerHTML = `A área de seu retangulo é igual a: ${ret} m`
}
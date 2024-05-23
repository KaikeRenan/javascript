var num = [4, 3, 9]
num.sort()
num[3] = 6
num.push(1)

/*
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O vetor em ordem crescente é ${num.sort()}`)

for(let pos = 0; pos<num.length;pos++){
    console.log(`A posiçao ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`A posiçao ${pos} tem o valor ${num[pos]}`)
}
*/

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(`O vetor em ordem crescente é ${num.sort()}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor nao foi encontrado!`)
} else {
    console.log(`O valor está na posiçao ${pos}`)
}
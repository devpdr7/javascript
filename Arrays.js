let valores = [8, 2, 1, 4, 9, 7]

valores.push(3)
valores.sort()
console.log(valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)
let pos = valores.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor ${valores[pos]} está na posição ${pos}`)
}


/*
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}


 //Ambos aqui têm a mesma função, porém o de baixo só funciona com variáveis compostas.


 for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}
*/
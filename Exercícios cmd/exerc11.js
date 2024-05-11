var idade = 17
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não pode votar')
} else {
    if (idade >= 16 && idade < 18 || idade >= 65) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
    }
}
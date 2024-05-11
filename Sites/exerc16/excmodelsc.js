res.style.textAlign = 'center'
function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var resultado = document.getElementById('res')
 if (ini.value == 0 || fim.value == 0) {
    alert('[ERRO] Dados faltando')
    res.innerHTML = 'Impossível contar!'
 } else {
    res.innerHTML = 'Contando: <br> '
    var i = Number(ini.value)
    var f= Number(fim.value)
    var p= Number(passo.value)
    if (p <= 0) {
        alert('Passo INVÁLIDO! Considerando passo 1...')
        p = 1
    }
    if (i < f) {
        //Contagem progressiva
        for(var c=i; c<= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449} `
        }
    } else {
        //Contagem regressiva
        for(var c=i; c>= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
 }
    
}
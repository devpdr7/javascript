var tabela = document.getElementById('tabela')
tabela.style.textAlign = 'center'
var conteudo = document.getElementById('conteudo')
conteudo.style.textAlign = 'center'
function calcular() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor digite um número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
        }
    }
}
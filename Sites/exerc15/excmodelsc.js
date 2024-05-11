res.style.textAlign = 'center'
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value > ano) {
        alert('[ERRO] Ano inválido, tente novamente!')
    } else if (fano.value <= 1920) {
        alert ('ce ja ta morto já fi sai daqui')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 14) {
                img.setAttribute('src', 'bebem.png')
            } else if (idade <25) {
                img.setAttribute('src', 'jovemm.png')
            } else if (idade <50){
                img.setAttribute('src', 'adultom.png')
            } else {
                img.setAttribute('src', 'idosom.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 14) {
                img.setAttribute('src', 'bebef.png')
            } else if (idade <25) {
                img.setAttribute('src', 'jovemf.png')
            } else if (idade <50) {
                img.setAttribute('src', 'adultof.png')
            } else {
                img.setAttribute('src', 'idosof.png')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
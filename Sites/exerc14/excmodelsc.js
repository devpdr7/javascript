function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    var recep = window.document.getElementById('recep')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora <= 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#fdddad'
        recep.innerHTML = `Bom dia!`
    } else if (hora <=18 && hora >=13) {
        img.src = 'fototarde.png'
        document.body.style.background = '#ce8a55'
        recep.innerHTML = `Boa tarde!`
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#161c36'
        recep.innerHTML = `Boa noite!`
    }
    
}
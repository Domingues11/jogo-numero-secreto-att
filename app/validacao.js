function validacaoDoChute(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        return
    }
    
    if (numeroForMaiorQuePermitido (numero)) {
        elementoChute.innerHTML += `
        <div>Valor invalido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}
        </div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novaente" class="btn__jogar__novamente">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
         elementoChute.innerHTML += `
         <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
         `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

}

function chuteForInvalido (numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor
    
}

document.body.addEventListener('click', e => {
    if (e.target.id = 'jogar-novaente') {
        window.location.reload()
    }
})
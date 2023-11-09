let numeroMaximo = 100;
let listaNumerosSorteados = [];
let numeroAleatorio = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);

    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute != '') {
        if (chute == numeroAleatorio) {
            let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
            let mensagemDeAcerto = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}.`;

            exibirTextoNaTela('h1', 'Acertou!');
            exibirTextoNaTela('p', mensagemDeAcerto);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroAleatorio) {
                exibirTextoNaTela('p', 'O número secreto é menor.');
            } else {
                exibirTextoNaTela('p', 'O número secreto é maior.');
            }

            limpaCampo();
        }
    } else {
        exibirTextoNaTela('p', 'Digite um número válido!');
    }

    tentativa++;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limpaCampo() {
    chute = document.querySelector('input');

    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);

    mensagemInicial();
    limpaCampo();
}
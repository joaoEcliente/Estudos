var timerId = null;

function iniciarJogo(){
    let url = window.location.search;

    let nivel_jogo = url.replace("?", "");

    alert(nivel_jogo);


    let tempo_segundo = '';

    if(nivel_jogo == '1'){
        tempo_segundo = 120;
    }

    if(nivel_jogo == '2'){
        tempo_segundo = 60;
    }

    if(nivel_jogo == '3'){
        tempo_segundo = 30;
    }

    // Adicionando tempo

    document.getElementById('tempo').textContent = tempo_segundo;

    var qtde_balao = 20;

    document.getElementById('inteiros').textContent = qtde_balao;
    document.getElementById('estourados').textContent = 0;

    cria_balao(qtde_balao);

    contagem_regressiva(tempo_segundo + 1);

}

function contagem_regressiva(segundos) {
    segundos--

    if(segundos == -1){
        clearTimeout(timerId);
        gamer_over();
        return false;

    }

    document.getElementById('tempo').textContent = segundos;

    timerId = setTimeout("contagem_regressiva("+segundos+")", 1000)
}



function cria_balao(qtde_balao){
    for(var i = 1; i <= qtde_balao; i++){
        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png'
        balao.style.margin = '10px';
        balao.onclick = function(){ estourar(this)};
        balao.id = 'b' + i;

        document.getElementById('cenario').appendChild(balao);
    }
}

function estourar(e){
    var balao_estourado = e.id;

    document.getElementById(balao_estourado).setAttribute("onclick", "")
    document.getElementById(balao_estourado).src = 'imagens/balao_azul_pequeno_estourado.png';

    pontuacao(-1)
}

function pontuacao(acao){
    var baloes_inteiros = document.getElementById('inteiros').innerHTML;
    var baloes_estourados = document.getElementById('estourados').innerHTML;

    baloes_inteiros = parseInt(baloes_inteiros);
    baloes_estourados = parseInt(baloes_estourados);

    baloes_inteiros = baloes_inteiros + acao;
    baloes_estourados = baloes_estourados - acao;

    document.getElementById('inteiros').textContent = baloes_inteiros;
    document.getElementById('estourados').textContent = baloes_estourados;

    if(baloes_inteiros == 0){
        alert('Fim de Jogo, VOCÊ VENCEU!!!')
        window.location.href = 'index.html';
    }
}


function gamer_over(){ 
    alert('Fim de Jogo, tente novamente!');
    window.location.href = 'index.html';
}
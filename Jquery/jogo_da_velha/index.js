let rodada = 1;
let matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3); 
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0; 
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready(function(){
   

    $('#iniciar_jogo').click(function(){

         //Verifica se há campo vazio

        if($('#entrada_nome_jogador_1').val() == ''){
            alert('Preencha o campo nome do jogador 1');
            return false;
        }
        
        if($('#entrada_nome_jogador_2').val() == ''){
            alert('Preencha o campo nome do jogador 2');
            return false;
        }

        // Exibir nome

        $('#nome_jogador_1').html($('#entrada_nome_jogador_1').val());
        $('#nome_jogador_2').html($('#entrada_nome_jogador_2').val());

        // Ocultar e exibir

        $('#pagina_principal').hide();
        $('#palco_jogo').show();

    })

    // Selecionar container

    $('.area_de_jogo').click(function(){
        const id_elemento = this.id;
        jogada(id_elemento);
    })

    // Função jogada

    function jogada(id){
        var ponto = 0;
        var icone = '';

        if((rodada % 2) == 1){
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;
        } else{
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;
        }

        rodada++

        $('#'+id).css('background-image', icone);

        const linha_coluna = id.split('-')

        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto
        
        verifica_combinacao();

    }

    function verifica_combinacao(){
        var pontos = 0;

        for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['a'][i];
        }
        pontos = 0
        ganhador(pontos);

        for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['b'][i];
        }
        pontos = 0
        ganhador(pontos);

        for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['c'][i];
        }
        pontos = 0
        ganhador(pontos);


    }

    function ganhador(){
        
    }
})


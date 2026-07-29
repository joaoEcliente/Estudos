let rodada = 1;
const matriz = Array(3);

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

    }
})


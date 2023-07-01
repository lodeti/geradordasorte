//Não permitir que "Escolha:" no input seja selecionado

window.onload = function() {
    document.getElementById("seletor").options[0].disabled = true;
}

//Gerar aleatoriamente números para cada jogo selecionado

function gerarNumeros(){

    
    var resp = document.getElementById('numGerados');
    var numeros = []

    if (document.getElementById('seletor').value == "0"){
        alert("Você precisa primeiro selecionar no menu qual loteria você quer gerar um jogo.");
    } else if (document.getElementById('seletor').value == "lotofacil"){
        for(var i = 0; i < 15; i++) {        
            var sorteio = Math.round(Math.random() * 24 + 1);

            while(numeros.includes(sorteio)){
                sorteio = Math.round(Math.random() * 24 + 1);
            }
            numeros.push(sorteio);
        }    
    } else if (document.getElementById('seletor').value == "megasena"){
        for(var i = 0; i <= 5; i++) {        
            var sorteio = Math.round(Math.random() * 59 + 1);

            while(numeros.includes(sorteio)){
                sorteio = Math.round(Math.random() * 59 + 1);
            }
            numeros.push(sorteio);
        }
    } else if (document.getElementById('seletor').value == "quina"){
        for(var i = 0; i <= 4; i++) {        
            var sorteio = Math.round(Math.random() * 79 + 1);

            while(numeros.includes(sorteio)){
                sorteio = Math.round(Math.random() * 79 + 1);
            }
            numeros.push(sorteio);
        }
    } else if (document.getElementById('seletor').value == "lotomania"){
        for(var i = 0; i <= 49; i++) {        
            var sorteio = Math.round(Math.random() * 99 + 1);

            while(numeros.includes(sorteio)){
                sorteio = Math.round(Math.random() * 99 + 1);
            }
            numeros.push(sorteio);
        }
    }

    function sortfunction(a, b){
    return (a - b)
    }
    resp.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;' + numeros.sort(sortfunction).join('&nbsp;&nbsp;&nbsp;&nbsp;') + '&nbsp;&nbsp;&nbsp;&nbsp;'

    $("select").change(function() {
        $("#numGerados").hide();
      });
      
      $("button").click
        $("#numGerados").fadeIn(1000);
  
}

//Exibir na tela o resultado do último sorteio. Cabe melhorias aqui, como poder escolher o sorteio, mas por ora está OK.

function exibeResultado() {
    let campoResultado = document.getElementById('resultadoUltimo');
    let loteria = document.getElementById('seletor').value;
    let url = `https://apiloterias.com.br/app/resultado?loteria=${loteria}&token=McgJ3kmcjLxxReW`
    
    $("select").change(function() {
        $("#resultadoUltimo").hide();
        });
    
    fetch(url)
    .then(resposta => resposta.json())
    .then(data => {
      let dezenas = data.dezenas;
      let resultado = dezenas.join('&nbsp;&nbsp;&nbsp;&nbsp');
      console.log(resultado)
      campoResultado.innerHTML= '&nbsp;'+ resultado + '&nbsp;';
      
      $("#resultadoUltimo").fadeIn(1000);

    })
    
  
}
  
    exibeResultado();


//Altera dinamicamente, com base no select, o link que leva ao site da Caixa com o resultado detalhado do sorteio

  const seletor = document.getElementById('seletor');
  const linkResultado = document.getElementById('resultadoDetalhado');
  
  seletor.addEventListener('change', function() {
    let loteria = seletor.value;
    linkResultado.href = `https://loterias.caixa.gov.br/Paginas/${loteria}.aspx`;
  });
  
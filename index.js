function criptografar() {
  let campoCriptografar = document.querySelector('input').value;
  let critpografarTexto = campoCriptografar.replace(/e/g,"enter")
                       .replace(/i/g,"imes")
                       .replace(/a/g,"ai")
                       .replace(/o/g,"ober")
                       .replace(/u/g,"ufat");
  document.querySelector('#mostrarResultado').textContent = critpografarTexto;
  document.querySelector('input').value = ''; 

    if (critpografarTexto == '') {
      alert('O texto deve conter pelo menos uma letra de A a U.');
    }

function ocultarElementosSeNecessario() {
  const resultadoCriptografado = document.querySelector('#mostrarResultado').textContent;
  const ocultarImagem = document.querySelector('#ocultarImgBoneca');
  const ocultarH2 = document.querySelector('h2'); 
  const ocultarTexto = document.querySelector('#ocutarTexto'); 

  if (resultadoCriptografado === critpografarTexto) {
      if (ocultarImagem) {
          ocultarImagem.style.display = 'none';
      }
      
      if (ocultarH2) {
          ocultarH2.style.display = 'none';
      }
      
      if (ocultarTexto) {
          ocultarTexto.style.display = 'none';
      }
  }
}

function mostrarBotao() {
  const mostrarBtn = document.querySelector('#btnCopiar');
  if (mostrarBtn) {
      mostrarBtn.style.display = 'block';
  }
}

// Chamar as funções quando necessário
ocultarElementosSeNecessario();
mostrarBotao();

}
function decriptografar() {
  let campoDecriptografar = document.querySelector('input').value;
  let decriptografarTexto = campoDecriptografar.replace(/enter/g, "e")
                                              .replace(/imes/g, "i")
                                              .replace(/ai/g, "a")
                                              .replace(/ober/g, "o")
                                              .replace(/ufat/g, "u");
  document.querySelector('#mostrarResultado').textContent = decriptografarTexto;
}

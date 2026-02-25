function fugir() {
  let botaoNao = document.getElementById("nao");
  let painel = document.querySelector(".painel");

  let largura = painel.clientWidth;
  let altura = painel.clientHeight;

  let maxX = largura - botaoNao.offsetWidth;
  let maxY = altura - botaoNao.offsetHeight;

  let aleatorioX = Math.floor(Math.random() * maxX);
  let aleatorioY = Math.floor(Math.random() * maxY);

  botaoNao.style.left = aleatorioX + "px";
  botaoNao.style.top = aleatorioY + "px";
}

// coloque FORA da função
document.getElementById("nao").addEventListener("touchstart", fugir);
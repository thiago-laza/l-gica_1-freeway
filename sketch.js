function setup() {
    createCanvas(500, 400);
    trilha.loop();
  }
  
  function draw() {
    background(estrada);
    mostraAtor();
    movimentaAtor();
    mostraCarros();
    movimentaCarros();
    posicaoInicial();
    verificaColisao();
    mostraPontos();
    marcaPontos();
  }
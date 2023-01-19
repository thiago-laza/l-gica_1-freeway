//variáveis das imagens:
let estrada;
let ator;
let carro1;
let carro2;
let carro3;

//variáveis do som:
let trilha;
let colisao;
let ponto;

function preload(){
  estrada = loadImage("imagens/estrada.png");
  ator = loadImage("imagens/ator-1.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  carros = [carro1,carro2,carro3,carro1,carro2,carro3];
  trilha = loadSound("sons/trilha.mp3");
  ponto = loadSound("sons/pontos.wav");
  colisao = loadSound("sons/colidiu.mp3");
  }
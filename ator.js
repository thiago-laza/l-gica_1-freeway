//variáveis do ator:
let xAtor = 85;
let yAtor = 366;

//variável da colisao:
let colidiu = false;

//variável dos pontos:
let meusPontos = 0;

function mostraAtor(){
  image(ator,xAtor,yAtor,30,30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 3;
    if(yAtor > 366){
      yAtor = 366;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < carros.length; i++){
    colidiu = collideRectCircle(xCarros[i],yCarros[i],comprimento,altura,xAtor,yAtor,15);
    if(colidiu){
    voltaPosicaoInicial();
      colisao.play();
      if(pontoInicial()){
        meusPontos -= 1;
      }
    
    }
  }
  
}

function voltaPosicaoInicial(){
  return yAtor = 366;
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaPosicaoInicial();
    ponto.play();
  }
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60));
  text(meusPontos,width/5,27);
}

function pontoInicial(){
  return meusPontos > 0;
}





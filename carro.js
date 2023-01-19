//variáveis dos carros:
let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,150,210,270,318];
let velocidadeCarros = [2,2.5,3.2,5,3.3,2.3];
let comprimento = 50;
let altura = 40;

function mostraCarros(){
  for(let i = 0; i < carros.length; i++){
    image(carros[i],xCarros[i],yCarros[i],comprimento,altura);
  }
}

function movimentaCarros(){
  for(let i = 0; i < carros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function posicaoInicial(){
  for(let i = 0; i < carros.length; i++){
    if(xCarros[i] < - 50){
      xCarros[i] = 600;
    }
  }
}


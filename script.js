//ERRO: VELOCIDADE DO OBJETO
//FALTA: FINALIZAR OUTRAS ETAPAS DA FASE

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var y_atirar;
var atirar = false;
var x = 10;
var y = canvas.height - 211;
var x_oponente1 = canvas.width-506
var fator_soma = 5;
var x_tiro=5, y_tiro, colisao=false, cor_tiro = 'rgb(0, 0, 255)';
var fator_somaX = 0;
var y = canvas.height - 211
var personagem_direita, personagem_esquerda, pulo, num_pulo;
var cor_oponente1 = 'rgb(100, 100, 100)';
var plataforma;
var x_porta = canvas.width-550;
var cor_porta = "rgb(255, 255, 255)", porta_aberta=false;

var c = canvas.getContext('2d');

function CriarElementos(){
    c.fillStyle = 'rgb(0, 255, 0)';
    c.fillRect(5, canvas.height-111, canvas.width - 50, 30);

    c.fillStyle = 'rgb(255, 255, 0)';
    c.fillRect(5, canvas.height-300, (canvas.width-50), 30);

    //Porta metal
    c.fillStyle = cor_porta;
    c.fillRect(x_porta, canvas.height-300, canvas.width-1100, 30);
    
    c.fillStyle = cor_oponente1;
    c.fillRect(x_oponente1, canvas.height-201, 90, 90);

    // c.fillStyle = 'rgb(255, 255, 0)';
    // c.fillRect(5, canvas.height-489, (canvas.width-50)-(canvas.width-750), 30);

    c.fillStyle = 'rgb(255, 0, 0)';
    c.fillRect(x, y, 100,100);
}

function FatorSoma(){
    var fator_somaX = 5
    return fator_somaX;
}

function Pular(){
    if(x >= canvas.width - 650 && x <= canvas.width - 360){
        y = canvas.height-400
        plataforma = true;
    }
    else{
        y = canvas.height-400
        setTimeout(function(){
            y = canvas.height-211

        },250)
    }    
}

function AnimateCenario(){
    c.clearRect(0, 0, innerWidth, innerHeight)
    
    CriarElementos()
    
    requestAnimationFrame(AnimateCenario);
    if(atirar == true){
       
        c.fillStyle = cor_tiro;
        c.fillRect(x_tiro, y_tiro, 20,20);
    
        x_tiro=x_tiro+5 
        y_tiro = y_atirar;
        if(x_tiro == x_oponente1 || x_tiro == x_oponente1 - 5 || x_tiro == x_oponente1 + 5){
            colisao = true; 
        }
    }
    if(plataforma == true && y == canvas.height - 400 && x <= canvas.width - (canvas.width - 5)){
        y = canvas.height - 211;
        plataforma = false
    }
    if(plataforma == true){
        cor_porta = 'rgb(100, 100, 100)'
    }
    
    if(colisao == true){
        cor_oponente1 = 'rgb(150, 255, 150)'
        x_oponente1 = x_oponente1 + 30

        x_porta = canvas.width - 550
     
        // cor_tiro = 'rgb(255, 255, 255)'
        
    }
    else{
        colisao = false
        if(x_oponente1 >= canvas.width - 110){
            fator_soma = -5;
        }
        else if(x_oponente1 <= 10){
            fator_soma = 5;
        }
    
        x_oponente1 = x_oponente1 + fator_soma;
        // cor_tiro = 'rgb(0, 0, 255)'
    }
    if(personagem_direita == true){

        c.fillStyle = 'rgb(255, 0, 0)';
        c.fillRect(x, y, 100,100);
        x=x+5;
        y_atirar = y+50     
        x_tiro=x
        atirar = false;
    }

    if(personagem_esquerda == true){

        c.fillStyle = 'rgb(255, 0, 0)';
        c.fillRect(x, y, 100,100);
        x=x-5;
        y_atirar = y+50     
        x_tiro=x
    }
    

    if(pulo == true){
        Pular()  
        y_atirar = y+50     
    }
    else if(pulo == false){
    }
    
       
}

AnimateCenario()

document.addEventListener('keydown', keyRight, false)
document.addEventListener('keyup', keyRightSolta, false)

document.addEventListener('keydown', keySpace, false)
// document.addEventListener('keyup', keySpaceSolta, false)

document.addEventListener('keydown', keyLeft, false)
document.addEventListener('keyup', keyLeftSolta, false)

document.addEventListener('keydown', keyUp, false)
document.addEventListener('keyup', keyUpSolta, false)

function keyRight(e){
    if (e.keyCode == 39) {
        personagem_direita = true;
    }
}
function keyRightSolta(e){
    if (e.keyCode == 39) {
        personagem_direita = false;
    }
}
function keyLeft(e){
    if (e.keyCode == 37) {
        personagem_esquerda = true;

    }
    
}
function keyLeftSolta(e){
    if (e.keyCode == 37) {
        personagem_esquerda = false;
    }
    
}
function keyUp(e){
    if (e.keyCode == 38) {
        pulo = true;
    }

}
function keyUpSolta(e){
    if (e.keyCode == 38) {
        pulo = false;
    }

}
function keySpace(e){
    if (e.keyCode == 32) {
        atirar = true;
    }
    else{
        atirar = false;
    }
}



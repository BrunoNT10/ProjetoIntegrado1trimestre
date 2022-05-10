//ERRO: VELOCIDADE DO OBJETO
//FALTA: FINALIZAR OUTRAS ETAPAS DA FASE

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var y_atirar;
var atirar = false;
var x = 10;
var y = canvas.height - 211;
var x_oponente1 = canvas.width-500
var fator_soma = 5;
var x_tiro=5, y_tiro = y+50, colisao=false;
var fator_somaX = 0;
var y = canvas.height - 211
var personagem_direita, personagem_esquerda, pulo, num_pulo;

var c = canvas.getContext('2d');

function CriarElementos(){
    c.fillStyle = 'rgb(0, 255, 0)';
    c.fillRect(5, canvas.height-111, canvas.width - 50, 30);

    c.fillStyle = 'rgb(255, 255, 0)';
    c.fillRect(canvas.width-750, canvas.height-300, (canvas.width-50)-(canvas.width-750), 30);

    c.fillStyle = 'rgb(100, 100, 100)';
    c.fillRect(x_oponente1, canvas.height-201, 90, 90);

    c.fillStyle = 'rgb(255, 255, 0)';
    c.fillRect(5, canvas.height-489, (canvas.width-50)-(canvas.width-750), 30);

    c.fillStyle = 'rgb(255, 0, 0)';
    c.fillRect(x, y, 100,100);
}

function FatorSoma(){
    var fator_somaX = 5
    return fator_somaX;
}

function Pular(){
    num_pulo = 1;
    setTimeout(function(){
        c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
        c.fillStyle = 'red'//cor de preenchimento do quadrado
        c.fillRect(x, y, 100, 100); //serve para falar as dimensões
        
        y = y+50;
        
    }, 1000)
        
    c.clearRect(0, 0, innerWidth, innerHeight)//(x,y, onde terminax, onde terminay) // Limpa a tela
    CriarElementos()
    c.fillStyle = 'red'//cor de preenchimento do quadrado
    c.fillRect(x, y, 100, 100); //serve para falar as dimensões
    y = y-50
    if(num_pulo == 1){
        num_pulo = 0 
        return       
    }
}

function AnimateCenario(){
    c.clearRect(0, 0, innerWidth, innerHeight)
    
    CriarElementos()
    
    requestAnimationFrame(AnimateCenario);
    if(atirar == true){
       
        c.fillStyle = 'rgb(0, 0, 255)';
        c.fillRect(x_tiro, y_tiro, 20,20);
    
        x_tiro=x_tiro+1 
        y_tiro = y_atirar;
        if(x_tiro = x_oponente1){
            colisao = true; 
        }
    }
    if(colisao == true){
        console.log('colisao')
    }
    else{
        if(x_oponente1 >= canvas.width - 110){
            fator_soma = -5;
        }
        else if(x_oponente1 <= 10){
            fator_soma = 5;
        }
    
        x_oponente1 = x_oponente1 + fator_soma;
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



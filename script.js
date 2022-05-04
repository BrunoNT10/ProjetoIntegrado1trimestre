//ERRO: VELOCIDADE DO OBJETO
//FALTA: FINALIZAR OUTRAS ETAPAS DA FASE

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var x = 10;
var x_oponente1 = canvas.width-500
var fator_soma = 5
var fator_somaX = 10;

var c = canvas.getContext('2d');

function AnimateCenario(){
    c.clearRect(0, 0, innerWidth, innerHeight)

    c.fillStyle = 'rgb(0, 255, 0)';
    c.fillRect(5, canvas.height-111, canvas.width - 50, 30);

    c.fillStyle = 'rgb(255, 255, 0)';
    c.fillRect(canvas.width-750, canvas.height-300, (canvas.width-50)-(canvas.width-750), 30);

    c.fillStyle = 'rgb(100, 100, 100)';
    c.fillRect(x_oponente1, canvas.height-201, 60, 90);

    c.fillStyle = 'rgb(255, 255, 0)';
    c.fillRect(5, canvas.height-489, (canvas.width-50)-(canvas.width-750), 30);

    requestAnimationFrame(AnimateCenario);
    c.fillStyle = 'rgb(255, 0, 0)';
    c.fillRect(x, canvas.height-211, 100,100);

    if(x_oponente1 >= canvas.width - 110){
        fator_soma = -10;
    }
    else if(x_oponente1 <= 10){
        fator_soma = 10;
    }
    
    x_oponente1 = x_oponente1 + fator_soma;
    console.log(x_oponente1)
    
}

function AnimateMainCharacter(fator_somaX){
    // console.log('fator soma ', fator_somaX)
    console.log(x_oponente1)
    c.clearRect(0, 0, innerWidth, innerHeight)

    c.fillStyle = 'rgb(0, 255, 0)';
    c.fillRect(5, canvas.height-111, canvas.width - 50, 30);

    c.fillStyle = 'rgb(255, 255, 0)';
    c.fillRect(canvas.width-750, canvas.height-300, (canvas.width-50)-(canvas.width-750), 30);

    c.fillStyle = 'rgb(255, 255, 0)';
    c.fillRect(5, canvas.height-489, (canvas.width-50)-(canvas.width-750), 30);

    if(x >= canvas.width - 150){
        fator_somaX = 0;
    }
    else{
        fator_somaX = 10;
    }
    console.log(fator_somaX)
    x=x+fator_somaX;

    requestAnimationFrame(AnimateMainCharacter);
    c.fillStyle = 'rgb(255, 0, 0)';
    c.fillRect(x, canvas.height-211, 100,100);

    if(x_oponente1 >= canvas.width - 110){
        fator_soma = -10;
    }
    else if(x_oponente1 <= 10){
        fator_soma = 10;
    }

    x_oponente1 = x_oponente1 + fator_soma;

    c.fillStyle = 'rgb(100, 100, 100)';
    c.fillRect(x_oponente1, canvas.height-201, 60, 90);
    return
    
}

function AnimateMainCharacterLeft(fator_somaX){
    // console.log(x)

    c.clearRect(0, 0, innerWidth, innerHeight)

    c.fillStyle = 'rgb(0, 255, 0)';
    c.fillRect(5, canvas.height-111, canvas.width - 50, 30);

    c.fillStyle = 'rgb(255, 255, 0)';
    c.fillRect(canvas.width-750, canvas.height-300, (canvas.width-50)-(canvas.width-750), 30);

    c.fillStyle = 'rgb(255, 255, 0)';
    c.fillRect(5, canvas.height-489, (canvas.width-50)-(canvas.width-750), 30);

    if(x <= 10){
        fator_somaX = 0;
    }
    else{
        fator_somaX = 10;
    }
    x=x-fator_somaX;

    requestAnimationFrame(AnimateMainCharacterLeft);
    c.fillStyle = 'rgb(255, 0, 0)';
    c.fillRect(x, canvas.height-211, 100,100);

    if(x_oponente1 >= canvas.width - 110){
        fator_soma = 0;
    }
    else if(x_oponente1 <= 10){
        fator_soma = 10;
    }
    
    x_oponente1 = x_oponente1 + fator_soma;

    c.fillStyle = 'rgb(100, 100, 100)';
    c.fillRect(x_oponente1, canvas.height-201, 60, 90);

    
}
AnimateCenario()

document.addEventListener('keyup', keyRight, false)
document.addEventListener('keydown', keyLeft, false)


function moveToRight(){
    // x_oponente1=canvas.width-500;
    fator_somaX = 10;
    AnimateMainCharacter(fator_somaX)
}
function moveToLeft(){
    // x_oponente1=canvas.width-500;
    fator_somaX = 10;
    AnimateMainCharacterLeft(fator_somaX)
}
function keyRight(e){
    if (e.keyCode == 39) {
        moveToRight()
    }else if (e.keyCode == 37) {
        moveToLeft()
    }
    
}
function keyLeft(e){
    if (e.keyCode == 39) {
        moveToRight()
    }else if (e.keyCode == 37) {
        moveToLeft()
    }
    
}


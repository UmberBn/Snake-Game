let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //pixels
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
function addBG(){
    context.fillStyle = "lightgreen";//background collor
    context.fillRect(0, 0 , 16 * box, 16*box);
}

function addSnake(){
    for(let i=0 ; i<snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x,snake[i].y,box,box);
    }

}

addBG();
addSnake();
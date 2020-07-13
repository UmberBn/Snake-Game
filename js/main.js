let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //pixels
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

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

function startGame(){
    addBG();
    addSnake();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();
    
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame,100);


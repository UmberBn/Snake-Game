let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; //pixels
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random()* 15 + 1) * box,
    y: Math.floor(Math.random()* 15 + 1) * box
}
function addBG(){
    context.fillStyle = "lightgreen";//background collor
    context.fillRect(0, 0 , 16*box, 16*box);
}

function addSnake(){
    for(let i=0 ; i<snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x,snake[i].y,box,box);
    }

}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x,food.y, box, box);
}

document.addEventListener('keydown', update);

function update (event){
    if((event.keyCode == 37 || event.keyCode == 65) && direction != "right") direction = "left";
    if((event.keyCode == 38 || event.keyCode == 87) && direction != "down") direction = "up";
    if((event.keyCode == 39 || event.keyCode == 68) && direction != "left") direction = "right";
    if((event.keyCode == 40 || event.keyCode == 83) && direction != "up") direction = "down";
}

function startGame(){
    
    //limit the movement on canvas 
    if(snake[0].x > 15*box) snake[0].x = 0;
    if(snake[0].x < 0) snake[0].x = 16*box;
    if(snake[0].y > 15*box) snake[0].y = 0;
    if(snake[0].y < 0) snake[0].y = 16*box;

    for(let i = 1; i<snake.length;i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game)
            alert("YOU KILLED THE SNAKE, Press 'F5' to try again");
        }
    } 

    addBG();
    addSnake();
    drawFood();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;
    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    } else{  food.x = Math.floor(Math.random()* 15 + 1) * box;
        food.y = Math.floor(Math.random()* 15 + 1) * box;}


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(startGame,100);


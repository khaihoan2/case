let snake;

function setup() {
    createCanvas(witdh, height);
    newGame();
}

function draw() {
    background(0);
    drawSnake();
}

function drawSnake() {
    snake.show();
}

function newGane() {
    snake = new Snake();
}

function keyPressend(){
    if (keyCode == up_Arrow && snake.vel.y !=1){
        snake.vel.y = -1;
        snake.vel.x = 0;
    }else  if (keyCode == down_Arrow && snake.x !=1){
        snake.vel.y = 1;
        snake.vel.x = 0
    }else if (keyCode == left_Arrow && snake.vel.x !=1){
        snake.vel.y = 0;
        snake.vel.x = -1;
    }else if (keyCode == right_Arrow && snake.vel.x != 1){
        snake.vel.y =0;
        snake.vel.x = 1;
    }
}
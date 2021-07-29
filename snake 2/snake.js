// class snake {
//     x;
//     y;
//
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

window.onload = function () {
    this.cvs = document.getElementById('canvas');
    this.ctx = this.cvs.getContext('2d');

    this.svsW = cvs.width;
    this.cvsH = cvs.height;

    this.snakeW = 10;
    this.snakeH = 10;
}

// }

function drawSnake(x, y) {
    ctx.fillStyle = "red";
    ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);

    ctx.fillStyle = "white";
    ctx.strokeRect(x * snakeW, y *snakeH, snakeW, snakeH);
}


let len = 4;
let snake = [];

for (let i = len - 1; i >= 0; i--) {
    snake.push(
        {
            x: i,
            y: 0
        }
    );

}
function draw() {
    for (let i = 0; i < snake.length; i++) {
        let x = snake[i].x;
        let y = snake[i].y;
        drawSnake(x, y);
    }
}


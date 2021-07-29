class game{
    constructor() {
        this.canvas = null;//tạo khung
        this.context = null;
        this.init();
        this.loop();
    }

    init() {
        this.canvas = document.createElement('canvas');//khởi tạo canvas
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 1500;// chiều rộng của khung.
        this.canvas.height = 700;// chiều dài của khung.
        document.body.appendChild(this.canvas);//chuyển dài và rộng vào body.
        this.snake = new snake(this);
        this.food = new food(this);
    }

    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 70);
    }

    update() {
        this.snake.update();
        if(this.snake.eat(this.food.x, this.food.y)){
            this.food.update();
        }
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.draw();
        this.food.draw();
    }
}

var g = new game();// khởi tạo game
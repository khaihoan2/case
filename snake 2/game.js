class game {
    // cavas;
    // context;

    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
        this.loop();
    }

    init() {
        this.cavas = document.createElement('canvas');
        this.context = this.cavas, getContext('2d');
        this.cavas.width = 1000;
        this.cavas.height = 500;
        document.body.appendChild(this.canvas);
        this.snake = new this.snake(this);
    }

    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop, 60);
    }

    update() {
        this.snake.update();
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.cavas.height);
        this.snake.draw();
    }
}

let g = new game();
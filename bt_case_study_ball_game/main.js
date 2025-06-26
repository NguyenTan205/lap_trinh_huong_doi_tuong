// Đối tượng GameBoard
function GameBoard(width, height) {
    this.width = width;
    this.height = height;
}

// Đối tượng Ball
function Ball(x, y, angle, speed, board) {
    this.x = x; // toa do X
    this.y = y; // tao do y
    this.angle = angle; // Đơn vị độ
    this.speed = speed;
    this.board = board;

    this.move = function () {
        let radian = this.angle * Math.PI / 180;
        this.x += Math.cos(radian) * this.speed;
        this.y += Math.sin(radian) * this.speed;
    };

    this.checkCollision = function (bar) {
        // Va chạm với viền trái hoặc phải
        if (this.x <= 0 || this.x >= this.board.width) {
            this.angle = 180 - this.angle;
        }
        // Va chạm với viền trên
        if (this.y <= 0) {
            this.angle = -this.angle;
        }
        // Va chạm với thanh Bar
        if (this.y >= bar.y && this.x >= bar.x && this.x <= bar.x + bar.width) {
            this.angle = -this.angle;
        }
        // Va chạm với viền dưới
        if (this.y >= this.board.height) {
            console.log("Game Over!");
            cancelAnimationFrame(gameId); // Dừng game
        }
    };
}

// Đối tượng Bar
function Bar(width, board) {
    this.width = width;
    this.x = (board.width - width) / 2;
    this.y = board.height - 20;
    this.speed = 20;

    this.moveLeft = function () {
        this.x -= this.speed;
        if (this.x < 0) this.x = 0;
    };

    this.moveRight = function () {
        this.x += this.speed;
        if (this.x + this.width > board.width) {
            this.x = board.width - this.width;
        }
    };
}

// Khởi tạo game
let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

let gameBoard = new GameBoard(canvas.width, canvas.height);
let ball = new Ball(300, 200, 45, 5, gameBoard);
let bar = new Bar(100, gameBoard);

let gameId;

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Vẽ ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();

    // Vẽ bar
    ctx.fillStyle = 'blue';
    ctx.fillRect(bar.x, bar.y, bar.width, 10);

    // Di chuyển và kiểm tra va chạm
    ball.move();
    ball.checkCollision(bar);

    // Lặp game
    gameId = requestAnimationFrame(gameLoop);
}

// Bắt đầu game
gameLoop();

// Di chuyển thanh bar
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        bar.moveLeft();
    } else if (event.key === 'ArrowRight') {
        bar.moveRight();
    }
});

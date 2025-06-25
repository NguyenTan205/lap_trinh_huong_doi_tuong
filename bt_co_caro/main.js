// Đối tượng Cell
    function Cell(row, col) {
    this.row = row;
    this.col = col;
    this.value = '';
    this.element = document.createElement('div');
    this.element.classList.add('cell');

    // Khi click vào ô
    this.element.addEventListener('click', () => {
    game.handleCellClick(this);
});
}

    // Đối tượng Board
    function Board(size) {
    this.size = size;
    this.cells = [];

    this.createBoard = function () {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    this.cells = [];

    for (let i = 0; i < size; i++) {
    this.cells[i] = [];
    for (let j = 0; j < size; j++) {
    const cell = new Cell(i, j);
    this.cells[i][j] = cell;
    boardElement.appendChild(cell.element);
}
}
}

    // Kiểm tra thắng
    this.checkWin = function (cell) {
    return (
    this.count(cell, 0, 1) + this.count(cell, 0, -1) >= 4 || // ngang
    this.count(cell, 1, 0) + this.count(cell, -1, 0) >= 4 || // dọc
    this.count(cell, 1, 1) + this.count(cell, -1, -1) >= 4 || // chéo chính
    this.count(cell, 1, -1) + this.count(cell, -1, 1) >= 4    // chéo phụ
    );
}

    // Đếm ô liên tiếp theo hướng
    this.count = function (cell, dx, dy) {
    let count = 0;
    let i = cell.row + dx;
    let j = cell.col + dy;

    while (i >= 0 && i < this.size && j >= 0 && j < this.size && this.cells[i][j].value === game.currentPlayer) {
    count++;
    i += dx;
    j += dy;
}
    return count;
}
}

    // Đối tượng Game
    function Game() {
    this.board = new Board(20);
    this.currentPlayer = 'X';
    this.gameOver = false;

    this.start = function () {
    this.board.createBoard();
    document.getElementById('winner').textContent = '';
    this.currentPlayer = 'X';
    this.gameOver = false;
}

    this.handleCellClick = function (cell) {
    if (this.gameOver || cell.value !== '') return;

    cell.value = this.currentPlayer;
    cell.element.textContent = this.currentPlayer;

    if (this.board.checkWin(cell)) {
    document.getElementById('winner').textContent = `Người chơi ${this.currentPlayer} thắng!`;
    this.gameOver = true;
    return;
}

    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
}

    this.reset = function () {
    this.start();
}
}

    // Khởi động game
    const game = new Game();
    game.start();

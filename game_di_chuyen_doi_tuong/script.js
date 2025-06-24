 function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
    ' height="' + this.size + '"' +
    ' src="' + this.image + '"' +
    ' style="top: ' + this.top + 'px; left: ' + this.left + 'px; position: absolute;" />';
}

    this.increaseSpeed = function (amount) {
    this.speed += amount;
    console.log('Increased speed to: ' + this.speed);
}

    this.decreaseSpeed = function (amount) {
    if (this.speed - amount >= 0) {
    this.speed -= amount;
    console.log('Decreased speed to: ' + this.speed);
} else {
    console.log('Speed cannot be less than 0');
}
}
    this.moveRight = function () {
    if (this.left + this.speed < window.innerWidth - this.size) {
    this.left += this.speed;
}
}

    this.moveLeft = function () {
    if (this.left - this.speed > 0) {
    this.left -= this.speed;
}
}

    this.moveUp = function () {
    if (this.top - this.speed > 0) {
    this.top -= this.speed;
}
}

    this.moveDown = function () {
    if (this.top + this.speed < window.innerHeight - this.size) {
    this.top += this.speed;
}
}
}

    var hero = new Hero("ninja.png", 20, 30, 100, 20);

    function displayHero() {
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

    function start() {
    displayHero();
    requestAnimationFrame(start); // Vẽ liên tục mượt mà
}

    start();

    // Điều khiển bằng bàn phím
    window.addEventListener('keydown', function (event) {
    switch (event.key) {
    case 'ArrowRight':
    hero.moveRight();
    break;
    case 'ArrowLeft':
    hero.moveLeft();
    break;
    case 'ArrowUp':
    hero.moveUp();
    break;
    case 'ArrowDown':
    hero.moveDown();
    break;
}
});

var GRID_SIZE = 20;
var FRAME_RATE = 10;
var SCREEN_SIZE;
var gameOver = false;

var snake;
var food;

function setup() {
  SCREEN_SIZE = createVector(800, 480);
  createCanvas(SCREEN_SIZE.x, SCREEN_SIZE.y);
  frameRate(FRAME_RATE);
  snake = new Snake(createVector(SCREEN_SIZE.x / 2, SCREEN_SIZE.y / 2));
  food = new Food();
}

function draw() {
  background(0);
  if (!gameOver) {
    snake.update();
    gameUpdate();
    textUpdate();
    snake.draw();
    food.draw();
  }else{
    gameOverUpdate();
  }
}

function gameUpdate() {
  if (snake.position.x < 0) {
    snake.position.x = SCREEN_SIZE.x - GRID_SIZE;
  } else if (snake.position.y < 0) {
    snake.position.y = SCREEN_SIZE.y - GRID_SIZE;
  } else if (snake.position.x >= SCREEN_SIZE.x) {
    snake.position.x = 0;
  } else if (snake.position.y >= SCREEN_SIZE.y) {
    snake.position.y = 0;
  }

  snake.body.slice(1).forEach(function (segment) {
    if (segment.equals(snake.body[0])) {
      gameOver = true;
    }
  });

  if (snake.position.equals(food.position)){
    food.add();
    snake.addBodySegment();
  }
}

function textUpdate() {
  textSize(150);
  fill(255, 100, 100, 100);
  textAlign(CENTER, CENTER);
  textLeading(0);
  text("Score: " + snake.length.toString(), SCREEN_SIZE.x / 2, SCREEN_SIZE.y / 2);
}

function gameOverUpdate() {
  textSize(120);
  fill(255, 100, 100);
  textAlign(CENTER, TOP);
  text("Game over", SCREEN_SIZE.x / 2, 0);
  textSize(80);
  text("Final score: " + snake.length.toString(), SCREEN_SIZE.x / 2, 150);
  textAlign(CENTER, BOTTOM);
  textSize(40);
  text("Click to restart...", SCREEN_SIZE.x / 2, SCREEN_SIZE.y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && snake.speed.x != GRID_SIZE) {
    snake.speed.x = -GRID_SIZE;
    snake.speed.y = 0;
  } else if (keyCode === RIGHT_ARROW && snake.speed.x != -GRID_SIZE) {
    snake.speed.x = GRID_SIZE;
    snake.speed.y = 0;
  }else if (keyCode === UP_ARROW && snake.speed.y != GRID_SIZE) {
    snake.speed.x = 0;
    snake.speed.y = -GRID_SIZE;
  }else if (keyCode === DOWN_ARROW && snake.speed.y != -GRID_SIZE) {
    snake.speed.x = 0;
    snake.speed.y = GRID_SIZE;
  }
}

function mouseClicked() {
  if (gameOver) {
    snake = new Snake(createVector(SCREEN_SIZE.x / 2, SCREEN_SIZE.y / 2));
    food = new Food();
    gameOver = false;
  }
}

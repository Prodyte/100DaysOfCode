function Food(){
  this.add();
}

Food.prototype.add = function () {
  var tempFoodX = floor(random(SCREEN_SIZE.x / GRID_SIZE)) * GRID_SIZE;
  var tempFoodY = floor(random(SCREEN_SIZE.y / GRID_SIZE)) * GRID_SIZE;
  this.position = createVector(tempFoodX, tempFoodY);
};

Food.prototype.draw = function () {
  fill(0, 255, 255);
  rect(this.position.x, this.position.y, GRID_SIZE, GRID_SIZE);
};

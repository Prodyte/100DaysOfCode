function Snake(_position){
  this.position = _position;
  this.speed = createVector(0, 0);
  this.colour = color(0);
  this.body = [];
  this.length = 0;
}

Snake.prototype.update = function () {
  this.body.unshift(this.position.copy());
  if (this.body.length > this.length) {
    this.body.pop();
  }
  this.position.add(this.speed);
};

Snake.prototype.draw = function () {
  fill(255);
  rect(this.position.x, this.position.y, GRID_SIZE, GRID_SIZE);
  this.body.forEach(function (segment) {
    rect(segment.x, segment.y, GRID_SIZE, GRID_SIZE);
  });
};

Snake.prototype.addBodySegment = function () {
  this.length += 1;
};

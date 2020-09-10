var RIGHT_KEY = 39;

function MarioBros(canvas, sprite) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  
  this.x = 0;
  this.y = 0;
  this.scale = 0.15;
  this.speed = 10;
  
  this.sprite = new Image();
  this.sprite.src = sprite;
  this.sprite.onload = (function() {
    this.sprite.isReady = true;
    this.sprite.hFrames = 3;
    this.sprite.vFrames = 1;
    this.sprite.fWidth = Math.floor(this.sprite.width / this.sprite.hFrames);
    this.sprite.fHeight = Math.floor(this.sprite.height / this.sprite.vFrames);
    this.sprite.hfIndex = 0;
    this.sprite.vfIndex = 0;
    
    this.width = this.sprite.fWidth * this.scale;
    this.height = this.sprite.fHeight * this.scale;
  }).bind(this);
  
  this.isFalling = false;
  
}

MarioBros.prototype.isReady = function() {
  return this.sprite.isReady;
}

MarioBros.prototype.onKeyUp = function(event) {
  if (event.keyCode == RIGHT_KEY) {
      this.stop();
  }
}

MarioBros.prototype.onKeyDown = function(event) {
  if (event.keyCode == RIGHT_KEY) {
      this.moveRight();
  }
}

MarioBros.prototype.moveRight = function() {
  if (this.sprite.hfIndex >= 2) {
    this.sprite.hfIndex = 1;
  } else {
    this.sprite.hfIndex++;
  }
  
  this.x += this.speed;
}

MarioBros.prototype.stop = function() {
  this.sprite.hfIndex = 0;
}

MarioBros.prototype.collide = function(elements) {
  collitions = elements.filter((function(e) {
    return e.collide(this);
  }).bind(this));
  
  if (collitions.length > 0) {
    if (collitions[0] instanceof Gap) {
      this.isFalling = true;
      this.fallOut();
      setInterval(this.fallOut.bind(this), 60);
    }
    return true;
  }
  return false;
}

MarioBros.prototype.fallOut = function() {
  if (this.isFalling) {
    this.y += this.speed;
  }
}

MarioBros.prototype.draw = function() {
  if (this.isReady()) {
    this.ctx.save();
    
    this.ctx.drawImage(
      this.sprite,
      this.sprite.hfIndex * this.sprite.fWidth,
      this.sprite.vfIndex * this.sprite.fHeight,
      this.sprite.fWidth,
      this.sprite.fHeight,
      Math.min(this.x, this.canvas.width / 2),
      this.y,
      this.width,
      this.height
    );
    this.ctx.restore();
  }
}




function Gap(canvas, x, y, blocks, blockWidth, blockHeight) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    
    this.x = x;
    this.y = y;
    
    this.blocks = blocks;
    this.width =  blockWidth * this.blocks;
    this.height =  blockHeight * this.blocks;
    
  }
  
  Gap.prototype.collide = function(element) {
    return !(this.x + this.width < element.x || 
      element.x + element.width < this.x ||
      this.y + this.height < element.y ||
      element.y + element.height < this.y);
  }
  
  Gap.prototype.draw = function() {
      this.ctx.save();
      this.ctx.fillStyle = "#FF0000";
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
      this.ctx.restore();
  }
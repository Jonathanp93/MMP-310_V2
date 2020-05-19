class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 10; // width
    this.h = 40; // height
    
    // action area used for player attack area
    this.actionWidth = this.w * 3; // length of action area
    this.actionHeight = this.h / 4; // height of action area
    
    this.speed = 5;
    this.health = 10;
    
    this.isPerformingAction = false; // if player is "attacking"
  }

  controls(up, down, left, right, action) {
    console.log(up, down, left, right,action);
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
    this.action = action;
  }
  
  collide(player) {
    // return true if player is inside action area
    return this.x < player.x + player.w &&
      this.x + this.actionWidth > player.x &&
      this.y < player.y + player.h &&
      this.y + this.actionHeight > player.y;
  }

  update() {
    if (keyIsPressed) {
      if (keyCode == this.up) {
        this.y -= this.speed;
      }
      if (keyCode == this.down) {
        this.y += this.speed;
      }
      if (keyCode == this.right) {
        this.x += this.speed;
      }
      if (keyCode == this.left) {
        this.x -= this.speed;
      }
      if (keyCode == this.action) {
        this.isPerformingAction = true;
      } else {
        this.isPerformingAction = false;
      }
    } else {
      this.isPerformingAction = false;
    }
  }

  draw() {
    // use global images here
    if (this.isPerformingAction) {
      // attacking image
      fill('red');
      rect(this.x, this.y + this.h/4, this.w * 2, this.h/4 );
      rect(this.x, this.y, this.w, this.h);
    } else {
      // regular image
      fill('blue');
      rect(this.x, this.y, this.w, this.h);
    }
    // add other keys like up down left right to change images for movement
  }
}
class Bird{
  constructor(){
    this.x = canvas.width/4;
    this.y = canvas.height/2;
    this.height = 10;
    this.width = 10;
    }

  draw(){
    context.fillStyle = "red";
    context.fillRect(this.x,this.y,this.width,this.height);
  }

  gravity(){
    bird.y += 2;
  }

  isOut(){
    let out = false;
    if (this.y < canvas.height || this.y <   0) {
      out = true;
      return out;
    }else{
      return out;
    }
  }
}
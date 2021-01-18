class Bin2{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/bin.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255)
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
    }
  };

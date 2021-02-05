class Monster {
    constructor(x, y) {
      var options = {
        'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("Monster-01.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = this.body.position.x;
      pos.y = this.body.position.y;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //ellipse(0,0,this.width,this.height);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
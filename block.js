class Block{
    constructor(x, y, width, height) {
        var options = {
          'friction':1.0,
         'restitution':0.8,
         'density':0.04   
        }
       // this.image = loadImage("block.png");

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);


        //this.Visiblity=255;
      }
      display(){
        var pos=this.body.position;
        var angle=this.body.position;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("yellow");
        strokeWeight(4);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
      }
}

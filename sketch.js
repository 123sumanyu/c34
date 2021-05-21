const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(600,600,1200,20);
  //stand1 = new Stand(390,300,250,10);
  //stand2 = new Stand(700,200,240,10);

  ball= new Polygon(200,2500,80,80);
 
  //level one
    block1 = new Block(900,100,70,70);
    block2 = new Block(900,100,70,70);
    block3 = new Block(900,100,70,70);
    block4 = new Block(900,100,70,70);
  block5 = new Block(900,100,70,70);
  block6 = new Block(900,100,70,70);
  block7 = new Block(800,100,70,70);
  block8 = new Block(800,100,70,70);
  block9 = new Block(800,100,70,70);
  block10 = new Block(800,100,70,70);
block11 = new Block(800,100,70,70);
block12 = new Block(800,100,70,70);
block13 = new Block(700,100,70,70);
    block14 = new Block(700,100,70,70);
    block15 = new Block(700,100,70,70);
    block16 = new Block(700,100,70,70);
  block17 = new Block(700,100,70,70);
  block18 = new Block(700,100,70,70);
  block19 = new Block(700,100,70,70);
  block20 = new Block(700,100,70,70);



  
 /* 
  
  block21 = new Block(740,193,30,40);
  block22 = new Block(767,193,30,40);

  block23 = new Block(650,160,30,40);
  block24 = new Block(680,160,30,40);
  block25 = new Block(710,160,30,40);
  block26 = new Block(740,160,30,40);

  block27 = new Block(686,118,30,40);
  block28 = new Block(713,118,30,40);

  block29 = new Block(695,78,30,40);

  */
  rope= new Rope(ball.body,{x:500,y:220});

}
function draw() {
  background(56,44,44); 

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  block13.display();
  block14.display();
  block15.display();
  
  block16.display();
  block17.display();
 
  block18.display();
  block19.display();
  block20.display();
  ball.display();
  rope.display();


  /*textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
 
  textSize(20);
  fill("lightyellow");
  

  
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  
 
  block21.display();
  block22.display();
  
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  
  block27.display();
  block28.display();
  
  block29.display();

 
  slingShot.display();
 
  console.log(mouseX,mouseY);*/

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX,y:mouseY})
}
/*
function mouseReleased(){
  slingShot.fly();
  
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(polygon.body);
    
  }
}*/



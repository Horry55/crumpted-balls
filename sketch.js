const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies

var engine,world,ground,ball;
function setup() {
  createCanvas(1300,700);
   engine=Engine.create();
   world=engine.world
  
   wall=new Wall(300,400,1330,5)
   ball= new Ball(200,200,50,50)
   wall2=new Wall(800,100,5,900)
   box1=new Box(700,390,100,20)
   box2=new Box(650,350,20,100)
   box3=new Box(750,350,20,100)
  
}

function draw() {

  background(255);  
 
  Engine.update(engine);
  wall2.display();
  ball.display();
  wall.display();
  box1.display();
  box2.display();
  box3.display();
  
  if(keyDown("space")){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-25});
  }
  
  textSize(30)
  fill("blue")
  text ("Press SPACE",600,100)
  
}
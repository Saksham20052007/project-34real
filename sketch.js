const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var box1, box2, box3, box4, box4, box5, box6, box7, box8, box9,box10,box11, box12, box13, box14, box15, box16, box17, box18, box19,
box20, box21, box22;
var world,engine;
var ground;
var Ball
var chain
var superMan;
var monster;







function setup() {
  createCanvas(1600,400);
 

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 380, width-300, 5)

 
  box1 = new box(400, 370, 50, 50); 
  box2 = new box(450, 370, 50, 50); 
  box3 = new box(500, 370, 50, 50); 
  box4 = new box(550, 370, 50, 50); 
  box5 = new box(600, 370, 50, 50); 
  box6 = new box(650, 370, 50, 50); 
  box7 = new box(700, 370, 50, 50); 
  box8 = new box(425, 300, 50, 50); 
  box9 = new box(475, 300, 50, 50); 
  box10 = new box(525, 300, 50, 50); 
  box11 = new box(575, 300, 50, 50); 
  box12 = new box(625, 300, 50, 50); 
  box13 = new box(675, 300, 50, 50);
  box14 = new box(450, 230, 50, 50);
  box15 = new box(500, 230, 50, 50);
  box16 = new box(550, 230, 50, 50);
  box17 = new box(600, 230, 50, 50);
  box18 = new box(650, 230, 50, 50);
  box19 = new box(475, 160, 50, 50);
  box20 = new box(525, 160, 50, 50);
  box21 = new box(575, 160, 50, 50);
  box22 = new box(625, 160, 50, 50);

  superMan = new superManClass(300, 300, 150, 150);

  monster = new monsterClass(850, 20, 200, 200)

  superMan.scale = 50;

 BallPoint = new ballpoint(130, 180, 5)

 push();


 chain = new Slingshot(superMan.body, BallPoint.body)

}
 
  function draw(){
  background(255, 250, 250); 
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  superMan.display();
  monster.display();

  chain.display();



  ground.display();



  text(mouseX+", "+mouseY, 20, 20);

}

function mouseDragged(){
    Matter.Body.setPosition(superMan.body, {x:mouseX, y:mouseY});

}






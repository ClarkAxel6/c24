const Engine = Matter.Engine; //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var myEngine, myWorld;
var box1, ground;
var pig1;

function preload(){

}

function setup() {
  createCanvas(1200,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(600, height, 1200, 20);
  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810, 260, 300, PI/2);

  box3 = new Box(700, 240, 70, 70);
  box4 = new Box(920, 240, 70, 70);
  pig2 = new Pig(810, 220);
  log2 = new Log(810, 180, 300, PI/2);

  box5 = new Box(810, 160, 70, 70);
  log3 = new Log(760, 120, 150, PI/7);
  log4 = new Log(870, 120, 150, -PI/7);

  bird1 = new Bird(100, 100);

  var render = Render.create({
    element: document.body, 
    engine: myEngine, 
    options: { width: 1200, height: 400, showAngleIndicator: true }
    }); 
    Render.run(render);
  
}

function draw() {
  background('white');  
  Engine.update(myEngine);
  fill('black');
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird1.display();
  ground.display();
}
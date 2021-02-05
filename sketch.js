const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var box1,box2,box3,box4,box5,box6;
var hero1;
var ground;
var fly1;
var monster1;

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  box1 = new Block(700,345,70,70);
  box2 = new Block(920,345,70,70);
  box3 = new Block(700,300,70,70);
  box4 = new Block(920,300,70,70);
  box5 = new Block(810,200,70,70);
  box6 = new Block(810,250,150,90);

  hero1 = new Hero(500,300);
   
  monster1 = new Monster(1000,100);

  ground = new Ground(600,350,1300,20)

  fly1 = new Fly(hero1.body,{x:500, y:50});
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  if (box1.isTouching = monster1){
    monster1.x = 1000;
    monster1.y = 350;
  }

  if (box2.isTouching = monster1){
    monster1.x = 1000;
    monster1.y = 350;
  }

  if (box3.isTouching = monster1){
    monster1.x = 1000;
    monster1.y = 350;
  }

  if (box4.isTouching = monster1){
    monster1.x = 1000;
    monster1.y = 350;
  }

  if (box5.isTouching = monster1){
    monster1.x = 1000;
    monster1.y = 350;
  }

  if (box6.isTouching = monster1){
    monster1.x = 1000;
    monster1.y = 350;
  }

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  hero1.display();
  ground.display();
  fly1.display();
  monster1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
}


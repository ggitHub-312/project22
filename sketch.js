const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var box1;
var box2;
var ground;


function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  ground = new Ground (200,380,400,15)
  box1 = new Box (200,300,50,70);
  box2 = new Box (240,100,50,70);



}

function draw() {
  background("skyblue"); 
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();

}
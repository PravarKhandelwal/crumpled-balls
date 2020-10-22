
var engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(100,640,20);

	side1 = new dustbin(600,660,100,PI/2);
	side2 = new dustbin(620,640,100,PI);
	side3 = new dustbin(720,660,100,PI/2);

	ground1 = new ground(400,660,800,20);
	console.log(ground1);
	

	//Create the Bodies Here.
 

 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();

  side1.display();
  side2.display();
  side3.display();

  ground1.display();

  drawSprites();
 
}



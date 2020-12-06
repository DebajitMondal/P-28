
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Mango1,Mango2,Mango3,Mango4,Mango5;
var Tree1,STone;
var ground;
var BoyImg;
var SlingShot1;
function preload()
{
	BoyImg=loadImage("boy.png")	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(500,597,1600,10)
	Mango1 = new Mango(900,200,50,50)
	Mango2 = new Mango(750,190,50,50)
	Mango3 = new Mango(1150,200,50,50)
	Mango4 = new Mango(900,100,50,50)
	Mango5 = new Mango(1030,100,50,50)
	Tree1 = new tree(930, 600)
	STone = new Stone(120,410)
	SlingShot1 = new SlingShot(STone.body,{x:120 , y: 410})
	
}


function draw() {
	
  background("White");
  Engine.update(engine);
  image(BoyImg,80, 330,230,330)
  ground.display()
  Tree1.display()
  STone.display()
  SlingShot1.display()
  Mango1.display()
  Mango2.display()
  Mango3.display()
  Mango4.display()
  Mango5.display()
 detectollision(STone,Mango1)
 detectollision(STone,Mango2)
 detectollision(STone,Mango3)
 detectollision(STone,Mango4)
 detectollision(STone,Mango5)
}

function mouseDragged() {
    Matter.Body.setPosition(STone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){

   SlingShot1.fly() ;
}
function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
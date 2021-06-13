const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygon;
var ground1;
var base1, base2;
var b1, b2, b3, b4, b5, b6, b7;
var b8, b9, b10, b11, b12;
var b13, b14, b15, b16;

var bl1, bl2, bl3, bl4, bl5, bl6, bl7;
var bl8, bl9, bl10, bl11, bl12;
var bl13, bl14, bl15, bl16;
var backgroundImg,platform;
var score=0;
var gameState = "onSling";
var bg = "images/day.jpg";
function preload()
{
  getTime();
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	 world = engine.world;
   polygon = new Polygon(50, 200, 40, 40);
   ground1 = new Ground(600, 750, 1200, 100);

   base1 = new Ground(480, 350, 320, 30);
   base2 = new Ground(980, 250, 320, 30);

   b1 = new Block(400, 345, 40, 40);
   b2 = new Block(430, 345, 40, 40);
   b3 = new Block(460, 345, 40, 40);
   b4 = new Block(490, 345, 40, 40);
   b5 = new Block(520, 345, 40, 40);
   b6 = new Block(550, 345, 40, 40);
   b7 = new Block(580, 345, 40, 40);

   b8 = new Block(430, 305, 40, 40);
   b9 = new Block(460, 305, 40, 40);
   b10 = new Block(490, 305, 40, 40);
   b11= new Block(520, 305, 40, 40);
   b12 = new Block(550, 305, 40, 40);

   b13 = new Block(460, 265, 40, 40);
   b14 = new Block(490, 265, 40, 40);
   b15 = new Block(520, 265, 40, 40);

   b16 = new Block(490, 225, 40, 40);

   bl1 = new Block(900, 245, 40, 40);
   bl2 = new Block(930, 245, 40, 40);
   bl3 = new Block(960, 245, 40, 40);
   bl4 = new Block(990, 245, 40, 40);
   bl5 = new Block(1020, 245, 40, 40);
   bl6 = new Block(1050, 245, 40, 40);
   bl7 = new Block(1080, 245, 40, 40);

   bl8 = new Block(930, 205, 40, 40);
   bl9 = new Block(960, 205, 40, 40);
   bl10 = new Block(990, 205, 40, 40);
   bl11 = new Block(1020, 205, 40, 40);
   bl12 = new Block(1050, 205, 40, 40);

   bl13 = new Block(960, 165, 40, 40);
   bl14 = new Block(990, 165, 40, 40);
   bl15 = new Block(1020, 165, 40, 40);

   bl16 = new Block(990, 125, 40, 40);

	Engine.run(engine);
  slingshot = new Slingshot(polygon.body,{x:100, y:200});
}


function draw() {
  if(backgroundImg)
        background(backgroundImg);
    
    
    Engine.update(engine);
  rectMode(CENTER);
  
  fill("lightblue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill("pink");
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("lightblue");
  b13.display();
  b14.display();
  b15.display();
  fill("gray");
  b16.display();

  fill("lightblue");
  bl1.display();
  bl2.display();
  bl3.display();
  bl4.display();
  bl5.display();
  bl6.display();
  bl7.display();

  fill("pink")
  bl8.display();
  bl9.display();
  bl10.display();
  bl11.display();
  bl12.display();

  fill("lightblue");
  bl13.display();
  bl14.display();
  bl15.display();

  fill("pink");
  bl16.display();

  drawSprites();
  ground1.display();
 polygon.display();
 base1.display();
 base2.display();
 
 slingshot.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}


function keyPressed(){
  if(keyCode===32){
  Matter.Body.setPosition(polygon.body,{x:100,y:200})
  slingshot.attach(polygon.body);
  }
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
console.log(responseJSON)
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(datetime);
  console.log(hour);
  if(hour>=06 && hour<=19){
      bg = "images/day.jpg";
  }
  else{
      bg = "jpg/night.jpg";
  }

  backgroundImg = loadImage(bg);
}
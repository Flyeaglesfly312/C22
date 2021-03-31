const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground, ball;

function setup() {
  createCanvas(400,400);
  

  //creating my engine
  myEngine = Engine.create();
  
  //creating my world. My world, is my engines world
  myWorld = myEngine.world;
  
  var option = {
    isStatic : true
  }
  
  //creating ground
  ground = Bodies.rectangle(200,350,400,30,option);
  World.add(myWorld,ground);
  var ball_option = {
    restitution : 1,
}

  //creating ball
  ball = Bodies.circle(200,10,25,ball_option);
  World.add(myWorld,ball);
}

function draw() {
  background("black"); 
  Engine.update(myEngine);
  
  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,400,30)

  ellipseMode(CENTER);

  ellipse(ball.position.x,ball.position.y,40,40);


  drawSprites();
}
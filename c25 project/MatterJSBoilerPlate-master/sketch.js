const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1;
var backgroundImg,platform;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(600, 380, 1200, 10);
    ball1 = new Ball(100,350,25);   
   
    bin1 = new Bin2(1100,370,100,10);
    bin2 = new Bin(1150,350,10,50); 
    bin3 = new Bin(1050,350,10,50);
    
}

function draw(){
    background(25);
    Engine.update(engine);
    
    ball1.display();
    bin1.display();
    bin2.display();
    bin3.display();
    platform.display();


  
    
}

function keyPressed(){
    if(keyCode === 32){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-30})    
    }

}
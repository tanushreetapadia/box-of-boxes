const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
ground1=new ground(200,height,400,20);
box2 = new Box(250,250,50,50);
box3= new Box(350,350,60,60);
box4= new Box(100,100,70,70);
box5= new Box(150,150,80,80);
box6= new Box(50,50,40,40);
box7= new Box(150,150,50,50);
box8= new Box(350,350,70,70);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
   
    

   
}
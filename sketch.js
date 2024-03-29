const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var pig1;
var engine, world;
var box1;
var log1;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    pig1 = new Pigs(810,220);
    pig2 = new Pigs(810,350);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    log1 = new Log(810,160,300,PI/2);
    log2 = new Log(810,260,300,PI/2);
    log3 = new Log(760,100,150,PI/7);
    log4 = new Log(870,100,150,-PI/7);
    bird = new Bird(100,100);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    bird.display();
    ground.display();
}
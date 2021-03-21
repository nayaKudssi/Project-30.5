const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8,block9;
var platform, slingshot, polygon, ground;

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(390,260,200,20);
    polygon = new Polygon(100,100,50,50)

    slingshot = new SlingShot(polygon.body,{x:50, y:50});

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,30);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);
    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,40);
    block9 = new Block(390,155,30,40);
}

function draw()
{
    background("black");
   
    Engine.update(engine);
   
    slingshot.display();
    ground.display();
    polygon.display();
    platform.display();

    fill("lightBlue");
    block1.display();
    block2.display();
    block3.display();
    fill("yellow");
    block4.display();
    block5.display();
    block6.display();
    fill("pink");
    block7.display();
    block8.display();
    block9.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}
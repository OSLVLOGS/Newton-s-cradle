const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1;
var Bob1;
var Rope1;

function setup (){
createCanvas(3000,800);

engine = Engine.create();
world = engine.world;

ground1 = new Ground(500, 40, 620, 20);


Bob1 = new Bob(200, 200, 80, 80);
Bob2 = new Bob(250, 200, 80, 80);
Bob3 = new Bob(300, 200, 80, 80);
Bob4 = new Bob(350, 200, 80, 80);
Bob5 = new Bob(400, 200, 80, 80);
Bob6 = new Bob(450, 200, 80, 80);
Bob7 = new Bob(500, 200, 80, 80);

Rope1 = new Rope(Bob1.body,{x:300, y:50});
Rope2 = new Rope(Bob2.body,{x:350, y:50});
Rope3 = new Rope(Bob3.body,{x:400, y:50});
Rope4 = new Rope(Bob4.body,{x:450, y:50});
Rope5 = new Rope(Bob5.body,{x:500, y:50});
Rope6 = new Rope(Bob6.body,{x:550, y:50});
Rope7 = new Rope(Bob7.body,{x:600, y:50});

}

function draw() {
background("white");

Engine.update(engine);
ground1.display();
Bob1.display();
Rope1.display();
Bob2.display();
Rope2.display();
Bob3.display();
Rope3.display();
Bob4.display();
Rope4.display();
Bob5.display();
Rope5.display();
Bob6.display();
Rope6.display();
Bob7.display();
Rope7.display();

}

function mouseDragged(){
    
        Matter.Body.setPosition(Bob7.body, {x: mouseX , y: mouseY});
    
}





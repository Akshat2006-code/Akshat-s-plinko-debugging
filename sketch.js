 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var ground = [];
var divisions = [];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 740);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,750,1200,20);

    for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
    for (var j = 75; j <=width; j=j+50) {  
    plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) {   
    plinkos.push(new Plinko(j,175));
    }
    for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
    }
    for (var j = 50; j <=width-10; j=j+50){     
    plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var j = 0; j < plinkos.length; j++) {
     
     plinkos[j].display();
     
   }
   if(frameCount%1===0){
     particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particle.length; j++) {
   
     particle [j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     
   }
   
   drawSprites();
   
}
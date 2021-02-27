const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world; 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var height = height;
function preload(){

}
function setup() {
  var canvas = createCanvas(1600, 800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,800,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k,650, 10, divisionHeight));
   }


    for (var j = 75; j <width; j=j+50){    
      plinkos.push(new Plinko(j,185,20));
    }
           

    for (var j = 30; j < width-10; j = j+50){ 
      plinkos.push(new Plinko(j,100,20));
    }
    
      

     for (var j = 75; j < width; j=j+50){
      plinkos.push(new Plinko(j,275,20));
    }
    for (var j = 50; j < width-10; j=j+50){
      plinkos.push(new Plinko(j,375,20));
    }
}  
function draw() {
  background(0);
  textSize(20);
  fill("purple");
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30),10,10));
     score++;
   }
 
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   console.log(particles.length);
   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  ground.display();
}    
      

     

    

    

 



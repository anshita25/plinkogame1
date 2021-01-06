const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

let particles = [];
let plinkos = [];
let divisions = [];
var bgimage;
var bg ,rg,lg
var divisionHeight = 300;
function preload(){
  bgimg=loadImage("bg1.jpg")
}
function setup() {
  createCanvas(1200, 650);

  engine = Engine.create();
  world = engine.world;
  
  
    bg= new Ground(width / 2, height, width, 20)
    rg= new Ground(width, height / 2, 20, height)
    lg= new Ground(0, height / 2, 20, height)
  

  for (let i = 0; i <= width; i += 110) {
    divisions.push(new Division(i, height - divisionHeight / 4, 10, divisionHeight));
  }

  for (let i = 0; i < 4; i++) {
    let j;
    if (i % 2 == 0) {
      k = 15;
    } else {
      k = 40;
    }
    for (; k <= width; k+= 50) {
      plinkos.push(new Plinko(k,i * 100 + 75));
    }
  }
  Engine.run(engine);
}

function draw() {
  background(bgimg);

  

bg.display();
rg.display();
lg.display();
  
  
  for (let division of divisions) {
    division.display();
  }

  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
  }

  if (frameCount % 90 == 0 || frameCount % 60 == 0) {
    particles.push(new Particle(random(20, width - 20), 0, 10));
  }

textSize(30)
text("PLINKO GAME",400,30)

}
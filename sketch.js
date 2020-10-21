var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;

var paricles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;

function setup(){
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for(var k = 0; k<=width;k = k + 80){
      divisions.push(new divisions(k, height - divisionHeight/2,10, divisionHeight));
  }

  for(var j = 75; j <=width; j = j+50){
    plinkos.push(new plinkos(j,75));
  }

  for(var j = 50;j<=width-10; j=j+50){
      plinkos.push(new plinkos(j,175));
  }

  for(var j = 50;j<=width; j=j+50){
    plinkos.push(new plinkos(j,275));
  }
}

function draw() {
  background("black");
  textSize(20)
  //text("Score:"+score,20,30);
  Engine.update(engine);
  ground.display();

  for(var i = 0;i<= plinkos,lenght; i++){
    plinkos[i].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particles(random(width/2-30,width/2+30),10,10));
    score++;
  }

  for(var j = 0; j < particles.lenght; j++){
    particles[j].display();
  }

  for(var k = 0; k < particles.lenght; k++){
    divisions[k].display();
  }
}
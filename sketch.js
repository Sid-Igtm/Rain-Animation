var drop;
var rain = [];

function setup() {
  createCanvas(windowWidth,windowHeight);


  
  for(var i = 0; i < 200; i = i+1) {
    drop = new Drop(random(0,width),random(0,height));
    rain.push(drop);

  }

  



  


}

function draw() {
  background(180,180,180);
  
  for(var i = 0; i < rain.length; i = i+1) {
    rain[i].show();
    rain[i].velocity();
  }

  


}
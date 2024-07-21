function setup() {
  createCanvas(1400, 1400, WEBGL);
    background(200, 278, 200);
  
  //rotateY(frameCount * 0.05);
   strokeWeight (30)
   stroke('purple')
   //point (1000/2, 1000/2, 500/2)
  // point (200/2, 500/2, 500/2)
}

function draw() {
  background(200, 278, 200);
  rotateY(frameCount * 0.05);

  stroke(255, 62, 40)
  fill('teal')
  
  circle(2000/2, -600, 200, 50)
  square(100/2, -600, 200, 50)
   square(-100/2, -200, -200, 50)
  circle(-1000/2, -200, -300, 50)
  
  triangle(30, -200, -300, 200, 20, 350)
  triangle(90, -300, 600, 200, 200, 500)
  
  point (1000/2, 1000/2, 500/2)
   point (200/2, 500/2, 500/2)
  point (500/2, 300/2, 900/2)
   point (-200/2, 700/2, 200/2)
}
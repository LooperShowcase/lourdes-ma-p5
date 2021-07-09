function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let cnv = createCanvas(600, 600);
  cnv.center();
  angleMode(DEGREES);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
let img;
function preload() {
  img = loadImage("background2.jpg");
}
function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  translate(width / 2, height / 2);
  image(img, -100, -100, 200, 200);
  rotate(-90);
  let hours = hour();
  let minutes = minute();
  let seconds = second();
  let millisecond = millis();
  console.log(`${hours}: ${minutes} : ${seconds}`);
  strokeWeight(6);
  stroke(139, 50, 168);
  noFill();
  ellipse(0, 0, 300, 300);
  let secondAngle = map(seconds, 0, 60, 0, 360);
  let minuteAngle = map(minutes, 0, 60, 0, 360) + map(seconds, 0, 60, 0, 6);
  let hourAngle = map(hours % 12, 0, 12, 0, 360) + map(minutes, 0, 60, 0, 6);
  let millisAngle = map(millisecond, 0, 1000, 0, 360);
  stroke("#E6ADEC");
  arc(0, 0, 250, 250, 0, secondAngle);
  stroke(128, 195, 224);
  arc(0, 0, 200, 200, 0, minuteAngle);
  stroke(245, 239, 73);
  arc(0, 0, 150, 150, 0, hourAngle);
  push();
  rotate(secondAngle);
  stroke("white");
  line(0, 0, 125, 0);
  pop();
  push();
  rotate(minuteAngle);
  stroke("white");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("white");
  line(0, 0, 75, 0);
  pop();

  stroke("#8EF9F3");
  fill(218, 227, 225, 40);
  arc(-150, 150, 50, 50, 0, millisAngle);
  stroke("#E8EBE4");
  strokeWeight(1);
  rotate(90);
  textSize(17);
  textFont("Lora");
  text("12", 0, -170);
  text("3", 170, 0);
  text("6", 0, 175);
  text("9", -170, 0);
  text("made by lourdes :)", -200, 200);
}

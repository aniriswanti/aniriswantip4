let randomPerlins = [];
let randomNormals = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  var x = 0;
  var t = 0;
  for (var i=0; i<1000; i++){
    randomNormals[i] = x;
    x = x + randomGaussian(0,1);
    randomPerlins[i] = noise(t);
    t = t + 0.01;
 }
}

function draw() {
  background('blue')
  var w = windowWidth / randomNormals.length;
  strokeWeight(5);
  
  for (var i=0; i<randomNormals.length-1; i++){
    y1 = map(randomNormals[i],
             min(randomNormals),
             max(randomNormals),
             0,
             windowHeight/2 );
    y2 = map(randomNormals[i+1],
             min(randomNormals),
             max(randomNormals),
             0,
             windowHeight/2 );
  line(i*w,
       windowHeight/2 - y1,
       (i+1)*w,
       windowHeight/2 - y2);
 }

  line(0,
       windowHeight/2,
       windowWidth,
       windowHeight/2);
  
  var w = windowWidth / randomPerlins.length;
  strokeWeight(4);
  
  for (var i=0; i<randomPerlins.length-1; i++){
    y1 = map(randomPerlins[i],
             min(randomPerlins),
             max(randomPerlins),
             0,
             windowHeight/2 );
    y2 = map(randomPerlins[i+1],
             min(randomPerlins),
             max(randomPerlins),
             0,
             windowHeight/2 );
  line(i*w,
       windowHeight - y1,
       (i+1)*w,
       windowHeight - y2);
       }
}
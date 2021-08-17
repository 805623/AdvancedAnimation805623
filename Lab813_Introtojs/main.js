
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context, x, y, dx, dy,x2,y2,dx2,dy2,x3,y3,dx3,dy3,x4,y4,dx4,dy4,x5,y5,dx5,dy5

function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");

    x = y = 100;    // initial x,y canvas location
    dx = dy = 3;    // velocity in x and y directions
    x2=y2=300;
    dx2=dy2=5;
    x3=y3=500;
    dx3=dy3=2;
    x4=y4=150;
    dx4=dy4=6;
    x5=y5=387;
    dx5=dy5=7;
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
    checkEdges();
    update();   // update location
    draw();
    draw2();
    draw3();
    draw4();
    draw5();
     // render
    requestAnimationFrame(animate); // next cycle
}
function checkEdges(){
    if(y>canvas.height||y<0){
        dy=-dy;
    }
    if(x>canvas.width||x<0){
      dx=-dx;
    }
    if(y2>canvas.height||y2<0){
        dy2=-dy2;
    }
    if(x2>canvas.width||x2<0){
      dx2=-dx2;
    }
    if(y3>canvas.height||y3<0){
        dy3=-dy3;
    }
    if(x3>canvas.width||x3<0){
      dx3=-dx3;
    }
    if(y4>canvas.height||y4<0){
        dy4=-dy4;
    }
    if(x4>canvas.width||x4<0){
      dx4=-dx4;
    }
    if(y5>canvas.height||y5<0){
        dy5=-dy5;
    }
    if(x5>canvas.width||x5<0){
      dx5=-dx5;
    }
}
// move the circle to a new location
function update() {
    x += dx;    // update x coordinate of location with x velocity
    y += dy;
    y2+=dy2;
    x2+=dx2;
    x3+=dx3;
    y3+=dy3;
    x4+=dx4;
    y4+=dy4;
    x5+=dx5;
    y5+=dy5;   // update y coordinate of location with y velocity
}

// render a circle
function draw() {
  let radius = 15; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "blue";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}
function draw2() {
  let radius = 15; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x2, y2, radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "red";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}
function draw3() {
  let radius = 25; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x3, y3, radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "purple";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}
function draw4() {
  let radius = 5; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x4, y4, radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "green";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}
function draw5() {
  let radius = 10; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x5, y5, radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "black";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}

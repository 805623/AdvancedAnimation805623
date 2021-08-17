
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context, x, y, dx, dy,x2,y2,dx2,dy2

function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");

    x = y = 100;    // initial x,y canvas location
    dx = dy = 2;    // velocity in x and y directions
    x2=y2=300;
    dx2=dy2=5;
    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
    checkEdges();
    update();   // update location
    draw();
    draw2(); // render
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
}
// move the circle to a new location
function update() {
    x += dx;    // update x coordinate of location with x velocity
    y += dy;
    y2+=dy2;
    x2+=dx2;    // update y coordinate of location with y velocity
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

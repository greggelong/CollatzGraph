let cvertices = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER)

  // make vertexes and add them to array
  for (let i = 0; i < 64; i++) {
    let neighb = collatzNeighbors(i);
    //print(i,neighb)
    cvertices.push(new Cvertex(i, neighb))

  }
}




function draw() {
  background(220);

  for (let i = 0; i < cvertices.length; i++) {
    stroke(0);
    strokeWeight(1);
    cvertices[i].makeEdge(); // make edges for all vertices 
    cvertices[i].show();
    cvertices[i].move();
    if (cvertices[i].touch(mouseX, mouseY) == true) {
      // if the mouse is touching a vertex change stroke weight and color and call make edge on it
      strokeWeight(3)
      stroke(255, 0, 0)
      cvertices[i].makeEdge();
    }
  }
  //noLoop()
}




function collatzNeighbors(num) {
  // get the collatz neighbors of a number returns a list there are 2 or 3 doors
  if (num % 2 == 0) {
    // if even
    // form 3np1 factor
    if ((num - 1) % 3 == 0) {
      return [(num - 1) / 3, num * 2, num / 2]
    } else {
      // not 3np1 factor
      return [num * 2, num / 2]
    }
  } else {
    // cant divide by two as its odd so 3np1 and mult by 2
    return [num * 3 + 1, num * 2]
  }


}
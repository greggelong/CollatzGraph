
let cvertices = [];

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER,CENTER)
  
  // make vertexes and add them to array
  for(let i =0; i<64; i++){
    let neighb = collatzNeighbors(i);
    //print(i,neighb)
    cvertices.push(new Cvertex(i,neighb))
    
  }
}




function draw() {
  background(220);
  
  for(let i =0; i<cvertices.length;i++){
    //for(let j =0; j<cvertices.length;j++){
     // if (i!=j){
     // cvertices[i].makeEdge(cvertices[j])
     // }
    //}
    cvertices[i].show();
    cvertices[i].move();
    cvertices[i].touch(mouseX,mouseY);
    
    
    
  }
  //noLoop()
}




function collatzNeighbors(num){
  // get the collatz neighbors of a number returns a list there are 2 or 3 doors
   if (num%2 == 0){
    // if even
    // form 3np1 factor
    if ((num-1)%3 == 0){
    return [(num-1)/3, num*2, num/2]
   }else{
    // not 3np1 factor
    return [num*2, num/2]
   }
  }
  else{
    // cant divide by two as its odd so 3np1 and mult by 2
    return [num*3+1,num*2]
  }


}





class Cvertex {
  constructor(roomnum,neighbors) {
    this.roomnum = roomnum;
    this.neighbors = neighbors;
    
    this.x = random(50,width-50);
    this.y = random(50,height-50);
    this.diameter = 30;
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  show() {
    
    if(this.neighbors.length>2){
    fill(255,0,0)
    }else{
      fill(255)
    }
    
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(0)
    textSize(this.diameter)
    text(this.roomnum,this.x,this.y)
  }
  
  makeEdge(testVertex){
      
    if(this.neighbors.includes(testVertex.roomnum)){
      line(testVertex.x,testVertex.y,this.x,this.y)
      //print(testVertex.roomnum,testVertex.neighbors,this.roomnum, this.neighbors)
    }
  }
}

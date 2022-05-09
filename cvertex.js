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
    fill(255,255,0)
    }else{
      fill(255)
    }
    
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(0)
    textSize(this.diameter)
    text(this.roomnum,this.x,this.y)
  }
  
  makeEdge(){

    for(let j =0; j<cvertices.length;j++){
      //if (this.roomnum!=cvertices[j].roomnum){
        if(this.neighbors.includes(cvertices[j].roomnum)){
          line(cvertices[j].x,cvertices[j].y,this.x,this.y)
       }
     //}
      
    
      //print(testVertex.roomnum,testVertex.neighbors,this.roomnum, this.neighbors)
    }
  }

  touch(mx,my){
    if(dist(mx,my,this.x,this.y)<this.diameter/2){
      console.log("you got me")
      return true
    }
    else false
  }
}

class Bob {
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1  
        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,r/2,option);
      
        World.add(myWorld,this.body);
        //this.img=loadImage("bob.png");
    }
    display(){
        var bobpos=this.body.position;
        var angle = this.body.angle;
       // bob.scale=1;
        push();
        translate(bobpos.x,bobpos.y);
        rotate (angle);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,100,100);
        pop();
        
    }
}
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var i,j,dist=35,stars=[],speed=0.1,maxRad=3.5;
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function Star(x,y){
    this.r=(Math.random()*100)%maxRad;
    this.rad=this.r;
    this.opacity=(this.r*maxRad/10);
    this.x=x;
    this.y=y;
    this.check=false;

    this.draw=function(){
        ctx.beginPath();
        ctx.fillStyle=`rgba(213, 217, 224, ${this.opacity})`;
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);    
        ctx.fill();
        this.r+=0.1;
    }

    this.sparkle=function(){
        if(this.check==false){
            this.r+=speed;
            if(this.r>=this.rad){
                this.check=true;
            }
        }else{
            this.r-=speed;
            if(this.r<=0){
                this.r+=2*speed;
                this.check=false;
            }
        }

        this.opacity=this.r/10;
        ctx.beginPath();
        ctx.fillStyle=`rgba(213, 217, 224, ${this.opacity})`;
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);    
        ctx.fill();  
    }
}

for(i=dist; i<=canvas.width; i+=dist){
    for(j=dist; j<=canvas.height; j+=dist){
        x=new Star(i,j);
        x.draw();
        stars.push(x);
        
    }       
}

function animate(){
    window.requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);    
    for(i=0; i<stars.length; i++){
        stars[i].sparkle();
    }      
}



animate();

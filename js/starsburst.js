var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext('2d');
var stop=document.getElementById("stop");
var resume=document.getElementById("myCanvas");



canvas.width=innerWidth;
canvas.height=innerHeight;

var i,j,dist=35,stars=[],speed=0.05,maxRad=1;
var radius=100;

function Star(x,y){
    this.r=(Math.random()*100)%maxRad;
    this.rad=this.r;
    this.opacity=1;
    this.x=x;
    this.y=y;
    this.check=false;
    this.rotFactor=this.r*0.001;
    this.draw=function(){
        ctx.beginPath();
        ctx.fillStyle=`rgba(213, 217, 224, ${this.opacity})`;
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);    
        ctx.fill();
        this.r+=0.1;
    }

    this.hide=function(){
        
    }

    this.sparkleRotate=function(){
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
        //ctx.clearRect(-canvas.width/2,-canvas.height/2, canvas.width, canvas.height);
        this.opacity=(Math.random()*100);
        ctx.beginPath();
        ctx.fillStyle=`rgba(213, 217, 224, ${this.opacity})`;
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);    
        ctx.fill(); 
        ctx.rotate(Math.PI/180*this.r*0.001); 
    }

    
}

function boolGenerator(){
    return Math.random()<0.5? -1:1;
}

function distCalc(x,y){
    x= Math.sqrt(x*x+y*y);
    
    return x;
}



function printStars(n){
    for(i=0; i<n; i++){
        posX=boolGenerator()*(Math.random()*1000)%radius;
        posY=boolGenerator()*(Math.random()*1000)%radius;
        if(distCalc(posX,posY)<radius){
            x=new Star(posX,posY);
            x.draw();
            stars.push(x);
        }
    }
}

function increaseRadStars(increaseBy){
    for(i=0; i<increaseBy; i++){
        posX=boolGenerator()*(Math.random()*1000)%radius;
        posY=boolGenerator()*(Math.random()*1000)%radius;
        if(distCalc(posX,posY)<radius){
            
           
            //stars.push(x);
        }
    }
}
function popStars(no){
    while(no--){
        stars.pop();
    }
}

var sqr=5;

function blackSquare(){
    console.log("clear");
    if(sqr<=2*radius){clearInterval()}
    sqr+=5;
    //window.setTimeout(function(){console.log("crjl4");},1000);
    ctx.fillStyle="black";
    ctx.fillRect(-sqr/2,-sqr/2, sqr, sqr);
    if(sqr<=2*radius){
        window.clearInterval(blackSquare);
    }
}
function sparkleStars(){
    stars.forEach(function(val){
        val.sparkleRotate();
    }) 
}

function animate(){
    window.requestAnimationFrame(animate);
   
    ctx.clearRect(-canvas.width/2,-canvas.height/2, canvas.width, canvas.height);
    sparkleStars();
    turn++;
    if(turn==120){
        turn=0;
        r=radius;
        if(count==1){
            console.log("stopped");
            //var sqr=5;
            
            while(radius>10){
                
                popStars(stars.length);
                printStars(50);
                sparkleStars();
                
                radius-=5;
                
            }
            /*radius=50;
            stars=[];
            printStars(500);*/
            //ctx.clearRect(-canvas.width/2,-canvas.height/2, canvas.width, canvas.height);
    
            count=0;
  
        }else{
        while(radius-r<20){
            radius+=5;
            printStars(50);
        }
        count++;
    }
                            //new increasing no of stars
}
    
}
ctx.translate(canvas.width/2,canvas.height/2);

y=0.5,turn=0,count=0;
printStars(300);
animate();

var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext('2d');
var stop=document.getElementById("stop");
var resume=document.getElementById("myCanvas");



canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var i,j,dist=35,stars=[],speed=0.05,maxRad=3;
var radius=100;

function Star(x,y){
    this.r=(Math.random()*100)%maxRad;
    this.rad=this.r;
    this.opacity=0.5;
    this.x=x;
    this.y=y;
    this.check=false;
    this.center=false;
    this.rotFactor=this.r*0.001;
    this.draw=function(){
        ctx.beginPath();
        ctx.fillStyle=`rgba(213, 217, 224, ${this.opacity})`;
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);    
        ctx.fill();
        this.r+=0.1;
    }

    this.hide=function(){
        if(!this.center){
            this.dx=this.x;this.dy=this.y;
            ctx.clearRect(this.dx-this.r/2,this.dy-this.r/2,this.r,this.r);
            ctx.beginPath();
            this.dx-=(this.x/10);this.dy-=(this.y)/10;
            ctx.fillStyle=`rgba(213, 217, 224, ${this.opacity})`;
            ctx.arc(this.dx,this.dy,this.r,0,2*Math.PI);
            ctx.fill();
            if(this.dx<0 || this.dy<0){
                this.center=true;
            }
        }
    
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
        ctx.rotate(Math.PI/180*this.r*0.002); 
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
            stars.push(x);
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

var req,i,j=100,allDone=0;
function animate(){
    req=window.requestAnimationFrame(animate);
   
    ctx.clearRect(-canvas.width/2,-canvas.height, 2*canvas.width, 2*canvas.height);
    sparkleStars();
    turn++;
    if(turn%120==0 && turn<400){
        sparkleStars();
        popStars(150);
        if(radius<canvas.width){
            radius+=100;
        }
        printStars(200);
        sparkleStars();
        sparkleStars();
    }

    if(turn>400){
        if(j>stars.length){j=0;}
        for(i=j-100; i<j && j<=stars.length; i++){
            stars[i].hide();
            if(stars[i].center==true){
                allDone+=1;
            }
            if(allDone==stars.length){
                alert('all stars done');
            }
        }
    }

    j+=100;
    
}
ctx.translate(canvas.width/2,canvas.height/2);

y=0.5,turn=0,count=0;
printStars(200);
animate();

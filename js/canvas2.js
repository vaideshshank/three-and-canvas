var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
    
var cx=50,cy=50,r=10,dx=5,dy=5,width=window.innerWidth,height=window.innerHeight, cx2=100,cy2=100,
hitX=false,hitY=false,
hitX2=false,hitY2=false,
minRad=10,
noOfCircles=600,
mouseOffCircle=50;

var mouseMove={
    x:undefined,
    y:undefined
}


window.addEventListener('mousemove',function(event){
    mouseMove.x=event.x;
    mouseMove.y=event.y;
    console.log(mouseMove);
})

window.addEventListener('resize',function(event){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    console.log(mouseMove);
})

function Circle(x,y,r,dx,dy){
    this.x=x;
    this.y=y;
    this.r=r;
    this.origR=r;
    this.hitX=false;
    this.hitY=false;
    this.dx=dx;
    this.dy=dy;
    this.increase=true;
    this.color=`rgb(${(Math.random()*1000)%256},${(Math.random()*1000)%256},${(Math.random()*1000)%256})`;

    
    this.draw=function(){
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);    
        ctx.lineWidth=4;
        ctx.fill();
    }

    this.update=function(){
        if(this.x+this.r>innerWidth){this.hitX=true;}
        else if(this.x-this.r<0){this.hitX=false;}
        if(this.y+this.r>innerHeight){this.hitY=true;}
        else if(this.y-this.r<0){this.hitY=false;}

        if(!this.hitX){this.x+=this.dx;}
        else if(this.hitX){this.x-=this.dx;} 
        if(!this.hitY){this.y+=this.dy;}
        else if(this.hitY){this.y-=this.dy;}   

        if(this.r<70 && this.x-mouseMove.x<mouseOffCircle && this.y-mouseMove.y>-mouseOffCircle && this.x-mouseMove.x>-mouseOffCircle && this.y-mouseMove.y<mouseOffCircle){
            this.r+=5;
            
        }else if(this.r>this.origR){
            if(this.r-1>this.origR){this.r-=1; }
            
                      
        }


        this.draw();
    }
}


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


var circles=[];
for(var i=0; i<noOfCircles; i++){
    cx=Math.random()*1000;
    cy=Math.random()*1000;
    r=(Math.random()*10);
    dx=(Math.random()*8);
    dy=(Math.random()*8);
    circles[i]=new Circle(cx,cy,r,dx,dy); 
    circles[i].draw();   
}

animate();



function animate(){   
    //window.requestAnimationFrame(animate);
   
    window.requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(var i=0; i<circles.length; i++){
    
    circles[i].update();
    }
   
    
    
    /*ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.strokeStyle="green";

    ctx.arc(cx,cy,10,0,2*Math.PI);
    
    ctx.stroke();      
    
    ctx.beginPath();
    ctx.strokeStyle="red";

    ctx.arc(cx2,cy2,10,0,2*Math.PI);
    
    ctx.stroke(); 

    if(cx+5>innerWidth){hitX=true;}
    else if(cx-5<0){hitX=false;}
    if(cy+5>innerHeight){hitY=true;}
    else if(cy-5<0){hitY=false;}
    

    if(cx2+5>innerWidth){hitX2=true;}
    else if(cx2-5<0){hitX2=false;}
    if(cy2+5>innerHeight){hitY2=true;}
    else if(cy2-5<0){hitY2=false;}

    if(!hitX){cx+=5;}
    else if(hitX){cx-=5;} 
    if(!hitY){cy+=5;}
    else if(hitY){cy-=5;} 

    if(!hitX2){cx2+=5;}
    else if(hitX2){cx2-=5;} 
    if(!hitY2){cy2+=5;}
    else if(hitY2){cy2-=5;} 
    */
    
}





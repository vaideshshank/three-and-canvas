var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext('2d');

canvas.width=window.innerWidth-100;
canvas.height=window.innerHeight-100;
var check=true,i=0,diffx,diffy,show=false;
var curr=[0,1,2];
var next=[1,2,0];
px=[0,280,560];
py=[0,484.974,0];
var dx=0,dy=0,x=px[0],y=py[0];
// A[0,0] B[280,484.974] C[560,0]
//centroid: 280; 161.658


function animate(){
    window.requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
   
    if(check){
        diffx=px[next[i]]-px[curr[i]];
        diffy=py[next[i]]-py[curr[i]];
        dx=diffx/100;
        dy=diffy/100;
       // console.log(dx,dy);
       //x=px[curr[i]];y=py[curr[i]];
        if(diffx>0 && diffy>0){            
            console.log("one");
            dx=dy;dy=dy;
        }else if(diffx>0 && diffy<0){
            console.log("two");
            dy=-dy;
        }else if(diffx<0 && diffy>0){
            console.log("three");
            dx=(-1)*dx;
        }else if(diffx<0 && diffy<0){
            console.log("four");
            dx=(-1)*dx;dy=(-1)*dy;
        }
        check=false;
    }

    console.log(dx, dy);
       
    ctx.strokeStyle="red";
    ctx.moveTo(x,y);
    x=x+dx;
    y=y+dy;
    ctx.lineTo(x,y);
    /*x=x+2;
    y=y+2;*/
   // console.log(x, y)
    
    ctx.stroke();
    
    diffx=x-px[next[i]];
    diffy=y-py[next[i]];

    if(dx>0 && dy>0 && (diffx>0 || diffy>0)){
        if(!show){
            console.log(x,y);
            show=!show;
        }
        check=true;
        i<2? i+=1:i=0;
    }else if((dx<0 && dy>0) && (diffx<0 || diffy>0)){
        if(!show){
            console.log(x,y);
            show=!show;
        }
        check=true;        
        i<2? i+=1:i=0;
    }else if(dx<0 && dy<0 && (diffx<0 || diffy<0)){
        if(!show){
            console.log(x,y);
            show=!show;
        }
        check=true;        
        i<2? i+=1:i=0;
    }else if(dx<0 && dy>0 && (diffx<0 || diffy>0)){
        if(!show){
            console.log(x,y);
            show=!show;
        }
        check=true;       
        i<2? i+=1:i=0;
    }
    
}

ctx.moveTo(px[0],py[0]);
ctx.lineTo(px[1],py[1]);
ctx.lineTo(px[2],py[2]);
ctx.closePath();
ctx.stroke();

animate();




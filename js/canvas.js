var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext('2d');

/*ctx.fillStyle='yellow';
ctx.fillRect(20,20,170,170);*/

// gradient


x=200,check=true;
function animate(){
    
    window.requestAnimationFrame(animate);
    if(check){ctx.clearRect(x-2,198,102,55)
    }
    else if(!check){ctx.clearRect(x+2,198,102,55)
    }
    ctx.strokeStyle="rgba(0,255,0,0.8)";
    ctx.translate(x/2,100);
    ctx.rotate(0);  
    ctx.translate(-x/2,-100);
    ctx.strokeRect(x,200,100,50);
    if(x+350>800){check=false;}
    else if(x-150<0){check=true;}
    
    if(check){x+=1;}
    else if(!check){x-=1};
    
}

function draw(){
    
    canvas.width=800;
    canvas.height=800;
    canvas.clearRect(0,0,800,800);
    var grd=ctx.createLinearGradient(0,0,120,0);
    grd.addColorStop(0,'green');
    grd.addColorStop(0.5,'yellow');
    grd.addColorStop(1,'red');
        
    ctx.fillStyle=grd;
    ctx.fillRect(50,50,170,170);


    ctx.moveTo(30,30);
    ctx.lineTo(170,170);
    ctx.lineTo(50,230);
    ctx.closePath();
    ctx.stroke();


    /*
    ctx.beginPath();
    ctx.fillStyle='red';
    ctx.arc(100,100,50,0,2*Math.PI);
    ctx.stroke();
    */

    ctx.font='20px Arial';
    ctx.fillStyle="green"
    ctx.fillText("Good night",10,50);


    ctx.lineWidth=5;

    for(var i=10; i<canvas.width; i+=10){
        for(var j=10; j<canvas.height; j+=10){
            
            ctx.beginPath();
            ctx.strokeStyle='rgba(0,255,0,0.2)';
            var x=(Math.random()*1000);
            var y=(Math.random()*1000);
            ctx.arc(x,y,2,0,2*Math.PI);
            ctx.stroke();
        }
    }
/*
    ctx.beginPath();

    ctx.strokeStyle='gray';
    ctx.arc(250,250,10,0,Math.PI);
    ctx.stroke();

    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
*/
    
    /*for(i=100; i<500; i+=20){
        for(j=100; j<500; j+=20){
            var grd=ctx.createLinearGradient(0,0,30,0);
            grd.addColorStop(0,`rgba(${(Math.random*1000)%255},${(Math.random*1000)%255},${(Math.random*1000)%255},0.8)`);
            grd.addColorStop(1,`rgba(${(Math.random*1000)%255},${(Math.random*1000)%255},${(Math.random*1000)%255},0.8)`);
            ctx.fillStyle=grd;
            ctx.fillRect(i,j,10,10);    
        }
    }*/
    ctx.clearRect(0,0,400,400);
    
    ctx.strokeStyle='black';
    ctx.lineWidth=1;
    var i=0;
    //window.setInterval(function(){
        /*ctx.setLineDash([20, 20]);
        
        ctx.arc(100, 100, 5, 0, Math.PI*2);
        ctx.stroke();
        //ctx.stroke();
        i++;
        if(i>10){i=0;}*/
    //},20);

    ctx.shadowOffsetX=2;
    ctx.shadowOffsetY=2;
    ctx.shadowColor='black';
    ctx.shadowBlur=4;
    ctx.font='30px Comic Sans MS';
    
    ctx.fillStyle='red';
    ctx.fillText('This is my place',100,70);

    ctx.lineWidth=5;
    ctx.strokeStyle="rgba(255,198,124,0.8)";
    ctx.shadowOffsetX=0;
    ctx.shadowOffsetY=0;
    ctx.shadowBlur=0;
    ctx.beginPath();
    ctx.arc(150,150,50,0, Math.PI*2);
    ctx.save();
    ctx.stroke();
   

    ctx.strokeStyle="rgba(18,255,175,0.8)";
    ctx.beginPath();
    ctx.arc(150,150,40,0, Math.PI*2);
    ctx.save();
    ctx.stroke();
    
    for(var i=3; i>1; i--){
        ctx.beginPath();
        ctx.translate(50,50);
        ctx.arc(150,150,i*10,0, Math.PI*2);
        ctx.restore();
        ctx.stroke();
    }

    
    ctx.fillStyle='red';
    
    //ctx.rotate((Math.PI / 180)*30);
    ctx.fillRect(200,200,30,20);
    
    
    ctx.strokeStyle='green';
    ctx.lineWidth=1;
    ctx.scale(1,1);
    ctx.translate(350,175);
    ctx.scale(2,2);
    //ctx.rotate(Math.PI*60/ 180);
    ctx.translate(-350,-175);
    ctx.strokeRect(300,150,50,50);

    animate();
    
    // ctx.stroke();
    
}

draw();




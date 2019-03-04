var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var x,y;


document.addEventListener("mousemove",function(event){
    //console.log(event);
    x=event.x;y=event.y;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    ctx.strokeStyle="rgba(255,255,255,0.5)";
    ctx.moveTo(100,100);
    ctx.lineTo(300,300);
    ctx.stroke();

    ctx.strokeStyle='rgb(0,0,0)';
    ctx.fillStyle='rgba(0, 0, 0, 0.5)';
    ctx.beginPath();
    ctx.shadowColor="black";
    ctx.shadowBlur=1;
    //ctx.moveTo(event.PageX,event.PageY);
    ctx.arc(event.x, event.y, 10, 0, 2*Math.PI);
    ctx.fill();
    
})

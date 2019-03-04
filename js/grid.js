var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

height=canvas.height;
width=canvas.width;
ctx.lineWidth=0.5;



ctx.strokeStyle="rgba(255,255,255,0.05)";

function line(x1,y1,x2,y2){
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

function divide(term,y,m=1){
    return term/y*m;
}





//horizontal
line(0,divide(height,2),width,divide(height,2));
line(0,divide(height,4)-30,width,divide(height,4)-30);
line(0,divide(height,4)+30,width,divide(height,4)+30);
line(0,divide(height,4,3)-30,width,divide(height,4,3)-30);
line(0,divide(height,4,3)+30,width,divide(height,4,3)+30);
line(0,30,width,30);
line(0,height-30,width,height-30);


//vertical
line(divide(width,2),0,divide(width,2),height);
line(divide(width,2)-200,0,divide(width,2)-200,height);
line(divide(width,2)+200,0,divide(width,2)+200,height);
line(50,0,50,height);
line(width-50,0,width-50,height);
line(100,0,100,height);
line(width-100,0,width-100,height);
line(340,0,340,height);
line(width-340,0,width-340,height);
line(175,0,175,height);
line(width-175,0,width-175,height);


//angled
line(0,20,width,divide(height,2)-20);
line(0,height-20,width,divide(height,2)+20);
line(0,divide(height,2)-20,width,20);
line(0,divide(height,2)+20,width,height-20);

//angled passcentre
line(0,40,width,height-40);
line(0,height-40,width,40);

//angled touching top and bottom
line(0,divide(height,4)-60,width/2-40,height);
line(width,divide(height,4)-60,width/2+40,height);
line(0,divide(height,4,3)+60,width/2-40,0);
line(width,divide(height,4,3)+60,width/2+40,0);

//angled line touch 2 left/right from center
line(0,divide(height,4,3)-30,340,0)
line(0,divide(height,4)+30,340,height)
line(width,divide(height,4)+30,width-340,height)
line(width,divide(height,4,3)-30,width-340,0)


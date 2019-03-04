var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext('2d');
canvas.height=600;
canvas.width=600;

var lineWidth=3,seperation=2;
var color="white";

var x=[0,280,560];
var y=[0,484.974,0];

// A[0,0] B[280,484.974] C[560,0]
//centroid: 280, 161.658
ctx.save();
ctx.translate(280, 250);
ctx.rotate(Math.PI/180*195);
ctx.translate(-280, -250);
ctx.translate(-80,50);
ctx.lineWidth=4;

function Line(color){
    /*this.lineWidth=width;
    this.seperation=seperation;
    */
    var iter=0;
    var sides=x.length;
    this.color=color;
    this.slope=(y[(iter+1)%sides]-y[(iter)%sides])/(x[(iter+1)%sides]-x[(iter)%sides]);
    this.x=x[iter];this.y=y[iter];
    this.diffX=x[(iter+1)%sides]-x[(iter)%sides];
    this.diffY=y[(iter+1)%sides]-y[(iter)%sides];
    var i=0,mx=2;
    ctx.strokeStyle=color;

    this.makeTurn=function(){
        var dx=this.x-x[(iter+1)%sides],dy=this.y-y[(iter+1)%sides];
        if(((this.slope>=0 || this.slope==Infinity) && dx>=0 && dy>=0 && this.diffY>=0 && this.diffX>=0) || 
           ((this.slope>=0 || this.slope==Infinity) && dx<0 && dy<0 && this.diffY<=0 && this.diffX<=0) || 
           (this.slope<=0 && this.diffY<0 && dy<=0) || 
           (this.slope<=0 && this.diffX<0 && dx<=0)){
            ctx.beginPath();
            if(this.slope<0){
                mx=-4;
            }else{
                mx=2;
            }
            
            iter+=1;
            this.x=x[(iter)%sides];
            this.y=y[(iter)%sides];
            this.slope=(y[(iter+1)%sides]-y[(iter)%sides])/(x[(iter+1)%sides]-x[(iter)%sides]);
            this.diffX=x[(iter+1)%sides]-x[(iter)%sides];
            this.diffY=y[(iter+1)%sides]-y[(iter)%sides];
            

            /*console.log(this.x, this.y);
            console.log(iter);  */ 
            

       }
    }
    
    

    this.drawAndMove=function(){
        ctx.beginPath();

        my=this.slope*mx;
        ctx.moveTo(this.x,this.y);
        this.x=this.x+2*mx;
        this.y=this.y+2*my;
        ctx.lineTo(this.x,this.y);
        this.x=this.x+mx/2;
        this.y=this.y+my/2; 
        this.makeTurn();        
        ctx.stroke();
    }


}


var line=new Line('white');

console.log(100/0);

function animate(){
    window.requestAnimationFrame(animate);
    ctx.clearRect(-10,-10,canvas.width,canvas.height);
    line.drawAndMove();
    
    
}

animate();
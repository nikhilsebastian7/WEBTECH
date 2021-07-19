var temp = document.getElementById("canvas1");
var temp_ctx=temp.getContext("2d");
function diagonal1(ctx,x,y,s)
{
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+s,y+s);
    ctx.stroke();
    ctx.closePath();
}
diagonal1(temp_ctx,0,0,240);

var temp1 = document.getElementById("canvas2");
var temp_ctx1=temp1.getContext("2d");
function diagonal2(ctx,x,y,s)
{
    ctx.beginPath();
    ctx.moveTo(x+s,y);
    ctx.lineTo(x,y+s);
    ctx.stroke();
    ctx.closePath();
}
diagonal2(temp_ctx1,0,0,240);

var temp2 = document.getElementById("canvas3");
var temp_ctx2=temp2.getContext("2d");
function generative()
{
    var x=0;
    var y=0;
    var s=20;
    while(x<240)
    {
        y=0;
        while(y<240)
        {
            if(Math.random()>0.5)
                diagonal1(temp_ctx2,x,y,s);
            else
                diagonal2(temp_ctx2,x,y,s);
            y+=15;
        }
        x+=15;
    }
}

generative();
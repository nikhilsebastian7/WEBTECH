var cc=document.getElementById("c1");
var c=cc.getContext("2d");

function diagonal1(ctx,x,y,s)
{
    ctx.beginPath();

    ctx.moveTo(x,y);
    ctx.lineTo(x+s,y+s);
    ctx.stroke();
    ctx.closePath();
}

function diagonal2(ctx,x,y,s)
{
    ctx.beginPath();

    ctx.moveTo(x+s,y);
    ctx.lineTo(x,y+s);
    ctx.stroke();
    ctx.closePath();
}
//diagonal1(c,0,0,240);
//diagonal2(c,0,0,240);

function generative()
{
    var x=0;
    var y=0;
    var s=20;
    while(x<240)
    {
        while(y<240)
        {
            diagonal1(c,x,y,s);
            diagonal2(c,x,y,s);
            y+=s;
        }
        x+=s;
    }
}
//generative();

function generative2()
{
    var x=0;
    var y=0;
    var s=20;
    while(x<240)
    {
        y=0;
        while(y<240)
        {
            diagonal1(c,x,y,s);
            diagonal2(c,x,y,s);
            y+=s;
        }
        x+=s;
    }
}
//generative2();

function generative3()
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
                diagonal1(c,x,y,s);
            else
                diagonal2(c,x,y,s);
            y+=s;
        }
        x+=s;
    }
}
generative3();
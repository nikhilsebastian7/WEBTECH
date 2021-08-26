const design = async function(width,height,number)
{
    var temp_canvas = document.createElement("canvas");
    var c=temp_canvas.getContext("2d");
    temp_canvas.height=height;
    temp_canvas.width=width;
    
    //function for backward slash(\)
    function diagonal1(ctx,x,y,s)
    {
        ctx.beginPath();
        
        ctx.moveTo(x,y);
        ctx.lineTo(x+s,y+s);
        ctx.stroke();
        ctx.closePath();
    }
    
    //function for forward slash(/)
    function diagonal2(ctx,x,y,s)
    {
        ctx.beginPath();
        ctx.moveTo(x+s,y);
        ctx.lineTo(x,y+s);
        ctx.stroke();
        ctx.closePath();
    }
    
    //Generate 
    function generative()
    {
        var x=0;
        var y=0;
        var s=20;
        while(x<width)
        {
            y=0;
            while(y<height)
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
    generative();
    
    //Returning the image
    const tempImg = new Image();
    tempImg.src = temp_canvas.toDataURL();
    return tempImg;
};
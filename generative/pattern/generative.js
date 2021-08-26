const design = async function(width,height,number)
{
    var temp_canvas = document.createElement("canvas");
    var ctx=temp_canvas.getContext("2d");
    temp_canvas.height=height;
    temp_canvas.width=width;

    var n=number*10;
    console.log(n);
    
    //Generate 
    function generative()
    {
        var w=parseInt(width/5);
        var h=parseInt(height/5);

        var x=0;
        var y=0;

        while(x<=width)
        {
            while(y<=height)
            {
                ctx.beginPath();
                ctx.moveTo(x,y)
                ctx.lineTo(x+w,y);
                ctx.lineTo(x,y+h);
                ctx.lineTo(x-n,y);
                ctx.stroke();
                y+=h;
            }
            y=0;
            x+=w;
        }
    }
    generative();
    
    //Returning the image
    const tempImg = new Image();
    tempImg.src = temp_canvas.toDataURL();
    return tempImg;
};
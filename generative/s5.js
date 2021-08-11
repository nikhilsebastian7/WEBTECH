$(document).ready(function(){

    var height = 240;
    var width=240;
    var number = 20;  //spacing (length of line)

    design(width,height,number).then(function(img){
        console.log(img);
        $("#Output").html(img);
    });
});
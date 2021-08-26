$(document).ready(function(){

    var height = $("#height").val();
    var width=$("#width").val();
    var number = 20;  //spacing (length of line)

    design(width,height,number).then(function(img){
        console.log(img);
        $("#Output").html(img);
    });
});

$("#height").change(function(){
    var height = $("#height").val();
    var width=$("#width").val();
    var number = 20;
    design(width,height,number).then(function(img){
        console.log(img);
        $("#Output").html(img);
    });
})

$("#width").change(function(){
    var height = $("#height").val();
    var width=$("#width").val();
    var number = 20;
    design(width,height,number).then(function(img){
        console.log(img);
        $("#Output").html(img);
    });
})
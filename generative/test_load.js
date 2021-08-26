$(document).ready(function(){

    var height = $("#height").val();
    var width = $("#width").val();
    var number = $("#space").val();

    design(width,height,number).then(function(img){
        console.log(img);
        $("#Output").html(img);
    });
});

$("#height").change(function(){
    var height = $("#height").val();
    var width=$("#width").val();
    var number = $("#space").val();
    design(width,height,number).then(function(img){
        console.log(img);
        $("#Output").html(img);
    });
});

$("#width").change(function(){
    var height = $("#height").val();
    var width=$("#width").val();
    var number = $("#space").val();
    design(width,height,number).then(function(img){
        console.log(img);
        $("#Output").html(img);
    });
});

$("#space").change(function(){
    var height = $("#height").val();
    var width=$("#width").val();
    var number = $("#space").val();
    design(width,height,number).then(function(img){
        console.log(img);
        $("#Output").html(img);
    });
});
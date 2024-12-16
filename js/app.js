$(function(){


// header
$(".menu li").on("mouseenter",function(){
    $(this).children(".bar").stop().animate({"width":"80px"});
});
$(".menu li").on("mouseleave",function(){
    $(".bar").stop().animate({"width":"0px"});
});

$("header .bars").on("click",function(){
    $(".wrap").show();
});

$(".close").on("click",function(){
    $(".wrap").hide();
});


// con3

$(".con3 .box1").on("click",function(){
    let i = $(this).index();
    $(".con3 .box1").removeClass("on");
    $(this).addClass("on");
    $(".con3 .box").removeClass("active");
    $(".con3 .box").eq(i).addClass("active");
});






















});
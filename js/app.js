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



// scroll

let baseline = -100;
let con1 =$(".con1").offset().top + baseline;
let con2 =$(".con2").offset().top + baseline;
let con3 =$(".con3").offset().top + baseline;
let con4 =$(".con4").offset().top + baseline;
let footer = $("footer").offset().top +baseline;

$(window).on("scroll",function(){

let scroll = $(this).scrollTop();

if(scroll >= con1 && scroll < con2){
    $(".con1 .yellowbox img").css({"opacity":"1" , "transform":"rotate(0deg)"});
}else if(scroll >= con2 && scroll < con3){
    $(".con2 .btn1").css({"transform":"translateX(0px)"});
    $(".con2 .btn2").css({"transform":"translateX(0px)"});
}else if(scroll >= con3 && scroll < con4){
    $(".con3 .box1").css({"transform":"translateX(0px)" , "opacity":"1"});
}


});

















});
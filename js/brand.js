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



// con4

$(".con4 .more").on("mouseenter",function(){
    $(this).addClass("on");
});

$(".con4 .more").on("mouseleave",function(){
    $(this).removeClass("on");
});


// scroll
let baseline = -600;
let con1 =$(".con1").offset().top + baseline;
let con2 =$(".con2").offset().top + baseline;
let con3 =$(".con3").offset().top + baseline;
let con4 =$(".con4").offset().top + baseline;
let footer = $("footer").offset().top + baseline;

$(window).on("scroll",function(){
    let scroll = $(this).scrollTop();

    if(scroll >= con1 && scroll < con2){
        $(".con1 li:first-child").stop().animate({"margin-left":"0px"});
        // $(".con1 li:last-child").stop().animate({"margin-right":"0px"});
        $(".con1 li").css({"opacity":"1"});
    }else if(scroll >= con2 && scroll < con3){
        $(".con2 .banner img").css({"opacity":"1" , "transform":"rotate(0deg)","margin-left":"0px"});
       
    }






});






});
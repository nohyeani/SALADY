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



$(".con2 .down").on("click",function(){
    let i = $(".con2 .down").index(this);
    $(".con2 li:last-child").eq(i).slideToggle();
});




});
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
    
    




    // scroll

    let baseline = -600;
let con1 =$(".con1").offset().top + baseline;
let con2 =$(".con2").offset().top + baseline;
let con3 =$(".con3").offset().top + baseline;
let con4 =$(".con4").offset().top + baseline;
let footer = $("footer").offset().top +baseline;

$(window).on("scroll",function(){
let scroll = $(this).scrollTop();

if(scroll >= con1 && scroll < con2){
    $(".con1 .box").css({"transform":"translateX(0px)"});
}else if(scroll >= con2 && scroll < con3){
    $(".con2 li").css({"transform":"rotate(0deg)", "opacity":"1"});
}




});

















    
    });
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


// con1


$(".s_small_box li").on("mouseenter",function(){
    i = $(this).index();
    console.log(i);

    $(".salady>ul").removeClass("active");
    $(".salady>ul").eq(i).addClass("active");

    $(".s_small_box li").removeClass("on");
        $(".s_small_box li").eq(i).addClass("on");
});


// con2


$(".w_small_box li").on("mouseenter",function(){
    i = $(this).index();
    console.log(i);

    $(".warm .left>ul").removeClass("active");
    $(".warm .left>ul").eq(i).addClass("active");

    $(".w_small_box li").removeClass("on");
        $(".w_small_box li").eq(i).addClass("on");
});


// con4

let j = 0;
let total = $(".sand>ul").length;

$(".next").on("click",function(){
    if(j < total - 1){
        j++;
    }else{
        j = 0;
    }

    $(".sand>ul").hide();
    $(".sand>ul").eq(j).show();
});

$(".prev").on("click",function(){
    if(j > 0){
        j--;
    }else{
        j = total - 1;
    }
    $(".sand>ul").hide();
    $(".sand>ul").eq(j).show();
});













});
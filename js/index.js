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



// visual

let total = $(".panel li").length;
let i = 0;
function slide(){
     // 1. 먼저 애니메이션을 0%로 설정
     $(".panel").stop().animate({"margin-left":"-100%"}, function() {
        // 2. 애니메이션이 끝난 후 첫 번째 아이템을 마지막으로 이동
        $(".panel li:nth-child(1)").appendTo(".panel");
        $(".panel").css({"margin-left":"0%"});

        // 3. 네비게이션 업데이트
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
    });

    // 4. 인덱스 증가
    i++;
    if(i == total) {
        i = 0;
    }
}
start();
function start(){
    timer = setInterval(function(){
       slide();
    }, 1500);
}

$(".next").on("click",function(){
    clearInterval(timer);
    slide();
    start();
});



$(".prev").on("click", function () {
    clearInterval(timer);

    // 1. 먼저 애니메이션을 100%로 설정하여 뒤로 이동
    $(".panel").stop().animate({"margin-left": "100%"}, function () {
        // 2. 애니메이션이 끝난 후 마지막 아이템을 첫 번째로 이동
        $(".panel li:last-child").prependTo(".panel");
        $(".panel").css({"margin-left": "0%"});

        // 3. 네비게이션 업데이트
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
    });

    // 4. 인덱스 감소 (현재 index에서 1 감소)
    i--;
    if (i < 0) {
        i = total - 1; // 인덱스가 0보다 작으면 마지막 아이템으로 돌아감
    }

    // 슬라이드 애니메이션을 한 칸 뒤로 이동
    $(".panel").stop().animate({"margin-left": "100%"}, function () {
        $(".panel li:last-child").prependTo(".panel");
        $(".panel").css({"margin-left": "0%"});

        // 네비게이션 업데이트
        $(".navi li").removeClass("on");
        $(".navi li").eq(i).addClass("on");
    });

    start();
});
$(".navi li").on("click",function(){   
    clearInterval(timer);
   i = $(this).index();

   $(".panel").stop().animate({"margin-left": -(i * 100) + "%"}, function() {
    // 애니메이션 끝난 후 margin-left 위치 설정
    $(".panel").css({"margin-left": -(i * 100) + "%"});
});



   $(".navi li").removeClass("on");
   $(".navi li").eq(i).addClass("on");
   start();


});




// con4

$(".more .box1").on("mouseenter",function(){
    $(".more .box2").stop().animate({"width":"150px"},1500);
    $(".more .box1 a").css({"color":"#fff"});
    
});


$(".more .box1").on("mouseleave",function(){
    $(".more .box2").stop().animate({"width":"0px"},1500);
    $(".more .box1 a").css({"color":"#222"});
    
});


// scroll

let baseline = -600;
let con1 =$(".con1").offset().top + baseline;
let con2 =$(".con2").offset().top + baseline;
let con3 =$(".con3").offset().top + baseline;
let con4 =$(".con4").offset().top + baseline;
let con5 =$(".con5").offset().top + baseline;
let con6 =$(".con6").offset().top + baseline;
let footer = $("footer").offset().top +baseline;


$(window).on("scroll",function(){

    let scroll= $(this).scrollTop();

    if(scroll >= con2 && scroll < con3){
        $(" .con2 .best img").css({"transform":"translateX(0px)" , "opacity":"1"});
        $(" .con2 .best p").css({"transform":"translateX(0px)" , "opacity":"1"});
    }else if(scroll >= con3 && scroll < con4){
        $(".con3 .lose").css({"transform":"translateY(0px)  rotate(0deg)" , "opacity":"1"});
        
    }else if(scroll >= con4 && scroll < con5){
        $(".con4 .mission li:first-child").stop().animate({"margin-left":"0px"},1000);
        $(".con4 .mission li:last-child").stop().animate({"margin-right":"0px"},1000);
    }else if(scroll >= con5 && scroll < con6){
        $(".con5 li:first-child").stop().animate({"margin-top":"0px"});
        $(".con5 li:last-child").stop().animate({"margin-top":"0px"});
    }else if(scroll >= con6 && scroll < footer){
        $(".con6 ul li:first-child img").css({"opacity":"1" , "transform":"translateY(-50%) rotate(25deg)"});
        $(".con6 ul li:last-child img").css({"opacity":"1" , "transform":"translateY(-50%) rotate(0deg)"});
    }







});





});
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

// $(document).ready(function() {
  
//     var handleScroll = function() {
//       console.log('Scrolled!');
//     };
  
//     // 화면 크기에 따라 jQuery 기능 비활성화 함수
//     function disableJQueryOnSmallScreens() {
//       var windowWidth = $(window).width();
  
//       if (windowWidth <= 849) {
//         // 모바일 및 태블릿에서는 jQuery 기능 비활성화
//         // scroll 이벤트 제거 (window에서 제거)
//         $(window).off('scroll', handleScroll);
//       } else {
//         // 데스크탑에서는 jQuery 기능을 활성화
//         $(window).on('scroll', handleScroll);
//       }
//     }
  
//     // 초기 실행
//     disableJQueryOnSmallScreens();
  
//     // 창 크기 변경 시 다시 실행
//     $(window).resize(function() {
//       disableJQueryOnSmallScreens();
//     });
//   });
  
// scroll

let baseline = 0;
let con1 =$(".con1").offset().top + baseline;
let con2 =$(".con2").offset().top + baseline;
let con3 =$(".con3").offset().top + baseline;
let con4 =$(".con4").offset().top + baseline;
let footer = $("footer").offset().top +baseline;

// $(window).on("scroll",function(){

//     let scroll= $(this).scrollTop();
//     // console.log("현재 스크롤 위치:", scroll);
    
//     if(scroll >= con1 && scroll < con2){
//         $(".con1 .s_box1").css({"transform":"translateX(-50%)"});
//     }else if(scroll >= con2 && scroll < con3){
//         $(".con2 .w_box1").css({"right":"0%"});
//     }else if(scroll >= con3 && scroll < con4){
//         $(".con3 .probox img").css({"left":"-150px" , "transform":" translateY(-50%) rotate(360deg)" , "opacity":"1"});
//     }


// });





});
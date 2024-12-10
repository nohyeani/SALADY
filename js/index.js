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




// con2

// let tot = $(".best li").length;
// let j = 0; // 현재 슬라이드 인덱스

// // 오른쪽으로 슬라이드 (다음 이미지로 이동)
// $(".arrow_r").on("click", function(){
//     // 애니메이션을 사용하여 오른쪽으로 한 칸 슬라이드
//     $(".best").stop().animate({"margin-left": "-474px"}, function() {
//         // 첫 번째 항목을 마지막으로 이동
//         $(".best li:first-child").appendTo(".best");
//         // margin-left를 0으로 설정하여 위치 초기화
//         $(".best").css("margin-left", "0");
//     });
//     // 인덱스 증가
//     j++;
//     if(j == tot) {
//         j = 0;
//     }
// });

// // 왼쪽으로 슬라이드 (이전 이미지로 이동)
// $(".arrow_l").on("click", function(){
//     // 애니메이션을 사용하여 왼쪽으로 한 칸 슬라이드
//     $(".best").stop().animate({"margin-left": "474px"}, function() {
//         // 마지막 항목을 첫 번째로 이동
//         $(".best li:last-child").prependTo(".best");
//         // margin-left를 0으로 설정하여 위치 초기화
//         $(".best").css("margin-left", "0");
//     });
//     // 인덱스 감소
//     j--;
//     if(j < 0) {
//         j = tot - 1;
//     }
// });


// con4

$(".more .box1").on("mouseenter",function(){
    $(".more .box2").stop().animate({"width":"150px"},1500);
    $(".more .box1 a").css({"color":"#fff"});
    
});


$(".more .box1").on("mouseleave",function(){
    $(".more .box2").stop().animate({"width":"0px"},1500);
    $(".more .box1 a").css({"color":"#222"});
    
});





});
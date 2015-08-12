/*jslint browser: true*/
/*global $, jQuery, alert*/
var leftCount = 0;
var rightCount = 0;
var scaleCount = 0;
var timer;
var webmBars = 'video/bars.webm';
var mp4Bars = 'video/bars.mp4';
var webmStatic = 'video/static.webm';
var mp4Static = 'video/static.mp4';
var wallLeft = false;
var wallRight = false;
var timeVal1 = 00;
var timeVal2 = 00;
var time1True = false;
var time2True = false;
var musicFail = true;
var codeval = "";

function createUserCookie(roomnum){
    newroomnum = roomnum + 1;
    document.cookie="spookquest=" + newroomnum;
};
function getUserCookie(){
    var name = "spookquest=";
    var cookieSplit = document.cookie.split(';');
    for(var i=0; i<cookieSplit.length; i++) {
        var cookieVal = cookieSplit[i];
        while (cookieVal.charAt(0)==' ') cookieVal = cookieVal.substring(1);
        if (cookieVal.indexOf(name) == 0) return cookieVal.substring(name.length,cookieVal.length);
    }
    return "";
};
function checkEnd(){
    if(window.location.pathname == "/spookquest_v2/hallway_4.html"){
        cookieVal = getUserCookie;
        if(cookieVal >= 4){
            $("[pos=hall-center-4]").wrap("<a href='end_screen.html'></a>");
            var video = $(".vid")[0];
            video.src = webmBars;
            video.load();
            video.play();
        }
    }
};
$("[data-room-video-ceiling]").mouseenter(function () {
    $("[data-video-sky]")[0].play();
});
$("[data-room-video-ceiling]").mouseleave(function () {
    $("[data-video-sky]")[0].pause();
});
$("[data-room-video-ceiling]").click(function() {
    var video = $("[data-video-birds]")[0];
    $("[data-video-sky]").remove();
    video.src = webmBars;
    video.load();
    video.play();
    setTimeout(function() {
        video.pause();
        $("body").prepend("<div fullscreen><video class = 'vid' autoplay loop><source src='video/static.webm'><source src='video/static.mp4'></video></div>");
    }, 2000);
    setTimeout(function() {
        window.location = "hallway_1.html"
    }, 4000);
    var roomnum = getUserCookie();
    createUserCookie(roomnum);
});

$("[data*=drop-left]").click(function(){
    leftCount+=1;
    console.log("left");
    if(leftCount>=2){
        leftCount=1;
    }
    if (rightCount == leftCount + 1){
        console.log("hooray");
        var roomnum = getUserCookie();
        createUserCookie(roomnum);
        $("[pos=room-center-1]").append("<video class = 'vid' autoplay loop><source src='video/bars.webm'><source src='video/bars.mp4'></video>");
        setTimeout(function() {
        $("body").prepend("<div fullscreen><video class = 'vid' autoplay loop><source src='video/static.webm'><source src='video/static.mp4'></video></div>");
        }, 2000);
        setTimeout(function() {
        window.location = "hallway_1.html"
    }, 4000);
        
        
    }
    
});
$("[data*=drop-right]").click(function(){
    rightCount+=1;
    console.log("right");
    if (rightCount >= 3){
        rightCount = 0;
    }
    if (rightCount == leftCount + 1){
        console.log("hooray");
        var roomnum = getUserCookie();
        createUserCookie(roomnum);
        $("[data*=drop]").remove();
        $("[pos=room-center-1]").append("<video class = 'vid' autoplay loop><source src='video/bars.webm'><source src='video/bars.mp4'></video>");
        setTimeout(function() {
        $("body").prepend("<div fullscreen><video class = 'vid' autoplay loop><source src='video/static.webm'><source src='video/static.mp4'></video></div>");
        }, 2000);
        setTimeout(function() {
        window.location = "hallway_1.html"
    }, 4000);
    }
    
});
$("[data$=scale-6]").click(function(){
    if (scaleCount == 0) {
        scaleCount++
    }
});
$("[data$=scale-5]").click(function(){
    if (scaleCount == 1) {
        scaleCount++
    }
});
$("[data$=scale-2]").click(function(){
    if (scaleCount == 2) {
        scaleCount++
    }
});
$("[data$=scale-1]").click(function(){
    if (scaleCount == 3) {
        scaleCount++
    }
});
$("[data$=scale-4]").click(function(){
    if (scaleCount == 4) {
        scaleCount++
    }
});
$("[data$=scale-7]").click(function(){
    if (scaleCount == 5) {
        scaleCount++
    }
});
$("[data$=scale-8]").click(function(){
    if (scaleCount == 6) {
        scaleCount++
    }
});
$("[data$=scale-3]").click(function(){
    if (scaleCount == 7) {
        scaleCount++
    }
    if (scaleCount == 8) {
        var roomnum = getUserCookie();
        createUserCookie(roomnum);
        $("[data^=data-button]").remove();
        $("[pos=room-center-3").removeClass("animate");
        $("[pos=room-center-3").append("<video class = 'vid' autoplay loop><source src='video/bars.webm'><source src='video/bars.mp4'></video>");
        $(".video").css("z-index",10);
         setTimeout(function() {
        $("body").prepend("<div fullscreen><video class = 'vid' autoplay loop><source src='video/static.webm'><source src='video/static.mp4'></video></div>");
    }, 2000);
    setTimeout(function() {
        window.location = "hallway_2.html"
    }, 4000);
    }
});
$(".dirt").hover(function() {
    setTimeout(function() {
        var roomnum = getUserCookie();
        createUserCookie(roomnum);
        jQuery(".dirt").fadeOut("slow");
        var webmFile = 'video/bars.webm';
        var mp4File = 'video/bars.mp4';
        var video = $("[data-video-flowers]")[0];
        video.src = webmFile;
        video.load();
        video.play();
        setTimeout(function() {
        $("body").prepend("<div fullscreen><video class = 'vid' autoplay loop><source src='video/static.webm'><source src='video/static.mp4'></video></div>");
    }, 2000);
    setTimeout(function() {
        window.location = "hallway_2.html"
    }, 4000);
    }, 5000);
});
$("[wall^=puzzle-wall]").click(function(){
    console.log('hello');
    console.log(wallLeft.toString());
    console.log(wallRight.toString());
    $(this).css("background-color","#a1ff8c")
    if($(this).attr("wall") == "puzzle-wall-left"){
        wallLeft = true;
    };
    if($(this).attr("wall") == "puzzle-wall-right"){
        wallRight = true;
    }
    if(wallRight == true) {
        if(wallLeft == true) {
        var roomnum = getUserCookie();
        createUserCookie(roomnum);
        var video = $("[data-video-painting]")[0];
        video.src = webmBars;
        video.load();
        video.play();
        setTimeout(function() {
            video.pause();
            $("body").prepend("<div fullscreen><video class = 'vid' autoplay loop><source src='video/static.webm'><source src='video/static.mp4'></video></div>");
        }, 2000);
        setTimeout(function() {
            window.location = "hallway_3.html"
        }, 4000);
        }
    }
    if(wallLeft == true) {
        if(wallRight == true) {
            var roomnum = getUserCookie();
            createUserCookie(roomnum);
            var video = $("[data-video-painting]")[0];
            video.src = webmBars;
            video.load();
            video.play();
            setTimeout(function() {
                video.pause();
                $("body").prepend("<div fullscreen><video class = 'vid' autoplay loop><source src='video/static.webm'><source src='video/static.mp4'></video></div>");
            }, 2000);
            setTimeout(function() {
                window.location = "hallway_3.html"
            }, 4000);
            }
    }
});
function checkInputs(){
    if (time1True == true){
        if(time2True == true){
            var roomnum = getUserCookie();
            createUserCookie(roomnum);
            $("[data^=data-input]").remove();
            $("[pos=room-center-5]").append("<video class = 'vid' autoplay loop><source src='video/bars.webm'><source src='video/bars.mp4'></video>");
             setTimeout(function() {
            $("body").prepend("<div fullscreen><video class = 'vid' autoplay loop><source src='video/static.webm'><source src='video/static.mp4'></video></div>");
        }, 2000);
        setTimeout(function() {
            window.location = "hallway_3.html"
        }, 4000);
        }
    }
};
            
$("[data$=time-1]").focusin(function() {
    timeVal1 = 0;
    checkInputs();
});
$("[data$=time-1]").focusout(function(){
    timeVal1 = $(this).val();
    if(timeVal1 == 02){
        time1True = true;
    }
    checkInputs();
    
});
$("[data$=time-2]").focusin(function() {
    timeVal2 = 0;
    checkInputs();
});
$("[data$=time-2]").focusout(function(){
    timeVal2 = $(this).val();
    if(timeVal2 == 45){
        time2True = true;
    }
    checkInputs();
});


if($("[data=data-audio-music]").length) {
    $("div").click(function() {
    window.location = "hallway_4.html";
    });
    $("[pos=room-center-6]").append("<video class = 'vid' autoplay loop><source src='video/bars.webm'><source src='video/bars.mp4'></video>");
    setTimeout(function() {
        var roomnum = getUserCookie();
        createUserCookie(roomnum);
        var video = $("div > video")[0];
        video.src = "video/static.webm";
        video.load();
        video.play();
    },15000);
    
};
function checkCode(){
    if (codeval == "8WXC2J") {
        $("[data^=data-input]").remove();
        var roomnum = getUserCookie();
        createUserCookie(roomnum);
           var video = $("div > video")[0];
            video.src = "video/bars.webm";
            video.load();
            video.play();
             setTimeout(function() {
            $("body").prepend("<div fullscreen><video class = 'vid' autoplay loop><source src='video/static.webm'><source src='video/static.mp4'></video></div>");
        }, 2000);
        setTimeout(function() {
            window.location = "hallway_4.html"
        }, 4000);
        }
    else
        return null;
};
$("[data-code-input]").focusout(function() {
    codeval = $(this).val();
    checkCode();
});
$("[data-code-input]").focusin(function() {
    codeval="";
    checkCode();
});


//var canvas = $("[data=data-canvas-left]")[0];
//var context = canvas.getContext('2d');
//var mouseX = 0;
//var mouseY = 0;
//canvas.addEventListener('mousemove',function(element) {
//    mouseX = element.pageX - this.offsetLeft;
//    mouseY = element.pageY - this.offsetTop;
//}, false);
//context.lineWidth = 10;
//context.lineJoin = "round";
//context.lineCap = "round";
//context.strokeStyle = "black";
//var drawSpot = function(){
//    context.lineTo(mouseX,mouseY);
//    context.stroke();
//};
//canvas.addEventListener('mousedown', function() {
//    context.beginPath();
//    context.moveTo(mouseX, mouseY);
//    canvas.addEventListener('mousemove', drawSpot, false);
//}, false);
//canvas.addEventListener('mouseup',function(){
//    canvas.removeEventListener('mousemove',drawSpot,false);
//}, false);
//var draw = function() {
//    context.lineTo(mouseX,mouseY);
//    context.stroke();
//};
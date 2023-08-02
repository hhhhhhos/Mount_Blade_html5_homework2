//activitiex-js
//------function------
//之前在html里用script时，script放前面会错误 原因未知 
//可能是没加载到吧so我也不知道什么辣鸡
var p1 = document.getElementById("content1");
var p1_img = document.getElementById('trailhero');
var p2 = document.getElementById('content1_2');
var p3 = document.getElementById('content3');
var p4 = document.getElementById('content4');
var p5 = document.getElementById('content7');
var p6 = document.getElementById('content8');
var p7 = document.getElementById('content9');
var list_p=[p1,p2,p3,p4,p5,p6,p7];

var m1 = document.getElementById("m1");
var m2 = document.getElementById('m2');
var m3 = document.getElementById('m3');
var m4 = document.getElementById('m4');
var m5 = document.getElementById('m5');
var m6 = document.getElementById('m6');
var list =[m1, m2, m3, m4,m5,m6];//这里写成["m1", "m2", "m3", "m1"]运行时就报错，原因未知
//是因为写成["m1", 识别为字符串？[m1, m2,为对象
//list[0]=m1;list[1]=m2;list[2]=m3;list[3]=m4;list[4]=m5;
var ex1 = 0;
var ex2 = 0;
var safe_btn = true;
var isonpic = false;
var isonfocus = false;
var isonp2 =false;
var mp3isplay =false;
var moveId;var timeId;
onload=changepage(1);

//这里i是pi
function changepage(i){
    if(i!=2){isonp2 = false;stop();}
    else {isonp2 = true;start();}
    for(var j=0;j<list_p.length;j++)
    {
        if(j==(i-1)){
            if(j==3||j==6){
                list_p[j].style.display="flex";
                continue;
            }
            list_p[j].style.display="block";
            if(j==0)p1_img.style.display="block";
            continue;
        }
        list_p[j].style.display="none";
        if(j==0)p1_img.style.display="none";
    }
    //if(i==1)start();
}

var mp3 = document.getElementById("mp3");
var mp3_page = document.getElementById("mp3_page");
var mp3_start_position=parseInt(mp3_page.style.left=120 + "px");//初始位置
//mp3_page.style.left一开始是没值的，这里必须赋值过一次后console才能显示，原因未知
var timer_mp3_load;var timer_mp3_exit;

//点击唱片live动
var mp3_player = document.getElementById("mp3_player");
mp3_player.onended =function(){//结束后随机下一首
    var ranum=randomnum();
    mp3_player.src = list_bm[ranum];
    mp3_title.innerHTML=list_bmt[ranum];
    mp3_player.play();
}
var mp3_title = document.getElementById("mp3_title");
var list_bm = ["./audio/m11.mp3", "./audio/m12.mp3", "./audio/m13.mp3", "./audio/m14.mp3", "./audio/m15.mp3"];//不能用()括号
var list_bmt = ["卡拉迪亚", "罗多克", "诺 德", "维吉亚", "库吉特汗"];//不能用()括号
function mp3_play(){
    //console.log("我play啦！");
    if(!mp3isplay)
    {
        //mp3.style.animation="move_rotate 10s infinite";
        mp3.style.animation="6s move_rotate steps(36) infinite";
        mp3isplay=true;
        clearInterval(timer_mp3_exit);
        timer_mp3_load=setInterval(mp3_page_load, 20)
        //mp3_page_load();
        var ranum=randomnum();
        mp3_player.src = list_bm[ranum];
        mp3_title.innerHTML=list_bmt[ranum];
        console.log(mp3_player.scr);
        //alert(mp3_player.currentSrc);
        //mp3_player.load();
        mp3_player.play();
    }
    else
    {
        //console.log("我启动变态辣！");
        mp3.style.animation="small 0.3s ";
        mp3isplay=false;
        clearInterval(timer_mp3_load);
        timer_mp3_exit=setInterval(mp3_page_exit, 20)
        //mp3_page_exit();
        mp3_player.pause();
    }
}

function mp3_page_load()
{
    //console.log("load!")
    var num=parseInt(mp3_page.style.left);
    num-=2;
    mp3_page.style.left = num + "px";
    if(num<=(mp3_start_position-120)){
        clearInterval(timer_mp3_load);
        //console.log("load clear!")
    }
    //console.log(num);
    //mp3_page.style.left一开始是没值的，这里必须赋值过一次后console才能显示，原因未知
}
function mp3_page_exit()
{
    //console.log("exit!")
    var num=parseInt(mp3_page.style.left);
    num +=2;
    mp3_page.style.left = num + "px";
    if(num>=(mp3_start_position)){
        clearInterval(timer_mp3_exit);
        //console.log("exit clear!")
    }
    //console.log(num);
    //mp3_page.style.left一开始是没值的，这里必须赋值过一次后console才能显示，原因未知
}
/*
function mp3_mousein()
{
    if(!mp3isplay){
        mp3.style.animation="big 0.3s ";
        mp3.style.transform="scale(1.05)";
    }
    
}
function mp3_mouseout()
{
    if(!mp3isplay){
        mp3.style.animation="small 0.3s ";
        mp3.style.transform="none";
    }
}
*/
function playVid(j)//播放时暂停除这个j-1以外的歌
{ 
    if(mp3isplay)mp3_play();
    for(var i=0;i<list.length;i++)
    {
        if(i==(j-1))continue;
        list[i].load();
        list[i].pause();
        //if(!list[i].paused)list[i].pause();
    }

} 

function randomnum(){
    //随机一个0-4的数 且不和上两次重复
    var i = Math.floor(Math.random()*5);
    while((i==ex1)||(i==ex2))
    {
        i = Math.floor(Math.random()*5);
    }
    //
    ex1 =ex2;
    ex2 = i;
    //alert(i);
    return i;
}


function warn(){
    alert("!");
}

//Yurts-js

onload = function () {
    var arr = document.getElementsByClassName("slide");
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.left = i * 780 + "px";
    }
}

function LeftMove() {
    var arr = document.getElementsByClassName("slide");//获取三个子div
    console.log('进来了');
    for (var i = 0; i < arr.length; i++) {
        var left = parseFloat(arr[i].style.left);
        left -= 2;     //让图片左移2个px
        console.log("left减后：%s", left);
        var width = 780;//图片的宽度
        if (left <= -width) {
            left = (arr.length - 1) * width;//当图片完全走出显示框，拼接到末尾，因为拼接起来总长度就是(arr.length) * width 但还有一张在显示，所以就减一
            clearInterval(moveId); //然后停止循环
        }
        arr[i].style.left = left + "px";
    }

}

//var moveId = setInterval(LeftMove, 10);//设置一个10毫秒定时器，并给自己取名, 此时已经能移动

function divInterval() {
    //alert("5happen");
    moveId = setInterval(LeftMove, 10);//设置一个10毫秒定时器
}

//var timeId = setInterval(divInterval, 6000);//设置一个5秒的定时器。也就是5秒重启一次图片的轮换.要算好之前滑动消耗的时间.

function stop() {
    clearInterval(timeId);//鼠标停留关闭B定时器
    clearInterval(moveId);
}
function start() {
    if(sleep(500))
    {
        //this.alert("!start");
        clearInterval(moveId);
        moveId = setInterval(LeftMove, 10);//设置一个10毫秒定时器
        clearInterval(timeId);//重新打开一个定时前，先关闭之前定时器。
        timeId = setInterval(divInterval, 6000);//重启一个定时器
    }
}

// 当浏览器窗口切出或页面切换到其他页面一段时间再回来时，
// 轮播效果会有短暂加速（随切出时间加长而加长）。
// 主要是因为虽然窗口切出去了，定时器依然在执行，但页面却没有将效果显示，
// 所以切回来后会将之前的效果显示出来而加速轮播图。所以添加页面焦点事件：
//页面失去焦点定时器停止

onblur = function () {
    console.log("我没聚焦啦！");
    isonfocus = false;
    stop();
}

//页面获取焦点时重启定时器

onfocus = function () {
    console.log("我聚焦啦！");
    isonfocus = true;
    if(isonp2)start();
}

onmouseover= function (){
    console.log("我在网页上啦！");
    if((!isonpic)&&(isonfocus)&&(isonp2)){
        start();
        setTimeout(function(){ if((!isonpic)&&(isonfocus)&&(isonp2))start(); }, 600);//600秒后再触发一次，防止他睡过头触发失败
    }
}

//布尔开关 ture后i秒复位
function sleep(i){
    if(safe_btn)
    {
        sleeptime = setTimeout(function(){ safe_btn=true; }, i);//i秒后醒来
        safe_btn=false;
        return true;
    }
    return false;
}


//activities-js

    //动画显示-2
    $(function(){
$("#ShowButton_1").click(
    function(){
        if($("#ShowDiv_1").css("display")=='none'){
            $("#ShowDiv_1").slideDown();
            $("#ShowDiv_1").css("display")=='block';
        
        }else{
            $("#ShowDiv_1").slideUp();
            $("#ShowDiv_1").css("display")=='none';
        }
    });
});
$(function(){
$("#ShowButton_2").click(
    function(){
        if($("#ShowDiv_2").css("display")=='none'){
            $("#ShowDiv_2").slideDown();
            $("#ShowDiv_2").css("display")=='block';
        
        }else{
            $("#ShowDiv_2").slideUp();
            $("#ShowDiv_2").css("display")=='none';
        }
    });
});
$(function(){
$("#ShowButton_3").click(
    function(){
        if($("#ShowDiv_3").css("display")=='none'){
            $("#ShowDiv_3").slideDown();
            $("#ShowDiv_3").css("display")=='block';
        
        }else{
            $("#ShowDiv_3").slideUp();
            $("#ShowDiv_3").css("display")=='none';
        }
    });
});
$(function(){
$("#ShowButton_4").click(
    function(){
        if($("#ShowDiv_4").css("display")=='none'){
            $("#ShowDiv_4").slideDown();
            $("#ShowDiv_4").css("display")=='block';
        
        }else{
            $("#ShowDiv_4").slideUp();
            $("#ShowDiv_4").css("display")=='none';
        }
    });
});
$(function(){
$("#ShowButton_5").click(
    function(){
        if($("#ShowDiv_5").css("display")=='none'){
            $("#ShowDiv_5").slideDown();
            $("#ShowDiv_5").css("display")=='block';
        
        }else{
            $("#ShowDiv_5").slideUp();
            $("#ShowDiv_5").css("display")=='none';
        }
    });
});


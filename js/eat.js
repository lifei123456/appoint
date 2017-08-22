/**
 * Created by LiFei on 2017/4/1.
 * 点击发布触发函数empty()；
 * 返回一个数组arr
 * arr[0]:标题
 * arr[1]:截止时间（time-1：一周，time-2：两周，time-3：一月）
 * arr[2]:公开信息（push-off：关闭，push-open：打开）
 * arr[3]:时间一
 * arr[4]:时间二
 * arr[5]:时间三
 */
date1 = new Date();
var year=date1.getFullYear();
var month=date1.getMonth()+1;
var day=date1.getDate();
var hour=date1.getHours();
var minute=date1.getMinutes();
if(minute<10){
    minute=parseInt("0"+minute);
}

var getTranslateY = function(node){
    var regRule = /translate(Y|\dd)?\(\s*(\w+\s*,)?\s*([^,]+)(\s*,[^)]+)?\s*\)/;
    var regRule2 = /matrix\(.*,\s*(\w+)\s*\)/;
    var transform = node.style.transform;
    var reg;
    if(!transform){
        return null;
    }
    reg = regRule.exec(transform);
    if(null === reg){
        reg = regRule2.exec(transform);
        return reg ? reg[1] : null;
    }
    return reg[3];
};
var getWeek=function (date) {
    var day = new Date(Date.parse(date));   //需要正则转换的则 此处为 ： var day = new Date(Date.parse(date.replace(/-/g, '/')));
    var today = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
    var week = today[day.getDay()];

//最终结果为：
    return week;
};
$(".ul-1").on('touchstart', 'li', function(e) {
        var touch = e.originalEvent,
        startX = touch.changedTouches[0].pageX;
        startY = touch.changedTouches[0].pageY;
    $(".ul-1").on('touchmove', function(e) {
        e.preventDefault();
        touch = e.originalEvent.touches[0] ||
            e.originalEvent.changedTouches[0];
        if (touch.pageY - startY > 60) {
            console.log("下划");
            var Height=getTranslateY(this);
            var h=Height.split("px");
            if(h[0]<=-60){
                var k=parseInt(h[0])+60+"px";
                $(this).css("transform","translate(0px,"+k+")");
                $(".ul-1").off("touchmove");
                year=(Number(h[0])+3840)/60+2002;
            }
            else {
                alert("到顶了");
            }

        } else if (touch.pageY - startY < -60) {
            console.log("上划");
            var Height=getTranslateY(this);
            var h=Height.split("px");

            if(h[0]>-3840){
                var k=parseInt(h[0])-60+"px";
                $(this).css("transform","translate(0px,"+k+")");
                $(".ul-1").off("touchmove");

                year=(Number(h[0])+3840)/60+2000;

            }else {
                alert("到底了");
            }
        };
    });
}).on('touchend', function() {
    $('li').off('touchmove');
});
$(".ul-2").on('touchstart', 'li', function(e) {
    var touch = e.originalEvent,
        startX = touch.changedTouches[0].pageX;
    startY = touch.changedTouches[0].pageY;
    $(".ul-2").on('touchmove', function(e) {
        e.preventDefault();
        touch = e.originalEvent.touches[0] ||
            e.originalEvent.changedTouches[0];
        if (touch.pageY - startY > 60) {
            console.log("下划");
            var Height=getTranslateY(this);
            var h=Height.split("px");
            if(h[0]<=-60){
                var k=parseInt(h[0])+60+"px";
                $(this).css("transform","translate(0px,"+k+")");
                $(".ul-2").off("touchmove");
                month=(Number(h[0])+660)/60+2;
            }
            else {
                alert("到顶了");
            }

        } else if (touch.pageY - startY < -60) {
            console.log("上划");
            var Height=getTranslateY(this);
            var h=Height.split("px");

            if(h[0]>-660){
                var k=parseInt(h[0])-60+"px";
                $(this).css("transform","translate(0px,"+k+")");
                $(".ul-2").off("touchmove");
                month=(Number(h[0])+660)/60;
            }else {
                alert("到底了");
            }
        };
    });

    // Return false to prevent image
    // highlighting on Android
}).on('touchend', function() {
    $('li').off('touchmove');
});
$(".ul-3").on('touchstart', 'li', function(e) {
    var touch = e.originalEvent,
        startX = touch.changedTouches[0].pageX;
    startY = touch.changedTouches[0].pageY;
    $(".ul-3").on('touchmove', function(e) {
        e.preventDefault();
        touch = e.originalEvent.touches[0] ||
            e.originalEvent.changedTouches[0];
        if (touch.pageY - startY > 60) {
            console.log("下划");
            var Height=getTranslateY(this);
            var h=Height.split("px");
            if(h[0]<=-60){
                var k=parseInt(h[0])+60+"px";
                $(this).css("transform","translate(0px,"+k+")");
                $(".ul-3").off("touchmove");
                day=(Number(h[0])+1800)/60+2;
            }
            else {
                alert("到顶了");
            }

        } else if (touch.pageY - startY < -60) {
            console.log("上划");
            var Height=getTranslateY(this);
            var h=Height.split("px");

            if(h[0]>-1800){
                var k=parseInt(h[0])-60+"px";
                $(this).css("transform","translate(0px,"+k+")");
                $(".ul-3").off("touchmove");
                day=(Number(h[0])+1800)/60;
            }else {
                alert("到底了");
            }
        };
    });

    // Return false to prevent image
    // highlighting on Android
}).on('touchend', function() {
    $('li').off('touchmove');
});
$(".ul-4").on('touchstart', 'li', function(e) {
    var touch = e.originalEvent,
        startX = touch.changedTouches[0].pageX;
    startY = touch.changedTouches[0].pageY;
    $(".ul-4").on('touchmove', function(e) {
        e.preventDefault();
        touch = e.originalEvent.touches[0] ||
            e.originalEvent.changedTouches[0];
        if (touch.pageY - startY > 60) {
            console.log("下划");
            var Height=getTranslateY(this);
            var h=Height.split("px");
            if(h[0]<=-60){
                var k=parseInt(h[0])+60+"px";
                $(this).css("transform","translate(0px,"+k+")");
                $(".ul-4").off("touchmove");
                hour=(Number(h[0])+1380)/60+1;


            }
            else {
                alert("到顶了");
            }
        } else if (touch.pageY - startY < -60) {
            console.log("上划");
            var Height=getTranslateY(this);
            var h=Height.split("px");

            if(h[0]>-1380){
                var k=parseInt(h[0])-60+"px";
                $(this).css("transform","translate(0px,"+k+")");
                $(".ul-4").off("touchmove");
                hour=(Number(h[0])+1380)/60-1;

            }else {
                alert("到底了");
            }
        };
    });

    // Return false to prevent image
    // highlighting on Android
}).on('touchend', function() {
    $('li').off('touchmove');
});
$(".ul-5").on('touchstart', 'li', function(e) {
    var touch = e.originalEvent,
        startX = touch.changedTouches[0].pageX;
    startY = touch.changedTouches[0].pageY;
    $(".ul-5").on('touchmove', function(e) {
        e.preventDefault();
        touch = e.originalEvent.touches[0] ||
            e.originalEvent.changedTouches[0];
        if (touch.pageY - startY > 60) {
            console.log("下划");
            var Height=getTranslateY(this);
            var h=Height.split("px");
            if(h[0]<=-60){
                var k=parseInt(h[0])+60+"px";
                $(this).css("transform","translate(0px,"+k+")");
                $(".ul-5").off("touchmove");
                minute=(Number(h[0])+3540)/60+1;
            }
            else {
                alert("到顶了");
            }

        } else if (touch.pageY - startY < -60) {
            console.log("上划");
            var Height=getTranslateY(this);
            var h=Height.split("px");

            if(h[0]>-3540){
                var k=parseInt(h[0])-60+"px";
                $(this).css("transform","translate(0px,"+k+")");
                $(".ul-5").off("touchmove");
                minute=(Number(h[0])+3540)/60-1;
            }else {
                alert("到底了");
            }
        };
    });

    // Return false to prevent image
    // highlighting on Android
}).on('touchend', function() {
    $('li').off('touchmove');
});
$(".day-1").click(
    function () {
        $(".day1-ok").css("display","");
        $(".day2-ok").css("display","none");
        $(".day3-ok").css("display","none");
        var data=year+"/"+month+"/"+day;
        var we=getWeek(data);
        var time=hour+":"+minute;
        $(".day-time-template").css("bottom","0px");
        $(".tip").css("display","");
        $(".day1-ok").click(function () {
             data=year+"/"+month+"/"+day;
            we=getWeek(data);
             time=hour+":"+minute;
                $(".data-1").html(data);
                $(".week-1").html(we);
                $(".time-1").html(time);
                var value=data+" "+we+" "+time;
                $(".data-value-1").attr("data-value",value);
            $(".del-1").css("display","");
            $(".day-time-template").css("bottom","-300px");
            $(".tip").css("display","none");
            $(".data-value-2").css("display","");
            }
        )
    }
);

$(".day-2").click(
    function () {
        $(".day1-ok").css("display","none");
        $(".day2-ok").css("display","");
        $(".day3-ok").css("display","none");
        var data=year+"/"+month+"/"+day;
        var we=getWeek(data);
        var time=hour+":"+minute;
        $(".day-time-template").css("bottom","0px");
        $(".tip").css("display","");
        $(".day2-ok").click(function () {
                 data=year+"/"+month+"/"+day;
                 we=getWeek(data);
                 time=hour+":"+minute;
                $(".data-2").html(data);
                $(".week-2").html(we);
                $(".time-2").html(time);
                var value=data+" "+we+" "+time;
                $(".data-value-2").attr("data-value",value);
                $(".del-2").css("display","");
                $(".day-time-template").css("bottom","-300px");
                $(".tip").css("display","none");
                $(".data-value-3").css("display","");
        }
        )
    }
);
$(".day-3").click(
    function () {
        $(".day2-ok").css("display","none");
        $(".day1-ok").css("display","none");
        $(".day3-ok").css("display","");
        var data=year+"/"+month+"/"+day;
        var we=getWeek(data);
        var time=hour+":"+minute;
        $(".day-time-template").css("bottom","0px");
        $(".tip").css("display","");
        $(".day3-ok").click(function () {
             data=year+"/"+month+"/"+day;
             we=getWeek(data);
             time=hour+":"+minute;
                $(".data-3").html(data);
                $(".week-3").html(we);
                $(".time-3").html(time);
            var value=data+" "+we+" "+time;
            $(".data-value-3").attr("data-value",value);
            $(".del-3").css("display","");
            $(".day-time-template").css("bottom","-300px");
            $(".tip").css("display","none");

            }
        )
    }
);

$(".del-1").click(
    function () {
        $(".data-value-1").css("display","none");
        $(".del-1").css("display","none");
        $(".data-value-1").attr("data-value","");
    }
);
$(".del-2").click(
    function () {
        $(".data-value-2").css("display","none");
        $(".del-2").css("display","none");
        $(".data-value-2").attr("data-value","");
    }
);
$(".del-3").click(
    function () {
        $(".data-value-3").css("display","none");
        $(".del-3").css("display","none");
        $(".data-value-3").attr("data-value","");
    }
);

    function empty () {
        var site_0=$("#q-title").val();//标题
        var site_1=$(".selected").attr("id");//截止时间
        var site_2=$("#on_off").attr("class");//公开信息
        var data_1=$(".data-value-1").attr("data-value");//时间一
        var data_2=$(".data-value-2").attr("data-value");//时间二
        var data_3=$(".data-value-3").attr("data-value");//时间三
        if ($.trim(site_0).length <= 0) {
            alert('请输入标题');
        }
        else {
            var a=$.trim(data_1).length <= 0;
            var b=$.trim(data_2).length <= 0;
            var c=$.trim(data_3).length <= 0;
            var d=$.trim(site_1).length <= 0;
            if(a&&b&&c){
                alert("请选择时间");
            }
            else {
                if(d){
                    alert("输入截止时间")
                }else {
                    var arr=[site_0,site_1,site_2];
                    if(!a){
                        arr.push(data_1);
                            }
                    if(!b){
                        arr.push(data_2);
                        }
                    if(!c){
                        arr.push(data_3);
                    }
                }
            }
            $("#tip").removeClass("hid");
        }
        console.log(arr);
        return arr;
    }



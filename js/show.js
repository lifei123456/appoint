$(".site1").bind("click",function (e) {
    $(this).addClass("change-img");
    var site1=$.trim($(".year-1").html())+"/"+$.trim($(".month-1").html().split("月")[0])+"/"+ $.trim($(".day-1").html())+" "+$.trim($(".week-1").html());
    var peo=parseInt($(".people-1").html().split("人")[0])+1;
    $(".people-1").html(peo+"人");
    console.log(site1);
    $(".site1").unbind()
});
$(".site2").click("click",function (e) {
    $(this).addClass("change-img");
    var site2=$.trim($(".year-2").html())+"/"+$.trim($(".month-2").html().split("月")[0])+"/"+ $.trim($(".day-2").html())+" "+$.trim($(".week-2").html());
    var peo=parseInt($(".people-2").html().split("人")[0])+1;
    $(".people-2").html(peo+"人");
    console.log(site2);
    $(".site2").unbind();
});
$(".weui-navbar__item").click(function (e) {
    $(".weui-navbar__item").removeClass("weui-bar__item_on");
    $(this).addClass("weui-bar__item_on");
});
// var data=
//     [
//         {Url:'../images/1491382615111.png',Name:'海鹰战警',Director:'钟光琳',Staring:'张一，吴青芸，牟凤彬',Duration:'95分钟',Date:'2017-04-11'},
//         {Url:'../images/1490689845251.png',Name:'攻壳机动队',Director:'鲁伯特·山德斯',Staring:'斯嘉丽·约翰逊',Duration:'107分钟',Date:'2017-04-07'},
//         {Url:'..images/1490689928843.png',Name:'海角有个五店市',Director:'张柏瑞',Staring:'王德顺，李纯',Duration:'107分钟',Date:'2017-04-07'},
//         {Url:'..images/1490689928843.png',Name:'鸡飞狗跳',Director:'罗棋',Staring:'狄威，陈观泰',Duration:'89分钟',Date:'2017-04-07'},
//         {Url:'../images/1490690098242.png',Name:'点五步',Director:'陈志发',Staring:'林耀声，廖启智',Duration:'96分钟',Date:'2017-04-07'},
//         {Url:'../images/1490690177329.png',Name:'六月与弓箭',Director:'林波',Staring:'王艺嘉，杨铮',Duration:'91分钟',Date:'2017-04-07'},
//         {Url:'../images/1490690240658.png',Name:'惊悚小说',Director:'白丽丽',Staring:'吕聿来，康凯',Duration:'90分钟',Date:'2017-04-07'},
//         {Url:'../images/1491382509489.png',Name:'一念无明',Director:'黄进',Staring:'余文乐，曾志伟',Duration:'101分钟',Date:'2017-04-07'},
//         {Url:'../images/1490689745708.png',Name:'麦兜当当伴我心',Director:'谢立文',Staring:'张正中，吴君如',Duration:'80分钟',Date:'2017-04-02'},
//         {Url:'../images/1490689645409.png',Name:'怨灵宿舍之白纸女生',Director:'陆诗雷',Staring:'谢容儿，薇拉贝儿，',Duration:'87分钟',Date:'2017-04-01'},
//         {Url:'../images/1490689561674.png',Name:'冰雪大作战',Director:'François Brisson',Staring:'Angela Galuppo，张震',Duration:'83分钟',Date:'2017-04-01'},
//         {Url:'../images/1490689431779.png',Name:'有完没完',Director:'王啸坤',Staring:'贾静雯，范伟',Duration:'99分钟',Date:'2017-04-01'}
//     ];
// console.log(data);
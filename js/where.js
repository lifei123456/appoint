/**
 * Created by LiFei on 2017/3/23.
 */
//返回一个包含标题，地点时间ID及公开信息的数组
function retu() {
    var site_0=$("#q-title").val();//标题
    var site_1=$.trim($(".site1").val());//地点1
    var site_2=$.trim($(".site2").val());//地点2
    var site_3=$.trim($(".site3").val());//地点3
    var site_4=$.trim($(".site4").val());//地点4
    var site_5=$(".selected").attr("id");//截止时间（time-1：一周，time-2：两周，time-3：一月）
    var site_6=$("#on_off").attr("class");//公开信息（push-off：关闭，push-open：打开）
    var  arr=[site_0,site_1,site_2,site_3,site_4,site_5,site_6];
    return arr;
}
function empty() {
    var site_2=retu();
    if ($.trim(site_2[0]).length <= 0) {
        alert('请输入标题');
    }
    else {
        var a=$.trim(site_2[1]).length <= 0;
        var b=$.trim(site_2[2]).length <= 0;
        var c=$.trim(site_2[3]).length <= 0;
        var d=$.trim(site_2[4]).length <= 0;
        if(a&&b&&c&&d){
            alert("请输入地点");
        }
        else {
            if(site_2[5]==null){
                alert("time")
            }
            else {
                $("#tip").removeClass("hid");
                //window.location.href = "https://www.baidu.com/";//跳转指定页面
            }

        }

    }
    console.log(site_2);
    return site_2;
}
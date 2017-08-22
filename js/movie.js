/**
 * Created by LiFei on 2017/3/26.
 * 返回一个数组
 * arr[0]:标题
 * arr[1]:截止时间（time-1：一周，time-2：两周，time-3：一月）
 * arr[2]:是否公开（push-off：关闭，push-open：打开）
 * arr[3]:电影1
 * arr[4]:电影2
 * arr[5]:电影3
 * arr[6]:电影4
 */
$(function(){
        var name,img_src;
    for(var i=0;i<storage.length;i++){
        var str= storage.getItem(storage.key(i));
        var name;
        var strs = str.split(",");
        name=jQuery.trim(strs[0]);
        img_src=strs[1];
        switch (i){
            case 0:$("#option-M-1").css("display","");
                $("#option-del-1").css("display","");
                $("#M-1").attr("src",strs[1]);
                $("#itemUrlDesc-1").attr("value",name);
                    break;
            case 1:$("#option-M-2").css("display","");
                $("#option-del-2").css("display","");
                $("#option-del-1").css("display","none");
                $("#M-2").attr("src",strs[1]);
                $("#itemUrlDesc-2").attr("value",name);
                break;
            case 2:$("#option-M-3").css("display","");
                $("#option-del-3").css("display","");
                $("#option-del-2").css("display","none");
                $("#M-3").attr("src",strs[1]);
                $("#itemUrlDesc-3").attr("value",name);
                break;
            case 3:$("#option-M-4").css("display","");
                $("#option-del-4").css("display","");
                $("#option-del-3").css("display","none");
                $("#M-4").attr("src",strs[1]);
                $("#itemUrlDesc-4").attr("value",name);
                break;
        }
    }
});
$(".option-img").click(function () {
        window.location.href="MovieList.html";
}
);
$(".option-del").click(
    function (e) {
        var str_num = $(this).attr("id").split("-");
            var now_img="M-"+str_num[2];
            var now_val="itemUrlDesc-"+str_num[2];
            var now_del="#option-del-"+(str_num[2]-1);
            $(now_del).css("display","");
            $("#"+now_img).attr('src',"");
            $("#option-del-"+str_num[2]).css("display","none");
            $("#"+now_val).attr("value","添加描述");
            storage.removeItem(storage.key(storage.length-1));
    }
);
function empty() {

    var site_0=$("#q-title").val();//标题
    var site_1=$(".selected").attr("id");//时间
    var site_2=$("#on_off").attr("class");//公开信息
    if ($.trim(site_0).length <= 0) {
        alert('请输入标题');
    }else {
        if(site_1==null){
            alert("time")
        }else {
            var  arr=[site_0,site_1,site_2];
            if(storage.length==0){
                alert("未选择电影");
            }else{
                for(var i=0;i<storage.length;i++){
                    var strs = storage.getItem(storage.key(i)).split(",");
                    var movie=strs[0];
                    arr.push(movie);
                }
                $("#tip").removeClass("hid");
                //window.location.href = "https://www.baidu.com/";//跳转指定页面
                // for(var j=0;j<arr.length;j++)
                // {
                //     alert(arr[j]);
                // }
                return arr;
            }
        }
    }

}

/**
 * Created by LiFei on 2017/3/23.
 */
//点击确定按钮返回数组arr为电影列表
var PATH="C:\Users\LiFei\Desktop\appoint";//定义cookie的有效路径
var storage = window.localStorage;
var a=storage.length;
var selected,selected_img;//当前选中的电影名及对应图片
// function Array_2(nRow,nColumn){
//     var array1=new Array(); //定义一维数组
//     for(i=0;i<nRow;i++)
//     {
//         array1[i]=new Array(); //将每一个子元素又定义为数组
//         for(n=0;n<nColumn;n++)
//         {
//             array1[i][n]=""; //此时aa[i][n]可以看作是一个二级数组
//         }
//     }
//     return array1;
// }
// var arr= Array_2(4,2);
$(function(){
    for(var i=0;i<storage.length;i++){
        var str= storage.getItem(storage.key(i));
        var strs = str.split(",");
        var id=jQuery.trim(strs[2]);
        $("#"+id).addClass("selected");
        $("#num").text(a+"/4");
    }
});
$(".listItem ").click(function (e) {
    if($(this).hasClass("selected")){
        $(this).removeClass("selected");
        a--;
        $("#num").text(a+"/4");
        selected=$(this).find("dt").html();
        selected_img=$(this).find("img").attr('src');
       // $.cookie(escape(selected),null,{path:PATH});
        storage.removeItem(selected);
        // arr.splice(jQuery.inArray('selected',arr),1);
        // arr.splice(jQuery.inArray('selected_img',arr),1);
    }else{
        if(a<4) {
            $(this).addClass("selected");
            a++;
            $("#num").text(a + "/4");
            selected=$(this).find("dt").html();
            selected_img=$(this).find("img").attr('src');
            var b=a-1;
            // arr[b][0]=selected;
            // arr[b][1]=selected_img;
            var Val=selected+","+selected_img+","+$(this).attr("id");
            storage.setItem(selected,Val);
           // alert(storage.getItem(selected));
           // $.cookie(selected,selected_img,{path:PATH});
            //alert($.cookie(selected,{path:PATH}));
        }
        else {
            alert("你点多了");
        }
    }
});
$("#right-line").click(function () {
    $(".half-line").addClass("right");
    $("#now").addClass("hid");
});
$("#left-line").click(function () {
    $(".half-line").removeClass("right");
    $("#now").removeClass("hid");
});
function return_arr() {
     return arr;
 }
$("#btnOK").click(function () {
    // for(var i=0;i<arr.length;i++){
    //     alert($.cookie(arr[i],{path:PATH}));
    // }
    // var _toArr=$(".selected").makeArray();
    // for(var i=0;i<4;i++){
    //     for(var j=0;j<2;j++){
    //         alert(arr[i][j]);
    //     }
    // }
    window.location.href='movie.html'
});




/**
 * Created by LiFei on 2017/3/23.
 */

$("#time-1").click(function () {
    $("#time-1").addClass("selected");
    $("#time-2").removeClass("selected");
    $("#time-3").removeClass("selected");
});
$("#time-2").click(function () {
    $("#time-2").addClass("selected");
    $("#time-1").removeClass("selected");
    $("#time-3").removeClass("selected");
});
$("#time-3").click(function () {
    $("#time-3").addClass("selected");
    $("#time-2").removeClass("selected");
    $("#time-1").removeClass("selected");
});
$("#on_off").click(function ()
{
    var now=$("#on_off").attr("class");
    if(now=="push-open"){
        $("#on_off").removeClass("push-open push-off");
        $("#on_off").addClass("push-off")
    }
    else
        {
            $("#on_off").removeClass("push-open push-off");
            $("#on_off").addClass("push-open")
        }
});

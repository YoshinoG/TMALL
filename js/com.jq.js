$(function () {
    $('[data-toggle="tooltip1"]').tooltip({"animation":true});
    $('[data-toggle="tooltip2"]').tooltip({"animation":true});
    $('[data-toggle="tooltip3"]').tooltip({"animation":true});
    $('[data-toggle="tooltip4"]').tooltip({"animation":true});
    $('[data-toggle="tooltip5"]').tooltip({"animation":true});
    $('[data-toggle="tooltip6"]').tooltip({"animation":true});
    $('[data-toggle="tooltip7"]').tooltip({"animation":true});

    $("#toTop").click(function(event) {
        /* Act on the event */
        $("html,body").animate({
                scrollTop:"0px"},
            666
        )
    });
    if(getCookie("user_id")){
        var user_id = getCookie("user_id");
        $("#top").children("a").eq(0).html("欢迎"+getCookie("user_id"));
        $("#top").children("a").eq(1).html("注销").attr("href","").click(function () {
            removeCookie("user_id");
        });
        var obj = JSON.parse(getCookie("cart"));
        var num = 0;
        for(var attr in obj[user_id]){
            num += obj[user_id][attr];
        }
        $("#cart-num").html(num);
    }
    $top_list = $(".hid");
    $top_list.hover(function () {
        $(this).addClass("hiding").children("div").css("display","block");
    },function () {
        $(this).removeClass("hiding").children("div").css("display","none");
    })
})
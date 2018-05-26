$(function(){
    var flag1 = flag2 = flag3 = flag4 =flag5=false;
    var $tit = $("header p");
    var pwd = "";
    var username = "";
    $("#user-pact>span").click(function () {
        $(location).attr("href","index.html");
    })
    $("#agree").click(function () {
        $("#user-pact").css("display","none");
    })

    $("#on").click(function () {
        if($(this).find("ul:hidden").length){
            $(this).find("ul").css("display","block");
        }else{
            $(this).find("ul").css("display","none");
        }
    })

    $("#tell").change(function () {
        var tell = $("#tell").val();
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(tell)) {
            flag1 = false;
            $(this).next().html("请正确输入").addClass("red");
        } else {
            flag1 = true;
            $(this).next().html("&#xe600;").addClass("green");
        }
    })

    $(".inner").mousedown(function(e){
        var el = $(".inner"),os = el.offset(),dx,$span=$(".outer>span"),$filter=$(".filter-box"),_differ=$(".outer").width()-el.width();
        $(document).mousemove(function(e){
            dx = e.pageX - os.left;
            if(dx<0){
                dx=0;
            }else if(dx>_differ){
                dx=_differ;
            }
            $filter.css('width',dx);
            el.css("left",dx);
        });
        $(document).mouseup(function(e){
            $(document).off('mousemove');
            $(document).off('mouseup');
            dx = e.pageX - os.left;
            if(dx<_differ){
                dx=0;
                $span.html("滑动解锁");
            }else if(dx>=_differ){
                dx=_differ;
                $(".outer").addClass("act");
                $span.html("验证通过！");
                $filter.html("");
                el.html('&#xe600;');
                flag2 = true;
            }
            $filter.css('width',dx);
            el.css("left",dx)
        })
    })

    $("#next1").click(function () {
        if(flag1&&flag2){
            $("#content1").next().css("display","block").siblings(".content").css("display","none");
            $tit.eq(1).addClass("now").siblings().removeClass("now");
        }
    })

    $("#username").change(function () {
        var myreg=/[A-Za-z_0-9]{3,20}$/;
        username = $("#username").val();
        if (!myreg.test(username)) {
            flag3 = false;
            $(this).next().html("请正确输入").addClass("red");
        } else {
            flag3 = true;
            $(this).next().html("&#xe600;").addClass("green");
        }
    })

    $("#pwd").change(function () {
        var myreg=/[A-Za-z_0-9]{6,20}$/;
        pwd = $("#pwd").val();
        if (!myreg.test(pwd)) {
            flag4 = false;
            $(this).next().html("请正确输入").attr("class","red");
        } else {
            flag4 = true;
            $(this).next().html("&#xe600;").attr("class","green");
        }
        var pwd_re = $("#pwd-re").val();
        if(pwd_re===pwd){
            flag5 = true;
           $("#pwd-re").next().html("&#xe600;").attr("class","green");
        }else{
            flag6 = false;
            $("#pwd-re").next().html("两次密码不一致").attr("class","red");
        }
    })

    $("#pwd-re").change(function () {
        var pwd_re = $("#pwd-re").val();
        if(pwd_re===pwd){
            flag5 = true;
            $(this).next().html("&#xe600;").attr("class","green");
        }else{
            flag6 = false;
            $(this).next().html("两次密码不一致").attr("class","red");
        }
    })

    $("#next2").click(function () {
        if(flag3&&flag4&&flag5){
            $.ajax({
                type:"post",
                url:"http://h6.duchengjiu.top/shop/api_user.php",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data:{
                    status:"register",
                    username:username,
                    password:pwd
                },
                success:function (data) {
                    console.log(data);
                    if(data["code"]==0){
                        $("#content2").next().css("display","block").siblings(".content").css("display","none");
                        $tit.eq(2).addClass("now").siblings().removeClass("now");
                    }else if(data["code"]==2001){
                        $("#username").next().html("用户名已存在").attr("class","red");
                    }
                }
            })
        }
    })

    $("#next3").click(function () {
        $("#content3").next().css("display","block").siblings(".content").css("display","none");
        $tit.eq(3).addClass("now").siblings().removeClass("now");
    })

    $("#next4").click(function () {
        $.ajax({
            type:"get",
            url:"http://h6.duchengjiu.top/shop/api_userinfo.php",
            data:{
                status:"Info",
                username:username
            },
            success:function (data) {
                // $(location).attr("href","index.html?user_id="+data["data"]["user_id"]);
                console.log(data);
            }
        });
    })
    $.ajax({
        type:"get",
        url:"http://h6.duchengjiu.top/shop/api_userinfo.php",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data:{
            status:"Info",
            username:"gz"
        },
        success:function (data) {
            // $(location).attr("href","index.html?user_id="+data["data"]["user_id"]);
            console.log(data);
        }
    });
})
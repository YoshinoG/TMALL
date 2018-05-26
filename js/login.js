$(function () {
    $("#select").click(function () {
        console.log("aa");
        if($("#pwd-login:visible").length){
            $(this).html("&#xe62a;");
            $("#pwd-login").css("display","none");
            $("#QR-login").css("display","block");
        }else {
            $(this).html("&#xe67a;");
            $("#pwd-login").css("display","block");
            $("#QR-login").css("display","none");
        }
    })
    $("#QR-login").children().last().first().click(function () {
        $("#pwd-login").css("display","block");
        $("#QR-login").css("display","none");
        $("#select").html("&#xe62a;");
    })
    $("#login").click(function () {
        $.ajax({
            type:"post",
            url:"http://h6.duchengjiu.top/shop/api_user.php",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data:{
                status:"Login",
                username:$("#username").val(),
                password:$("#pwd").val()
            },
            success:function (data) {
                console.log(data);
                if(data.code==0){
                    $(location).attr("href","index.html?user_id="+data["data"]["user_id"]);
                }
            }
        })
    })
    $.ajax({
        type:"post",
        url:"http://h6.duchengjiu.top/shop/api_user.php",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data:{
            status:"Login",
            username:"gzjj",
            password:"123123"
        },
        success:function (data) {
            console.log(data);
        }
    })
})
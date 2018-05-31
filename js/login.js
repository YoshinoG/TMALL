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
                status:"login",
                username:$("#username").val(),
                password:$("#pwd").val()
            },
            success:function (data) {
                if(data.code==0){
                    console.log("aa");
                    $(location).attr("href","index.html");
                    setCookie("user_id",data["data"]["username"]);
                }
            }
        })
    })
})
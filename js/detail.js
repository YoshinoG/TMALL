$(function () {
    var user_id = getCookie("user_id");
    var goods_id = decodeURI(getUrlParms("goods_id"));
    $.ajax({
        type:"get",
        url:"http://h6.duchengjiu.top/shop/api_goods.php",
        data:{
            goods_id:goods_id
        },
        success:function (data) {
            $("#img-wrap img").attr("src",data["data"][0]["goods_thumb"]);
            $("#main h2").html(data["data"][0]["goods_name"]);
            $("#price").children().eq(1).find("span").html("￥"+data["data"][0]["price"]);
            $("#main").children("div").eq(3).find("span").html("库存"+data["data"][0]["goods_number"]+"件");
            $("#spxq").html(data["data"][0]["goods_desc"])
        }
    })

    var obj = {};
    $("#add").click(function () {
        var num = $("#num").val();
        if(getCookie("cart")){
            obj = JSON.parse(getCookie("cart"));
            var flag=false;
            for(var attr in obj){
                if(attr==user_id){
                    flag=true;
                    if(!num){
                        if(!obj[user_id][goods_id]){
                            obj[user_id][goods_id]=1;
                        }else{
                            obj[user_id][goods_id]++;
                        }
                    }else{
                        if(!obj[user_id][goods_id]){
                            obj[user_id][goods_id]=num;
                        }else{
                            obj[user_id][goods_id]-=-num;
                        }
                    }
                    break;
                }
            }
            if(!flag){
                if(!num){
                    obj[user_id][goods_id]=1;
                }else {
                    obj[user_id][goods_id]=num;
                }
            }
        }else{
            if(!num){
                obj[user_id]={};
                obj[user_id][goods_id]=1;
            }else {
                obj[user_id]={};
                obj[user_id][goods_id]=num;
            }
        }
        setCookie("cart",JSON.stringify(obj),7);
    })
})
$(function () {
    var obj = JSON.parse(getCookie("cart"));
    var user_id = getCookie("user_id");
    for(var attr in obj){
        if(attr==user_id){
            for(var k in obj[attr]){
                (function(k){
                    $.ajax({
                        type:"get",
                        url:"http://h6.duchengjiu.top/shop/api_goods.php",
                        data:{
                            goods_id:k
                        },
                        success:function (data) {
                            var str="<ul class='item' goods_id='"+data["data"][0]["goods_id"]+"'><li><input type='checkbox'></li><li><a href='detail.html?goods_id="+data["data"][0]["goods_id"]+"'><img src='"+data["data"][0]["goods_thumb"]+"' alt=''></a><a href='detail.html?goods_id="+data["data"][0]["goods_id"]+"'>"+data["data"][0]["goods_name"]+"</a></li><li></li><li>￥<span class='p'>"+data["data"][0]["price"]+"</span></li><li><p><span class='less'>-</span><input type='text' class='number' value='"+obj[attr][k]+"'><span class='plus'>+</span></p></li><li>￥<span class='tp'>"+obj[attr][k]*data["data"][0]["price"]+"</span></li><li><a href='' class='del'>删除</a></li></ul>";
                            $("#main").append(str);
                            $(".less").unbind("click").click(function () {
                                var $obj = $(this).closest(".item").find(".number");
                                if($obj.val()&&$obj.val()!=0){
                                    $obj.val($obj.val()-1);
                                    var goods_id = $(this).closest(".item").attr("goods_id");
                                    $(this).closest(".item").find(".tp").html( $(this).closest(".item").find(".tp").html()-$(this).closest(".item").find(".p").html());
                                    obj[user_id][goods_id]--;
                                    setCookie("cart",JSON.stringify(obj),7);
                                    total();
                                }
                            })
                            $(".plus").unbind("click").click(function () {
                                var $obj = $(this).closest(".item").find(".number");

                                    $obj.val($obj.val()-0+1);
                                    var goods_id = $(this).closest(".item").attr("goods_id");
                                $(this).closest(".item").find(".tp").html( $(this).closest(".item").find(".tp").html()-(-$(this).closest(".item").find(".p").html()));
                                    obj[user_id][goods_id]++;
                                    setCookie("cart",JSON.stringify(obj),7);
                                    total();
                            })
                            $(".del").unbind("click").click(function () {
                                var goods_id = $(this).closest(".item").attr("goods_id");
                                delete obj[user_id][goods_id];
                                setCookie("cart",JSON.stringify(obj),7);
                            })
                            $(".all").unbind("click").on('click', function() {
                                $("#main input:checkbox").prop("checked", $(this).prop('checked'));
                               total();
                            })
                            $("#main input:checkbox").unbind("click").click(function () {
                                total();
                            })
                            function total() {
                                var arr = $("#main input:checked").closest(".item");
                                var num = 0;
                                var total = 0;
                                for (var i = 0;i<arr.length;i++){
                                    num += -(-arr.eq(i).find(".number").val());
                                    total += -(-arr.eq(i).find(".tp").html());
                                }
                                $("#number").html(num);
                                $("#total").html(total);
                            }
                        }
                    })
                })(k)
                 }
            break;
        }
    }

    
    // setCookie("cart",JSON.stringify(obj),7);
})
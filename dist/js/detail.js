$(function(){var i=getCookie("user_id"),o=decodeURI(getUrlParms("goods_id"));$.ajax({type:"get",url:"http://h6.duchengjiu.top/shop/api_goods.php",data:{goods_id:o},success:function(a){$("#img-wrap img").attr("src",a.data[0].goods_thumb),$("#main h2").html(a.data[0].goods_name),$("#price").children().eq(1).find("span").html("￥"+a.data[0].price),$("#main").children("div").eq(3).find("span").html("库存"+a.data[0].goods_number+"件"),$("#spxq").html(a.data[0].goods_desc)}});var d={};$("#add").click(function(){var a=$("#num").val();if(getCookie("cart")){d=JSON.parse(getCookie("cart"));var t=!1;for(var e in d)if(e==i){t=!0,a?d[i][o]?d[i][o]-=-a:d[i][o]=a:d[i][o]?d[i][o]++:d[i][o]=1;break}t||(d[i][o]=a||1)}else a?(d[i]={},d[i][o]=a):(d[i]={},d[i][o]=1);setCookie("cart",JSON.stringify(d),7)})});
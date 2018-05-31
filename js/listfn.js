function listFn(obj) {
    var data = {};
    data["page"] = obj["page"] || 1;
    data["pagesize"]=obj["pagesize"] || 10;
    if(obj["cat_id"]){
        data["cat_id"]=obj["cat_id"];
    }
    if(obj["search_text"]){
        data["search_text"]=obj["search_text"];
    }
    $.ajax({
        url: "http://h6.duchengjiu.top/shop/"+obj["url"],
        type: "GET",
        data: data,
        success:function (data) {
            var str = "";
            for (var i = 0;i<data["data"].length;i++){
                str += "<a href='detail.html?goods_id="+data["data"][i]["goods_id"]+"' class='item'><figure><img src='"+data["data"][i]["goods_thumb"]+"' alt=''><figcaption><p>"+data["data"][i]["goods_name"]+"</p><p>￥"+data["data"][i]["price"]+"</p></figcaption></figure></a>";
            }
            $(obj["element"]).append(str);
        }
    })
}

function listFn2(obj) {
    var data = {};
    data["page"] = obj["page"] || 1;
    data["pagesize"]=obj["pagesize"] || 10;
    if(obj["cat_id"]){
        data["cat_id"]=obj["cat_id"];
        console.log(data["cat_id"])
    }
    if(obj["search_text"]){
        data["search_text"]=obj["search_text"];
    }

    $.ajax({
        url: "http://h6.duchengjiu.top/shop/"+obj["url"],
        type: "GET",
        data: data,
        success:function (data) {
            var str = "";
            for (var i = 0;i<data["data"].length;i++){
                str += "<div class='item-wrap'><figure class='item1'><a href='detail.html?goods_id="+data["data"][i]["goods_id"]+"'><img src='"+data["data"][i]["goods_thumb"]+"'></a><figcaption><p>￥"+data["data"][i]["price"]+"</p><a href='detail.html?goods_id="+data["data"][i]["goods_id"]+"'>"+data["data"][i]["goods_name"]+"</a><a href=''>xxx旗舰店</a><div><p>月成交<span>999笔</span></p><p>评价 <span>123</span></p><p>&#xe727;</p></div></figcaption></figure></div>";
            }
            $(obj["element"]).append(str);
        }
    })
}
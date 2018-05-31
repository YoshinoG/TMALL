$(function () {

    // 分类栏
    $kind = $("#kind-list").children();
    $logo = $("#logo");
    $kind.mouseenter(function () {
        $(this).addClass("hover").siblings().removeClass("hover");
        $("#kind-aside").css("display","block");
        $.ajax({
            url: "https://aldh5.tmall.com/recommend2.htm?notNeedBackup=true&appId=2016022913,201603010,2016031463,2016030115,201603071,2016031461,2016031462,2016031464,2016031465,2016031466,2016031467,201710121",
            type: "GET",
            dataType: "jsonp", //指定服务器返回的数据类型
            success: function (data) {
                $("#kind").empty();
                console.log(data);
                var logostr = '';
                var kindstr= [];
                for(var i=0;i<data["2016022913"]["data"].length;i++){
                    logostr += "<a href='"+data["2016022913"]["data"][i]["action"]+"'><img src='"+data["2016022913"]["data"][i]["imgUrl"]+"' alt=''></a>"
                }
                for(var i = 0;i<data["201603071"]["data"].length;i++){
                    kindstr[0] += "<a href='"+data["201603071"]["data"][i]["action"]+"'>"+data["201603071"]["data"][i]["title"]+"</a>";
                }
                for(var i = 0;i<data["2016030115"]["data"].length;i++){
                    kindstr[1] += "<a href='"+data["2016030115"]["data"][i]["action"]+"'>"+data["2016030115"]["data"][i]["title"]+"</a>";
                }
                for(var i = 0;i<data["2016031461"]["data"].length;i++){
                    kindstr[2] += "<a href='"+data["2016031461"]["data"][i]["action"]+"'>"+data["2016031461"]["data"][i]["title"]+"</a>";
                }
                for(var i = 0;i<data["2016031464"]["data"].length;i++){
                    kindstr[3] += "<a href='"+data["2016031464"]["data"][i]["action"]+"'>"+data["2016031464"]["data"][i]["title"]+"</a>";
                }
                $logo.html(logostr);
                var str = "";
                for(var i = 0;i<4;i++){
                    str += "<div><div><p>当季流行</p><span>&gt;</span></div><div>"+kindstr[i]+"</div></div>";
                }
                $("#kind").html(str);
            }
        });
    })
    $("#kind-aside").hover(function () {
        $(this).css("display","block");
    },function () {
        $(this).css("display","none");
        $kind.removeClass("hover");
    })

    // banner
        $(".carousel-content").carousel({
            carousel : ".carousel",//轮播图容器
            indexContainer : ".img-index",//下标容器
            timing : 5000,//自动播放间隔
            animateTime : 500,//动画时间
            auto : true,//是否自动播放
        });

    // brank
    $.ajax({
        url: "https://aldh5.tmall.com/recommend2.htm?&appId=lb-zebra-17931-286928,201603169,lb-zebra-17931-286930,2015110211,09042",
        type: "GET",
        dataType: "jsonp",
        success:function (data) {
            var str = [];
            for(var i = 0;i<30;i++){
                str[i] = "<td><img src='"+data["09042"]["data"][i+1]["imgUrl"]+"' alt=''><a href='"+data["09042"]["data"][i+1]["action"]+"'><p>"+data["09042"]["data"][i+1]["brandName"]+"</p><p>点击进入</p></a></td>";
            }
            for (var j = 0;j<10;j++){
                $("#brank").children().children().eq(0).append(str[j]);
            }
            for (var j = 10;j<20;j++){
                $("#brank").children().children().eq(1).append(str[j]);
            }
            for (var j = 20;j<30;j++){
                $("#brank").children().children().eq(2).append(str[j]);
            }
        }
    })

    $(".item-m>div>div").mouseenter(function () {
        var _index = $(this).index();
        $(this).addClass("hover-mark").siblings().removeClass("hover-mark");
        $(".item-m").find("a").eq(_index).css("display","block").siblings("a").css("display","none");
    })
    
    $.ajax({
        url: "http://h6.duchengjiu.top/shop/api_goods.php",
        type: "GET",
        data:{
            "page":1,
            "pagesize":6
        },
        success:function (data) {
            var str = "";
            for (var i = 0;i<data["data"].length;i++){
                str += "<a href='' class='item'><figure><img src='"+data["data"][i]["goods_thumb"]+"' alt=''><figcaption><p>"+data["data"][i]["goods_name"]+"</p><p>￥"+data["data"][i]["price"]+"</p></figcaption></figure></a>";
            }
            $(".cont").append(str);
        }
    })


    listFn({
        page:2,
        pagesize:30,
        url:"api_goods.php",
        element:"#youlike"
    });

    $(".search-btn").click(function () {
        var val = $(this).siblings(".search-txt").val();
        if(val){
            $(location).attr("href","list.html?search_text="+encodeURI(encodeURI(val)));
        }
    })


    $(".search-txt").focus(function () {
        var obj = $(this);
        $(window).keydown(function (event) {
            if(event.keyCode==13){
                var val = obj.val();
                if(val!=""){
                    console.log(val)
                    $(location).attr("href","list.html?search_text="+encodeURI(encodeURI(val)));
                }
            }
        })
    })
    // 搜索框

    $(window).scroll(function(event) {
        /* Act on the event */
        if($(this).scrollTop()<780){
            $("#scroll-search-wrap").hide();
        }
        if($(this).scrollTop()>=780){
            $("#scroll-search-wrap").slideDown(300);
        }
    });



    var user_id = getCookie("user_id");
})
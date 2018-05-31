$(function () {
    var search_text = decodeURI(getUrlParms("search_text"));
    if(search_text){
        listFn2({
            page:1,
            pagesize:50,
            url:"api_goods.php",
            search_text:search_text,
            element:".cont"
        })
    }


    var cat_id = decodeURI(getUrlParms("cat_id"));
    if(cat_id){
        listFn2({
            page:1,
            pagesize:50,
            url:"api_goods.php",
            element:".cont",
            cat_id:parseInt(cat_id)
        })
    }


    $("#sreach-btn").click(function () {
        console.log("aa");
        var val = $("#sreach-txt").val();
        if($("#sreach-txt").val()){
            $(location).attr("href","list.html?search_text="+encodeURI(encodeURI(val)));
        }
    })


    $("#sreach-txt").focus(function () {
        $(window).keydown(function (event) {
            if(event.keyCode==13){
                var val = $("#sreach-txt").val();
                if(val){
                    $(location).attr("href","list.html?search_text="+encodeURI(encodeURI(val)));
                }
            }
        })
    })
})

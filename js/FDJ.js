$(function () {
    var mid = document.getElementById("mid");
    var zoom = document.getElementById("zoom");
    var big = document.getElementById("big");
    var bigImg = big.children[0];
    mid.onmouseover = function(){
        zoom.style.display = "block";
        big.style.display = "block";
    }
    mid.onmousemove = function(e){
        var evt = e || event;
        var _left = evt.pageX-mid.clientLeft-zoom.offsetWidth/2;
        var _top = evt.pageY-mid.clientTop-zoom.offsetHeight/2;
        if(_left<0){
            _left = 0;
        }
        if(_left>mid.offsetWidth-zoom.offsetWidth){
            _left=mid.offsetWidth-zoom.offsetWidth;
        }
        if(_top<0){
            _top = 0;
        }
        if(_top>mid.offsetHeight-zoom.offsetHeight){
            _top=mid.offsetHeight-zoom.offsetHeight;
        }
        zoom.style.left = _left+"px";
        zoom.style.top = _top+"px";
        bigImg.style.left = -_left/mid.offsetWidth*bigImg.offsetWidth+"px";
        bigImg.style.top = -_top/mid.offsetHeight*bigImg.offsetHeight+"px";
    }
    mid.onmouseout = function(){
        zoom.style.display = "none";
        big.style.display = "none";
    }
//     for(let i = 0;i<aSmall.length;i++){
//         aSmall[i].onclick = function(){
//             for(let j of aSmall){
//                 j.style.borderColor = "#fff";
//             }
//             aSmall[i].style.borderColor = "#f00";
//             midImg.src = arr[i];
//             bigImg.src = arr[i];
//         }
//     }
})
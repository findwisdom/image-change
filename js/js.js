/**
 * Created by wisdom king on 2016/2/15.
 */
$(function(){
    var page =1
    var i=4
    var $v_show = $("div.v_content_list");
    var $v_content = $("div.v_content");
    var v_width = $v_content.width();
    var len = $v_show.find("li").length;
    var page_count = Math.ceil(len/i);
    $("span.next").click(function(){
        if(!$v_show.is(":animated")) {
            if (page == page_count) {
                $v_show.animate({marginLeft: "0px"}, "slow");
                page = 1
            } else {
                $v_show.animate({marginLeft: "-=" + v_width}, "slow");
                page++;
            }
            $(".hightlight_tip span").eq((page-1)).addClass("current").siblings().removeClass("current");
        }
    })
    $("span.pre").click(function(){
        if(!$v_show.is(":animated")){
            if(page == 1){
                $v_show.animate({marginLeft:"-="+v_width*(page_count-1)},"slow")
                page = page_count;
            }else{
                $v_show.animate({marginLeft:"+="+v_width },"slow");
                page--;
            }
            $(".hightlight_tip span").eq((page-1)).addClass("current").siblings().removeClass("current");
        }
    })
    var x =10
    var y =20
    $("li>a").mouseover(function(e){
        var img = "<div id='append'><img src='"+this.href+"'/>"+"</div>"
        $("body").append(img);
        $("#append").css({
            "position":"absolute",
            top:(e.pageY+y)+"px",
            left:(e.pageX+x)+"px",
        })
    }).mouseout(function(){
        $("#append").remove();
    }).mousemove(function(e){
        $("#append").css({
            top:(e.pageY+y)+"px",
            left:(e.pageX+x)+"px"
        })
    })
})


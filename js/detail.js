/**
 * Created by mingyue on 2017/12/24.2:50
 */
//轮播
var swiper = new Swiper('.swiper-container',{
    pagination: {
        el: '.swiper-pagination'
    }
});
//项目概述
//按钮切换显示
$(".xmgs-container").find("a").click(function(e){
    var index=$(e.target).index();
    //按钮样式切换
    $(this).addClass("xmgs-cilck").siblings().removeClass("xmgs-cilck")
    //按钮显示隐藏实现
    $(".xmms-container").find("section").eq(index).show().siblings().hide();
});
//单击弹出页面addClass
//$(".botton-footer").click(function(){
//
//});


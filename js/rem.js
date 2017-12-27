(function(){
    function reace(){
        // 如果当前浏览器的宽 小于 高
        if(window.innerWidth < window.innerHeight){
            // html
            var docEl = document.documentElement || document.body;
            // html 可见区域 宽度(不包括滚动条，不包括边框)
            var clientWidth = docEl.clientWidth;
            // 如果 宽度 大于等于 375，将html 字体 = 100px
            if (clientWidth >= 375) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
            }
        }
        else{
            // html
            var docEl = document.documentElement;
            // html 可见区域 高度(不包括滚动条，不包括边框)
            var clientHight = docEl.clientHeight;
            // 如果 高度 大于等于 375，将html 字体 = 100px
            if(clientHight >= 375){
                docEl.style.fontSize = '100px';
            }
            else{
                docEl.style.fontSize = 100 * (clientHight / 375) + 'px';
            }
        }
    }
    //添加 事件监听
    window.addEventListener('resize',reace,false);
    window.addEventListener('DOMContentLoaded',reace,false);
})();
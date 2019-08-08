// 顶部导航判断
$(window).scroll(function(){
    // 滚动条距离顶部的距离 大于 200px时
    if($(window).scrollTop() >= 90){

        var id = $(this).data("id");

        $('.nav').addClass("active").siblings().removeClass("active");

    } else{
        $('.nav').removeClass("active");

    }
});

$(function(){
    // 首页banner上tab切换
    $('.tab_tit>li').click(function(){
        var index = $(this).index();
        $('.tab_tit>li').removeClass('on');
        $(this).addClass('on');
        $('.tab_con>li').hide();
        $('.tab_con>li').eq(index).show();
    });

    
});

// 运动函数
    function startMove(obj,json,endFn){	
        clearInterval(obj.timer);    
        obj.timer = setInterval(function(){        
            var bBtn = true;        
            for(var attr in json){            
                var iCur = 0;       
                if(attr == 'opacity'){
                    if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
                    iCur = Math.round(parseFloat(getStyle(obj,attr))*100);               
                    }else{
                        iCur = Math.round(parseFloat(getStyle(obj,attr))*100) || 100;
                    }	
                }else{
                    iCur = parseInt(getStyle(obj,attr)) || 0;            }
                
                var iSpeed = (json[attr] - iCur)/8;
                iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                if(iCur!=json[attr]){
                    bBtn = false;
                }           
                if(attr == 'opacity'){
                    obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed)+ ')';
                    obj.style.opacity = (iCur + iSpeed)/100;
                    
                }else{
                    obj.style[attr] = iCur + iSpeed + 'px';
                }      
            }      
            if(bBtn){
                clearInterval(obj.timer);      
                if(endFn){
                    endFn.call(obj);
                }
            }
            
        },30);
    };


function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
};







// //数字滚动函数
// (function($) {
//     if(!document.defaultView || !document.defaultView.getComputedStyle){
//         var oldCurCSS = jQuery.curCSS;
//         jQuery.curCSS = function(elem, name, force){
//             if(name === 'background-position'){
//                 name = 'backgroundPosition';
//             }
//             if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
//                 return oldCurCSS.apply(this, arguments);
//             }
//             var style = elem.style;
//             if ( !force && style && style[ name ] ){
//                 return style[ name ];
//             }
//             return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
//         };
//     }

//     var oldAnim = $.fn.animate;
//     $.fn.animate = function(prop){
//         if('background-position' in prop){
//             prop.backgroundPosition = prop['background-position'];
//             delete prop['background-position'];
//         }
//         if('backgroundPosition' in prop){
//             prop.backgroundPosition = '('+ prop.backgroundPosition + ')';
//         }
//         return oldAnim.apply(this, arguments);
//     };

//     function toArray(strg){
//         strg = strg.replace(/left|top/g,'0px');
//         strg = strg.replace(/right|bottom/g,'100%');
//         strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
//         var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
//         return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
//     }

//     $.fx.step.backgroundPosition = function(fx) {
//         if (!fx.bgPosReady) {
//             var start = $.curCSS(fx.elem,'backgroundPosition');

//             if(!start){//FF2 no inline-style fallback
//                 start = '0px 0px';
//             }

//             start = toArray(start);

//             fx.start = [start[0],start[2]];

//             var end = toArray(fx.end);
//             fx.end = [end[0],end[2]];

//             fx.unit = [end[1],end[3]];
//             fx.bgPosReady = true;
//         }

//         var nowPosX = [];
//         nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
//         nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
//         fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];
//     };
// })(jQuery);

// function show_num(n){
//     var it = $(".t_num i");
//     var len = String(n).length;
//     for(var i=0;i<len;i++){
//         if(it.length<=i){
//             $(".t_num").append("<i></i>");
//         }
//         var num=String(n).charAt(i);
//         var y = -parseInt(num)*30;
//         var obj = $(".t_num i").eq(i);
//         obj.animate({
//             backgroundPosition :'(0 '+String(y)+'px)' 
//             }, 'slow','swing',function(){}
//         );
//     }
// }

// $(function(){
//     show_num(5000);
// });

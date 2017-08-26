//轮播
let num=0
setInterval(function(){
   num++
   $(".ban-inner").animate({left:num*-640},1000,function(){
   	     if(num===$(".ban-inner li").length){
   	     	$(this).css("left",0)
   	     	num=0
   	     }
   })

},3000)
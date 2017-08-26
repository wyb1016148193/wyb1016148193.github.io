let num=0
setInterval(function(){
num++
if(num==3){
	num=0
}
$(".banner ul li").fadeOut(1000).eq(num).fadeIn(1000)

},3000)
// loading
var cols = ['#d3e3ff','#8da4ff','#fff','#bee7f5','#b0f6fe','#3681ff'];
var stars = 250;
console.log(screen.width);
$(function(){

	for (var i = 0; i <= stars; i++) {
		if(screen.width>1440){
			var size = Math.random()*15;
		}else{
			var size = Math.random()*7;
		}
		
		var color = cols[parseInt(Math.random()*4)];

		$('#starsBox').prepend('<span style=" width: ' + size + 'px; height: ' + size + 'px; top: ' + Math.random()*100 + '%; left: ' + Math.random()*100 + '%; background: ' + color + '; box-shadow: 0 0 '+ Math.random()*10 +'px' + color + ';"></span>') ;
	};

	setTimeout(function(){ 
		$('#starsBox span').each(function(){  
			$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
		});
	}, 1);

	setInterval(function(){ 
		$('#starsBox span').each(function(){  	
			$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
		});
	}, 100000);


	$(".HK").fadeIn(500);
	$(".MC").fadeIn(1500);
	$(".ZH").fadeIn(3000);
	$(".IN").fadeIn(5000);

	var x = setTimeout("location.href = \'index.html\'",6000);
	document.onmousemove = function(){	
	//既然鼠标移动了，取消页面跳转	
		clearTimeout(x);	//从现在开始重新计时，如果到了1秒还是要跳转	
		x = setTimeout("location.href = \'index.html\'",6000);
	}
})


// window.onload=init;
// function init(){	//设置，页面载入完毕之后，1秒不懂鼠标就页面就会跳转	
// x = setTimeout("location.href = \'index.html\'",5000);	//鼠标在网页上移动调用moved函数	
// document.onmousemove = moved;}
// function moved(){	//既然鼠标移动了，取消页面跳转	
// clearTimeout(x);	//从现在开始重新计时，如果到了1秒还是要跳转	
// x = setTimeout("location.href = \'index.html\'",5000);}
$(function(){
	$(".nav ul li:gt(0)").mouseover(function(){
		$("dl").eq($(this).index()-1).stop().slideDown(300);
	});
	$(".nav ul li:gt(0)").mouseout(function(){
		$("dl").eq($(this).index()-1).stop().slideUp(300);
	});
	
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false
	});
	
	$(".ysCon ul li").mouseover(function(){
		$(this).children(".ysp1").css("background","url(img/cgBg1.png) no-repeat center center");
		$(this).children("h5").css("color","#c17029");
		$(this).children(".ysp2").css({"borderTop":"1px solid #e7c7ac","color":"#c17029"});
	});
	
	$(".ysCon ul li").mouseout(function(){
		$(this).children(".ysp1").css("background","url(img/cgBg.png) no-repeat center center");
		$(this).children("h5").css("color","#292929");
		$(this).children(".ysp2").css({"borderTop":"1px solid #cbcbcb","color":"#292929"});
	});	
	
	$(".zhFuWu_con1 .xxk .hd span").mouseenter(function(e) {
		$(this).addClass("cur").siblings().removeClass("cur").parent(".hd").siblings(".bd").children().eq($(this).index()).show().siblings().hide();
	 });	
	
	jQuery(".txtScroll-top").slide({titCell:"",mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true,vis:5});

	$(".case_con ul li").hover(function(){
		$(this).toggleClass("addborder")
	});
	
	
})

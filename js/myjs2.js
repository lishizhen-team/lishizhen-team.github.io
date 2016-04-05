$(function(){
      		$(".yuan area.ea01").mousemove(function(){
			        $(".dh01").stop().animate({"filter":"alpha(opacity=100)","-webkit-opacity":"1","-moz-opacity":"1","-ms-opacity":"1","-o-opacity":"1","opacity":"1"},100);
			         $("#area02").removeClass("active").addClass("active");
			    }).mouseout(function(){
			    	 $(".dh01").stop().animate({"filter":"alpha(opacity=50)","-webkit-opacity":"0.5","-moz-opacity":"0.5","-ms-opacity":"0.5","-o-opacity":"0.5","opacity":"0.5"},300) 
			    	  $("#area02").removeClass("active")
			    });
        		$(".yuan area.ea02").mousemove(function(){
			        $(".dh02").stop().animate({"filter":"alpha(opacity=100)","-webkit-opacity":"1","-moz-opacity":"1","-ms-opacity":"1","-o-opacity":"1","opacity":"1"},100)
			    }).mouseout(function(){
			    	 $(".dh02").stop().animate({"filter":"alpha(opacity=50)","-webkit-opacity":"0.5","-moz-opacity":"0.5","-ms-opacity":"0.5","-o-opacity":"0.5","opacity":"0.5"},300)
			    });		
        		$(".yuan area.ea03").mousemove(function(){
			        $(".dh03").stop().animate({"filter":"alpha(opacity=100)","-webkit-opacity":"1","-moz-opacity":"1","-ms-opacity":"1","-o-opacity":"1","opacity":"1"},100)
			    }).mouseout(function(){
			    	 $(".dh03").stop().animate({"filter":"alpha(opacity=50)","-webkit-opacity":"0.5","-moz-opacity":"0.5","-ms-opacity":"0.5","-o-opacity":"0.5","opacity":"0.5"},300)
			    });		
        		$(".yuan area.ea04").mousemove(function(){
			        $(".dh04").stop().animate({"filter":"alpha(opacity=100)","-webkit-opacity":"1","-moz-opacity":"1","-ms-opacity":"1","-o-opacity":"1","opacity":"1"},100)
			    }).mouseout(function(){
			    	 $(".dh04").stop().animate({"filter":"alpha(opacity=50)","-webkit-opacity":"0.5","-moz-opacity":"0.5","-ms-opacity":"0.5","-o-opacity":"0.5","opacity":"0.5"},300)
			    });	
        		$(".yuan area.ea05").mousemove(function(){
			        $(".dh05").stop().animate({"filter":"alpha(opacity=100)","-webkit-opacity":"1","-moz-opacity":"1","-ms-opacity":"1","-o-opacity":"1","opacity":"1"},100)
			    }).mouseout(function(){
			    	 $(".dh05").stop().animate({"filter":"alpha(opacity=50)","-webkit-opacity":"0.5","-moz-opacity":"0.5","-ms-opacity":"0.5","-o-opacity":"0.5","opacity":"0.5"},300)
			    });		
        		$(".yuan area.ea06").mousemove(function(){
			        $(".dh06").stop().animate({"filter":"alpha(opacity=100)","-webkit-opacity":"1","-moz-opacity":"1","-ms-opacity":"1","-o-opacity":"1","opacity":"1"},100)
			    }).mouseout(function(){
			    	 $(".dh06").stop().animate({"filter":"alpha(opacity=50)","-webkit-opacity":"0.5","-moz-opacity":"0.5","-ms-opacity":"0.5","-o-opacity":"0.5","opacity":"0.5"},300)
			    });	
			    
       			$(".nav ul li:gt(0)").mouseover(function(){
					$("dl").eq($(this).index()-1).stop().slideDown(300);
				});
				$(".nav ul li:gt(0)").mouseout(function(){
					$("dl").eq($(this).index()-1).stop().slideUp(300);
				});
	
})

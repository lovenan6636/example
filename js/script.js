$(document).ready(function(){	
	var map = new google.maps.Map(document.getElementById('map_canvas'), {
	  zoom: 16,
	  center: new google.maps.LatLng(48.863755, 2.333197),
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  disableDefaultUI: true,
	  styles: [
        {
            featureType: "all",
            stylers: [
                { saturation: -100 }
            ]
        }
    	]
	});
	
	var myLatlng = new google.maps.LatLng(48.863755, 2.333197);
	var myMarkerImage = new google.maps.MarkerImage('./imgs/marker186.png');
	
	var marker = new google.maps.Marker({
		 position: myLatlng,
		 icon:myMarkerImage,
   		 map: map,
 	});

	$(".navigation,#btn_up,#btn_mobile").click(function(){
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
				  if(parseInt($(window).width())>600)
                   var targetOffset = $target.offset().top - $("#header-cache").height();
				  else
				  	 var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
	});
	
	
	$("#avocat_1").click(function(){		
		if(parseInt($(window).width())>600)
		{			
			$("#avocat_2").animate({right:"-115%"});
			$(this).animate({left:"48%"}).addClass("movement");
			
			$("#photo_cadre_avocat_cache_1").fadeIn();
		}
		else
		{
			$(this).fadeOut(500,function(){$("#photo_cadre_avocat_cache_1").fadeIn(500);}).addClass("movement");			
		}
		$(".photo_cadre").css("cursor","auto");
	});
	
	$("#avocat_2").click(function(){
		if(parseInt($(window).width())>600)
		{			
			$("#avocat_1").animate({left:"-115%"});
			$(this).animate({right:"48%"}).addClass("movement");
			
			$("#photo_cadre_avocat_cache_2").css("marginTop","0px").fadeIn();
		}
		else
		{
			
			$("#photo_cadre_avocat_cache_2").css("marginTop","55px");
			$(this).fadeOut(500,function(){$("#photo_cadre_avocat_cache_2").fadeIn(500);}).addClass("movement");
				
		}
		$(".photo_cadre").css("cursor","auto");
	});
	
	$(".retour_link").click(function(){	
		var id = $(this).attr("id");
		if(parseInt($(window).width())>600)
		{	
			
			if(id == "retour_link_1")
			{
				$("#photo_cadre_avocat_cache_1").fadeOut();
				$("#avocat_1").animate({left:"0%"}).removeClass("movement");
				
				$("#avocat_2").animate({right:"0%"});
			}
			else if(id == "retour_link_2")
			{
				$("#photo_cadre_avocat_cache_2").fadeOut();
				$("#avocat_2").animate({right:"0%"}).removeClass("movement");
				$("#avocat_1").animate({left:"0%"});
			}			
						
		}
		else
		{
			if(id == "retour_link_1")
			{
				$("#photo_cadre_avocat_cache_1").fadeOut(500,function(){$("#avocat_1").css("left","0").fadeIn(500).removeClass("movement");});	
			}
			else if(id == "retour_link_2")
			{
				$("#photo_cadre_avocat_cache_2").fadeOut(500,function(){$("#avocat_2").css("left","0").fadeIn(500).removeClass("movement");});	
			}
			
		}
		
		$(".photo_cadre").css("cursor","pointer");
	});
	
	$("#partenaire_1").click(function(){	
		if(parseInt($(window).width())>600)
		{
			$("#partenaire_2").animate({right:"-115%"});
			$(this).animate({left:"48%"}).addClass("movement");
			$("#photo_cadre_partenaire_cache_1").fadeIn();
		}
		else
		{
			$(this).fadeOut(500,function(){$("#photo_cadre_partenaire_cache_1").fadeIn(500);}).addClass("movement");			
		}
		
		$(".photo_cadre").css("cursor","auto");
	});
	
	$("#partenaire_2").click(function(){
		if(parseInt($(window).width())>600)
		{
			$("#partenaire_1").animate({left:"-115%"});
			$(this).animate({right:"48%"}).addClass("movement");
			
			$("#photo_cadre_partenaire_cache_2").fadeIn();
		}
		else
		{
			$(this).fadeOut(500,function(){$("#photo_cadre_partenaire_cache_2").fadeIn(500);}).addClass("movement");			
		}
		$(".photo_cadre").css("cursor","auto");
	});
	
	$(".retour_link_partenaire").click(function(){
		var id = $(this).attr("id");
		if(parseInt($(window).width())>600)
		{
			if(id == "retour_link_partenaire_1")
			{
				$("#photo_cadre_partenaire_cache_1").fadeOut();
				$("#partenaire_1").animate({left:"0%"}).removeClass("movement");
				$("#partenaire_2").animate({right:"0%"});
			}
			else if(id == "retour_link_partenaire_2")
			{
				$("#photo_cadre_partenaire_cache_2").fadeOut();
				$("#partenaire_2").animate({right:"0%"}).removeClass("movement");
				$("#partenaire_1").animate({left:"0%"});
			}
			
		}
		else
		{
			if(id == "retour_link_partenaire_1")
			{
				$("#photo_cadre_partenaire_cache_1").fadeOut(500,function(){$("#partenaire_1").fadeIn(500).removeClass("movement");});	
			}
			else if(id == "retour_link_partenaire_2")
			{
				$("#photo_cadre_partenaire_cache_2").fadeOut(500,function(){$("#partenaire_2").fadeIn(500).removeClass("movement");});	
			}
			
		}
		$(".photo_cadre").css("cursor","pointer");
	});
	
	
	$(window).bind("scroll",function(){
		var width = parseInt($(window).width());
		var header_height = $("header").height();
		
		if(width>600)
		{
			if($(window).scrollTop()>header_height)
			{
				$("#header-cache")	.slideDown("fast");
			}
			else
			{
				$("#header-cache")	.slideUp("fast");
			}
		}
		else{
			$("#header-cache")	.slideUp("fast");
		}
	});
	
	$(window).resize(function(e) {
       var width = parseInt($(window).width()); 
	   	var header_height = $("header").height();
		var avocat_1 = $("#avocat_1");
		var avocat_2 = $("#avocat_2");
		var partenaire_1 = $("#partenaire_1");
		var partenaire_2 = $("#partenaire_2");
		
		if(width<=600)
		{
		  	$("#header-cache")	.css("display","none");
			$(".photo_cadre>p").css("margin-top","55px");
			
			if(avocat_1.hasClass("movement")&& !avocat_2.hasClass("movement"))
			{
				avocat_1.hide();
				avocat_2.css("left","0");
			}
			else if(avocat_2.hasClass("movement") && !avocat_1.hasClass("movement"))
			{
				avocat_2.hide();
				avocat_1.css("left","0");
			}
			
			if(partenaire_1.hasClass("movement") && !partenaire_2.hasClass("movement"))
			{
				partenaire_1.hide();
				partenaire_2.css("left","0");
			}
			else if(partenaire_2.hasClass("movement") && !partenaire_1.hasClass("movement"))
			{
				partenaire_2.hide();
				partenaire_1.css("left","0");
			}
			 
		}
		else
		{
			$(".photo_cadre>p").css("margin-top","0px");
			if($(window).scrollTop()>header_height)
			{
				$("#header-cache")	.slideDown("fast");
			}
			else
			{
				$("#header-cache")	.slideUp("fast");
			}
			
			if(avocat_1.hasClass("movement") && !avocat_2.hasClass("movement"))
			{
				avocat_2.css("left","115%");
				avocat_1.css("left","48%").fadeIn();				
			}
			else if(avocat_2.hasClass("movement") && !avocat_1.hasClass("movement"))
			{
				avocat_1.css("left","-115%");
				avocat_2.css("left","-48%").fadeIn();
			}
			else
			{
				avocat_1.fadeIn();
				avocat_2.fadeIn();
				$("#photo_cadre_avocat_cache_1").css("display","none");
				$("#photo_cadre_avocat_cache_2").css("display","none");
			}
			
			if(partenaire_1.hasClass("movement") && !partenaire_2.hasClass("movement"))
			{
				partenaire_2.css("left","115%");
				partenaire_1.css("left","48%").fadeIn();				
			}
			else if(partenaire_2.hasClass("movement") && !partenaire_1.hasClass("movement"))
			{
				partenaire_1.css("left","-115%");
				partenaire_2.css("left","-48%").fadeIn();
			}
			else
			{
				partenaire_1.fadeIn();
				partenaire_2.fadeIn();
				$("#photo_cadre_partenaire_cache_1").css("display","none");
				$("#photo_cadre_partenaire_cache_2").css("display","none");
			}
		}
    });
	
	//$.stellar();
	$('.bxslider').bxSlider({
	  auto: true,
	  autoControls: true
	});
	
	$("#mention_legale_link").fancybox({
				'titlePosition'		: 'inside',
				'transitionIn'		: 'none',
				'transitionOut'		: 'none'
	});

});


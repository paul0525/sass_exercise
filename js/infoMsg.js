(function($){
	
	$("#btn_alert").click(function(){
		$(".info-msg").css({"display":"block"});
		$(".info-msg-bg").css({"display":"block"});
	});
	
	$(".btn_close").click(function(){
		$(".info-msg").css({"display":"none"});
		$(".info-msg-bg").css({"display":"none"});
	});
	
})(jQuery);
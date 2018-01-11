/**
 * 一个简单的插件demo
 * 2018年1月11日17:27:56
 */

$.fn.extend({
		'messageInfo':function(options){
			
			this.css({"color":"red"});    //这里的this是插件对像
			
			var msg = options.message || "没有传message进来";
			
			var htmlStr="<div class=\"info-msg\">"
					    	+"<div class=\"info-header\">"
					    		+"<span>title</span>"
					    		+"<span class=\"right\"><a href=\"#\" class=\"btn_close\">关闭</a></span>"
					    	+"</div>"
	    					+"<div class=\"info-context\">"+msg+"</div>"
					    	+"<div class=\"info-bottom\">"
					    		+"<input type=\"submit\" value=\"提交\" class=\"btn_close\" />"
					    		+"<input  type=\"button\" value=\"重置\"/>"
				    		+"</div>"
				    	+"</div><div class=\"info-msg-bg\"> </div>";
			
			$("body").append( htmlStr);
			
			//注册关闭事件
			$(".btn_close").click(function(){
				$(".info-msg").remove();
				$(".info-msg-bg").remove();
			});	
		}
	});
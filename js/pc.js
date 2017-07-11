define([], function(){

	var Tips = (function(){

		var $tipBox = $(".tips-box");

		return {
			show: function(){
				$tipBox.removeClass("hide");
			},
			hide: function(){
				$tipBox.addClass("hide");
			},
			init: function(){
				
			}
		}
	})();
	//抄了楼教主的，哈哈
  function visibilitychange() {
    var titleTime;
    var oldTitle = document.title;
    // var shortcut = document.getElementById('shortcut');
    
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        document.title = '(๑•﹏•)你有freestyle吗';
        clearTimeout(titleTime);
        // shortcut.href = 'images/fail.ico';
      } else {
        document.title = '♡ͥ (⁎❛⃘ੌ દ ❛⃘ੌ⁎)♡ᵕ̈*啵一个';
        // shortcut.href = 'images/favicon.ico';
        titleTime = setTimeout(function() {
          document.title = oldTitle;
        }, 2e3);
      }
    })
  }
	
	var resetTags = function(){
		var tags = $(".tagcloud a");
		tags.css({"font-size": "12px"});
		for(var i=0,len=tags.length; i<len; i++){
			var num = tags.eq(i).html().length % 5 +1;
			tags[i].className = "";
			tags.eq(i).addClass("color"+num);
		}
	}

	var slide = function(idx){
		var $wrap = $(".switch-wrap");
		$wrap.css({
			"transform": "translate(-"+idx*100+"%, 0 )"
		});
		$(".icon-wrap").addClass("hide");
		$(".icon-wrap").eq(idx).removeClass("hide");
	}

	var bind = function(){
		var switchBtn = $("#myonoffswitch");
		var tagcloud = $(".second-part");
		var navDiv = $(".first-part");
		switchBtn.click(function(){
			if(switchBtn.hasClass("clicked")){
				switchBtn.removeClass("clicked");
				tagcloud.removeClass("turn-left");
				navDiv.removeClass("turn-left");
			}else{
				switchBtn.addClass("clicked");
				tagcloud.addClass("turn-left");
				navDiv.addClass("turn-left");
				resetTags();
			}
		});

		var timeout;
		var isEnterBtn = false;
		var isEnterTips = false;

		$(".icon").bind("mouseenter", function(){
			isEnterBtn = true;
			Tips.show();
		}).bind("mouseleave", function(){
			isEnterBtn = false;
			setTimeout(function(){
				if(!isEnterTips){
					Tips.hide();
				}
			}, 100);
		});

		$(".tips-box").bind("mouseenter", function(){
			isEnterTips = true;
			Tips.show();
		}).bind("mouseleave", function(){
			isEnterTips = false;
			setTimeout(function(){
				if(!isEnterBtn){
					Tips.hide();
				}
			}, 100);
		});

		$(".tips-inner li").bind("click", function(){
			var idx = $(this).index();
			slide(idx);
			Tips.hide();
		});
	}
  function run() {
    var image = document.getElementById('background');
    image.onload = function() {
      var engine = new RainyDay({
        image: this
      });
      engine.rain([ [1, 2, 200] ]);
      engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
    };
    image.crossOrigin = 'anonymous';
    image.src = 'http://7xsqnr.com1.z0.glb.clouddn.com/cloud.jpg';
  }
	return {
		init: function(){
			resetTags();
			bind();
			run();
      visibilitychange();
			Tips.init();
		}
	}
});
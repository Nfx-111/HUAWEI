function indexjs() {

  // 更多精彩
  $("#more-jc").hover(
    function () {
    $("#jc-ul").css("display","block")
    },
    function(){
      $("#jc-ul").css("display","none")
    });
// 客户服务
    $("#server").hover(
    function () {
    $("#server-ul").css("display","block")
    },
    function(){
      $("#server-ul").css("display","none")
    })

    // 网站导航
    $("#nav").hover(
    function () {
    $("#nav-ul").css("display","block")
    },
    function(){
      $("#nav-ul").css("display","none")
    })

// logo-input
    $("#logo-input").focus(function(){
      $("#logo-a").css("display","none");
    });
    $("#logo-input").blur(function(){
      $("#logo-a").css("display","block");
    });


// 回到顶部      
		$(window).scroll(function () {
				var st = $(this).scrollTop();
				if (st >= 500) {
					$(".huidingbu").fadeIn();
				} else {
					$(".huidingbu").fadeOut();
      }
    })

      $(".huidingbu").click(function () {
			$("body,html").stop().animate({
				"scrollTop": 0
			}, 300)			
    });

    // 划过微信
    $(".icon-wechat-fill").hover(function(){
      $(".vx-img").css("display","block")
    },function(){
      $(".vx-img").css("display","none")
    })

}
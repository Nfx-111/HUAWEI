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


    let list = document.querySelector(".hot-right")
    var oUl = []
    var str = ""
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
        uid: 0011122
    }).then(res => {
        oUl = res.data
        console.log(oUl)
        for (let id in oUl) {
            str += `
      <dl data-id=${id}>
      <a href="detail.html?id=${oUl[id].pid}">
      <dt><img src="${oUl[id].pimg}"></dt>
      <dd>
      <h6>${oUl[id].pname}</h6>
      <p>${oUl[id].pdesc}</p>
       <span>${oUl[id].pprice}</span>
       </dd>
       </a>
       </dl>
       `;
            console.log(id)
        }
        list.innerHTML = str;
    })
    console.log(list)
    
  
  
  
}

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

      // 划过微信
      $(".icon-wechat-fill").hover(function(){
        $(".vx-img").css("display","block")
      },function(){
        $(".vx-img").css("display","none")
      })

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

$(function () {
    let id = location.search.split("=")[1];
    $.get("http://jx.xuzhixiang.top/ap/api/detail.php", {
        id:id
    }).then(res => {
        console.log(res.data)
        let pData = res.data;
        var str = "";
        str = `
		<!-- 放大镜 -->
		<div class="z-img">
			<div class="midimg">
				<img src="${pData.pimg}" alt="">
				<div class="zoom"> </div>
			</div>
			<div class="bigimg">
				<img src="${pData.pimg}" alt="">
			</div>
			<!-- 小图 -->
			<div class="samllimg">
				<img src="${pData.pimg}" alt="">
			</div>
		</div>
		<!-- 内容 -->
		<div class="z-detail">
			<!-- 商品介绍 -->
			<div class="present"><span>商&nbsp;品</span>&nbsp;&nbsp;${pData.pname}  <br> <span>介&nbsp;绍</span>&nbsp;&nbsp; ${pData.pdesc}</div>
			<!-- 价格栏 -->
			<div class="price"><span>价&nbsp;格</span>&nbsp;￥${pData.pprice}
      <p>促销</p> </div>
			<!-- 服务、ID -->
			<div class="serve"></div>
			<!-- id -->
			<div class="good-id">商品编号   ${pData.pid}</div>
			<!-- 选项 -->
			<div class="option"></div>

			<!-- 添加购物车 -->
			<div class="add-cart">
				<div class="add-num">
					<input class="number" type="text" value="1">
					<span class="add-number">+</span>
					<span class="reduce-number">-</span>
				</div>

				<div class="cart">
					<input type="buttom" value="加入购物车" class="add">
					<input type="buttom" value="立即购买" class="buy">
				</div>
			</div>
		</div>
        `;
        $(".content").html(str);
        $(".add").click(function () {
            $.get("http://jx.xuzhixiang.top/ap/api/add-product.php", {
                uid: 4690,
                pid: pData.pid,
                pnum:$(".number").val()
            }).then(res => {
              console.log(res);
              location.href=`http://localhost:8080/cart.html?id=${pData.pid}`
                
            })
        })
      
      // 加减
      $(".add-number").click(function () {
        $(".number").val(Number($(".number").val()) +1);
      })

      $(".reduce-number").click(function () {
        $(".number").val(Number($(".number").val()) -1);
        if ($(".number").val() <= 1) {
          $(".number").val("1")
        }
      })

    })
    })

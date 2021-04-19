$(function () {
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        id:4690
    }).then(res => {
        // console.log(res.data[0])
        let pData = res.data;
        var str = "";
        for (let i = 0; i < pData.length; i++){
            str += `
                <div class="list">
                    <input type="checkbox" class="ck">
                    <img src="${pData[i].pimg}" alt="">
                    <ul>
                        <li class="p-name"> ${pData[i].pname} <br> ${pData[i].pdesc}</li>
                        <li class="price">${pData[i].pprice}</li>
                        <li class="p-stock">
                            <span class="minus">-</span>
                            <input type="text" value="${pData[i].pnum}" class="number" uid="${pData[i].uid}" pid="${pData[i].pid}">
                            <span class="plus">+</span>
                        </li>
                        <li class="p-price"><i></i><em>${pData[i].pprice*pData[i].pnum}</em></li>
                        <li class="del">删除</li>
                    </ul>
                </div>
                    `;
        }
        $(".cartlist").html(str);


// 减
        $(".minus").click(function () {
            let number = $(this).siblings(".number").val();
            if (number <= 1) {
                $(this).siblings(".number").val(1);                
            } else {
                $(this).siblings(".number").val(--number)
            }

            let price = $(this).parents().siblings(".price").text();   
            $(this).parents().siblings(".p-price").text(price * number);
         
            let uid = $(this).siblings(".number").attr("uid");
            let pid = $(this).siblings(".number").attr("pid");

            $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                uid: uid,
                pid: pid,
                pnum:number
            }, res => {
                console.log(res);
                let count = 0;
            let sum = 0;
            for (let j = 0; j < aCk.length; j++) {
                if (aCk[j].checked) { 
                    count++;
                    sum += Number($(".ck").eq(j).siblings().find($(".p-price")).text());
                }
                $(".all-price").text(sum);
            };
      
            })

        })

// 加
        $(".plus").click(function () {
 
            let number = $(this).siblings(".number").val();
            $(this).prev().val(++number)
                      
            let price = $(this).parents().siblings(".price").text();
            $(this).parents().siblings(".p-price").text(price * number);
            
            let uid = $(this).siblings(".number").attr("uid");
            let pid = $(this).siblings(".number").attr("pid");

            $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php", {
                uid: uid,
                pid: pid,
                pnum: number
            }, res => {
                console.log(res);
                let count = 0;
            let sum = 0;
            for (let j = 0; j < aCk.length; j++) {
                if (aCk[j].checked) { 
                    count++;
                    sum += Number($(".ck").eq(j).siblings().find($(".p-price")).text());
                }
                $(".all-price").text(sum);
            };
      
            })
        });

// 改
        $(".number").change(function (){
            let number = $(this).val();

            let price = $(this).parents().siblings(".price").text();
            $(this).parents().siblings(".p-price").text(price * number);
            
            let uid = $(this).attr("uid");
            let pid = $(this).attr("pid");
            console.log(uid);
            $.get("http://jx.xuzhixiang.top/ap/api/cart-update-num.php",{
                uid: uid,
                pid: pid,
                pnum: number
            }, res => {
                console.log(res);
                let count = 0;
            let sum = 0;
            for (let j = 0; j < aCk.length; j++) {
                if (aCk[j].checked) { 
                    count++;
                    sum += Number($(".ck").eq(j).siblings().find($(".p-price")).text());
                }
                $(".all-price").text(sum);
            };
      
            })
        })

//    删
        $(".del").click(function () {
         
            let uid = $(this).siblings().find(".number").attr("uid");
            let pid = $(this).siblings().find(".number").attr("pid");
            $(this).parent().parent().remove();

            $.get("http://jx.xuzhixiang.top/ap/api/cart-delete.php", {
                uid:uid,
                pid:pid
            }, res =>{
                console.log(res)

                let count = 0;
            let sum = 0;
            for (let j = 0; j < aCk.length; j++) {
                if (aCk[j].checked) { 
                    count++;
                    sum += Number($(".ck").eq(j).siblings().find($(".p-price")).text());
                }
                $(".all-price").text(sum);
            };
      
            })
        })
        
        let oCheckAll = document.querySelectorAll(".checkAll");
        let aCk = document.querySelectorAll(".ck");
        let aList = document.querySelectorAll(".list");


        for (let i = 0; i < oCheckAll.length;i++){
        oCheckAll[i].onclick = () => {
            oCheckAll[0].checked = oCheckAll[i].checked;
            oCheckAll[1].checked = oCheckAll[i].checked;

            for (let j = 0; j < aCk.length; j++) {
               aCk[j].checked = oCheckAll[i].checked;
            }
            let count = 0;
            let sum = 0;
            for (let j = 0; j < aCk.length; j++) {
                if (aCk[j].checked) { 
                    count++;
                    sum += Number($(".ck").eq(j).siblings().find($(".p-price")).text());
                }
                $(".all-price").text(sum);
            };
      
            
        }
        }
          
        for (let i = 0; i < aList.length; i++) {
           aCk[i].onclick = () => {
               let count = 0;
               let sum = 0;
                for (let j = 0; j < aCk.length; j++) {
                    if (aCk[j].checked) { 
                        count++;
                        sum += Number($(".ck").eq(j).siblings().find($(".p-price")).text());
                    }
                     $(".all-price").text(sum);
                };
             
                if (count === aCk.length) { 
                    oCheckAll[0].checked = true;
                    oCheckAll[1].checked = true;
                } else {
                    oCheckAll[0].checked = false;
                    oCheckAll[1].checked = false;

                }
    
            }
        }


    })

})
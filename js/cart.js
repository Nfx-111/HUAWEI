$(function () {
    $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", {
        id:4690
    }).then(res => {
        console.log(res)
    })
})
$(function(){
    // 头尾
    $('#header').load('../html/header.html');
    $('#footer').load('../html/footer.html')
  
    // 选项卡
    $('.payment-tab-0').click(function(){
        $('.pay-list').eq(0).show()
        $('.pay-list').eq(1).hide()
    })
    $('.payment-tab-1').click(function(){
        $('.pay-list').eq(1).show()
        $('.pay-list').eq(0).hide()

    })

// 支付
$('.pay-dropdown').hover(function(){
    $('.pay-dropdown-menu').show();
},function(){
    $('.pay-dropdown-menu').hide()
})
$('.pay-collapse-arrow').click(function(){
    $(this).parent().parent().toggleClass('pay-collapse-open').siblings().removeClass("pay-collapse-open"); 
})


// 倒计时
var date=new Date()
console.log(date)
console.log(date.getDate())
var xin=date.setDate(date.getDate()+1);
console.log(xin)
console.log(xin-date.getDate())




function formatSeconds(value) {
    var secondTime = parseInt(value);// 秒
    var minuteTime = 0;// 分
    var hourTime = 0;// 小时
    if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60);
        //获取秒数，秒数取佘，得到整数秒数
        secondTime = parseInt(secondTime % 60);
        //如果分钟大于60，将分钟转换成小时
        if (minuteTime > 60) {
            //获取小时，获取分钟除以60，得到整数小时
            hourTime = parseInt(minuteTime / 60);
            //获取小时后取佘的分，获取分钟除以60取佘的分
            minuteTime = parseInt(minuteTime % 60);
        }
    }
    //  var result = "" + parseInt(secondTime) + "秒";
    if (parseInt(secondTime) < 10) {
        result = "0" + parseInt(secondTime);
    } else {
        result = ":" + parseInt(secondTime);
    }
    if (minuteTime > 0) {
        if (minuteTime < 10) {
            result = "0" + parseInt(minuteTime) + result;
        } else {
            result = ":" + parseInt(minuteTime) + result;
        }
    } else {
        result = "00:" + result;
    }
    if (hourTime > 0) {
        result = "" + parseInt(hourTime) + result;
    }
    // curr_time.innerText = result;
    // console.log(result)
    return result;
}
formatSeconds(86400)
// console.log(result)
//24小时内支付
var time=86400;

setInterval(function(){
    time-=1;
    // console.log(result)
    // console.log(formatSeconds(time))
    formatSeconds(time)
    $('.chaoshi-time').html(formatSeconds(time))
},1000)



// 获取数据
var name=getCookie('a');
var name1=getCookie('b');
var name2=getCookie('d');
$('.xm').html(name+name1)
$('.amount-price').html(name2)
// console.log(name2)
// 返回修改订单
$('.pay-back').click(function(){
    window.location="../html/jiagou.html"
})

// 点击确认订单
 
$('.btn').click(function(){
    if($(".weixin").attr("checked") == "checked" ||$(".zfb").attr("checked") == "checked"){
        // alert(1)
        var flag = confirm('确定要支付'+name2);
        
        if(flag==true){
            // if()
      
            alert(12)
        }else{
            alert(13)
        }
    }
    
})











})


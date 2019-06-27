$(function(){
    // ------------支付方式的选项卡---------
    $('.pay-menu li').eq(0).click(function(){
        $('.pay-list').eq(0).show();
        $('.pay-list').eq(1).hide()
    })
    $('.pay-menu li').eq(1).click(function(){
        $('.pay-list').eq(1).show();
        $('.pay-list').eq(0).hide();
    })



    // ----------支付帮助------------
    $('.pay-dropdown').hover(function(){
        $('.pay-dropdown-menu').show();
    },function(){
        $('.pay-dropdown-menu').hide()
    })
    $('.pay-collapse-arrow').click(function(){
        $(this).parent().parent().toggleClass('pay-collapse-open').siblings().removeClass("pay-collapse-open"); 
    })
    


    // ---------------提交订单----------------
    $('.btn').click(function(){
        $('.modal').css("display","block")
    })
    $('#close').click(function(){
        $('.modal').css("display","none")
    })


    // ------------倒计时----------
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
            result = ":0" + parseInt(secondTime);
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
    },100)


    var xiangmu=getCookie('Type');
    $('.xiangmu-name').html("项目 : "+xiangmu)

    var zuizhongjia=getCookie("zuizhong")
    $('.amount-price').html(zuizhongjia)
    
})
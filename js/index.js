$(function () {
    // 点击
    $('.dongtai').click(function () {
        $('.dongtai').hide()
        $('.dt').show()
        $('.tihuan').toggle()
        $('.show').toggle()
        $('.dt').click(function () {
            $('.dt').hide()
            $('.dongtai').show()
            $('.tihuan').toggle()
            $('.show').toggle()
        })
    })


    //验证是否为空

    $('.denglu').click(function () {
        if ($('.phone-input').val() == '' && $('.pass-input').val() == '') {
            $('.tishi').show().html('<i></i> 请输入手机号和密码')
        }
        if ($('.pass-input').val() == '' && $('.phone-input').val() != '') {
            $('.tishi').show().html('<i></i> 请输入密码')
        }
        if ($('.pass-input').val() != '' && $('.phone-input').val() == '') {
            $('.tishi').show().html('<i></i> 请输入手机号')
        }

    })


    var ind=getCookie('index')
    var indd=ind-0
    console.log(typeof indd)  //2
    var arr1=[];
    for(let j=1;j<indd+1;j++){
        var phone1=getCookie('phone'+j)
        var xin=arr1.push(phone1) 
    }



    // 手机号验证
    var re = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    $('.phone-input').focus(function () {
        $('.phone').eq(1).css('border-color', '#2db3a6')
    })
    $('.phone-input').blur(function () {
        $('.phone').eq(1).css('border-color', '#aaa')
        if (re.test($('.phone-input').val())) {


            var result = $.inArray($('.phone-input').val(), arr1); 
            console.log(result) 
           if(result==-1){
            $('.tishi').show().html('<i></i> 请注册账号')
            
           }else{
            $('.tishi').hide()
           }




          
            
        } else {
            $('.tishi').show().html('<i></i> 手机号格式输入错误')

        }
    })


    // 密码验证
    var pattern = /^[\w_-]{6,16}$/;
    /* 最短6位，最长16位 {6,16}
    可以包含小写大母 [a-z] 和大写字母 [A-Z]
    可以包含数字 [0-9]
    可以包含下划线 [ _ ] 和减号 [ - ] */
    $('.pass-input').focus(function () {
        $('.phone').eq(2).css('border-color', '#2db3a6')
    })

    $('.pass-input').blur(function () {
        $('.phone').eq(2).css('border-color', '#aaa')
        if (pattern.test($(this).val())) {
            $('.tishi').hide()
        } else {
            if ($('.pass-input').val() == '') {
            } else {
                $('.tishi').show().html('<i></i> 密码格式输入错误')
            }
        }
    })

//  获取随机数
    function suiji() {
        var num = "";
        for (var i = 0; i < 6; i++) {
            num += parseInt(Math.random() * 10);
        }
        return num;
    }
    var Num = suiji();


    // 获取动态码
    var shu = 60;
    $('.huoqu').click(function () {
        if ($('.phone-input').val() != '' && $('.tishi').css('display') == 'none') {
            console.log(1)
            function jishu() {
                shu--
                if (shu > 0) {
                    $('.huoqu').text('重新获取' + shu)
                   
                    // $('.huoqu').addclass('disabled')      
                } else {
                    clearInterval(timer)
                    $('.huoqu').text('重新获取')
                }
            }
            var timer = setInterval(jishu, 1000)    
            alert(Num)
        }
    })

console.log($('.dw').find('input'))   




  
// 获取cookie

var arr2=[];
for(let j=1;j<indd+1;j++){
    var pass1=getCookie('pass'+j)
    var xin=arr2.push(pass1) 
}

$('.denglu').click(function () {
    var result1 = $.inArray($('.phone-input').val(), arr1); 
    var result2 = $.inArray($('.pass-input').val(), arr2); 
    
    console.log(result2==result1)
    if($('.phone-input').val() != '' && $('.pass-input').val() != ''){
        if (result2==result1 ){
            window.open('../html/zhuye.html')
  
       } else{
        $('.tishi').show().html('<i></i> 密码输入错误')
       }
     
    }

    console.log($('.dw').find('input').val())
    if($('.phone-input').val() != ''&& $('.dw').find('input').val()==Num){
        $('.tishi').hide()
         window.open('../html/zhuye.html')
        
    }else{
        $('.tishi').show().html('<i></i> 验证码输入错误')
    }
   
    
   
})



//  注册跳转
 $('.zcy').click(function(){
    window.location="../html/zc.html"
})



























})








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


    // 手机号验证
    var re = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    $('.phone-input').focus(function () {
        $('.phone').eq(1).css('border-color', '#2db3a6')
    })
    $('.phone-input').blur(function () {
        $('.phone').eq(1).css('border-color', '#aaa')
        if (re.test($('.phone-input').val())) {
            $('.tishi').hide()
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


    console.log($('.tishi').css('display'))
    $('.denglu').click(function () {
        console.log($('.tishi').css('display'))
        if ($('.phone-input').val() != '' && $('.pass-input').val() != '') {
            if ($('.tishi').css('display') == 'none') {
                // alert(1)
                $('.tishi').show().html('<i></i> 检测到您的账号存在风险，需要验证')
            } else {
                // alert(2)
            }
            // window.open('http://bj.meituan.com/')
        }

    })


    var shu = 60
   
  
        $('.huoqu').click(function () {
           
            if ($('.phone-input').val()!= ''&& $('.tishi').css('display') == 'none') {
                console.log(1)
            function jishu() {
                shu--
                if (shu > 0) {
                    $('.huoqu').text('重新获取' + shu)
                } else {
                    clearInterval(timer)
                    $('.huoqu').text('重新获取')
                }
            }
            var timer = setInterval(jishu, 1000)
        }
        })


























    // 设置cookie
    /*    var $index = 0;
       $('.denglu').click(function () {
           console.log($('.tishi').attr('display'))
   
           if ($('.phone-input').val() != '' && $('.pass-input').val() != '') {
               $index++
               setCookie('phone' + $index, $('.phone-input').val(), 1)
               window.open('http://bj.meituan.com/')
           }
   
       }) */
    // 移出
    // removeCookie()
    // setCookie('phone1',$('.phone-input').val(),-1)


    // 动态码
    var reg = /^[a-zA-Z0-9]{3,5}$/;

























})








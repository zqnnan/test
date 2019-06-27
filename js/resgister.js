$(function(){
    // -------------------------获取焦点-----------------------
    var iphoneReg= /^1[3458]\d{9}$/;
    //手机号
    $('.J-mobile').focus(function(){
        $(this).css("border-color","#2bb8aa");
    }).blur(function(){
        var iphoneValue=$(this).val();
       if($('.J-mobile').eq(0).val()==''){
            $(this).css("border-color","red");
            $('.unitive-tip').css('display','none')
            $('.inline-tip').eq(0).css('visibility','visible')
            $('.inline-tip').eq(0).html('<i></i>请输入您的手机号码')
       }else if(!(iphoneReg.exec(iphoneValue))){
            $(this).css("border-color","red");
            $('.unitive-tip').css('display','none')
            $('.inline-tip').eq(0).css('visibility','visible')
            $('.inline-tip').eq(0).html('<i></i>请输入正确的11位手机号码')
       }else{
           if(!(getCookie($(this).val())=='')){
            $(this).css("border-color","red");
            $('.unitive-tip').css('display','none')
            $('.inline-tip').eq(0).css('visibility','visible')
            $('.inline-tip').eq(0).html('<i></i>您的手机号已注册过，请直接登录')
           }else{
            $(this).css("border-color","#aaa");
            $('.unitive-tip').css('display','none')
            $('.inline-tip').eq(0).css('visibility','visible')
            $('.inline-tip').eq(0).html('<i class="success"></i>')
           }
       }
    })

     //动态码随机数
     function huou(){
        var num="";
        for(var i=0;i<6;i++){
            num += Math.floor(Math.random()*10);
        }
        return num;
    }
    var Num=huou();
    
    //获取动态码
    function key(){
        // console.log(Num)
        $('.btn-normal').click(function(){
            // console.log(Num)
            $('.J-mobile').blur(function(){
                var iphoneReg= /^1[3458]\d{9}$/;
                    var iphoneValue=$(this).val();
                if($('.J-mobile').eq(0).val()==''){
                        $(this).css("border-color","red");
                        $('.unitive-tip').css('display','none')
                        $('.inline-tip').eq(0).css('visibility','visible')
                        $('.inline-tip').eq(0).html('<i></i>请输入您的手机号码')
                }else if(!(iphoneReg.exec(iphoneValue))){
                        $(this).css("border-color","red");
                        $('.unitive-tip').css('display','none')
                        $('.inline-tip').eq(0).css('visibility','visible')
                        $('.inline-tip').eq(0).html('<i></i>请输入正确的11位手机号码')
                }else{
                        $(this).css("border-color","#aaa");
                        $('.unitive-tip').css('display','none')
                        $('.inline-tip').eq(0).css('visibility','visible')
                        $('.inline-tip').eq(0).html('<i class="success"></i>')
                        console.log(Num);
                        $('.btn-normal').val(Num);
                }
            })
        })
    }
    key()
    //短信验证码
    console.log($('.inline-tip').eq(1));
    $('.duanxin input').focus(function(){
        $(this).css("border-color","#2bb8aa");
    }).blur(function(){
        console.log($('.btn-normal').val());
        var dtReg=/^\d{6}$/
        var dtValue=$(this).val();
       if($('.duanxin input').eq(0).val()==''){
            $(this).css("border-color","red");
            $('.inline-tip').eq(2).css('visibility','visible')
            $('.inline-tip').eq(2).html('<i></i>请输入短信动态码')
       }else if(($('.duanxin input').eq(0).val())!==($('.btn-normal').val())){
            $(this).css("border-color","red");
            $('.inline-tip').eq(2).css('visibility','visible')
            $('.inline-tip').eq(2).html('<i></i>输入错误，请重新输入')
       }else{
            $(this).css("border-color","#aaa");
            $('.inline-tip').eq(2).css('visibility','visible')
            $('.inline-tip').eq(2).html('<i class="success"></i>')
       }
    })
    //创建密码
    var pwReg0=/^\w{1,6}$/;
    var pwReg1=/^[0-9]+$|^[a-zA-Z]+$/;
    var pwReg2=/^[A-Za-z0-9]+$/;
    var pwReg3=/^\w+$/;
    var pwReg4=/^\w{6,}$/
    $('.pw input').focus(function(){
        $(this).css("border-color","#2bb8aa");
    }).bind('input',function(){
        var pwValue=$(this).val();
        if(pwReg0.exec(pwValue)||pwReg1.exec(pwValue)){
            $('.pw-strength-bar').addClass('weak').removeClass('normal strong');
        }else if(pwReg2.exec(pwValue)){
            $('.pw-strength-bar').addClass('normal').removeClass('weak strong');
        }else if(pwReg3.exec(pwValue)){
            $('.pw-strength-bar').addClass('strong').removeClass('weak normal');
        }
    }).blur(function(){
        if($('.pw input').eq(0).val()==''){
            $(this).css("border-color","red");
            $('.inline-tip').eq(3).css('visibility','visible')
            $('.inline-tip').eq(3).html('<i></i>请填写密码')
        }else if(!(pwReg4.exec($('.pw input').eq(0).val()))){
            $(this).css("border-color","red");
            $('.inline-tip').eq(3).css('visibility','visible')
            $('.inline-tip').eq(3).html('<i></i>密码太短至少6个字符')
        }else{
            $(this).css("border-color","#aaa");
            $('.inline-tip').eq(3).css('visibility','visible')
            $('.inline-tip').eq(3).html('<i class="success"></i>')
        }
    })
    //确认密码
    $('.pw2 input').focus(function(){
        $(this).css("border-color","#2bb8aa");
    }).blur(function(){
        if($('.pw2 input').eq(0).val()==''){
            $(this).css("border-color","red");
            $('.inline-tip').eq(4).css('visibility','visible')
            $('.inline-tip').eq(4).html('<i></i>请再次输入密码')
        }else if(($('.pw input').eq(0).val())!==($('.pw2 input').eq(0).val())){
            $(this).css("border-color","red");
            $('.inline-tip').eq(4).css('visibility','visible')
            $('.inline-tip').eq(4).html('<i></i>两次输入的密码不一致，请重新输入')
        }else{
            $(this).css("border-color","#aaa");
            $('.inline-tip').eq(4).css('visibility','visible')
            $('.inline-tip').eq(4).html('<i class="success"></i>')
        }
    })

    console.log(document.cookie)
    var index=0;
    //注册
   $('.tongyi').click(function(){
        if(
            (iphoneReg.exec($('.J-mobile').eq(0).val()))&&
            ($('.duanxin input').eq(0).val())==($('.btn-normal').val())&&
            (pwReg4.exec($('.pw input').eq(0).val()))&&
            ($('.pw input').eq(0).val())==($('.pw2 input').eq(0).val())
        ){
            console.log($('.J-mobile').eq(0).val());
            console.log($('.pw input').eq(0).val());
            setCookie($('.J-mobile').eq(0).val(),$('.pw input').eq(0).val(),15);
            location.href='login.html';
        }
   })
   console.log(document.cookie)

})
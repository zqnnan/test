$(function () {

var ind=getCookie('index')
var indd=ind-0
console.log(typeof indd)  //2
var arr1=[];
for(let j=1;j<indd+1;j++){
    var phone1=getCookie('phone'+j)
    var xin=arr1.push(phone1) 
}
console.log(arr1)  //


// $('.inpp').eq(1).val().
// var result = $.inArray($('.inpp').eq(0).val(), arr); //返回index为2
// console.log(result)  //输出所在下标

    // 手机号验证
    var re = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    $('.inpp').eq(0).focus(function () {
        $(this).css('border-color', '#2db3a6')
        $('.zccg').hide()

    })
    $('.inpp').eq(0).blur(function () {
        $(this).css('border-color', '#aaa')


        if (re.test($('.inpp').eq(0).val())) {
            var result = $.inArray($('.inpp').eq(0).val(), arr1); 
            console.log(result) 
           if(result!=-1){
            alert('账号已注册')
           }else{
            $('.lanse').eq(0).attr('id','lanse')
            $('.shuom').eq(0).hide()
           }
                           
        } else {
            $('.lanse').eq(0).attr('id','huanse')
            $('.shuom').eq(0).show()

        }
    })



    // 短信状态码验证

    //动态码随机数
    function suiji() {
        var num = "";
        for (var i = 0; i < 6; i++) {
            num += parseInt(Math.random() * 10);
        }
        return num;
    }
    var Num = suiji();

    // 获取随机数

    $('.btn1').click(function () {
        if ($('.lanse').eq(0).attr('id') == "lanse") {
            console.log(1)
            alert(Num)
            return Num;
        }
    })

    var jieshou = Num;

    // 密码验证

    $('.inpp').eq(1).focus(function () {
        $('.inpp').eq(1).css('border-color', '#2db3a6')
    })
    $('.inpp').eq(1).blur(function () {
        $('.inpp').eq(1).css('border-color', '#aaa')
        if ($('.inpp').eq(1).val() == jieshou) {
            $('.lanse').eq(1).attr('id', 'lanse')
            $('.shuom').eq(1).hide()
        } else {
            $('.lanse').eq(1).attr('id', 'huanse')
            $('.shuom').eq(1).show()
        }
    })


    // 输入密码
    var patternn = /^[\w_-]{6,16}$/;
    /* 最短6位，最长16位 {6,16}
    可以包含小写大母 [a-z] 和大写字母 [A-Z]
    可以包含数字 [0-9]
    可以包含下划线 [ _ ] 和减号 [ - ] */
    $('.inpp').eq(2).focus(function () {
        $('.inpp').eq(2).css('border-color', '#2db3a6')
        console.log($($('.inpp').eq(2)))
        $($('.inpp').eq(2)).bind('input', function () {
            if ($('.inpp').eq(2).val().length > 1) {
                $('.move').eq(0).attr('id', 'active')
            } if ($('.inpp').eq(2).val().length > 5) {
                $('.move').eq(1).attr('id', 'active')
            } if ($('.inpp').eq(2).val().length > 8) {
                $('.move').eq(2).attr('id', 'active')
            }
        })
    })

    $('.inpp').eq(2).blur(function () {
        $('.inpp').eq(2).css('border-color', '#aaa')
        if (patternn.test($('.inpp').eq(2).val())) {
            $('.lanse').eq(2).attr('id', 'lanse')
            $('.shuom').eq(2).hide()
        } else {
            $('.lanse').eq(2).attr('id', 'huanse')
            $('.shuom').eq(2).show()
        }
    })



    // 确认密码
    $('.inpp').eq(3).focus(function () {
        $(this).css('border-color', '#2db3a6')
        $('.zccg').hide()
        console.log(0)
    })
    $('.inpp').eq(3).blur(function () {
        $(this).css('border-color', '#aaa')

        if ($('.inpp').eq(3).val() == $('.inpp').eq(2).val() && $('.inpp').eq(2).val() != "") {

            $('.lanse').eq(3).attr('id', 'lanse')
            $('.shuom').eq(3).hide()
        } else {
            $('.lanse').eq(3).attr('id', 'huanse')
            $('.shuom').eq(3).show()
        }
    })



 
    // 注册
    // 设置cookie
    $('.btn2').click(function () {

        if ($('.lanse').eq(0).attr('id') == "lanse" && $('.lanse').eq(1).attr('id') == "lanse" && $('.lanse').eq(2).attr('id') == "lanse" && $('.lanse').eq(3).attr('id') == "lanse") {
            if(getCookie('index')==''){
                setCookie('index',0,1)
 
            }
                var bain=getCookie('index')
                bain ++
                setCookie('index',bain,1)
                setCookie('phone'+ bain, $('.inpp').eq(0).val(), 1)
                setCookie('zh'+ bain, $('.inpp').eq(0).val(), 1)
                setCookie('pass'+ bain, $('.inpp').eq(3).val(), 1)
            
                window.location = "../html/index.html"
        }
       
    })





    // 移出
    // removeCookie()
    // setCookie('phone12',$('.phone-input').val(),-1)

    $('.dl').click(function () {
        window.location = "../html/index.html"
    })










})
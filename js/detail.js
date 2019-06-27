
$(function () {
    $('.header').load('../html/header.html')
    $('.footer').load('../html/footer.html')

    // 获取地址拼接
    function getUrlParams(name) {
        var re = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var r = window.location.search.substr(1).match(re);
        if (r == null) {
            return;
        } else {
            return r[2];
        }
    }
    var name = getUrlParams('new')
    console.log(name)

    var data = myobj[name]
    console.log(data)
    $('#span1').html(data.header_span1);
    $('#span2').html(data.header_span2)
    $('#span3').html(data.header_span3)
    $('.name').html(data.name)
    $('.dz').html(data.dizhi)
    $('.dh').html(data.dianhua)
    $('.time').html(data.time)
    $('.big').attr('src', data.imgbig)
    $('.sin1').attr('src', data.imgsmall2)
    $('.sin2').attr('src', data.imgsmalll)
    $('.sin3').attr('src', data.imgsmall2)
    $('.sin4').attr('src', data.imgsmalll)



    function huoqu() {
        //    请求数据
        var result = myobj[name]
        var list = result.list_arr
        console.log(list)

        if (!list || !list.length) {//=====>进行异常处理
            //不存在的话
            $('#shop_left').html('您请求的数据不存在');
        } else {
            for (var i = 0; i < list.length; i++) {
                var modo = $('#html').html()
                modo = modo.replace('$list_name$', list[i].list_name)
                modo = modo.replace("http://p0.meituan.net/208.126/deal/029a1fa62438c4464aa855cf09fcb1ad118715.jpg@100w_100h_1e_1c", list[i].list_pic)
                modo = modo.replace('$list_qianggou$', list[i].list_qianggou)
                modo = modo.replace('$list_xiaoliang', list[i].list_xiaoliang)
                modo = modo.replace('$list_jiagefuhao$', list[i].$list_jiagefuhao$)
                modo = modo.replace('$list_jiagenum$', list[i].list_jiagenum)
                modo = modo.replace('$list_mendianjiage$', list[i].list_mendianjiage)
                modo = modo.replace('http://p1.meituan.net/codeman/31eac2c905f5be14ce80654d9508e720832.png', list[i].list_xtb)
                $("#shop_left").append(modo)
            }
        }
    }
    huoqu()

$('.buy').click(function(){
    window.location="../html/jiagou.html"
   setCookie('b',$(this).next().children('span').text())
   setCookie('c',$(this).siblings().eq(2).find('i').html())

})



















})
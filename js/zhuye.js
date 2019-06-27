$(function () {
    // 引入头部
    $('#header').load('../html/header.html');
    $('#footer').load('../html/footer.html')

    $('.nav-li').hover(function () {
        $('.detail-wrapper').addClass('active')
        var index = $(this).index();
        $(this).parent().parent().siblings().children().eq(index + 1).addClass('active').siblings().removeClass("active");
    }, function () {
        $('.detail-wrapper').removeClass('active')
    })

    //主页
    function tab(nav_item, content) {
        $(nav_item).hover(function () {
            // console.log($(this))
            $(this).addClass('active').siblings().removeClass('active');
            // console.log($(content).eq($(this).index()))
            $(content).eq($(this).index() - 1).show().siblings(content).hide()
        })
    }
    tab('.quality-container .nav-item', '.quality-container .quality-content')
    tab('.offer-container .nav-item', '.offer-container .offer-content')
    tab('.maoyan-container .nav-item', '.maoyan-container .scenes-content')
    tab('.zhenguo-container .nav-item', '.zhenguo-container .zhenguo-content')


    function gediaodata(box, result, mb) {

        var list = result.list;
        if (!list || !list.length) {//=====>进行异常处理
            //不存在的话
            $(box).html('您请求的数据不存在');
        } else {
            //存在数据
            //1、获取模板
            for (var i = 0; i < list.length; i++) {
                var repla = $(mb).html();
                //进行替换
                repla = repla.replace('articleId', list[i].sysId);
                repla = repla.replace("img/indeximg/gediao1.jpg", list[i].coverImg);
                repla = repla.replace('$title$', list[i].title);
                repla = repla.replace('$creatAt$', list[i].creatAt);
                repla = repla.replace('$describe$', list[i].describe);
                repla = repla.replace('$subtitle$', list[i].subtitle);
                repla = repla.replace('$createNum$', list[i].createNum);
                repla = repla.replace('$creatByFullName$', list[i].creatByFullName);
                //添加到页面中 
                $(box).append(repla)
            }
        }
    }
    // 格调
    var result = gediaoData.gediaoData01.data;
    gediaodata('#quality', result, '#people2')
    var result1 = gediaoData.gediaoData00.data;
    gediaodata('#quality1', result1, '#people2')
    var result2 = gediaoData.gediaoData02.data;
    gediaodata('#quality2', result2, '#people2')
    var result3 = gediaoData.gediaoData03.data;
    gediaodata('#quality3', result3, '#people2')
    var result4 = gediaoData.gediaoData04.data;
    gediaodata('#quality4', result4, '#people2')

    // 很优惠

    var re = eatData.eatData02.data;
    gediaodata('#offer', re, '#people3')
    var re1 = eatData.eatData01.data;
    gediaodata('#offer1', re1, '#people3')
    var re3 = eatData.eatData00.data;
    gediaodata('#offer2', re3, '#people3')

// 猫眼电影

function shuju(result, slide) {
    var list = result.list;
    if (!list || !list.length) {//=====>进行异常处理
        //不存在的话
        $(slide).html('您请求的数据不存在');
    } else {
        //存在数据
        //1、获取模板
        for (var i = 0; i < list.length; i++) {
            var repla = $('#people').html();
            //进行替换
            repla = repla.replace('articleId', list[i].sysId)
            repla = repla.replace('img/indeximg/movie01.jpg', list[i].coverImg)
            repla = repla.replace('$观众评$', list[i].creatAt)
            repla = repla.replace('$9.5$', list[i].creatByFullName)
            repla = repla.replace('$少年的你$', list[i].title)
            repla = repla.replace('$购票$', list[i].describe)
            //添加到页面中 
            $(slide).append(repla)
        }
    }
}
var result = movieData.movieData00.data;
var result1 = movieData.movieData01.data;
var slide = '#slide1';
var slide1 = '#slide2';
var slide3 = '#slide3';
var slide4 = '#slide4';
shuju(result, slide)
shuju(result1, slide1)
shuju(result, slide3)
shuju(result1, slide4)
// 名宿
function minsudata(){
    var result = minsuData.minsuData00.data;
    var list = result.list;
    if (!list || !list.length) {//=====>进行异常处理
        //不存在的话
        $('#zhenguo-content1').html('您请求的数据不存在');
    } else {
        //存在数据
        //1、获取模板
        for (var i = 0; i < list.length; i++) {
            var repla = $('#people1').html();
            //进行替换
            repla = repla.replace('articleId', list[i].sysId)
            repla = repla.replace('img/indeximg/minsubig01.jpg', list[i].coverImg)
            repla = repla.replace('img/indeximg/minsusmall01.jpg', list[i].Img)
            repla = repla.replace('$空中花园南京路步行街店（粉色格子大床房）$', list[i].creatAt)
            repla = repla.replace('$整套$', list[i].sub_title1)
            repla = repla.replace('$可住$', list[i].sub_title2)
            repla = repla.replace('$￥$', list[i].price_icon)
            repla = repla.replace('$228$', list[i].creatByFullName)
            repla = repla.replace('$人民广场/外滩$', list[i].sub_title3)
            //添加到页面中 
            $('#zhenguo-content1').append(repla)
        }
    }
}
minsudata()
function loadArticleList() {
    //请求数据
    var result = listData.listData00;
    var list = result.data.list;
    //判断数据存不存在
    if (!list || !list.length) {
        //不存在的话
        $('.love_bottom').html("请求数据不存在");
    } else {
        //存在数据
        //1 获取模板
        for (var i = 0; i < list.length; i++) {
            var htmlModel = $("#itemloveHtml").html();
            htmlModel = htmlModel.replace("$title$", list[i].title)
            htmlModel = htmlModel.replace("img/indeximg/e3f61992caf9efaf93750bfc7fd88b7e33151.jpg@214w_120h_1e_1c", list[i].img)
            htmlModel = htmlModel.replace("width: 84px", 'width: '+list[i].star+'px')
            htmlModel = htmlModel.replace("$pingjia$", list[i].pingjia)
            htmlModel = htmlModel.replace("$地址$", list[i].dizhi)
            htmlModel = htmlModel.replace("$jiage$", list[i].jiage)
            //进行替换
            // 添加到页面中 Dom append
            $(".love_bottom").append(htmlModel)

        }
    }
}
loadArticleList()


// 点击跳转

$('.quality-content').delegate('.quality-card','click',function(){
    setCookie('a',$(this).find('.con2-title').text())
    var idd=$(this).attr('articleid')
    console.log(idd)
    window.open('../html/detail.html?new=myobj0'+idd)
})


console.log($('.deng').html())















})






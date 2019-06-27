$(function(){

$('#header').load('../html/header.html')
$('#footer').load('../html/footer.html')


console.log()
var name=getCookie('a');
var name1=getCookie('b');
var name2=getCookie('c');
$('.name').html(name+' : '+name1)
$('.jiage').html(name2)
$('.jiage1').html(name2)


if($('.input').val()==1){
var i=1;
    $('.plus-btn').click(function(){
        // console.log($('.input').val())
        i++;
        // console.log(i)
        $('.input').val(i);
         $('.jiage1').html($('.input').val()*name2)
        $('.zong').html( $('.jiage1').html())
    })

}

$('.minus-btn').click(function(){
        if($('.input').val()>1){
        // console.log($('.input').val())
        i--;
        console.log(i)
       
        $('.input').val(i);
        $('.jiage1').html($('.input').val()*name2)
        $('.zong').html( $('.jiage1').html())
    }
})

$('.btn').click(function(){

    setCookie('d',$('.zong').html())  
    window.location="../html/zhifu.html"
})

var ide=getCookie("zh1")
if(ide!=''){
var jiami=ide.slice(3,7)
var xinxin=ide.replace(jiami,'****')
$('.haoma').html(xinxin)
}









})
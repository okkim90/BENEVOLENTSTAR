$(function(){
    $(window).on('load resize scroll',function(){
        if($(this).scrollTop() > 100){
            $('.header').addClass('on');
        }else{
            $('.header').removeClass('on');
        }
    });

    $('.btn_nav').on('click',function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.nav').removeClass('on');
        }else{
            $(this).addClass('on');
            $('.nav').addClass('on');
        }

    });



    setWinH()
    $(window).on('load resize',function(){
        setWinH();
    });


});

function setWinH(){
    let winH = $(window).height();
    $('.winH').height(winH);
}
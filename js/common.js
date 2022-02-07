$(function(){
    $(window).on('load resize scroll',function(){
        if($(this).scrollTop() > 100){
            $('.header').addClass('on');
        }else{
            $('.header').removeClass('on');
        }
    });

    $('.nav_btn').on('click',function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.gnb').removeClass('on');
        }else{
            $(this).addClass('on');
            $('.gnb').addClass('on');
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
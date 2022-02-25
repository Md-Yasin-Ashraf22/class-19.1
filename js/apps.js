$(function() {

    $(window).on('scroll', function() {

        var scrollTop= $(this).scrollTop();

        console.log(scrollTop)
        if(scrollTop > 500) {
            $('#back_to_top').fadeIn(500);
        }else{
            $('#back_to_top').fadeOut(500);
        }

    })

    $('#back_to_top').on('click', function() {
        $('html,body').animate({
            scrollTop:0
        }, 500) 
    })

    $(window).on('load', function () {
        $('#preloader').fadeOut(1000)
    })



})
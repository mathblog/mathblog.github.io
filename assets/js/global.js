
$(document).ready(function() {

    /* ----------------------------------------------------------- */
    /*  SCROLL TOP BUTTON
    /* ----------------------------------------------------------- */

    //Check to see if the window is top if not then display button

    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.js__scroll_to_top').fadeIn();
        } else {
            $('.js__scroll_to_top').fadeOut();
        }
    });

    //Click event to scroll to top

    $('.js__scroll_to_top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    /* ----------------------------------------------------------- */
    /*  FIXED TOP
    /* ----------------------------------------------------------- */
    $(window).scroll(function() {
        if ($(window).scrollTop() > 70) {
            $('.js__header-fixed').addClass('fixed-top');
        } else {
            $('.js__header-fixed').removeClass('fixed-top');
        }
    });

});

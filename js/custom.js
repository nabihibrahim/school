$(function () {
    
    //sticky navbar less padding
    $(window).scroll(function(){
      
        let position = $(this).scrollTop();
        
        if(position >= 100){
            $('.nav1').addClass('fixed-top');
        } else{
            $('.nav1').removeClass('fixed-top');
        }
        
    });
    
    // smooth scroll
    $(document).on('click', 'a[href^="#"]', function (event){
                event.preventDefault();

                $('body, html').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 20
                }, 1250);
            });
    
});

/*================================
            gallary
================================*/
$(function () {
    $("#gallary").magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

$(function () {
    //animate on scroll
    new WOW().init();
});

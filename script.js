$(document).ready(function() {
    //Create accordion
    $('.about__title').click(function(event) {
        if($('.about__block').hasClass('one')) {
            $('.about__title').not($(this)).removeClass('active');
            $('.about__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });

    $("#contacts-form").submit(function(event) {
          event.preventDefault();
    });
});
$(document).ready(function(){

    // Create a media condition that targets viewports at least 700px wide
    const mediaQuery = window.matchMedia('(min-width: 700px)')

    // Check if the media query is true
    //jQuery for desktop screen
    if (mediaQuery.matches) {
    // Then trigger following function
        $('.active-footer').addClass('hide');

        $('.share').click(function () {
            $(this).toggleClass('active')
            $(this).find('img').toggleClass('filter')
            $(this).parents().find('.active-footer').toggleClass('hide'); 
        });

    }
    //jQuery for mobile screen
    else {
        $('.active-footer').addClass('hide');

        $('.share').click(function () {
            $(this).toggleClass('active')
            $(this).find('img').toggleClass('filter')
            $(this).parents().find('.post-header').toggleClass('hide')
            $(this).parents().find('.active-footer').toggleClass('hide');
        });
    }
 });
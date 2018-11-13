/* Can't remember where I found the tutorial to learn this :( */

/* Added a slight offset to center the view on the correct poem when sliding to it */
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -100
    }, 500);
});


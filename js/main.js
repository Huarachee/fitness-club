$(function(){
    
    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img class="arrow-left" src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="arrow-right" src="images/arrow-right.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 3000
    });

});


// Arrow-up
let ArrowUp = $('.arrow-up');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        ArrowUp.addClass('arrow-pu__visible');
    } else {
        ArrowUp.removeClass('arrow-pu__visible');
    }
});


// WindowPopup
let reviewsBtn = document.querySelectorAll('.menu__link')[0],
    reviews = document.querySelector('.reviews'),
    bg = document.querySelector('.bg-img'),
    closeBtn = document.querySelector('.close'),
    photosBtn = document.querySelectorAll('.menu__link')[1],
    photos = document.querySelector('.photos'),
    closeBtnPhotos = document.querySelector('.close-photos'),
    overlayReviews = document.querySelector('.reviews'),
    overlayPhotos = document.querySelector('.photos');


// OpenReviews And CloseReviews
reviewsBtn.addEventListener('click', function() {
    reviews.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    reviews.style.display = 'none';
});

overlayReviews.addEventListener('click', function() {
    reviews.style.display = 'none';
});

// OpenPhotos and ClosePhotos
photosBtn.addEventListener('click', function() {
    photos.style.display = 'block';
});

closeBtnPhotos.addEventListener('click', function() {
    photos.style.display = 'none';
});

overlayPhotos.addEventListener('click', function() {
    photos.style.display = 'none';
});


// BurgerMenu
$('.menu-btn').click(function (e) {
    e.preventDefault();
    $('nav.header-menu').toggleClass('show');
});
// BurgerMenu Close
$('ul.menu__list li a').click(function(e) {
    e.preventDefault();
    $('nav.header-menu').toggleClass('show');
});


// SmoothScrolling
$('a.menu__link').click(function() {
    let elementClick = $(this).attr('href')
    let destination = $(elementClick).offset().top;
    jQuery('html:not(:animated),body:not(:animated)').animate({
        scrollTop: destination
    }, 800);
    return false;
});

// SmoothScrolling Arrow
$('a.arrow-down').click(function() {
    let elementClick = $(this).attr('href')
    let destination = $(elementClick).offset().top;
    jQuery('html:not(:animated),body:not(:animated)').animate({
        scrollTop: destination
    }, 800);
    return false;
});

// SmoothScrolling ArrowUp
$('a.arrow-up').click(function() {
    let elementClick = $(this).attr('href')
    let destination = $(elementClick).offset().top;
    jQuery('html:not(:animated),body:not(:animated)').animate({
        scrollTop: destination
    }, 800);
    return false;
});
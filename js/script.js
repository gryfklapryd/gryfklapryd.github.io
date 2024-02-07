$(".page-scroll").click(function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: $(elemenTujuan).offset().top - 50
    }, 2000, 'easeInOutExpo');

    e.preventDefault();
});

$(window).on('load', function () {
    $('.pLeft').addClass('pShow');
    $('.pRight').addClass('pShow');
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });

    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('show');
            }, 300 * (i + 1));
        });

        $('.still-counting h2').each(function (i) {
            setTimeout(function() {
                $('.still-counting h2').eq(i).animate({left:200, opacity:1}, 9000);
            }, 300 * (i + 1));
        });
    }
});
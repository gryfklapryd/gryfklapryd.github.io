$(".page-scroll").click(function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: $(elemenTujuan).offset().top - 50
    }, 2000, 'easeInOutExpo');

    e.preventDefault();
});
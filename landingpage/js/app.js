$(document).ready(function(){

    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());

    // Configure Slider
    $('.carousel').carousel({
        interval:6000,
        pause:'hover'
    });

    // Video PLay
    $(".video").click(function () {
        var themodal = $(this).data("bs-target"),
            videosrc = $(this).attr("data-video"),
            videosrcauto = videosrc + "?autoplay=1";

        $(themodal + ' iframe').attr('src', videosrcauto);
        $(themodal + ' button.btn-close').click(function () {
            $(themodal + ' iframe').attr('src', videosrc);
        });

        $(themodal).on('hidden.bs.modal', function (e) {
            $(themodal + ' iframe').attr('src', videosrc);
        });
    });




});


// Lightbox Init
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

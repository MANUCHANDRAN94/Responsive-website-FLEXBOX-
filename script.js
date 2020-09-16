$(function () {
    $(".toggle").on("click", function () {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
        } else {
            $(".item").addClass("active");
        }
    });

    $(".footer-toggle").on("click", function () {
        var id = $(this).attr('id');
        if ($(`.item${id}`).hasClass("active")) {
            $(`.item${id}`).removeClass("active");
        } else {
            $(`.item${id}`).addClass("active");
        }
    })

});
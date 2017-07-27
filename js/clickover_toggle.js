$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened ===  && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });
});
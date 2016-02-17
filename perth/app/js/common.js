window.onload = function () {
    var nav_icon = $(".header-wrap-top--icon-nav");
    var nav_icon_a = $(".header-wrap-top--icon-nav > i");
    var owerlay = $(".header-owerlay");
    nav_icon.on("click", function () {
        owerlay.toggle(".header-owerlay_active");
        nav_icon_a.toggle("fa fa-times");
    });
};

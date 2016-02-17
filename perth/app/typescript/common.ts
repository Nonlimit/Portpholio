window.onload = () => {
  let nav_icon = $(".header-wrap-top--icon-nav");
  let nav_icon_a = $(".header-wrap-top--icon-nav > i");
  let owerlay = $(".header-owerlay");
  nav_icon.on("click", () => {
    owerlay.toggle(".header-owerlay_active");
    nav_icon_a.toggle("fa fa-times");
  });
};

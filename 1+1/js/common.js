var btn_search   = document.querySelector(".footer-menu_search"),
    input_search = document.querySelector(".input-search"),
    section      = document.getElementsByTagName('section'),
    wrapper      = document.getElementsByClassName(("wrapper_sections")),
    indicator    = document.getElementsByClassName("section-indicator--link")

btn_search.addEventListener('click', () => {
  input_search.focus()
  input_search.style.width = '300px'
})

// Get numder of sections and set width to section-wrapper
switch (section.length) {
  case 1:
    wrapper[0].style.width = "100%"
    break;
  case 2:
    wrapper[0].style.width = "200%"
    break;
  case 3:
    wrapper[0].style.width = "300%"
    break;
  case 4:
    wrapper[0].style.width = "400%"
    break;
  case 5:
    wrapper[0].style.width = "500%"
    break;
  case 6:
    wrapper[0].style.width = "600%"
    break;
}

// Pagination sections
function activeInd(event) {
  var contains_active = document.getElementsByClassName("section-indicator--link_active")
  if (contains_active[0].classList.contains("section-indicator--link_active")) {
    contains_active[0].classList.remove("section-indicator--link_active")
  }
  event.currentTarget.classList.add("section-indicator--link_active")
}

for(var i = 0; i < indicator.length; i++) {
  indicator[i].addEventListener('click', activeInd)
}




// Very simple next back functions for menu

function back() {
  return window.history.back()
}

function next() {
  return window.history.forward()
}

$(window).ready(function () {
  const toggleBtn = $(".sidebar-toggler");
  const closeBtn = $(".close-btn");
  const sidebar = $(".sidebar");
  const navLink = $(".nav-link");

  navLink.click(function () {
    sidebar.removeClass("show-sidebar");
  });

  toggleBtn.click(function () {
    sidebar.toggleClass("show-sidebar");
  });

  closeBtn.click(function () {
    sidebar.removeClass("show-sidebar");
  });

  //Show and hide navbar when scrolling

  var previousScroll = 0;
  var navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > previousScroll) {
      navbar.style.top = "-200px";
    } else {
      navbar.style.top = "0";
    }
    previousScroll = scrollTop;
  });

  //AnimateJs



  //TRIGGERING ANIMATION WHEN SCROLLING

  // get the element to animate
  var element = document.querySelector(".skills");
  var elementHeight = element.clientHeight;

  // listen for scroll event and call animate function
  document.addEventListener("scroll", animate);

  // check if element is in view
  function inView() {
    // get window height
    var windowHeight = window.innerHeight + 150; //150px increase the viewport of element
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition =
      element.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
      return true;
    }

    return false;
  }

  // animate element when it is in view
  function animate() {
    // is element in view?
    if (inView()) {
      // element is in view, add class to elements
      var lines = document.querySelectorAll(".line");
      var linesArray = Array.from(lines);
      linesArray.forEach(function (line) {
        line.classList.add("animate");
      });
    }
  }



  //Copyright Year
  let year = new Date();

  let y = year.getFullYear();

  $(".year").html("@ " + y);



});

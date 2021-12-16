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




  //Copyright Year
  let year = new Date();

  let y = year.getFullYear();

  $(".year").html("@ " + y);



});

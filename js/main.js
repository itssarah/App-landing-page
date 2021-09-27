$(window).on("load", function () {
  /* preloader */
  $(".preloader").fadeOut("slow");
  $("#welcome-text").addClass("slide-in-left");
  $("#welcome-img").addClass("slide-in-right");
});

$(document).ready(function () {
  /* animate first elements */

  /* Navbar Shrink */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  /* video popup */
  const videoSrc = $("#player-1").attr("src");
  $(".video-play-btn, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player-1").attr("src", videoSrc);
      }
    }
  });

  /* features Carousel */
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /* guide Carousel */
  $(".screeshots-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
          },
    },
  });

  /* Page scrolling - scrollit */
  $.scrollIt({
    topOffset: -50,
  });

  /*Navbar Collapse*/
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  /* Toggle Theme */
  function toggleTheme() {
    if (localStorage.getItem("eyesee-theme") !== null) {
      if (localStorage.getItem("eyesee-theme") === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }

    updateIcon();
  }
  toggleTheme();
  $(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("eyesee-theme", "dark");
    } else {
      localStorage.setItem("eyesee-theme", "light");
    }
    updateIcon();
  });
  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    } else {
      $(".toggle-theme i").removeClass("fa-sun");
      $(".toggle-theme i").addClass("fa-moon");
    }
  }


  /* var setMinHeight = function(minheight = 0) {
    console.log('in');
    jQuery('.owl-carousel').each(function(i,e){
      var oldminheight = minheight;
      jQuery(e).find('.owl-item').each(function(i,e){
          console.log(jQuery(e).height());
        minheight = jQuery(e).height() > minheight ? jQuery(e).height() : minheight;    
      });
      jQuery(e).find('.owl-item').css("min-height",minheight + "px");
      minheight = oldminheight;
    });
  };
  

setMinHeight();
setInterval(setMinHeight(),1000); */

});

/* slide in bottom - features - guide - installation */

var scrollCb = function () {
  var tiles = $(".scroll-bottom");
  var $window = $(window);
  var b = $window.scrollTop() + $window.height();

  tiles.each(function (i) {
    var $this = $(this);
    var a = $this.offset().top + $this.height() / 3;

    if (a < b) {
      $this.addClass("slide-in-bottom");
    }
  });
};

$(scrollCb);

$(window).scroll(scrollCb);

/* slide in left - fun fact img - contact text */

var scrollLeft = function () {
  var tiles = $(".scroll-left");
  var $window = $(window);
  var b = $window.scrollTop() + $window.height();

  tiles.each(function (i) {
    var $this = $(this);
    var a = $this.offset().top + $this.height() / 3;

    if (a < b) {
      $this.addClass("slide-in-left");
    }
  });
};

$(scrollLeft);

$(window).scroll(scrollLeft);

/** slide in top - fun facts - contact form */

var scrollTop = function () {
  var tiles = $(".scroll-top");
  var $window = $(window);
  var b = $window.scrollTop() + $window.height();

  tiles.each(function (i) {
    var $this = $(this);
    var a = $this.offset().top + $this.height() / 3;

    if (a < b) {
      $this.addClass("slide-in-top");
    }
  });
};

$(scrollTop);

$(window).scroll(scrollTop);

/* how it works animation */

var scrollFlip = function () {
  var tiles = $(".scroll-flip");
  var $window = $(window);
  var b = $window.scrollTop() + $window.height();

  tiles.each(function (i) {
    var $this = $(this);
    var a = $this.offset().top + $this.height() / 4;

    if (a < b) {
      $this.addClass("swing");
    }
  });
};

$(scrollFlip);

$(window).scroll(scrollFlip);

/** Form submission */

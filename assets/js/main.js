$(document).ready(function() {

  // SLIDER
  $(document).ready(function() {
    var swiper = new Swiper(".swiper-container", {
      speed: 600,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  });

  // ANCHORS JQUERY
  function scrollToAnchor(aid) {
    var aTag = $("a[name='" + aid + "']");
    $("html,body").animate({ scrollTop: aTag.offset().top }, "slow");
  }
  $(".about-nav").click(function() {
    scrollToAnchor("about-page");
  });
  $(".works-nav").click(function() {
    scrollToAnchor("works-page");
  });
  $(".contact-nav").click(function() {
    scrollToAnchor("contact-page");
  });
  $("#see-more").click(function() {
    scrollToAnchor("about-page");
  });
  $("#logo-nav").click(function() {
    scrollToAnchor("landing-page");
  });
  $(".logo-projects").click(function() {
    scrollToAnchor("projects-page");
  });

  // ANIMSITION JS
  $(".animsition").animsition({
    inClass: "fade-in-left",
    outClass: "fade-out-left",
    inDuration: 1000,
    outDuration: 1000,
    linkElement: ".animsition-link",
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: "body", //animsition wrapper element
    loadingClass: "animsition-loading",
    loadingInner: "", // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function(url) {
      window.location.href = url;
    }
  });

  // DRAGGABLE
  $(".draggable").draggable({ revert: false });

  $(".draggable").mouseenter(function() {
    $(this).css("color", "rgb(241, 133, 203)");
    $(this).css("z-index", "1");
  });
  $(".draggable").mouseleave(function() {
    $(this)
      .css("color", "white")
      .delay(5000);en
  });

  
  // Waypoints menu color selection
  new Waypoint({
    element: document.getElementById('landing-page'),
    handler: function() {
      $(".about-nav").css("color", "");
      $(".works-nav").css("color", "");
      $(".contact-nav").css("color", "");
    },
    offset: "-25%"
  })

  new Waypoint({
    element: document.getElementById('about-page'),
    handler: function() {
      $(".about-nav").css("color", "#FA4CBA");
      $(".works-nav").css("color", "");
      $(".contact-nav").css("color", "");
    }
  })

  new Waypoint({
    element: document.getElementById('works-page'),
    handler: function() {
      $(".works-nav").css("color", "#429FE6");
      $(".about-nav").css("color", "");
      $(".contact-nav").css("color", "");
    },
  })

  new Waypoint({
    element: document.getElementById('contact-page'),
    handler: function() {
      $(".contact-nav").css("color", "#AB2FDB");
      $(".about-nav").css("color", "");
      $(".works-nav").css("color", "");
    },
    offset: 'bottom-in-view'
  })


  // WOW
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
    callback: function(box) {}
  });
  wow.init();

  // Menu movil Nav menu events
  $("#open-nav").click(function() {
    document.getElementById("mySidenav").style.width = "200px";
  });
  $("#close-nav").click(function() {
      document.getElementById("mySidenav").style.width = "0";
  });
});

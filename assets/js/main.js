$(document).ready(function() {
  // ANCHORS JQUERY
  function scrollToAnchor(aid) {
    var aTag = $("a[name='" + aid + "']");
    $("html,body").animate({ scrollTop: aTag.offset().top }, "slow");
  }
  $("#about-nav").click(function() {
    scrollToAnchor("about-page");
  });
  $("#works-nav").click(function() {
    scrollToAnchor("works-page");
  });
  $("#contact-nav").click(function() {
    scrollToAnchor("contact-page");
  });

  // ANIMSITION JS
  $(".animsition").animsition({
    inClass: "fade-in-left",
    outClass: "fade-out-left",
    inDuration: 1500,
    outDuration: 800,
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
      .delay(5000);
  });

  // SCROLL
  $(window).scroll(function(event) {
    if ($(this).scrollTop() < 980 && $(this).scrollTop() > 0) {
      $("#about-nav").css("color", "");
      $("#works-nav").css("color", "");
      $("#contact-nav").css("color", "");
    }
    if ($(this).scrollTop() < 1980 && $(this).scrollTop() > 980) {
      $("#about-nav").css("color", "#FA4CBA");
      $("#works-nav").css("color", "");
      $("#contact-nav").css("color", "");
    }
    if ($(this).scrollTop() < 2990 && $(this).scrollTop() > 1980) {
      $("#works-nav").css("color", "#429FE6");
      $("#about-nav").css("color", "");
      $("#contact-nav").css("color", "");
    }
    if ($(this).scrollTop() < 4096 && $(this).scrollTop() > 2990) {
      $("#contact-nav").css("color", "#AB2FDB");
      $("#about-nav").css("color", "");
      $("#works-nav").css("color", "");
    }
  });

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
  document.getElementById("moar").onclick = function() {
    var section = document.createElement("section");
    section.className = "section--purple wow fadeInDown";
    this.parentNode.insertBefore(section, this);
  };
});

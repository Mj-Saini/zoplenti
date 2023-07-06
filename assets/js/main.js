src = "https://unpkg.com/aos@2.3.1/dist/aos.js";

AOS.init({ once: true });
//for-border-gradient

src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
integrity =
  "sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4";
crossorigin = "anonymous";

//Back to top

window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("back_to_top");
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

var backToTopButton = document.getElementById("back_to_top");
backToTopButton.addEventListener("click", scrollToTop);

src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

// navBar

const OpenNav = document.getElementById("OpenNav");
function menu() {
  OpenNav.classList.toggle("ShowNav");
  document.body.classList.toggle("overflow-hidden");
  document.classList.toggle("cross");
}

// counter-js
function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();

  if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  if (!element.hasClass("ms-animated")) {
    var maxval = element.data("max");
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html(),
    }).animate(
      {
        countNum: maxval,
      },
      {
        duration: 5000,
        easing: "linear",
        step: function () {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function () {
          element.html(this.countNum + html);
        },
      }
    );
  }
}

$(function () {
  $(window).scroll(function () {
    $("h2[data-max]").each(function () {
      inVisible($(this));
    });
  });
});

src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
integrity =
  "sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==";
crossorigin = "anonymous";
referrerpolicy = "no-referrer";

//slick min js

src =
  "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js";
integrity =
  "sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==";
crossorigin = "anonymous";
referrerpolicy = "no-referrer";

// slick slider script

$(".responsive").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".prev-btn").click(function () {
  $(".responsive").slick("slickPrev");
});

$(".next-btn").click(function () {
  $(".responsive").slick("slickNext");
});
//preloader

let preLoader = document.querySelector(".preloader");
let html = document.getElementsByClassName(".body_tag");
setTimeout(() => {
  preLoader.style.visibility = "hidden";
  $(".body_tag").removeClass("overflow_hidden");
}, 2500);

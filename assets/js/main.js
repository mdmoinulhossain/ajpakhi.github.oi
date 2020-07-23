(function($) {
  "use strict"

  // NAVIGATION
  var responsiveNav = $('#responsive-nav'),
    catToggle = $('#responsive-nav .category-nav .category-header'),
    catList = $('#responsive-nav .category-nav .category-list'),
    menuToggle = $('#responsive-nav .menu-nav .menu-header'),
    menuList = $('#responsive-nav .menu-nav .menu-list');

  catToggle.on('click', function() {
    menuList.removeClass('open');
    catList.toggleClass('open');
  });

  menuToggle.on('click', function() {
    catList.removeClass('open');
    menuList.toggleClass('open');
  });

  $(document).click(function(event) {
    if (!$(event.target).closest(responsiveNav).length) {
      if (responsiveNav.hasClass('open')) {
        responsiveNav.removeClass('open');
        $('#navigation').removeClass('shadow');
      } else {
        if ($(event.target).closest('.nav-toggle > button').length) {
          if (!menuList.hasClass('open') && !catList.hasClass('open')) {
            menuList.addClass('open');
          }
          $('#navigation').addClass('shadow');
          responsiveNav.addClass('open');
        }
      }
    }
  });

  // HOME SLICK
  $('#home-slick').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    arrows: true,
  });

  // PRODUCTS SLICK
  $('#product-slick-1').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: false,
    appendDots: '.product-slick-dots-1',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('#product-slick-2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: false,
    appendDots: '.product-slick-dots-2',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  // PRODUCT DETAILS SLICK
  $('#product-main-view').slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-view',
  });

  $('#product-view').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '#product-main-view',
  });

  // PRODUCT ZOOM
  $('#product-main-view .product-view').zoom();

  // PRICE SLIDER
  var slider = document.getElementById('price-slider');
  if (slider) {
    noUiSlider.create(slider, {
      start: [1, 999],
      connect: true,
      tooltips: [true, true],
      format: {
        to: function(value) {
          return value.toFixed(2) + '$';
        },
        from: function(value) {
          return value
        }
      },
      range: {
        'min': 1,
        'max': 999
      }
    });
  }

})(jQuery);

//TOPNAV
function bar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//sidenav
function hp() {
  var x = document.getElementById("responsive-nav");
  if (x.className === "shadownav") {
    x.className += " responsive";
  } else {
    x.className = "shadownav";
    $('#navigation').removeClass('shadow');
  }
}


 // Get the modal
var modal = document.getElementById("marModal");
var btn = document.getElementById("marBtn");
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var mod = document.getElementById("affModal");
var bt = document.getElementById("affBtn");
var spn = document.getElementsByClassName("exit")[0];

// When the user clicks the button, open the modal 
bt.onclick = function () {
    mod.style.display = "block";
}

spn.onclick = function () {
    mod.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == mod) {
        mod.style.display = "none";
    }
}



/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
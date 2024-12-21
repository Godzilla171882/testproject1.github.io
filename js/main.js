$(function () {
	//------------СЛАЙДЕР-------------
	
});

// ----------ГАМБУРГЕР----------
$(function() {
  "use strict";
  var toggles = document.querySelectorAll(".c-hamburger");
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

  $('.c-hamburger').click(function () {
      if ($(".menu-collapse:first").is(":hidden")) {
          $(".menu-collapse").slideDown(1000);
          $(".header-all").addClass("menu-open");
          $('.c-hamburger').addClass("is-active");
      } else {
          $(".menu-collapse").slideUp(1000);
          $(".header-all").removeClass("menu-open");
          $('.c-hamburger').removeClass("is-active");
      };
      return false;
  });

  $('.open-info').click(function () {
      if ($(this).parent().find(".customers__all-collapse:first").is(":hidden")) {
          $(this).parent().find('.customers__all-collapse').slideDown(1000);
          $(this).find('.arrow').addClass("active");
      } else {
          $(this).parent().find('.customers__all-collapse').slideUp(1000);
          $(this).find('.arrow').removeClass("active");
      };
      return false;
  });
});
$(document).ready(function() {
  
  $("nav").sticky({topSpacing:0});
  
  $(".page").css("min-height", $( window ).height() - $("nav").height());
  
  $("nav a").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
  });
  
  $('.page').on('scrollSpy:enter', function() {
    $("nav a").removeClass("active")
    $("a[href='#"+ $(this).attr('id')+"']").addClass("active")
  });

  $('.page').on('scrollSpy:exit', function() {
    $("a[href='#"+ $(this).attr('id')+"']").removeClass("active")
  });

  $('.page').scrollSpy();
  
  
  //services more info
  $("#services .more-info li.slide").hide()
  $("#services .spacer").hide()
  $("ul.services a").click(function(e) {
    e.preventDefault();
    var atarget, li;
    atarget = $($(this).attr("href"));
    li = $(this).closest("li");
    $("#services .more-info li.slide").slideUp(1500);
    $("ul.services a:not([href=" + $(this).attr("href") + "])").closest("li").removeClass("active");
    if (li.hasClass("active")) {
      li.removeClass("active");
      $("#services .spacer").slideUp(1500);
    } else {
      li.addClass("active");
      atarget.slideDown(1500);
      $("#services .spacer").slideDown(1500);
    }
  });
});
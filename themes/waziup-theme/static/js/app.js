$(window).on('load', documentReady);

function setColorMenu() {
  var theBaseUrl = "http://" + location.host + "/";
  var thePath = window.location.href.substring(theBaseUrl.length-1, window.location.href.length).split('#')[0];
  thePath = thePath.substring(1, thePath.length - 1);

  if ($(window).scrollTop() > 0 || thePath !== '/') { 
    $("#header").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $("#header").removeClass("active");
  }
}

function setActiveLinks() {
  $("[href]").each(function() {
    if (window.location.href.indexOf(this.href) > -1) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
}

function documentReady() {
  
  // Top menu color change (blue/white fade) and active
  setColorMenu();
  setActiveLinks();
  $(window).on("scroll", function () {
    setColorMenu();
    setActiveLinks();
  });

  // Set mobile menu
  $('#menu-toggle').on('click', function (e) {
    $('.top-menu-items').toggleClass('open');
  });

  $('top-menu-item').on('click', function(e) {
    $('.top-menu-items').removeClass('open');
  });

  $('pre code').each(function(i, block) {
    var codeText = $(this).text();
    hljs.highlightBlock(block);

    $(this).append('<button class="copy-button" data-clipboard-text=\''+codeText+'\'><p class="copy"><i class="fa fa-lg fa-paperclip" aria-hidden="true"></i>&nbsp;&nbsp;Copy</p><p class="copied"><i class="fa fa-lg fa-check" aria-hidden="true"></i>&nbsp;&nbsp;Copied to clipboard</p></button>');
  });

  var client = new ZeroClipboard( $('.copy-button') );

  $('.copy-button').click(function() {
    var self = this;
    $(self).addClass('clicked');

    window.setTimeout(function () {
      $(self).removeClass('clicked');
    }, 5000);

  });

}


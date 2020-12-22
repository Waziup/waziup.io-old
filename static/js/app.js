$(window).on('load', documentReady);

//color of the top menu
function setColorMenu() {
  if ($(window).scrollTop() > 0 || window.location.pathname !== '/') { 
    $(".top-menu").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".top-menu").removeClass("active");
  }
}

// active menu links (bolded)
function setActiveLinks() {
  $("#TableOfContents a").each(function() {
    if (window.location.href == this.href) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mobile-menu").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mobile-menu").style.width = "0";
} 

function documentReady() {

  setColorMenu();
  setActiveLinks();
  $(window).on("scroll", function () {
    setColorMenu();
    setActiveLinks();
  });

  // Set mobile menu
  $('#menu-toggle').on('click', function (e) {
    document.getElementById("mobile-menu").style.width = "250px";
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


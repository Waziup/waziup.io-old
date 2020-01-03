$(window).on('load', documentReady);

//color of the top menu
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

// active links (bolded)
function setActiveLinks() {
  //bold ToC links (anchors)
  $("#TableOfContents a").each(function() {
    if (window.location.href == this.href) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

  //bold menu links 
  $("#navigation a").each(function() {
    if (window.location.href.indexOf(this.href) > -1) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
}

// detects which title is in the viewport
function isElementInViewport (el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}

// Change URL with anchor
function setAnchor() {
  jQuery.fn.reverse = [].reverse;
  $(".markdowned h1, .markdowned h2").each(function (idx, el) {
    if ( isElementInViewport(el) ) {
      // update the URL hash
      if (window.history.pushState) {
        var urlHash = "#" + $(el).attr("id");
        window.history.pushState(null, null, urlHash);
        return false;
      }
    }
  });
}

function documentReady() {

  setColorMenu();
  setActiveLinks();
  setAnchor();
  $(window).on("scroll", function () {
    setColorMenu();
    setActiveLinks();
    setAnchor();
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


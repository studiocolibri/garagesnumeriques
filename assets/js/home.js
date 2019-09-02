window.onload = function() {
  // VIDEO BG
  /*var min = 1,
        max = 5,
        random = Math.floor(Math.random() * (+max - +min)) + +min; */
    
  var videlem = document.createElement("video"),
      sourceMP4 = document.createElement("source"),
      supportsVideoElement = !!document.createElement('video').canPlayType,
      temp = document.createElement('video'),
      canPlay_MP4 = temp.canPlayType('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
      //canPlay_WEMB = temp.canPlayType('video/webm; codecs="vp8,vorbis"'),
      videoWrapper = document.getElementById('video-wrapper');
  
  if (supportsVideoElement && canPlay_MP4) {
    videlem.id = "video-bg";    
    sourceMP4.type = "video/mp4";
    sourceMP4.src = "/assets/videos/garages-numeriques-homepage-loop.mp4";
    videlem.appendChild(sourceMP4);
    videlem.preload = true;
    videlem.autoplay = true;
    videlem.muted = true;
    videlem.loop = true;
    videlem.setAttribute('playsinline', '');
    videoWrapper.appendChild(videlem);
    videlem.onloadeddata = function() {
      logoAnim(launchGlitch);
    }; 
  } else {
    logoAnim(launchGlitch);

  }

  // LOGO ANIM
  var logoAnim = function(callback) {
    var sixthBar = document.getElementById('sixth-bar'),
    isFirstAnimTerminated = false,
    siteLogoTextSpans = document.querySelectorAll('.site-logo__text__span'),
    siteLogoBars = document.querySelectorAll('.site-logo__bar');

    for (var i=0; i<siteLogoTextSpans.length; i++) {
      siteLogoTextSpans[i].classList.add('animated');
    }
    for (var i=0; i<siteLogoBars.length; i++) {
      siteLogoBars[i].classList.add('animated');
    }

    sixthBar.addEventListener("webkitAnimationEnd", launchBlueBar);
    sixthBar.addEventListener("animationend", launchBlueBar); 

    function launchBlueBar() {
      if (!isFirstAnimTerminated) {
        sixthBar.classList.add('bluebar');
      }
    }

    setTimeout( function(){
      callback();
    }, 3000 );
  }

  // GLITCH
  function launchGlitch() {
    var homeTitle = document.getElementById('home-title__h1');
    homeTitle.classList.add('glitch');
  }

  // AGENDA
  var discoverBtn = document.getElementById('discover-btn'),
      agendaSection = document.getElementById('home-agenda'),
      agendaCloseBtn = document.getElementById('home-agenda__close-btn');

  discoverBtn.addEventListener('click', function() {
    agendaSection.classList.add('open');
  })

  agendaCloseBtn.addEventListener('click', function() {
    agendaSection.classList.remove('open');
  })
}
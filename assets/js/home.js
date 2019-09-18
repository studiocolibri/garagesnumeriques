window.onload = function() {

  // VIDEO BG
  var launchVideo = function() {
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
      console.log('launchvideo');
    }
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

    function launchBlueBar() {
      if (!isFirstAnimTerminated) {
        sixthBar.classList.add('bluebar');
      }
    }

    sixthBar.addEventListener("webkitAnimationEnd", launchBlueBar);
    sixthBar.addEventListener("animationend", launchBlueBar); 

    setTimeout( function(){
      callback();
      console.log('Logoanim');
    }, 3000 );
  }

  // GLITCH
  function launchGlitch(callback) {
    var homeTitle = document.getElementById('home-title__h1');
    homeTitle.classList.add('glitch');
    return callback;
    console.log('launchGlitch');
  }

  // AGENDA
  var discoverBtn = document.getElementById('discover-btn'),
  agendaSection = document.getElementById('home-agenda'),
  agendaCloseBtn = document.getElementById('home-agenda__close-btn');

  discoverBtn.addEventListener('click', function() {
    agendaSection.classList.add('open');
    document.body.classList.add('no-scroll');
  });

  agendaCloseBtn.addEventListener('click', function() {
    agendaSection.classList.remove('open');
    document.body.classList.remove('no-scroll');
  });

  document.addEventListener("keydown", keyDownTextField, false);

  function keyDownTextField(e) {
    var keyCode = e.keyCode;
    if(keyCode==27) {
      agendaSection.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  }

  // INIT 
  logoAnim(launchGlitch(launchVideo()));
}

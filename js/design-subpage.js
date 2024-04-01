adjustDivHeight();
visualViewport.addEventListener('resize', adjustDivHeight);
window.addEventListener('resize', adjustDivHeight);

function adjustDivHeight() {
    let div = document.querySelector('.composition-1-left');
    let div2 = document.querySelector('.composition-1-right');
    div2.style.height = 'auto';
    // console.log(div);
    //get height of div
    let divHeight = div.clientHeight;
    // console.log(divHeight);
    //set height of div2
    div2.style.height = divHeight + 'px';
}

///////////////////////////////////////////////////

// Initialize YouTube player
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('videoPlayer', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// When the player is ready, set it to autoplay and loop
function onPlayerReady(event) {
  event.target.playVideo();
  event.target.setLoop(true);
  event.target.setPlaybackQuality('hd720'); // Set preferred quality
}

// When the player state changes
function onPlayerStateChange(event) {
  // Check if the video has ended
  if (event.data == YT.PlayerState.ENDED) {
    // Restart the video when it ends
    event.target.playVideo();
  }
}
// Initialize YouTube player

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('videoPlayer', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// When the player is ready, set it to autoplay and loop
function onPlayerReady(event) {
  event.target.playVideo();
  event.target.setLoop(true);
  event.target.setPlaybackQuality('hd720'); // Set preferred quality
}

// When the player state changes
function onPlayerStateChange(event) {
  // Check if the video has ended
  if (event.data == YT.PlayerState.ENDED) {
    // Restart the video when it ends
    event.target.playVideo();
  }
}

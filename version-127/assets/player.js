(function () {
  var video = document.getElementById("videoPlayer");
  var cover = document.getElementById("playerCover");
  var streamUrl = typeof videoStreamUrl === "string" ? videoStreamUrl : "";
  var hlsInstance = null;
  var ready = false;

  if (!video || !cover || !streamUrl) {
    return;
  }

  function startPlayback() {
    cover.classList.add("is-hidden");
    video.controls = true;
    video.play().catch(function () {});
  }

  function preparePlayback() {
    if (ready) {
      startPlayback();
      return;
    }

    ready = true;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
      video.addEventListener("loadedmetadata", startPlayback, { once: true });
      video.load();
      return;
    }

    if (window.Hls && window.Hls.isSupported()) {
      hlsInstance = new window.Hls({ enableWorker: true });
      hlsInstance.loadSource(streamUrl);
      hlsInstance.attachMedia(video);
      hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, startPlayback);
      return;
    }

    video.src = streamUrl;
    video.addEventListener("loadedmetadata", startPlayback, { once: true });
    video.load();
  }

  cover.addEventListener("click", preparePlayback);
  video.addEventListener("click", function () {
    if (video.paused) {
      preparePlayback();
    }
  });
  window.addEventListener("pagehide", function () {
    if (hlsInstance) {
      hlsInstance.destroy();
    }
  });
})();

import { H as Hls } from "./hls-vendor.js";

export function initMoviePlayer(options) {
  const video = document.querySelector(options.videoSelector);
  const cover = document.querySelector(options.coverSelector);
  const source = options.source;
  let hls = null;
  let attached = false;

  if (!video || !cover || !source) {
    return;
  }

  const attachSource = () => {
    if (attached) {
      return Promise.resolve();
    }

    attached = true;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
      return Promise.resolve();
    }

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90
      });

      hls.loadSource(source);
      hls.attachMedia(video);

      return new Promise((resolve) => {
        hls.on(Hls.Events.MANIFEST_PARSED, () => resolve());
        window.setTimeout(resolve, 1200);
      });
    }

    video.src = source;
    return Promise.resolve();
  };

  const start = () => {
    cover.classList.add("is-hidden");
    video.setAttribute("controls", "controls");
    attachSource().then(() => {
      const playPromise = video.play();

      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          cover.classList.remove("is-hidden");
        });
      }
    });
  };

  cover.addEventListener("click", start);

  video.addEventListener("click", () => {
    if (video.paused) {
      start();
    }
  });

  window.addEventListener("pagehide", () => {
    if (hls) {
      hls.destroy();
      hls = null;
    }
  });
}

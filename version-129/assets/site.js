(function () {
    function ready(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    function bindNavigation() {
        var toggle = document.querySelector("[data-nav-toggle]");
        var nav = document.querySelector("[data-main-nav]");

        if (!toggle || !nav) {
            return;
        }

        toggle.addEventListener("click", function () {
            nav.classList.toggle("is-open");
        });
    }

    function bindHero() {
        var hero = document.querySelector("[data-hero]");

        if (!hero) {
            return;
        }

        var slides = Array.prototype.slice.call(hero.querySelectorAll(".hero-slide"));
        var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
        var index = 0;
        var timer = null;

        function show(nextIndex) {
            index = (nextIndex + slides.length) % slides.length;

            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("is-active", slideIndex === index);
            });

            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("is-active", dotIndex === index);
            });
        }

        function start() {
            stop();
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5200);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }

        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                var nextIndex = Number(dot.getAttribute("data-hero-dot"));
                show(nextIndex);
                start();
            });
        });

        hero.addEventListener("mouseenter", stop);
        hero.addEventListener("mouseleave", start);
        start();
    }

    function normalize(value) {
        return String(value || "").trim().toLowerCase();
    }

    function bindFilter() {
        var input = document.querySelector("[data-filter-input]");
        var list = document.querySelector("[data-filter-list]");

        if (!input || !list) {
            return;
        }

        var items = Array.prototype.slice.call(list.querySelectorAll(".movie-card"));
        var url = new URL(window.location.href);
        var query = url.searchParams.get("q") || "";

        if (input.hasAttribute("data-query-reader") && query) {
            input.value = query;
        }

        function applyFilter() {
            var keyword = normalize(input.value);

            items.forEach(function (item) {
                var haystack = normalize(item.getAttribute("data-search") || item.textContent);
                item.classList.toggle("is-hidden", keyword && haystack.indexOf(keyword) === -1);
            });
        }

        input.addEventListener("input", applyFilter);
        applyFilter();

        var clearButton = document.querySelector("[data-clear-filter]");

        if (clearButton) {
            clearButton.addEventListener("click", function () {
                input.value = "";
                applyFilter();
                input.focus();
            });
        }
    }

    ready(function () {
        bindNavigation();
        bindHero();
        bindFilter();
    });
})();

var SitePlayer = (function () {
    function init(videoId, buttonId, streamUrl) {
        var video = document.getElementById(videoId);
        var button = document.getElementById(buttonId);
        var loaded = false;

        if (!video || !button || !streamUrl) {
            return;
        }

        function attachStream() {
            if (loaded) {
                return;
            }

            loaded = true;

            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = streamUrl;
                return;
            }

            if (window.Hls && window.Hls.isSupported()) {
                var hls = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: false
                });

                hls.loadSource(streamUrl);
                hls.attachMedia(video);
                return;
            }

            video.src = streamUrl;
        }

        function play() {
            attachStream();
            button.classList.add("is-hidden");
            video.controls = true;

            var promise = video.play();

            if (promise && typeof promise.catch === "function") {
                promise.catch(function () {
                    button.classList.remove("is-hidden");
                });
            }
        }

        button.addEventListener("click", play);

        video.addEventListener("click", function () {
            if (video.paused) {
                play();
            }
        });

        video.addEventListener("play", function () {
            button.classList.add("is-hidden");
        });
    }

    return {
        init: init
    };
})();

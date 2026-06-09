document.addEventListener("DOMContentLoaded", function () {
    setupMobileNavigation();
    setupHeroSlider();
    setupSearchPanels();
    setupFilters();
});

function setupMobileNavigation() {
    var button = document.querySelector("[data-menu-button]");
    var nav = document.querySelector("[data-mobile-nav]");

    if (!button || !nav) {
        return;
    }

    button.addEventListener("click", function () {
        nav.classList.toggle("is-open");
    });
}

function setupHeroSlider() {
    var hero = document.querySelector("[data-hero]");

    if (!hero) {
        return;
    }

    var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-dot]"));
    var previous = hero.querySelector("[data-hero-prev]");
    var next = hero.querySelector("[data-hero-next]");
    var current = 0;
    var timer = null;

    function show(index) {
        current = (index + slides.length) % slides.length;

        slides.forEach(function (slide, slideIndex) {
            slide.classList.toggle("is-active", slideIndex === current);
        });

        dots.forEach(function (dot, dotIndex) {
            dot.classList.toggle("is-active", dotIndex === current);
        });
    }

    function start() {
        stop();
        timer = window.setInterval(function () {
            show(current + 1);
        }, 5600);
    }

    function stop() {
        if (timer) {
            window.clearInterval(timer);
        }
    }

    if (previous) {
        previous.addEventListener("click", function () {
            show(current - 1);
            start();
        });
    }

    if (next) {
        next.addEventListener("click", function () {
            show(current + 1);
            start();
        });
    }

    dots.forEach(function (dot) {
        dot.addEventListener("click", function () {
            show(Number(dot.getAttribute("data-hero-dot")) || 0);
            start();
        });
    });

    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);
    start();
}

function setupSearchPanels() {
    var forms = Array.prototype.slice.call(document.querySelectorAll("[data-search-form]"));
    var cards = Array.prototype.slice.call(document.querySelectorAll(".movie-card, .rank-item"));

    if (!forms.length || !cards.length) {
        return;
    }

    var params = new URLSearchParams(window.location.search);
    var query = params.get("q") || "";

    forms.forEach(function (form) {
        var input = form.querySelector("[data-search-input]");

        if (!input) {
            return;
        }

        if (query) {
            input.value = query;
            filterCards(query, cards);
        }

        input.addEventListener("input", function () {
            filterCards(input.value, cards);
        });

        form.addEventListener("submit", function (event) {
            var localCards = Array.prototype.slice.call(document.querySelectorAll(".movie-card, .rank-item"));

            if (localCards.length) {
                event.preventDefault();
                filterCards(input.value, localCards);
            }
        });
    });
}

function filterCards(query, cards) {
    var value = String(query || "").trim().toLowerCase();

    cards.forEach(function (card) {
        var haystack = [
            card.getAttribute("data-title") || "",
            card.getAttribute("data-tags") || "",
            card.textContent || ""
        ].join(" ").toLowerCase();

        card.classList.toggle("is-search-hidden", value !== "" && haystack.indexOf(value) === -1);
    });
}

function setupFilters() {
    var rows = Array.prototype.slice.call(document.querySelectorAll("[data-filter-row]"));

    rows.forEach(function (row) {
        var buttons = Array.prototype.slice.call(row.querySelectorAll("[data-filter]"));
        var grid = row.parentElement.querySelector("[data-card-grid]");
        var cards = grid ? Array.prototype.slice.call(grid.querySelectorAll(".movie-card")) : [];

        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                var value = button.getAttribute("data-filter") || "all";

                buttons.forEach(function (item) {
                    item.classList.toggle("is-active", item === button);
                });

                cards.forEach(function (card) {
                    var type = card.getAttribute("data-type") || "";
                    card.classList.toggle("is-filtered-out", value !== "all" && type !== value);
                });
            });
        });
    });
}

window.initializeMoviePlayer = function (source, videoId) {
    var video = document.getElementById(videoId);

    if (!video) {
        return;
    }

    var stage = video.closest(".player-stage");
    var overlay = stage ? stage.querySelector(".player-overlay") : null;
    var ready = false;
    var hlsInstance = null;

    function attach() {
        if (ready) {
            return;
        }

        ready = true;

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = source;
            return;
        }

        if (typeof Hls !== "undefined" && Hls.isSupported()) {
            hlsInstance = new Hls({
                enableWorker: true,
                lowLatencyMode: true
            });
            hlsInstance.loadSource(source);
            hlsInstance.attachMedia(video);
            return;
        }

        video.src = source;
    }

    function play() {
        attach();

        if (overlay) {
            overlay.classList.add("is-hidden");
        }

        video.setAttribute("controls", "controls");
        var promise = video.play();

        if (promise && typeof promise.catch === "function") {
            promise.catch(function () {});
        }
    }

    if (overlay) {
        overlay.addEventListener("click", play);
    }

    video.addEventListener("click", function () {
        if (video.paused) {
            play();
        }
    });

    window.addEventListener("pagehide", function () {
        if (hlsInstance) {
            hlsInstance.destroy();
        }
    });
};

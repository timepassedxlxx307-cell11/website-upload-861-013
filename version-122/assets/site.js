(function () {
    function ready(callback) {
        if (document.readyState !== 'loading') {
            callback();
            return;
        }
        document.addEventListener('DOMContentLoaded', callback);
    }

    ready(function () {
        var toggle = document.querySelector('.menu-toggle');
        var panel = document.querySelector('.mobile-panel');
        if (toggle && panel) {
            toggle.addEventListener('click', function () {
                var expanded = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', String(!expanded));
                panel.classList.toggle('open');
            });
        }

        var hero = document.querySelector('[data-hero]');
        if (hero) {
            var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
            var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
            var index = 0;
            var timer = null;
            function show(next) {
                if (!slides.length) {
                    return;
                }
                index = (next + slides.length) % slides.length;
                slides.forEach(function (slide, slideIndex) {
                    slide.classList.toggle('active', slideIndex === index);
                });
                dots.forEach(function (dot, dotIndex) {
                    dot.classList.toggle('active', dotIndex === index);
                });
            }
            function start() {
                timer = window.setInterval(function () {
                    show(index + 1);
                }, 5200);
            }
            dots.forEach(function (dot) {
                dot.addEventListener('click', function () {
                    window.clearInterval(timer);
                    show(Number(dot.getAttribute('data-hero-dot')) || 0);
                    start();
                });
            });
            show(0);
            start();
        }

        var filterPanel = document.querySelector('.filter-panel');
        var list = document.querySelector('[data-card-list]');
        if (filterPanel && list) {
            var input = filterPanel.querySelector('.filter-input');
            var genre = filterPanel.querySelector('[data-filter="genre"]');
            var year = filterPanel.querySelector('[data-filter="year"]');
            var region = filterPanel.querySelector('[data-filter="region"]');
            var reset = filterPanel.querySelector('.filter-reset');
            var empty = filterPanel.querySelector('.filter-empty');
            var cards = Array.prototype.slice.call(list.querySelectorAll('.movie-card'));
            var params = new URLSearchParams(window.location.search);
            var q = params.get('q');
            if (q && input) {
                input.value = q;
            }
            function valueOf(element) {
                return element ? element.value.trim().toLowerCase() : '';
            }
            function apply() {
                var keyword = valueOf(input);
                var genreValue = valueOf(genre);
                var yearValue = valueOf(year);
                var regionValue = valueOf(region);
                var visible = 0;
                cards.forEach(function (card) {
                    var search = (card.getAttribute('data-search') || '').toLowerCase();
                    var cardYear = (card.getAttribute('data-year') || '').toLowerCase();
                    var cardRegion = (card.getAttribute('data-region') || '').toLowerCase();
                    var cardGenre = (card.getAttribute('data-genre') || '').toLowerCase();
                    var matched = true;
                    if (keyword && search.indexOf(keyword) === -1) {
                        matched = false;
                    }
                    if (genreValue && search.indexOf(genreValue) === -1 && cardGenre.indexOf(genreValue) === -1) {
                        matched = false;
                    }
                    if (yearValue && cardYear.indexOf(yearValue) === -1) {
                        matched = false;
                    }
                    if (regionValue && cardRegion.indexOf(regionValue) === -1) {
                        matched = false;
                    }
                    card.hidden = !matched;
                    if (matched) {
                        visible += 1;
                    }
                });
                if (empty) {
                    empty.hidden = visible !== 0;
                }
            }
            [input, genre, year, region].forEach(function (element) {
                if (!element) {
                    return;
                }
                element.addEventListener(element.tagName === 'INPUT' ? 'input' : 'change', apply);
            });
            if (reset) {
                reset.addEventListener('click', function () {
                    if (input) {
                        input.value = '';
                    }
                    if (genre) {
                        genre.value = '';
                    }
                    if (year) {
                        year.value = '';
                    }
                    if (region) {
                        region.value = '';
                    }
                    apply();
                });
            }
            apply();
        }

        var players = Array.prototype.slice.call(document.querySelectorAll('.media-player'));
        players.forEach(function (player) {
            var video = player.querySelector('video');
            var button = player.querySelector('.player-start');
            var streamUrl = player.getAttribute('data-stream');
            var loaded = false;
            var hls = null;
            function load() {
                if (!video || !streamUrl) {
                    return;
                }
                if (!loaded) {
                    if (window.Hls && window.Hls.isSupported()) {
                        hls = new window.Hls({
                            enableWorker: true,
                            lowLatencyMode: true
                        });
                        hls.loadSource(streamUrl);
                        hls.attachMedia(video);
                    } else {
                        video.src = streamUrl;
                    }
                    loaded = true;
                }
                player.classList.add('is-playing');
                var playPromise = video.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(function () {
                        player.classList.remove('is-playing');
                    });
                }
            }
            if (button) {
                button.addEventListener('click', load);
            }
            if (video) {
                video.addEventListener('click', function () {
                    if (!loaded) {
                        load();
                    }
                });
                video.addEventListener('play', function () {
                    player.classList.add('is-playing');
                });
                video.addEventListener('pause', function () {
                    if (!video.currentTime) {
                        player.classList.remove('is-playing');
                    }
                });
            }
            window.addEventListener('pagehide', function () {
                if (hls) {
                    hls.destroy();
                }
            });
        });
    });
}());

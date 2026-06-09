import { H as Hls } from "./hls-vendor.js";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function setupMenu() {
    const button = $("[data-menu-toggle]");
    const nav = $("[data-site-nav]");
    if (!button || !nav) {
        return;
    }
    button.addEventListener("click", () => {
        nav.classList.toggle("is-open");
        button.classList.toggle("is-open");
    });
}

function setupHero() {
    const hero = $("[data-hero]");
    if (!hero) {
        return;
    }
    const slides = $$('[data-hero-slide]', hero);
    const dots = $$('[data-hero-dot]', hero);
    const prev = $('[data-hero-prev]', hero);
    const next = $('[data-hero-next]', hero);
    let index = 0;
    let timer = null;

    const show = (nextIndex) => {
        index = (nextIndex + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle('is-active', slideIndex === index);
        });
        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('is-active', dotIndex === index);
        });
    };

    const start = () => {
        timer = window.setInterval(() => show(index + 1), 5000);
    };

    const restart = () => {
        window.clearInterval(timer);
        start();
    };

    prev?.addEventListener('click', () => {
        show(index - 1);
        restart();
    });

    next?.addEventListener('click', () => {
        show(index + 1);
        restart();
    });

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            show(Number(dot.dataset.heroDot || 0));
            restart();
        });
    });

    show(0);
    start();
}

function setupFilters() {
    const input = $('[data-movie-search]');
    const select = $('[data-movie-filter]');
    const lists = $$('[data-movie-list]');
    if (!lists.length) {
        return;
    }

    const apply = () => {
        const query = (input?.value || '').trim().toLowerCase();
        const category = select?.value || 'all';
        lists.forEach((list) => {
            $$('.movie-card', list).forEach((card) => {
                const text = [
                    card.dataset.title,
                    card.dataset.region,
                    card.dataset.type,
                    card.dataset.genre,
                    card.dataset.tags
                ].join(' ').toLowerCase();
                const categoryMatched = category === 'all' || card.dataset.category === category;
                const queryMatched = !query || text.includes(query);
                card.hidden = !(categoryMatched && queryMatched);
            });
        });
    };

    input?.addEventListener('input', apply);
    select?.addEventListener('change', apply);
}

function setupPlayers() {
    $$('[data-player]').forEach((wrap) => {
        const video = $('video', wrap);
        const button = $('[data-player-start]', wrap);
        if (!video || !button) {
            return;
        }
        let loaded = false;
        let hls = null;
        const streamUrl = video.dataset.stream;

        const play = () => {
            if (!loaded && streamUrl) {
                if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = streamUrl;
                    loaded = true;
                } else if (Hls.isSupported()) {
                    hls = new Hls({
                        enableWorker: true,
                        lowLatencyMode: true
                    });
                    hls.loadSource(streamUrl);
                    hls.attachMedia(video);
                    loaded = true;
                } else {
                    video.src = streamUrl;
                    loaded = true;
                }
            }
            wrap.classList.add('is-playing');
            const attempt = video.play();
            if (attempt && typeof attempt.catch === 'function') {
                attempt.catch(() => {});
            }
        };

        button.addEventListener('click', play);
        video.addEventListener('click', () => {
            if (!loaded) {
                play();
            }
        });
        video.addEventListener('play', () => wrap.classList.add('is-playing'));
        video.addEventListener('pause', () => {
            if (video.currentTime === 0) {
                wrap.classList.remove('is-playing');
            }
        });
        window.addEventListener('pagehide', () => {
            if (hls) {
                hls.destroy();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupMenu();
    setupHero();
    setupFilters();
    setupPlayers();
});

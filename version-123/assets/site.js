(() => {
    const header = document.querySelector('.site-header');
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
            menuToggle.classList.toggle('active');
        });
    }

    const updateHeader = () => {
        if (!header) {
            return;
        }
        header.classList.toggle('scrolled', window.scrollY > 12);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    const hero = document.querySelector('[data-hero]');
    if (hero) {
        const slides = Array.from(hero.querySelectorAll('.hero-slide'));
        const dots = Array.from(hero.querySelectorAll('.hero-dot'));
        let current = 0;
        const show = (index) => {
            current = (index + slides.length) % slides.length;
            slides.forEach((slide, slideIndex) => {
                slide.classList.toggle('is-active', slideIndex === current);
            });
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle('active', dotIndex === current);
            });
        };
        dots.forEach((dot) => {
            dot.addEventListener('click', () => show(Number(dot.dataset.slide || 0)));
        });
        if (slides.length > 1) {
            setInterval(() => show(current + 1), 5500);
        }
    }

    const pageSearch = document.getElementById('pageSearch');
    if (pageSearch) {
        const cards = Array.from(document.querySelectorAll('.movie-card'));
        pageSearch.addEventListener('input', () => {
            const key = pageSearch.value.trim().toLowerCase();
            cards.forEach((card) => {
                const text = (card.dataset.search || card.textContent || '').toLowerCase();
                card.classList.toggle('hidden', key.length > 0 && !text.includes(key));
            });
        });
    }

    document.querySelectorAll('.player-box').forEach((box) => {
        const video = box.querySelector('video');
        const trigger = box.querySelector('.play-layer');
        const stream = box.dataset.stream;
        let ready = false;
        let hlsInstance = null;
        const start = () => {
            if (!video || !stream) {
                return;
            }
            if (!ready) {
                ready = true;
                if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = stream;
                } else if (window.Hls && window.Hls.isSupported()) {
                    hlsInstance = new window.Hls({
                        enableWorker: true,
                        lowLatencyMode: true
                    });
                    hlsInstance.loadSource(stream);
                    hlsInstance.attachMedia(video);
                } else {
                    video.src = stream;
                }
            }
            box.classList.add('is-playing');
            video.controls = true;
            video.play().catch(() => {});
        };
        if (trigger) {
            trigger.addEventListener('click', start);
        }
        if (video) {
            video.addEventListener('click', start);
        }
        window.addEventListener('pagehide', () => {
            if (hlsInstance) {
                hlsInstance.destroy();
            }
        });
    });
})();

(function () {
  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  function initMenu() {
    var button = document.querySelector('[data-menu-toggle]');
    var panel = document.querySelector('[data-mobile-menu]');
    if (!button || !panel) {
      return;
    }
    button.addEventListener('click', function () {
      panel.classList.toggle('is-open');
      document.body.classList.toggle('menu-open', panel.classList.contains('is-open'));
    });
  }

  function initHero() {
    var carousel = document.querySelector('[data-hero-carousel]');
    if (!carousel) {
      return;
    }
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll('[data-hero-dot]'));
    if (slides.length < 2) {
      return;
    }
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, position) {
        slide.classList.toggle('is-active', position === index);
      });
      dots.forEach(function (dot, position) {
        dot.classList.toggle('is-active', position === index);
      });
    }

    function start() {
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5200);
    }

    function restart() {
      window.clearInterval(timer);
      start();
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        show(Number(dot.getAttribute('data-hero-dot')) || 0);
        restart();
      });
    });

    start();
  }

  function normalize(value) {
    return String(value || '').trim().toLowerCase();
  }

  function initFilters() {
    var forms = Array.prototype.slice.call(document.querySelectorAll('[data-search-form]'));
    forms.forEach(function (form) {
      var list = form.parentElement.querySelector('[data-search-list]');
      if (!list) {
        return;
      }
      var cards = Array.prototype.slice.call(list.querySelectorAll('.movie-card'));
      var params = new URLSearchParams(window.location.search);
      var query = params.get('q');
      var keywordInput = form.querySelector('input[name="keyword"]');
      if (query && keywordInput) {
        keywordInput.value = query;
      }

      function apply() {
        var keyword = normalize(form.querySelector('input[name="keyword"]') && form.querySelector('input[name="keyword"]').value);
        var category = normalize(form.querySelector('select[name="category"]') && form.querySelector('select[name="category"]').value);
        var year = normalize(form.querySelector('select[name="year"]') && form.querySelector('select[name="year"]').value);
        var region = normalize(form.querySelector('select[name="region"]') && form.querySelector('select[name="region"]').value);
        var type = normalize(form.querySelector('select[name="type"]') && form.querySelector('select[name="type"]').value);

        cards.forEach(function (card) {
          var haystack = normalize([
            card.getAttribute('data-title'),
            card.getAttribute('data-tags'),
            card.getAttribute('data-region'),
            card.getAttribute('data-type'),
            card.getAttribute('data-year')
          ].join(' '));
          var matched = true;
          if (keyword && haystack.indexOf(keyword) === -1) {
            matched = false;
          }
          if (category && normalize(card.getAttribute('data-category')) !== category) {
            matched = false;
          }
          if (year && normalize(card.getAttribute('data-year')) !== year) {
            matched = false;
          }
          if (region && normalize(card.getAttribute('data-region')) !== region) {
            matched = false;
          }
          if (type && normalize(card.getAttribute('data-type')) !== type) {
            matched = false;
          }
          card.classList.toggle('search-hidden', !matched);
        });
      }

      form.addEventListener('input', apply);
      form.addEventListener('change', apply);
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        apply();
      });
      apply();
    });
  }

  function initPlayers() {
    var players = Array.prototype.slice.call(document.querySelectorAll('[data-player]'));
    players.forEach(function (shell) {
      var video = shell.querySelector('video');
      var button = shell.querySelector('[data-play-button]');
      var source = shell.getAttribute('data-src');
      var hlsInstance = null;
      if (!video || !source) {
        return;
      }

      function attachSource() {
        if (video.getAttribute('data-ready') === 'true') {
          return;
        }
        if (window.Hls && window.Hls.isSupported()) {
          hlsInstance = new window.Hls({
            maxBufferLength: 30,
            enableWorker: true
          });
          hlsInstance.loadSource(source);
          hlsInstance.attachMedia(video);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = source;
        } else {
          video.src = source;
        }
        video.setAttribute('data-ready', 'true');
      }

      function playVideo() {
        attachSource();
        video.setAttribute('controls', 'controls');
        shell.classList.add('is-playing');
        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(function () {
            shell.classList.remove('is-playing');
            video.setAttribute('controls', 'controls');
          });
        }
      }

      if (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          event.stopPropagation();
          playVideo();
        });
      }

      shell.addEventListener('click', function (event) {
        if (event.target === video) {
          return;
        }
        playVideo();
      });

      window.addEventListener('beforeunload', function () {
        if (hlsInstance && typeof hlsInstance.destroy === 'function') {
          hlsInstance.destroy();
        }
      });
    });
  }

  ready(function () {
    initMenu();
    initHero();
    initFilters();
    initPlayers();
  });
})();

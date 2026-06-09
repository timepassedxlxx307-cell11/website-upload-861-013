
(function () {
  function selectAll(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function initMobileMenu() {
    var toggle = document.querySelector('[data-mobile-toggle]');
    var panel = document.querySelector('[data-mobile-panel]');
    if (!toggle || !panel) {
      return;
    }
    toggle.addEventListener('click', function () {
      panel.classList.toggle('open');
    });
  }

  function initHero() {
    var root = document.querySelector('[data-hero]');
    if (!root) {
      return;
    }
    var slides = selectAll('[data-hero-slide]', root);
    var dots = selectAll('[data-hero-dot]', root);
    var index = 0;
    var timer;

    function show(next) {
      if (!slides.length) {
        return;
      }
      index = (next + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === index);
      });
    }

    function start() {
      window.clearInterval(timer);
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5000);
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        show(Number(dot.getAttribute('data-hero-dot')) || 0);
        start();
      });
    });

    show(0);
    start();
  }

  function initForms() {
    selectAll('[data-search-form]').forEach(function (form) {
      form.addEventListener('submit', function (event) {
        var input = form.querySelector('input[name="q"]');
        if (!input || !input.value.trim()) {
          event.preventDefault();
        }
      });
    });
  }

  function initCatalog() {
    var catalog = document.querySelector('[data-catalog]');
    if (!catalog) {
      return;
    }
    var input = catalog.querySelector('[data-filter-input]');
    var typeSelect = catalog.querySelector('[data-filter-type]');
    var regionSelect = catalog.querySelector('[data-filter-region]');
    var yearSelect = catalog.querySelector('[data-filter-year]');
    var cards = selectAll('[data-card]', catalog);
    var empty = catalog.querySelector('[data-filter-empty]');
    var params = new URLSearchParams(window.location.search);
    var query = params.get('q') || '';

    if (input && query) {
      input.value = query;
    }

    function valueOf(element) {
      return element ? element.value.trim().toLowerCase() : '';
    }

    function filter() {
      var q = valueOf(input);
      var type = valueOf(typeSelect);
      var region = valueOf(regionSelect);
      var year = valueOf(yearSelect);
      var visible = 0;

      cards.forEach(function (card) {
        var text = (card.getAttribute('data-search') || '').toLowerCase();
        var cardType = (card.getAttribute('data-type') || '').toLowerCase();
        var cardRegion = (card.getAttribute('data-region') || '').toLowerCase();
        var cardYear = (card.getAttribute('data-year') || '').toLowerCase();
        var match = true;

        if (q && text.indexOf(q) === -1) {
          match = false;
        }
        if (type && cardType !== type) {
          match = false;
        }
        if (region && cardRegion.indexOf(region) === -1) {
          match = false;
        }
        if (year && cardYear !== year) {
          match = false;
        }

        card.hidden = !match;
        if (match) {
          visible += 1;
        }
      });

      if (empty) {
        empty.hidden = visible !== 0;
      }
    }

    [input, typeSelect, regionSelect, yearSelect].forEach(function (element) {
      if (element) {
        element.addEventListener('input', filter);
        element.addEventListener('change', filter);
      }
    });

    filter();
  }

  function initPlayers() {
    selectAll('[data-player]').forEach(function (player) {
      var video = player.querySelector('video');
      var button = player.querySelector('[data-play-button]');
      var hlsInstance = null;
      var ready = false;

      if (!video || !button) {
        return;
      }

      function attach() {
        var stream = video.getAttribute('data-stream');
        if (!stream || ready) {
          return;
        }

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = stream;
          ready = true;
          return;
        }

        if (window.Hls && window.Hls.isSupported()) {
          hlsInstance = new window.Hls({
            enableWorker: true,
            lowLatencyMode: true
          });
          hlsInstance.loadSource(stream);
          hlsInstance.attachMedia(video);
          ready = true;
          return;
        }

        video.src = stream;
        ready = true;
      }

      function play() {
        attach();
        button.classList.add('hide');
        video.controls = true;
        var action = video.play();
        if (action && typeof action.catch === 'function') {
          action.catch(function () {
            video.controls = true;
          });
        }
      }

      button.addEventListener('click', function (event) {
        event.preventDefault();
        play();
      });

      player.addEventListener('click', function (event) {
        if (event.target === video || event.target === player) {
          if (video.paused) {
            play();
          }
        }
      });

      video.addEventListener('play', function () {
        button.classList.add('hide');
      });

      window.addEventListener('beforeunload', function () {
        if (hlsInstance) {
          hlsInstance.destroy();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initHero();
    initForms();
    initCatalog();
    initPlayers();
  });
}());

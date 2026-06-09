(function () {
  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"]/g, function (char) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
      }[char];
    });
  }

  function movieCard(movie) {
    var chips = (movie.tags || []).slice(0, 4).map(function (tag) {
      return '<span>' + escapeHtml(tag) + '</span>';
    }).join('');

    return '<article class="movie-card" data-title="' + escapeHtml(movie.title) + '" data-category="' + escapeHtml(movie.category) + '" data-region="' + escapeHtml(movie.region) + '" data-genre="' + escapeHtml(movie.genre) + '" data-year="' + escapeHtml(movie.year) + '">' +
      '<a class="movie-poster-link" href="' + escapeHtml(movie.url) + '" aria-label="' + escapeHtml(movie.title) + '">' +
      '<img src="' + escapeHtml(movie.image) + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">' +
      '<span class="poster-shade"></span><span class="poster-play">▶</span></a>' +
      '<div class="movie-card-body"><div class="movie-meta">' + escapeHtml([movie.year, movie.region, movie.genre].filter(Boolean).join(' · ')) + '</div>' +
      '<h3><a href="' + escapeHtml(movie.url) + '">' + escapeHtml(movie.title) + '</a></h3>' +
      '<p>' + escapeHtml(movie.oneLine || movie.summary || '') + '</p><div class="chip-row">' + chips + '</div></div></article>';
  }

  ready(function () {
    var toggle = document.querySelector('.mobile-toggle');
    var panel = document.querySelector('.mobile-panel');
    if (toggle && panel) {
      toggle.addEventListener('click', function () {
        panel.classList.toggle('is-open');
        document.body.classList.toggle('mobile-open', panel.classList.contains('is-open'));
      });
    }

    var hero = document.querySelector('[data-hero-carousel]');
    if (hero) {
      var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
      var dots = Array.prototype.slice.call(hero.querySelectorAll('.hero-dot'));
      var index = 0;
      var activate = function (next) {
        slides[index].classList.remove('is-active');
        dots[index].classList.remove('is-active');
        index = next;
        slides[index].classList.add('is-active');
        dots[index].classList.add('is-active');
      };
      dots.forEach(function (dot, dotIndex) {
        dot.addEventListener('click', function () {
          activate(dotIndex);
        });
      });
      if (slides.length > 1) {
        window.setInterval(function () {
          activate((index + 1) % slides.length);
        }, 5200);
      }
    }

    document.querySelectorAll('[data-filter-input]').forEach(function (input) {
      var section = input.closest('.content-section');
      var list = section ? section.querySelector('[data-filter-list]') : null;
      if (!list) {
        return;
      }
      var items = Array.prototype.slice.call(list.children);
      input.addEventListener('input', function () {
        var query = input.value.trim().toLowerCase();
        items.forEach(function (item) {
          var haystack = [
            item.getAttribute('data-title'),
            item.getAttribute('data-category'),
            item.getAttribute('data-region'),
            item.getAttribute('data-genre'),
            item.getAttribute('data-year'),
            item.innerText
          ].join(' ').toLowerCase();
          item.classList.toggle('is-hidden', query && haystack.indexOf(query) === -1);
        });
      });
    });

    var searchForm = document.getElementById('search-form');
    var searchInput = document.getElementById('search-query');
    var searchResults = document.getElementById('search-results');
    var searchTitle = document.getElementById('search-title');
    if (searchForm && searchInput && searchResults && window.SEARCH_INDEX) {
      var params = new URLSearchParams(window.location.search);
      var initialQuery = params.get('q') || '';
      searchInput.value = initialQuery;
      var render = function (query) {
        var normalized = query.trim().toLowerCase();
        if (!normalized) {
          searchTitle.textContent = '推荐影片';
          searchResults.innerHTML = window.SEARCH_INDEX.slice(0, 24).map(movieCard).join('');
          return;
        }
        var matches = window.SEARCH_INDEX.filter(function (movie) {
          return [movie.title, movie.region, movie.genre, movie.year, movie.category, (movie.tags || []).join(' '), movie.oneLine, movie.summary].join(' ').toLowerCase().indexOf(normalized) !== -1;
        });
        searchTitle.textContent = '搜索结果';
        if (matches.length) {
          searchResults.innerHTML = matches.map(movieCard).join('');
        } else {
          searchResults.innerHTML = '<div class="story-card"><h2>未找到相关影片</h2><p>可以尝试使用片名、地区、年份、类型或标签再次搜索。</p></div>';
        }
      };
      searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var query = searchInput.value.trim();
        var nextUrl = query ? './search.html?q=' + encodeURIComponent(query) : './search.html';
        window.history.replaceState(null, '', nextUrl);
        render(query);
      });
      render(initialQuery);
    }
  });

  window.setupVideoPlayer = function (source) {
    ready(function () {
      var video = document.querySelector('.movie-video');
      var overlay = document.querySelector('.play-overlay');
      if (!video || !source) {
        return;
      }
      var loaded = false;
      var hlsInstance = null;
      var loadSource = function () {
        if (loaded) {
          return;
        }
        loaded = true;
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = source;
          video.load();
        } else if (window.Hls && window.Hls.isSupported()) {
          hlsInstance = new window.Hls({ enableWorker: true, lowLatencyMode: true });
          hlsInstance.loadSource(source);
          hlsInstance.attachMedia(video);
          hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
            video.play().catch(function () {});
          });
        } else {
          video.src = source;
          video.load();
        }
      };
      var start = function () {
        loadSource();
        if (overlay) {
          overlay.classList.add('is-hidden');
        }
        video.play().catch(function () {
          if (overlay) {
            overlay.classList.remove('is-hidden');
          }
        });
      };
      if (overlay) {
        overlay.addEventListener('click', start);
      }
      video.addEventListener('click', function () {
        if (!loaded || video.paused) {
          start();
        }
      });
      video.addEventListener('play', function () {
        if (overlay) {
          overlay.classList.add('is-hidden');
        }
      });
      window.addEventListener('pagehide', function () {
        if (hlsInstance) {
          hlsInstance.destroy();
        }
      });
    });
  };
})();

const menuButton = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
}

const hero = document.querySelector("[data-hero]");

if (hero) {
  const slides = Array.from(hero.querySelectorAll(".hero-slide"));
  const dots = Array.from(hero.querySelectorAll(".hero-dot"));
  const prevButton = hero.querySelector("[data-hero-prev]");
  const nextButton = hero.querySelector("[data-hero-next]");
  let current = 0;
  let timer = null;

  const showSlide = (index) => {
    if (!slides.length) {
      return;
    }

    current = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === current);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === current);
    });
  };

  const startTimer = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => {
      showSlide(current + 1);
    }, 5000);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startTimer();
    });
  });

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      showSlide(current - 1);
      startTimer();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      showSlide(current + 1);
      startTimer();
    });
  }

  showSlide(0);
  startTimer();
}

const searchRoot = document.querySelector("[data-search-root]");

if (searchRoot && Array.isArray(window.SEARCH_MOVIES)) {
  const keywordInput = searchRoot.querySelector("[data-search-keyword]");
  const categorySelect = searchRoot.querySelector("[data-search-category]");
  const typeSelect = searchRoot.querySelector("[data-search-type]");
  const results = searchRoot.querySelector("[data-search-results]");
  const count = searchRoot.querySelector("[data-search-count]");

  const makeCard = (movie) => {
    const tags = movie.tags.slice(0, 3).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");

    return `
      <article class="movie-card">
        <a class="poster-link" href="${movie.url}" aria-label="观看 ${escapeHtml(movie.title)}">
          <img src="${movie.cover}" alt="${escapeHtml(movie.title)}" loading="lazy">
          <span class="card-badge">${escapeHtml(movie.region)}</span>
          <span class="play-hover">▶</span>
        </a>
        <div class="movie-card-body">
          <h3><a href="${movie.url}">${escapeHtml(movie.title)}</a></h3>
          <p>${escapeHtml(movie.oneLine)}</p>
          <div class="movie-meta">
            <span>★ ${escapeHtml(movie.rating)}</span>
            <span>${escapeHtml(String(movie.year))}</span>
            <span>${escapeHtml(movie.type)}</span>
          </div>
          <div class="movie-tags">${tags}</div>
        </div>
      </article>
    `;
  };

  const render = () => {
    const keyword = (keywordInput.value || "").trim().toLowerCase();
    const category = categorySelect.value;
    const type = typeSelect.value;

    let matches = window.SEARCH_MOVIES.filter((movie) => {
      const keywordText = [
        movie.title,
        movie.region,
        movie.type,
        movie.genre,
        movie.oneLine,
        movie.tags.join(" ")
      ].join(" ").toLowerCase();

      const keywordOk = !keyword || keywordText.includes(keyword);
      const categoryOk = !category || movie.categorySlug === category;
      const typeOk = !type || movie.type === type;

      return keywordOk && categoryOk && typeOk;
    });

    count.textContent = `共找到 ${matches.length} 部影片`;
    results.innerHTML = matches.slice(0, 120).map(makeCard).join("");
  };

  [keywordInput, categorySelect, typeSelect].forEach((field) => {
    field.addEventListener("input", render);
    field.addEventListener("change", render);
  });

  render();
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

(function () {
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.classList.toggle("is-open");
    });
  }

  var slides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
  var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
  var activeSlide = 0;

  function showSlide(index) {
    if (!slides.length) {
      return;
    }

    activeSlide = (index + slides.length) % slides.length;
    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("is-active", slideIndex === activeSlide);
    });
    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle("is-active", dotIndex === activeSlide);
    });
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      showSlide(Number(dot.getAttribute("data-hero-dot")) || 0);
    });
  });

  if (slides.length > 1) {
    setInterval(function () {
      showSlide(activeSlide + 1);
    }, 5200);
  }

  var panel = document.querySelector("[data-filter-panel]");
  if (!panel) {
    return;
  }

  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-card]"));
  var input = panel.querySelector("[data-filter-input]");
  var yearSelect = panel.querySelector("[data-year-filter]");
  var regionSelect = panel.querySelector("[data-region-filter]");
  var empty = document.querySelector("[data-empty-state]");
  var params = new URLSearchParams(window.location.search);
  var initialQuery = params.get("q") || "";

  function uniqueValues(name) {
    var values = cards.map(function (card) {
      return card.getAttribute(name) || "";
    }).filter(Boolean);

    return values.filter(function (value, index) {
      return values.indexOf(value) === index;
    }).sort(function (a, b) {
      return String(b).localeCompare(String(a), "zh-Hans-CN");
    });
  }

  function fillSelect(select, attr) {
    if (!select) {
      return;
    }

    uniqueValues(attr).forEach(function (value) {
      var option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }

  fillSelect(yearSelect, "data-year");
  fillSelect(regionSelect, "data-region");

  if (input && initialQuery) {
    input.value = initialQuery;
  }

  function applyFilter() {
    var keyword = input ? input.value.trim().toLowerCase() : "";
    var year = yearSelect ? yearSelect.value : "";
    var region = regionSelect ? regionSelect.value : "";
    var visible = 0;

    cards.forEach(function (card) {
      var text = [
        card.getAttribute("data-title"),
        card.getAttribute("data-region"),
        card.getAttribute("data-genre"),
        card.getAttribute("data-year"),
        card.textContent
      ].join(" ").toLowerCase();
      var ok = true;

      if (keyword && text.indexOf(keyword) === -1) {
        ok = false;
      }
      if (year && card.getAttribute("data-year") !== year) {
        ok = false;
      }
      if (region && card.getAttribute("data-region") !== region) {
        ok = false;
      }

      card.style.display = ok ? "" : "none";
      if (ok) {
        visible += 1;
      }
    });

    if (empty) {
      empty.classList.toggle("is-visible", visible === 0);
    }
  }

  [input, yearSelect, regionSelect].forEach(function (control) {
    if (control) {
      control.addEventListener("input", applyFilter);
      control.addEventListener("change", applyFilter);
    }
  });

  applyFilter();
})();

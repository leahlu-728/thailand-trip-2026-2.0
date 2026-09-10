"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const data = window.TRIP_DATA;

  if (!data) {
    document.body.innerHTML =
      "<p style='padding:30px'>无法加载旅行数据，请检查 trip-data.js。</p>";
    return;
  }

  const $ = (selector) => document.querySelector(selector);

  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const mapUrl = (place) =>
    `https://www.google.com/maps/search/?api=1&query=${
      encodeURIComponent(place)
    }`;

  const parseDate = (date) =>
    new Date(`${date}T12:00:00+07:00`);

  function formatDate(date, includeYear = false) {
    return new Intl.DateTimeFormat("zh-CN", {
      year: includeYear ? "numeric" : undefined,
      month: "long",
      day: "numeric",
      weekday: "long",
      timeZone: data.timezone
    }).format(parseDate(date));
  }

  function formatShortDate(date) {
    if (!date || date === "待确认") return "待确认";

    return new Intl.DateTimeFormat("zh-CN", {
      month: "numeric",
      day: "numeric",
      weekday: "short",
      timeZone: data.timezone
    }).format(parseDate(date));
  }

  function formatDuration(milliseconds) {
    if (milliseconds <= 0) return "已经开始";

    const days = Math.floor(milliseconds / 86400000);
    const hours = Math.floor(
      (milliseconds % 86400000) / 3600000
    );
    const minutes = Math.floor(
      (milliseconds % 3600000) / 60000
    );

    if (days > 0) {
      return `${days}天 ${hours}小时 ${minutes}分钟`;
    }

    return `${hours}小时 ${minutes}分钟`;
  }

  function renderHeader() {
    $("#trip-title").textContent = data.title;

    $("#trip-dates").textContent =
      `${formatDate(data.startDate, true)}－` +
      `${formatDate(data.endDate, true)}`;

    $("#trip-travelers").textContent =
      `同行人员：${data.travelers.join("、")}`;
  }

  function updateHeroCountdown() {
    const now = new Date();
    const start = new Date(`${data.startDate}T00:00:00+07:00`);
    const end = new Date(`${data.endDate}T23:59:59+07:00`);
    const box = $("#hero-countdown");

    if (now < start) {
      box.textContent =
        `距离出发还有 ${formatDuration(start - now)}`;
      return;
    }

    if (now <= end) {
      const dayNumber =
        Math.floor((now - start) / 86400000) + 1;

      box.textContent =
        `旅途中 · Day ${Math.min(dayNumber, 8)}`;
      return;
    }

    box.textContent = "旅程已结束 · 美好回忆永久保存";
  }

  function getNextEvent() {
    const now = new Date();

    return data.upcomingEvents
      .map((event) => ({
        ...event,
        dateObject: new Date(event.datetime)
      }))
      .sort((a, b) => a.dateObject - b.dateObject)
      .find((event) => event.dateObject > now);
  }

  function updateNextTrip() {
    const next = getNextEvent();

    if (!next) {
      $("#next-trip-icon").textContent = "✓";
      $("#next-trip-title").textContent =
        "全部预定行程已经完成";
      $("#next-trip-time").textContent = "";
      $("#next-trip-countdown").textContent = "旅途愉快";
      return;
    }

    const now = new Date();

    const dateText = new Intl.DateTimeFormat("zh-CN", {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: data.timezone
    }).format(next.dateObject);

    $("#next-trip-icon").textContent = next.icon;

    $("#next-trip-title").textContent =
      next.title +
      (next.approximate ? "（时间待确认）" : "");

    $("#next-trip-time").textContent = dateText;

    $("#next-trip-countdown").textContent =
      formatDuration(next.dateObject - now);
  }

  function renderNotices() {
    $("#notice-list").innerHTML = data.notices
      .map(
        (notice) => `
          <div class="notice ${
            notice.type === "danger" ? "danger" : ""
          }">
            ${notice.type === "danger" ? "⚠️" : "💡"}
            ${escapeHtml(notice.text)}
          </div>
        `
      )
      .join("");
  }

  function renderOverview() {
    const days =
      Math.round(
        (parseDate(data.endDate) - parseDate(data.startDate)) /
          86400000
      ) + 1;

    $("#overview-grid").innerHTML = `
      <article class="overview-card">
        <span>旅行日期</span>
        <strong>
          ${escapeHtml(formatShortDate(data.startDate))}
          －
          ${escapeHtml(formatShortDate(data.endDate))}
        </strong>
      </article>

      <article class="overview-card">
        <span>旅行时长</span>
        <strong>${days}天 ${days - 1}夜</strong>
      </article>

      <article class="overview-card">
        <span>同行人员</span>
        <strong>${escapeHtml(data.travelers.join("、"))}</strong>
      </article>

      <article class="overview-card">
        <span>目的地</span>
        <strong>曼谷、清迈</strong>
      </article>

      <article class="overview-card">
        <span>酒店</span>
        <strong>${data.hotels.length}家已预订</strong>
      </article>

      <article class="overview-card">
        <span>当地时区</span>
        <strong>泰国时间 UTC+7</strong>
      </article>
    `;
  }

  function getNextCardDeparture(card) {
    const now = new Date();

    return card.departures
      .map((date) => new Date(date))
      .sort((a, b) => a - b)
      .find((date) => date > now);
  }

  function renderJourneyCards() {
    const track = $("#journey-track");

    track.innerHTML = data.journeyCards
      .map((card) => {
        const segments = card.segments
          .map(
            (segment) => `
              <section class="journey-segment">
                <div class="segment-meta">
                  <span>${escapeHtml(segment.date)}</span>

                  <span>
                    ${escapeHtml(segment.provider)}
                    ·
                    ${escapeHtml(segment.number)}
                  </span>
                </div>

                <div class="airport-route">
                  <div class="airport">
                    <strong class="airport-code">
                      ${escapeHtml(segment.fromCode)}
                    </strong>

                    <span class="airport-city">
                      ${escapeHtml(segment.fromCity)}
                    </span>
                  </div>

                  <div class="route-arrow" aria-hidden="true">
                    <span>→</span>
                    <small>${escapeHtml(segment.mode)}</small>
                  </div>

                  <div class="airport">
                    <strong class="airport-code">
                      ${escapeHtml(segment.toCode)}
                    </strong>

                    <span class="airport-city">
                      ${escapeHtml(segment.toCity)}
                    </span>
                  </div>
                </div>

                <div class="segment-times">
                  <span>
                    ${escapeHtml(segment.departure)} 出发
                  </span>

                  <span>
                    ${escapeHtml(segment.arrival)} 抵达
                  </span>
                </div>
              </section>
            `
          )
          .join("");

        return `
          <article class="journey-card">
            <p class="journey-card-label">
              ${escapeHtml(card.label)}
            </p>

            <h3>${escapeHtml(card.title)}</h3>

            <p class="journey-travelers">
              ${escapeHtml(card.travelers)}
            </p>

            ${segments}

            <div class="journey-countdown">
              <span>距离本组下一段出发</span>

              <strong
                data-card-countdown="${escapeHtml(card.title)}"
              >
                正在计算
              </strong>
            </div>
          </article>
        `;
      })
      .join("");

    $("#journey-dots").innerHTML = data.journeyCards
      .map(
        (_, index) => `
          <button
            class="journey-dot ${index === 0 ? "active" : ""}"
            type="button"
            data-slide="${index}"
            aria-label="查看第${index + 1}张交通卡"
          ></button>
        `
      )
      .join("");

    setupJourneySlider();
    updateJourneyCountdowns();
  }

  function updateJourneyCountdowns() {
    document
      .querySelectorAll("[data-card-countdown]")
      .forEach((element, index) => {
        const card = data.journeyCards[index];
        const next = getNextCardDeparture(card);

        element.textContent = next
          ? formatDuration(next - new Date())
          : "本组行程已结束";
      });
  }

  function setupJourneySlider() {
    const track = $("#journey-track");
    const cards = [...track.querySelectorAll(".journey-card")];
    const dots = [
      ...document.querySelectorAll(".journey-dot")
    ];
    const page = $("#journey-page");

    function activate(index) {
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle(
          "active",
          dotIndex === index
        );
      });

      page.textContent = `${index + 1} / ${cards.length}`;
    }

    function detectCard() {
      const center =
        track.scrollLeft + track.clientWidth / 2;

      let activeIndex = 0;
      let shortestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter =
          card.offsetLeft + card.offsetWidth / 2;

        const distance =
          Math.abs(cardCenter - center);

        if (distance < shortestDistance) {
          shortestDistance = distance;
          activeIndex = index;
        }
      });

      activate(activeIndex);
    }

    let scrollTimer;

    track.addEventListener("scroll", () => {
      window.clearTimeout(scrollTimer);

      scrollTimer = window.setTimeout(
        detectCard,
        70
      );
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        cards[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      });
    });

    activate(0);
  }

  function renderRouteMap() {
    const route = data.routeMap;
    const image = $("#route-map-image");

    image.src = route.image;
    image.alt = route.alt;

    $("#route-navigation").href =
      route.navigationUrl;

    $("#route-stops").innerHTML = route.stops
      .map(
        (stop) => `
          <div class="route-stop">
            <span class="route-stop-number">
              ${escapeHtml(stop.number)}
            </span>

            <strong>${escapeHtml(stop.city)}</strong>
            <small>${escapeHtml(stop.date)}</small>
          </div>
        `
      )
      .join("");
  }

  function renderDays() {
    $("#day-list").innerHTML = data.days
      .map((day, index) => {
        const items = day.items
          .map(
            (item) => `
              <li class="timeline-item">
                <div class="timeline-time">
                  ${escapeHtml(item.time)}
                </div>

                <div class="timeline-content">
                  <h4>${escapeHtml(item.title)}</h4>

                  ${
                    item.note
                      ? `<p>${escapeHtml(item.note)}</p>`
                      : ""
                  }

                  ${
                    item.status
                      ? `
                        <span class="status ${
                          item.status.includes("待")
                            ? "pending"
                            : ""
                        }">
                          ${escapeHtml(item.status)}
                        </span>
                      `
                      : ""
                  }

                  ${
                    item.place
                      ? `
                        <a
                          class="map-button"
                          href="${mapUrl(item.place)}"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          打开地图
                        </a>
                      `
                      : ""
                  }
                </div>
              </li>
            `
          )
          .join("");

        return `
          <article class="day-card ${
            day.risk ? "risk" : ""
          }">
            <header class="day-header">
              <div>
                <p class="day-date">
                  Day ${index + 1} ·
                  ${escapeHtml(formatDate(day.date))}
                </p>

                <h3>${escapeHtml(day.title)}</h3>
              </div>

              <span class="city-tag">
                ${escapeHtml(day.city)}
              </span>
            </header>

            <ol class="timeline">${items}</ol>

            ${
              day.warning
                ? `
                  <div class="inline-warning">
                    ⚠️ ${escapeHtml(day.warning)}
                  </div>
                `
                : ""
            }
          </article>
        `;
      })
      .join("");
  }

  function renderTransport() {
    $("#transport-list").innerHTML = data.transport
      .map(
        (item) => `
          <article class="info-card">
            <span class="status ${
              item.risk ? "danger" : ""
            }">
              ${escapeHtml(item.category)}
              ${item.risk ? " · 衔接风险" : ""}
            </span>

            <h3>
              ${escapeHtml(item.provider)}
              ${item.number ? ` ${escapeHtml(item.number)}` : ""}
            </h3>

            <dl>
              <div class="info-row">
                <dt>日期</dt>
                <dd>${escapeHtml(formatShortDate(item.date))}</dd>
              </div>

              <div class="info-row">
                <dt>人员</dt>
                <dd>${escapeHtml(item.travelers)}</dd>
              </div>

              <div class="info-row">
                <dt>路线</dt>
                <dd>
                  ${escapeHtml(item.from)}
                  →
                  ${escapeHtml(item.to)}
                </dd>
              </div>

              <div class="info-row">
                <dt>时间</dt>
                <dd>
                  ${escapeHtml(item.departure)}
                  →
                  ${escapeHtml(item.arrival)}
                </dd>
              </div>

              <div class="info-row">
                <dt>状态</dt>
                <dd>${escapeHtml(item.status)}</dd>
              </div>
            </dl>

            <div class="card-actions">
              <a
                class="map-button"
                href="${mapUrl(item.from)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                查看出发地
              </a>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderHotels() {
    $("#hotel-list").innerHTML = data.hotels
      .map(
        (hotel) => `
          <article class="info-card">
            <span class="status">
              ${escapeHtml(hotel.status)}
            </span>

            <h3>${escapeHtml(hotel.name)}</h3>

            <dl>
              <div class="info-row">
                <dt>城市</dt>
                <dd>${escapeHtml(hotel.city)}</dd>
              </div>

              <div class="info-row">
                <dt>入住</dt>
                <dd>${escapeHtml(formatShortDate(hotel.checkin))}</dd>
              </div>

              <div class="info-row">
                <dt>退房</dt>
                <dd>${escapeHtml(formatShortDate(hotel.checkout))}</dd>
              </div>

              <div class="info-row">
                <dt>地址</dt>
                <dd>${escapeHtml(hotel.address)}</dd>
              </div>
            </dl>

            <div class="card-actions">
              <a
                class="map-button"
                href="${mapUrl(hotel.address)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                打开地图
              </a>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderPlaces() {
    $("#place-list").innerHTML = Object.entries(data.places)
      .map(([groupName, places]) => {
        const cards = places
          .map(
            (place) => `
              <article class="place-item">
                <h4>${escapeHtml(place.name)}</h4>
                <p>${escapeHtml(place.note)}</p>

                <a
                  class="map-button"
                  href="${mapUrl(place.query || place.name)}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  打开地图
                </a>
              </article>
            `
          )
          .join("");

        return `
          <section class="place-group">
            <h3>${escapeHtml(groupName)}</h3>
            <div class="place-grid">${cards}</div>
          </section>
        `;
      })
      .join("");
  }

  function renderBookings() {
    $("#booking-list").innerHTML = data.bookings
      .map(
        (booking) => `
          <article class="info-card">
            <span class="status ${
              booking.status.includes("待")
                ? "pending"
                : ""
            }">
              ${escapeHtml(booking.status)}
            </span>

            <h3>${escapeHtml(booking.name)}</h3>

            <dl>
              <div class="info-row">
                <dt>日期</dt>
                <dd>
                  ${
                    booking.date === "待确认"
                      ? "待确认"
                      : escapeHtml(
                          formatShortDate(booking.date)
                        )
                  }
                </dd>
              </div>

              <div class="info-row">
                <dt>时间</dt>
                <dd>${escapeHtml(booking.time)}</dd>
              </div>

              <div class="info-row">
                <dt>备注</dt>
                <dd>${escapeHtml(booking.note)}</dd>
              </div>
            </dl>
          </article>
        `
      )
      .join("");
  }

  function renderSharedExpense() {
    const expense = data.sharedExpense;
    const link = $("#expense-link");

    $("#expense-title").textContent =
      expense.title;

    $("#expense-description").textContent =
      expense.description;

    $("#expense-status").textContent =
      expense.status;

    if (expense.url) {
      link.href = expense.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "打开共享账本 ↗";
      link.classList.remove("disabled");
      link.removeAttribute("aria-disabled");
    } else {
      link.href = "#";
      link.textContent = "记账表格待绑定";
      link.classList.add("disabled");
      link.setAttribute("aria-disabled", "true");

      link.addEventListener("click", (event) => {
        event.preventDefault();
      });
    }
  }

  function readStorage(key) {
    try {
      return JSON.parse(
        localStorage.getItem(key) || "{}"
      );
    } catch {
      return {};
    }
  }

  function renderChecklist(containerId, items, key) {
    const saved = readStorage(key);

    document.getElementById(containerId).innerHTML =
      items
        .map(
          (item, index) => `
            <label class="check-item">
              <input
                type="checkbox"
                data-key="${escapeHtml(key)}"
                data-index="${index}"
                ${saved[index] ? "checked" : ""}
              >

              <span>${escapeHtml(item)}</span>
            </label>
          `
        )
        .join("");
  }

  function setupChecklist() {
    document.addEventListener("change", (event) => {
      const checkbox = event.target.closest(
        'input[type="checkbox"][data-key]'
      );

      if (!checkbox) return;

      const key = checkbox.dataset.key;
      const saved = readStorage(key);

      saved[checkbox.dataset.index] =
        checkbox.checked;

      localStorage.setItem(
        key,
        JSON.stringify(saved)
      );
    });

    document
      .querySelectorAll("[data-reset]")
      .forEach((button) => {
        button.addEventListener("click", () => {
          const type = button.dataset.reset;

          const key =
            type === "todos"
              ? "thailand-2026-todos"
              : "thailand-2026-packing";

          localStorage.removeItem(key);

          if (type === "todos") {
            renderChecklist(
              "todo-list",
              data.todos,
              key
            );
          } else {
            renderChecklist(
              "packing-list",
              data.packing,
              key
            );
          }
        });
      });
  }

  function setupMapModal() {
    const modal = $("#map-modal");
    const openButton = $("#open-map");
    const closeButton = $("#close-map");

    function openModal() {
      modal.hidden = false;
      document.body.classList.add("modal-open");
      closeButton.focus();
    }

    function closeModal() {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
      openButton.focus();
    }

    openButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.hidden) {
        closeModal();
      }
    });
  }

  function setupNavigation() {
    const toggle = $("#nav-toggle");
    const links = $("#nav-links");

    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");

      toggle.setAttribute(
        "aria-expanded",
        String(open)
      );
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");

        toggle.setAttribute(
          "aria-expanded",
          "false"
        );
      });
    });
  }

  renderHeader();
  renderNotices();
  renderOverview();
  renderJourneyCards();
  renderRouteMap();
  renderDays();
  renderTransport();
  renderHotels();
  renderPlaces();
  renderBookings();
  renderSharedExpense();

  renderChecklist(
    "todo-list",
    data.todos,
    "thailand-2026-todos"
  );

  renderChecklist(
    "packing-list",
    data.packing,
    "thailand-2026-packing"
  );

  updateHeroCountdown();
  updateNextTrip();

  setupChecklist();
  setupMapModal();
  setupNavigation();

  window.setInterval(() => {
    updateHeroCountdown();
    updateNextTrip();
    updateJourneyCountdowns();
  }, 60000);
});

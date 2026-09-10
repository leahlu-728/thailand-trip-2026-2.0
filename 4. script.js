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

  const mapUrl = (query) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      query
    )}`;

  const parseTripDate = (date) =>
    new Date(`${date}T12:00:00+07:00`);

  const formatDate = (date, withYear = false) =>
    new Intl.DateTimeFormat("zh-CN", {
      timeZone: data.timezone,
      year: withYear ? "numeric" : undefined,
      month: "long",
      day: "numeric",
      weekday: "long"
    }).format(parseTripDate(date));

  const shortDate = (date) => {
    if (!date || date === "待确认") return "待确认";

    return new Intl.DateTimeFormat("zh-CN", {
      timeZone: data.timezone,
      month: "numeric",
      day: "numeric",
      weekday: "short"
    }).format(parseTripDate(date));
  };

  function renderHeader() {
    $("#trip-title").textContent = data.title;
    $("#trip-dates").textContent =
      `${formatDate(data.startDate, true)} — ${formatDate(data.endDate, true)}`;
    $("#trip-travelers").textContent =
      `同行人员：${data.travelers.join("、")}`;
  }

  function updateCountdown() {
    const box = $("#countdown");
    const now = new Date();
    const start = new Date(`${data.startDate}T00:00:00+07:00`);
    const end = new Date(`${data.endDate}T23:59:59+07:00`);

    if (now < start) {
      const milliseconds = start - now;
      const days = Math.ceil(milliseconds / 86400000);
      box.textContent = `距离出发还有 ${days} 天`;
      return;
    }

    if (now <= end) {
      const dayNumber =
        Math.floor((now - start) / 86400000) + 1;
      box.textContent = `旅途中 · Day ${Math.min(dayNumber, 8)}`;
      return;
    }

    box.textContent = "旅程已结束 · 美好回忆永久保存";
  }

  function renderNotices() {
    $("#notices").innerHTML = data.notices
      .map(
        (notice) => `
          <div class="notice ${notice.type === "danger" ? "danger" : ""}">
            ${notice.type === "danger" ? "⚠️" : "💡"}
            ${escapeHtml(notice.text)}
          </div>
        `
      )
      .join("");
  }

  function renderOverview() {
    const nights = Math.round(
      (parseTripDate(data.endDate) - parseTripDate(data.startDate)) /
        86400000
    );

    $("#overview-grid").innerHTML = `
      <article class="overview-card">
        <span>旅行日期</span>
        <strong>${escapeHtml(shortDate(data.startDate))}－${escapeHtml(
          shortDate(data.endDate)
        )}</strong>
      </article>

      <article class="overview-card">
        <span>旅行时长</span>
        <strong>${nights + 1}天 ${nights}夜</strong>
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
        <span>时区</span>
        <strong>泰国时间 UTC+7</strong>
      </article>
    `;
  }

  function statusLabel(item) {
    if (!item.status) return "";

    let className = "pending";

    if (item.status.includes("已")) {
      className = "confirmed";
    }

    return `
      <span class="card-label ${className}">
        ${escapeHtml(item.status)}
      </span>
    `;
  }

  function renderDays() {
    $("#days-list").innerHTML = data.days
      .map((day, index) => {
        const items = day.items
          .map(
            (item) => `
              <li class="timeline-item">
                <div class="timeline-time">${escapeHtml(item.time)}</div>

                <div class="timeline-content">
                  <h4>${escapeHtml(item.title)}</h4>

                  ${
                    item.note
                      ? `<p>${escapeHtml(item.note)}</p>`
                      : ""
                  }

                  ${
                    item.status
                      ? `<span class="card-label ${
                          item.status.includes("已")
                            ? "confirmed"
                            : "pending"
                        }">${escapeHtml(item.status)}</span>`
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
          <article class="day-card ${day.risk ? "risk-day" : ""}">
            <header class="day-header">
              <div>
                <p class="day-date">
                  Day ${index + 1} · ${escapeHtml(formatDate(day.date))}
                </p>
                <h3>${escapeHtml(day.title)}</h3>
              </div>

              <span class="day-city">${escapeHtml(day.city)}</span>
            </header>

            <ol class="timeline">
              ${items}
            </ol>

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
            <span class="card-label ${item.risk ? "risk" : ""}">
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
                <dd>${escapeHtml(shortDate(item.date))}</dd>
              </div>

              <div class="info-row">
                <dt>人员</dt>
                <dd>${escapeHtml(item.travelers)}</dd>
              </div>

              <div class="info-row">
                <dt>路线</dt>
                <dd>${escapeHtml(item.from)} → ${escapeHtml(item.to)}</dd>
              </div>

              <div class="info-row">
                <dt>时间</dt>
                <dd>
                  ${escapeHtml(item.departure)} → ${escapeHtml(item.arrival)}
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
            <span class="card-label confirmed">
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
                <dd>${escapeHtml(shortDate(hotel.checkin))}</dd>
              </div>

              <div class="info-row">
                <dt>退房</dt>
                <dd>${escapeHtml(shortDate(hotel.checkout))}</dd>
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
            ${statusLabel(booking)}

            <h3>${escapeHtml(booking.name)}</h3>

            <dl>
              <div class="info-row">
                <dt>日期</dt>
                <dd>
                  ${
                    booking.date === "待确认"
                      ? "待确认"
                      : escapeHtml(shortDate(booking.date))
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

  function safeReadStorage(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "{}");
    } catch {
      return {};
    }
  }

  function renderChecklist(containerId, items, storageKey) {
    const container = document.getElementById(containerId);
    const saved = safeReadStorage(storageKey);

    container.innerHTML = items
      .map(
        (item, index) => `
          <label class="check-item">
            <input
              type="checkbox"
              data-storage-key="${escapeHtml(storageKey)}"
              data-index="${index}"
              ${saved[index] ? "checked" : ""}
            >
            <span>${escapeHtml(item)}</span>
          </label>
        `
      )
      .join("");
  }

  function bindChecklistEvents() {
    document.addEventListener("change", (event) => {
      const input = event.target.closest(
        'input[type="checkbox"][data-storage-key]'
      );

      if (!input) return;

      const storageKey = input.dataset.storageKey;
      const index = input.dataset.index;
      const saved = safeReadStorage(storageKey);

      saved[index] = input.checked;
      localStorage.setItem(storageKey, JSON.stringify(saved));
    });

    document.querySelectorAll("[data-reset-list]").forEach((button) => {
      button.addEventListener("click", () => {
        const list = button.dataset.resetList;
        const storageKey =
          list === "todos" ? "thailandTripTodos" : "thailandTripPacking";

        localStorage.removeItem(storageKey);

        if (list === "todos") {
          renderChecklist("todo-list", data.todos, storageKey);
        } else {
          renderChecklist("packing-list", data.packing, storageKey);
        }
      });
    });
  }

  function renderEmptySections() {
    $("#budget-content").innerHTML = data.budget.length
      ? ""
      : `
        <div class="empty-state">
          <strong>预算待补充</strong>
          <p>
            尚未提供总预算或交通、住宿、餐饮、门票等分类预算。
          </p>
        </div>
      `;

    $("#emergency-content").innerHTML = data.emergency.length
      ? ""
      : `
        <div class="empty-state">
          <strong>紧急信息待补充</strong>
          <p>
            建议出发前补充旅行保险电话、紧急联系人和领事保护信息。
            请勿把护照号码等敏感信息放在公开网站。
          </p>
        </div>
      `;
  }

  function setupNavigation() {
    const toggle = $("#nav-toggle");
    const links = $("#nav-links");

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  renderHeader();
  updateCountdown();
  renderNotices();
  renderOverview();
  renderDays();
  renderTransport();
  renderHotels();
  renderPlaces();
  renderBookings();

  renderChecklist(
    "todo-list",
    data.todos,
    "thailandTripTodos"
  );

  renderChecklist(
    "packing-list",
    data.packing,
    "thailandTripPacking"
  );

  renderEmptySections();
  bindChecklistEvents();
  setupNavigation();

  window.setInterval(updateCountdown, 60 * 60 * 1000);
});

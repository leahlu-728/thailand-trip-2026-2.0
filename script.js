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

    box.textContent = "旅程已结束 · 美好回忆

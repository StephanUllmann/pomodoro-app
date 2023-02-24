"use strict";

const timerInnerEl = document.querySelector(".timer__inner");
const settingsIconEl = document.querySelector(".settings__icon");
const overlayEl = document.querySelector(".overlay");
const settingsHideEl = document.getElementById("settings-hide");
const applyBtnEl = document.querySelector(".btn--settings");

const timerArcEl = document.getElementById("timer-arc");

//////////////
// Code snippet from [@opsb](https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle)

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// Snippet End

const openModal = function () {
  overlayEl.classList.remove("hidden");
  settingsHideEl.classList.remove("hidden");
};

const closeModal = function () {
  overlayEl.classList.add("hidden");
  settingsHideEl.classList.add("hidden");
};

const setupListeners = function () {
  settingsIconEl.addEventListener("click", () => {
    openModal();
  });

  overlayEl.addEventListener("click", () => {
    closeModal();
  });

  applyBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
  });

  window.addEventListener("DOMContentLoaded", function () {
    const centerX = timerInnerEl.offsetWidth / 2;
    const centerY = timerInnerEl.offsetHeight / 2;
    const radius = centerX * 0.9;
    const startAngle = 0;
    const endAngle = 359.9;

    timerArcEl.setAttribute(
      "d",
      describeArc(centerX, centerY, radius, startAngle, endAngle)
    );
  });
};

const init = function () {
  setupListeners();
  openModal();
};

init();

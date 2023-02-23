"use strict";

const timerInnerEl = document.querySelector(".timer__inner");
const settingsIconEl = document.querySelector(".settings__icon");
const overlayEl = document.querySelector(".overlay");
const settingsEl = document.querySelector(".settings__menu");

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

window.onload = function () {
  const centerX = timerInnerEl.offsetWidth / 2;
  const centerY = timerInnerEl.offsetHeight / 2;
  const radius = centerX * 0.9;
  const startAngle = 0;
  const endAngle = 359;

  document
    .getElementById("timer-arc")
    .setAttribute(
      "d",
      describeArc(centerX, centerY, radius, startAngle, endAngle)
    );
};

// Snippet End

settingsIconEl.addEventListener("click", () => {
  overlayEl.classList.remove("hidden");
  settingsEl.classList.remove("hidden");
});

overlayEl.addEventListener("click", () => {
  overlayEl.classList.add("hidden");
  settingsEl.classList.add("hidden");
});

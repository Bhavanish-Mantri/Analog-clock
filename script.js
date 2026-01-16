const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");
const digital = document.getElementById("digital");

const timezoneSelect = document.getElementById("timezone");
const offsetInput = document.getElementById("offset");
const themeBtn = document.getElementById("themeToggle");

let theme = localStorage.getItem("theme") || "light";
document.documentElement.dataset.theme = theme;

themeBtn.onclick = () => {
  theme = theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
};

timezoneSelect.onchange = () => {
  offsetInput.hidden = timezoneSelect.value !== "offset";
};

function getTime() {
  const now = new Date();

  if (timezoneSelect.value === "utc") {
    return new Date(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds(),
      now.getUTCMilliseconds()
    );
  }

  if (timezoneSelect.value === "offset") {
    const offset = Number(offsetInput.value || 0);
    return new Date(now.getTime() + offset * 3600000);
  }

  return now;
}

function updateClock() {
  const time = getTime();

  const ms = time.getMilliseconds();
  const sec = time.getSeconds() + ms / 1000;
  const min = time.getMinutes() + sec / 60;
  const hr = (time.getHours() % 12) + min / 60;

  hourHand.style.transform = `rotate(${hr * 30}deg)`;
  minuteHand.style.transform = `rotate(${min * 6}deg)`;
  secondHand.style.transform = `rotate(${sec * 6}deg)`;

  digital.textContent = time.toLocaleTimeString();

  requestAnimationFrame(updateClock);
}

requestAnimationFrame(updateClock);

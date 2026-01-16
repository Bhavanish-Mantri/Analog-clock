# ⏰ Analog Clock – Chrome New Tab Extension

Live Demo:  
👉 https://bhavanish-mantri.github.io/Analog-clock/

This project is an **Analog Clock Chrome Extension** that replaces the default **New Tab page** with a real-time analog clock along with a digital time display.

Every time a new tab is opened in the browser, the analog clock is shown instead of the default Chrome new tab content.

---

## 📌 Project Overview

The Analog Clock extension displays:
- A real-time **analog clock**
- A **digital clock** showing the current time
- Smooth movement of hour, minute, and second hands
- Theme toggle (Light / Dark)
- Timezone support (Local, UTC, Custom Offset)

The project is built using **HTML, CSS, JavaScript**, and Chrome’s **Extension API**.

---

## 🎯 Features

- ⏱️ Real-time analog clock  
- 🕒 Digital time display  
- 🎨 Light & Dark theme toggle  
- 🌍 Timezone selection (Local / UTC / Custom offset)  
- 🔄 Smooth animation using `requestAnimationFrame`  
- 🧩 Chrome New Tab page override  
- 💾 Theme preference saved using `localStorage`

---

## 🧠 Technologies Used

- HTML5  
- CSS3  
- JavaScript  
- Chrome Extension (Manifest V3)

---

## 🗂️ Project Structure
```
Analog-Clock
│
├── index.html
├── style.css
├── script.js
├── manifest.json # Chrome extension configuration
├── clock.png
└── 2.png # Extension icon
```

---

## ⚙️ How It Works

1. The clock hands rotate based on the system time.  
2. JavaScript calculates rotation angles for hour, minute, and second hands.  
3. `requestAnimationFrame` ensures smooth and accurate animation.  
4. The `manifest.json` file overrides Chrome’s New Tab page.  
5. Whenever a new tab is opened, the analog clock page is displayed.

---

## 🧩 How to Install the Extension (Developer Mode)

1. Open **Google Chrome**  
2. Go to:  ```chrome://extensions/```
3. Enable **Developer Mode** (top-right corner)  
4. Click **Load unpacked**  
5. Select the project folder (`Analog-Clock`)  
6. Open a new tab — the analog clock will appear 🎉

---

## 📝 Role of `manifest.json`

The `manifest.json` file:
- Defines the project as a Chrome extension  
- Provides extension details (name, version, description)  
- Overrides the Chrome New Tab page using:
```json
"chrome_url_overrides": {
 "newtab": "index.html"
}
```
---

## 🚀 Future Improvements

- Alarm and reminder feature  
- World clock presets  
- Tick sound toggle   
- Publish on Chrome Web Store  

---

## 📄 License

Open for learning and personal use.

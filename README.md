# Glow in the Dark | Ambient Light API

## Overview
This project demonstrates the **Ambient Light Sensor API**, an experimental web API that allows web applications to detect ambient light levels. The API is currently behind a feature flag in Chrome and Edge.

### Key Features
- Uses the **Ambient Light Sensor API** to detect changes in light levels.
- Displays a **Schrödinger's Cat** image with dynamic text:
  - "Alive" in normal lighting.
  - "Dead" with a neon glow effect in the dark.
- Mimics the "glow in the dark" effect seen in hoodies and sweatshirts.
- Displays real-time **lux readings** from the sensor.
- Could be used for **e-commerce** applications to showcase glow-in-the-dark products dynamically.

## Live Demo
[Check out the live version here!](https://ambient-light.glitch.me/)

## Getting Started

### 1. Enable Ambient Light Sensor API in Chrome
Since this API is **experimental**, you need to enable the flag in Chrome:
1. Open Chrome and go to `chrome://flags`
2. Search for **#enable-generic-sensor-extra-classes**
3. Set it to **Enabled**
4. Restart the browser

### 2. Running the Project Locally
#### Clone the repository:
```sh
git clone https://github.com/yashrajbharti/Glow-in-the-dark.git
cd Glow-in-the-dark
```
#### Open in a browser:
Simply open `index.html` in your browser after enabling the necessary Chrome flag.

## Remix & Contributions
Want to modify or experiment? Remix the project on Glitch:
[Remix on Glitch](https://glitch.com/edit/#!/ambient-light)

### Contributing
Feel free to submit PRs or issues via GitHub:
[GitHub Repository](https://github.com/yashrajbharti/Glow-in-the-dark)

## Browser Compatibility
| Browser         | Support |
|----------------|---------|
| **Chrome**     | ✅ Requires flag (#enable-generic-sensor-extra-classes) |
| **Edge**       | ⚠️ Partial support, requires manual enabling |
| **Firefox**    | ❌ Not supported |
| **Safari**     | ❌ Not supported |

## License
This project is licensed under the **MIT License**.


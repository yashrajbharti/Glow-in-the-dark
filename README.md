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
- As a fallback, when the API is not supported, the neon effect can happen on `:hover`.
- Could be used for **e-commerce** applications to showcase glow-in-the-dark products dynamically.

> [!NOTE]
> With the flag enabled, one can keep the phone in a place with good light to see the "alive version" of Schrödinger's cat and a place with less light entering the sensor (usually at the top of the phone) to see the "dead effect" with a neon glow. The `sensor.illuminance` value defines the lightness of `oklch()` colors for this effect to take place.

## Ambient Light Sensor API

The **Ambient Light Sensor API** is an experimental web API that enables web applications to access real-time data about the surrounding light levels using a device's light sensor. This API allows websites to adapt to environmental lighting, enhancing the user experience with dynamic changes based on ambient conditions. The `AmbientLightSensor` provides readings in lux, the unit of illuminance, helping developers create context-aware experiences such as automatically adjusting brightness or activating features or effects in low-light environments.

The `AmbientLightSensor` can be instantiated with optional configuration settings like the `frequency` property, which controls how often the sensor provides updates.

### Code Example

Here’s a simple example of how to use the `AmbientLightSensor`:

```javascript
// Create a new instance of the AmbientLightSensor
const sensor = new AmbientLightSensor({ frequency: 1 });

// Start the sensor to begin receiving updates
sensor.start();

// Add an event listener to handle sensor data
sensor.addEventListener('reading', () => {
  console.log(`Current ambient light level: ${sensor.illuminance} lux`);
  if (sensor.illuminance < 10) {
    document.body.classList.add('dark'); // Trigger dark mode if light level is low
  } else {
    document.body.classList.remove('dark'); // Remove dark mode if light level is sufficient
  }
});

// Handle any errors (e.g., sensor not available)
sensor.addEventListener('error', (event) => {
  console.log('Error occurred:', event.error.name);
});
```
In this example, the sensor is configured to update every second (`frequency: 1`). When the light level is below 10 lux, it triggers a class to apply dark mode styling.

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


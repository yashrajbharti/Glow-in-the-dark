const updateIlluminance = (illuminance) => {
  document.querySelector(".illuminance").textContent = `${illuminance} Lux`;

  const lightness = Math.min(1, illuminance / 100).toFixed(2); // good for our case; indoor luminescence detection

  document.querySelector(
    ".box"
  ).style.backgroundColor = `oklch(${lightness} 0 0)`;
  glowIllustration(illuminance);
};

const fallback = () => {
  const svgEl = document.querySelector("svg");
  svgEl.classList.add("fallback");
};

const initAmbientLightSensor = async () => {
  if (!("AmbientLightSensor" in window)) {
    console.warn("Ambient Light Sensor API not supported in this browser.");
    return;
  }

  try {
    const permission = await navigator.permissions.query({
      name: "ambient-light-sensor",
    });

    if (permission.state === "denied") {
      console.warn("Permission for Ambient Light Sensor is denied.");
      return;
    }

    const sensor = new AmbientLightSensor({ frequency: 1 });
    sensor.addEventListener("reading", () =>
      updateIlluminance(sensor.illuminance)
    );
    sensor.addEventListener("error", (event) => {
      fallback();
      console.error("Ambient Light Sensor Error:", event.error);
    });
    sensor.start();
  } catch (error) {
    fallback();
    console.error("Failed to initialize Ambient Light Sensor:", error);
  }
};

const section = document.querySelector("section");
const glowIllustration = (illuminance) => {
  if (illuminance >= 100) {
    document.documentElement.style.setProperty("--opacity", "1");
    document.documentElement.style.setProperty("--opacity-neon", "0");
    section.style.filter = "saturate(0)";
  } else if (illuminance >= 50) {
    document.documentElement.style.setProperty("--opacity", "1");
    document.documentElement.style.setProperty("--opacity-neon", "0.2");
    section.style.filter = "saturate(0.2)";
  } else {
    document.documentElement.style.setProperty("--opacity", "0.2");
    document.documentElement.style.setProperty("--opacity-neon", "1");
    section.style.filter = "saturate(1)";
  }
};

initAmbientLightSensor();

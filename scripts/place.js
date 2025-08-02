// document.addEventListener("DOMContentLoaded", () => {
//   // Footer
//   document.getElementById("year").textContent = new Date().getFullYear();
//   document.getElementById("lastModified").textContent = document.lastModified;

//   // Wind Chill
//   const temperature = parseFloat(document.getElementById("temperature").textContent);
//   const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
//   const windChillElement = document.getElementById("windChill");

//   function calculateWindChill(t, v) {
//     return (
//       13.12 +
//       0.6215 * t -
//       11.37 * Math.pow(v, 0.16) +
//       0.3965 * t * Math.pow(v, 0.16)
//     ).toFixed(1);
//   }

//   if (temperature <= 10 && windSpeed > 4.8) {
//     windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
//   } else {
//     windChillElement.textContent = "N/A";
//   }
// });
// Calculate Wind Chill Factor
function calculateWindChill(tempC, windKmh) {
    if (tempC <= 10 && windKmh > 4.8) {
        const windChill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
        return Math.round(windChill) + " °C";
    } else {
        return "N/A";
    }
}

// Static weather data (to be replaced with API later)
const temperature = 10; // °C
const windSpeed = 5;    // km/h

// Display wind chill
document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed);

// Footer dynamic content
document.getElementById('footer-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
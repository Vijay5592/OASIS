// Get DOM elements
const inputField = document.getElementById("input-field");
const inputUnit = document.getElementById("input-unit");
const outputUnit = document.getElementById("output-unit");
const convertBtn = document.getElementById("convert-btn");
const outputLabel = document.getElementById("output-label");

// Define the conversion functions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
  const celsius = fahrenheitToCelsius(fahrenheit);
  return celsiusToKelvin(celsius);
}

function kelvinToFahrenheit(kelvin) {
  const celsius = kelvinToCelsius(kelvin);
  return celsiusToFahrenheit(celsius);
}

// Define the event listener for the "Convert" button
convertBtn.addEventListener("click", function() {
  const temperature = parseFloat(inputField.value);
  
  if (isNaN(temperature)) {
    outputLabel.textContent = "Invalid input";
    return;
  }
  
  if (inputUnit.value === "Celsius") {
    if (outputUnit.value === "Fahrenheit") {
      const convertedTemp = celsiusToFahrenheit(temperature);
      outputLabel.textContent = convertedTemp.toFixed(2) + " °F";
    } else if (outputUnit.value === "Kelvin") {
      const convertedTemp = celsiusToKelvin(temperature);
      outputLabel.textContent = convertedTemp.toFixed(2) + " K";
    } else {
      outputLabel.textContent = temperature.toFixed(2) + " °C";
    }
  } else if (inputUnit.value === "Fahrenheit") {
    if (outputUnit.value === "Celsius") {
      const convertedTemp = fahrenheitToCelsius(temperature);
      outputLabel.textContent = convertedTemp.toFixed(2) + " °C";
    } else if (outputUnit.value === "Kelvin") {
      const convertedTemp = fahrenheitToKelvin(temperature);
      outputLabel.textContent = convertedTemp.toFixed(2) + " K";
    } else {
      outputLabel.textContent = temperature.toFixed(2) + " °F";
    }
  } else {
    if (outputUnit.value === "Celsius") {
      const convertedTemp = kelvinToCelsius(temperature);
      outputLabel.textContent = convertedTemp.toFixed(2) + " °C";
    } else if (outputUnit.value === "Fahrenheit") {
      const convertedTemp = kelvinToFahrenheit(temperature);
      outputLabel.textContent = convertedTemp.toFixed(2) + " °F";
    } else {
      outputLabel.textContent = temperature.toFixed(2) + " K";
    }
  }
});
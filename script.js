const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");
const message = document.getElementById("message");

// Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

// Celsius to Kelvin
function celsiusToKelvin(c) {
    return c + 273.15;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

// Fahrenheit to Kelvin
function fahrenheitToKelvin(f) {
    return ((f - 32) * 5 / 9) + 273.15;
}

// Kelvin to Celsius
function kelvinToCelsius(k) {
    return k - 273.15;
}

// Kelvin to Fahrenheit
function kelvinToFahrenheit(k) {
    return ((k - 273.15) * 9 / 5) + 32;
}


// Celsius input
celsius.addEventListener("input", function () {

    const value = parseFloat(celsius.value);

    if (isNaN(value)) {
        fahrenheit.value = "";
        kelvin.value = "";
        message.textContent = "";
        return;
    }

    if (value < -273.15) {
        message.textContent = "Temperature cannot be below absolute zero.";
        fahrenheit.value = "";
        kelvin.value = "";
        return;
    }

    message.textContent = "";

    fahrenheit.value = celsiusToFahrenheit(value).toFixed(2);
    kelvin.value = celsiusToKelvin(value).toFixed(2);
});


// Fahrenheit input
fahrenheit.addEventListener("input", function () {

    const value = parseFloat(fahrenheit.value);

    if (isNaN(value)) {
        celsius.value = "";
        kelvin.value = "";
        message.textContent = "";
        return;
    }

    if (value < -459.67) {
        message.textContent = "Temperature cannot be below absolute zero.";
        celsius.value = "";
        kelvin.value = "";
        return;
    }

    message.textContent = "";

    celsius.value = fahrenheitToCelsius(value).toFixed(2);
    kelvin.value = fahrenheitToKelvin(value).toFixed(2);
});


// Kelvin input
kelvin.addEventListener("input", function () {

    const value = parseFloat(kelvin.value);

    if (isNaN(value)) {
        celsius.value = "";
        fahrenheit.value = "";
        message.textContent = "";
        return;
    }

    if (value < 0) {
        message.textContent = "Kelvin cannot be negative.";
        celsius.value = "";
        fahrenheit.value = "";
        return;
    }

    message.textContent = "";

    celsius.value = kelvinToCelsius(value).toFixed(2);
    fahrenheit.value = kelvinToFahrenheit(value).toFixed(2);
});
function convertToCelsius() {
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");

    if (celsiusInput.value === "") {
        alert("Please enter a valid temperature in Celsius.");
        return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    resultElement.innerText = `${celsius} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit.`;
}

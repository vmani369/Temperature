function convertTemperature() {
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const temperature = parseFloat(document.getElementById('temperature').value);
    let result = 0;

    if (isNaN(temperature)) {
        alert('Please enter a valid temperature.');
        return;
    }

    if (inputUnit === outputUnit) {
        alert('Error: Input and output units cannot be the same.');
        return;
    }

    switch (inputUnit) {
        case 'celsius':
          
            if (outputUnit === 'fahrenheit') {
                result = (temperature * 9/5) + 32;
            } else if (outputUnit === 'kelvin') {
                result = temperature + 273.15;
            } else if (outputUnit === 'rankine') {
                result = (temperature + 273.15) * 9/5;
            }
            break;
        case 'fahrenheit':
           
            if (outputUnit === 'celsius') {
                result = (temperature - 32) * 5/9;
            } else if (outputUnit === 'kelvin') {
                result = (temperature + 459.67) * 5/9;
            } else if (outputUnit === 'rankine') {
                result = temperature + 459.67;
            }
            break;
        case 'kelvin':
          
            if (outputUnit === 'celsius') {
                result = temperature - 273.15;
            } else if (outputUnit === 'fahrenheit') {
                result = (temperature * 9/5) - 459.67;
            } else if (outputUnit === 'rankine') {
                result = temperature * 9/5;
            }
            break;
        case 'rankine':
         
            if (outputUnit === 'celsius') {
                result = (temperature - 491.67) * 5/9;
            } else if (outputUnit === 'fahrenheit') {
                result = temperature - 459.67;
            } else if (outputUnit === 'kelvin') {
                result = temperature * 5/9;
            }
            break;
    }

    alert(`Result: ${result.toFixed(2)} ${outputUnit}`);
}

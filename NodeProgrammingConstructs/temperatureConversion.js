// 1. Temperature Conversion using Function

function degCToDegF(degC) {
    return (degC * 9 / 5) + 32;
}

function degFToDegC(degF) {
    return (degF - 32) * 5 / 9;
}

let choice = parseInt(process.argv[2]);
let value = parseFloat(process.argv[3]);

switch (choice) {
    case 1:
        if (value >= 0 && value <= 100) {
            console.log(value + " °C =", degCToDegF(value), "°F");
        } else {
            console.log("Celsius should be between 0°C and 100°C");
        }
        break;

    case 2:
        if (value >= 32 && value <= 212) {
            console.log(value + " °F =", degFToDegC(value), "°C");
        } else {
            console.log("Fahrenheit should be between 32°F and 212°F");
        }
        break;

    default:
        console.log("Enter valid choice");
        console.log("1. Celsius to Fahrenheit");
        console.log("2. Fahrenheit to Celsius");
}

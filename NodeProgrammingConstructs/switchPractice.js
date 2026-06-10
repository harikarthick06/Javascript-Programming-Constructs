// Switch Case Practice

let choice = parseInt(process.argv[2]);
let value = parseInt(process.argv[3]);

switch (choice) {
    case 1:
        switch (value) {
            case 0:
                console.log("Zero");
                break;
            case 1:
                console.log("One");
                break;
            case 2:
                console.log("Two");
                break;
            case 3:
                console.log("Three");
                break;
            case 4:
                console.log("Four");
                break;
            case 5:
                console.log("Five");
                break;
            case 6:
                console.log("Six");
                break;
            case 7:
                console.log("Seven");
                break;
            case 8:
                console.log("Eight");
                break;
            case 9:
                console.log("Nine");
                break;
            default:
                console.log("Enter single digit number");
        }
        break;

    case 2:
        switch (value) {
            case 1:
                console.log("Sunday");
                break;
            case 2:
                console.log("Monday");
                break;
            case 3:
                console.log("Tuesday");
                break;
            case 4:
                console.log("Wednesday");
                break;
            case 5:
                console.log("Thursday");
                break;
            case 6:
                console.log("Friday");
                break;
            case 7:
                console.log("Saturday");
                break;
            default:
                console.log("Enter number between 1 and 7");
        }
        break;

    case 3:
        switch (value) {
            case 1:
                console.log("Unit");
                break;
            case 10:
                console.log("Ten");
                break;
            case 100:
                console.log("Hundred");
                break;
            case 1000:
                console.log("Thousand");
                break;
            default:
                console.log("Enter 1, 10, 100, or 1000");
        }
        break;

    default:
        console.log("Choice 1: Digit to Word");
        console.log("Choice 2: Weekday");
        console.log("Choice 3: Place Value");
}

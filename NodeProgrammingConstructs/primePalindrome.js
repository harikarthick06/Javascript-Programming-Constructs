// 3. Check prime number and its palindrome is also prime

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function getPalindrome(num) {
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    return reverse;
}

let number = parseInt(process.argv[2]);
let palindrome = getPalindrome(number);

console.log("Number:", number);
console.log("Palindrome:", palindrome);

if (isPrime(number)) {
    console.log(number + " is Prime");

    if (isPrime(palindrome)) {
        console.log("Palindrome " + palindrome + " is also Prime");
    } else {
        console.log("Palindrome " + palindrome + " is not Prime");
    }
} else {
    console.log(number + " is not Prime");
}

// 2. Check whether two numbers are palindromes

function reverseNumber(num) {
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    return reverse;
}

function checkPalindrome(num1, num2) {
    return reverseNumber(num1) === num2;
}

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);

if (checkPalindrome(num1, num2)) {
    console.log(num1 + " and " + num2 + " are Palindromes");
} else {
    console.log(num1 + " and " + num2 + " are not Palindromes");
}

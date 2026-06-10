// 1. Powers of 2 less than or equal to 2^n

let n = parseInt(process.argv[2]);

for (let i = 0; i <= n; i++) {
    console.log("2^" + i + " = " + Math.pow(2, i));
}

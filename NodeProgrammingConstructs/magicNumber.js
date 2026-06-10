// 2. Magic Number between 1 and 100
// This is automatic guessing using binary search

let low = 1;
let high = 100;
let magicNumber = parseInt(process.argv[2]);

while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid === magicNumber) {
        console.log("Magic Number is:", mid);
        break;
    } else if (magicNumber < mid) {
        high = mid - 1;
    } else {
        low = mid + 1;
    }
}

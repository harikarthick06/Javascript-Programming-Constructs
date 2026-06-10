// 3. Flip coin till Heads or Tails wins 11 times

let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let coin = Math.floor(Math.random() * 2);

    if (coin === 0) {
        headsCount++;
        console.log("Heads");
    } else {
        tailsCount++;
        console.log("Tails");
    }
}

console.log("Heads Count:", headsCount);
console.log("Tails Count:", tailsCount);

if (headsCount === 11) {
    console.log("Heads won");
} else {
    console.log("Tails won");
}

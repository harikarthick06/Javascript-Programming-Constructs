// 4. Gambler problem

let stake = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (stake > 0 && stake < goal) {
    bets++;

    let bet = Math.floor(Math.random() * 2);

    if (bet === 1) {
        stake++;
        wins++;
    } else {
        stake--;
    }
}

console.log("Final Stake:", stake);
console.log("Total Bets:", bets);
console.log("Total Wins:", wins);

if (stake === goal) {
    console.log("Gambler reached the goal");
} else {
    console.log("Gambler went broke");
}

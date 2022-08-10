const MOVES = ["r","p","s"]

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

// asks the user to enter their move and gets input
readline.question('Enter your move (r/p/s)', move => {
    console.log(`Your move is ${move}`);
    const computerMove = MOVES[getRandomInt(3)]
    console.log (`The computer's move is ${computerMove}`)
});

















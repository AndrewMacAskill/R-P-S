const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

// asks the user to enter their move and gets input
readline.question('Enter your move (r/p/s)', move => {
    console.log(`Your move is ${move}`);
});


















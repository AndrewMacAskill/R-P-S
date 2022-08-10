const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

// asks the user to enter their move and gets input
readline.question('Enter your move (r/p/s)', move => {
    console.log(`Your move is ${move}`);
    const computermove = getRandomInt(3)
    const cmoves = ["r","p","s"]
    const cmovesrps = cmoves [computermove]
    console.log (`move is ${cmovesrps}`)
});
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

















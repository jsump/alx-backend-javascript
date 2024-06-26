const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Initial prompt display
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input
rl.on('line', (input) => {
  if (input === 'exit') {
    // When the user ends the program
    console.log('This important software is now closing');
    rl.close();
  } else if (input.trim() !== '') {
    if (process.stdin.isTTY) {
      console.log(`Your name is: ${input}`);
    } else {
      console.log(`Your name is: ${input.trim()}`);
      rl.close();
    }
  }
});

// When the interface is closed
rl.on('close', () => {
  console.log('This important software is now closing');
});

module.exports = rl;

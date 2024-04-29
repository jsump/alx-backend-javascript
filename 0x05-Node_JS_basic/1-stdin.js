const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  // Check if input is from a TTY (terminal)
  terminal: process.stdin.isTTY,
});

// Initial prompt display
console.log('Welcome to Holberton School, what is your name?');

// Where we listen for user input
rl.on('line', (input) => {
  if (input === 'exit') {
    // WHen the user ends the prpgram
    console.log('This important software is now closing');
    rl.close();
  } else {
    console.log(`Your name is: ${input}`);
  }
});

// When interface is closed
rl.on('close', () => {
  console.log('This important software is now closing');
});

// When the interface is closed + non-interactive input(piped input)/TTY
if (!process.stdin.isTTY) {
  let inputData = '';
  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (chunk) => {
    inputData += chunk;
  });

  process.stdin.on('end', () => {
    console.log('Welcome to Holberton School, what is your name?');
    console.log(`Your name is: ${inputData.trim()}`);
    console.log('This important software is now closing');
  });
}

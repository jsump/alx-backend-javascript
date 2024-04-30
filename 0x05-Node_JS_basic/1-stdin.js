/**
 * This program interacts with the user through the command line.
 * It prompts the user with a message "Welcome to Holberton School, what is your name?",
 * reads the user's input, and displays "Your name is: INPUT" where INPUT is the user's name.
 * The program continues to prompt the user until the user enters "exit".
 * Upon receiving "exit", the program displays "This important software is now closing"
 * and terminates.
 * If the program receives input from a non-interactive source (e.g., piped input),
 * it displays the user's name immediately without prompting.
 */

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
    console.log('This important software is now closing\n');
    rl.close();
  } else {
    console.log(`Your name is: ${input}`);
  }
});

// When the interface is closed
rl.on('close', () => {
  console.log('This important software is now closing\n');
});

// Handle command line arguments
if (process.argv.length > 2) {
  const name = process.argv[2];
  console.log(`Your name is: ${name}\n`);
  rl.close();
}

// Handle input from non-TTY
if (!process.stdin.isTTY) {
  let inputData = '';
  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (chunk) => {
    inputData += chunk;
  });

  process.stdin.on('end', () => {
    console.log('Welcome to Holberton School, what is your name?');
    console.log(`Your name is: ${inputData.trim()}`);
    console.log('This important software is now closing\n');
  });
}

module.exports = rl;

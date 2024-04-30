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
    console.log('This important software is now closing');
    rl.close();
  } else if (input.trim() !== '') {
    console.log(`Your name is: ${input}`);
    process.exit();
  }
});

// When the interface is closed
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit();
});

module.exports = rl;

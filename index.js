// Code your solutions in this file
const names = [ 'Lisa', 'Kaitlin', 'Jan' ]
let event = 'suprise'

function writeCards(names, event) {
  let thankYouMessages = []
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return thankYouMessages;
}

// or
// This does the same thing but not returned in an array

// function writeCards(names) {
//   for (let i = 0; i < names.length; i++) {
//     console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
//   }

//   return thankYouMessages;
// }
// writeCards(names)
// or while loop

// let beginningNumber = 10;

// function countDown( beginningNumber ) {
//   while ( beginningNumber > 0 ) {
//     console.log(beginningNumber);
//     beginningNumber -= 1;
//   }
//   console.log( beginningNumber );
// }

let number = 10;

function countDown(number) {
  while (number > 0 ) {
    console.log(number);
    number -= 1
  }
  console.log(number);
}

countDown(number)
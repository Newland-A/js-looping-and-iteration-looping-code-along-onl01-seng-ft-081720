// Code your solutions in this file
const names = [ 'Lisa', 'Kaitlin', 'Jan' ]

function writeCards(names) {
  let thankYouMessages = []
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
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
let beginningNumber = 10;

function countDown( beginningNumber ) {
  while ( beginningNumber > 0 ) {
    console.log(beginningNumber);
    beginningNumber -= 1;
  }
  console.log( beginningNumber );
}
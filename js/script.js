/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let authors = [
  {
      source: 'Lao Tzu',
      quote: 'The journey of a thousand miles begins with one step',
  },
  {
      source: 'Friedrich Nietzsche',
      quote: 'That which does not kill us makes us stronger',
  },
  {
      source: 'John Lennon',
      quote: 'Life is what happens when you\'re busy making other plans',
  },
  {
      source: 'Joe Kennedy',
      quote: 'When the going gets tough, the tough get going',
  },
  {
      source: 'Mahatma Gandhi',
      quote: 'You must be the change you wish to see in the world',
  },
  {
      source: 'Mae West',
      quote: 'You only live once, but if you do it right, once is enough',
  },
  {
      source: 'Stephen King',
      quote: 'Get busy living or get busy dying',
  },
  {
      source: 'Alrded Lord Tennyson',
      quote: 'Tis better to have loved and lost than to never have loved at all',
  },

];


/***
 * `getRandomQuote` function
 * @return {object} an object containing (author, source)
***/

function getRandomQuote() {
  let number = Math.floor(Math.random() * (authors.length - 1));
  return authors[number];
} 


/***
 * `printQuote` function
 * @return {string} - An HTML string containing an author and source. 
***/

function printQuote() {
  let quote = getRandomQuote();
  let newQuote = `<p class='quote'>${quote.quote}</p>
  <p class='source'>${quote.source}</p>`;
  document.querySelector('#quote-box').innerHTML = newQuote;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
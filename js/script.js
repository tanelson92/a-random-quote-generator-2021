/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * @property {string} quotes[0].source - The author of the quote.
 * @property {string} quotes[0].quote - The quote provided by the author.
***/
let quotes = [
  {
      source: 'Lao Tzu',
      quote: 'The journey of a thousand miles begins with one step',
      year: '1868',
  },
  {
      source: 'Friedrich Nietzsche',
      quote: 'That which does not kill us makes us stronger',
      citation: 'Friedrich Nietzsche Quotes. (n.d.). BrainyQuote.com. Retrieved December 8, 2021, from BrainyQuote.com Web site: https://www.brainyquote.com/quotes/friedrich_nietzsche_101616',
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
  let number = Math.floor(Math.random() * (quotes.length - 1));
  return quotes[number];
} 


/***
 * `printQuote` function
 * @return {string} - An HTML string containing an author and source. 
***/

function printQuote() {
  let quote = getRandomQuote();
  let newQuote = `<p class='quote'>${quote.quote}</p>`;
  newQuote += `<p class='source'>${quote.source}`;

  if (quote.citation) {
    newQuote += `<span class="citation">${quote.citation}</span>`;
  } 
  if (quote.year) {
    newQuote += `<span class="year">${quote.year}</span>`;
  }
  newQuote += `</p>`;
  document.querySelector('#quote-box').innerHTML = newQuote;
  setInterval(function() {
    printQuote();
    setRandomBackground();
  }, 5000);
}

/***
 * `setRandomBackground` function
 */

function setRandomBackground() {
    let body = document.querySelector('body');
    let number = Math.floor(Math.random() * 255);
    body.style.backgroundColor = `rgb(${number},${number},${number})`;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
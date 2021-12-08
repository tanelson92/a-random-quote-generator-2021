//Build a collection of quotations from other authors.
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

//Create a function that pulls one of those quotes out at random.
function fetchQuotes() {
    let number = Math.floor(Math.random() * (authors.length - 1));
    return authors[number];
} 

//Create a function that prints that quote to the screen.
function buildQuote() {
    let quotes = fetchQuotes();
    let html = ``;
}
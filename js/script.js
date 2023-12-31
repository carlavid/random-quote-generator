/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/**
 * @type {object[]}
 * 
 * @property {string} quote - the actual quote
 * @property {string} source - name or character who said it
 * @property {string} citation - reference to the source of the quote
 * @property {number} year - the year the quote originated
 */
const quotes = [
  {
    quote: "The flower that blooms in adversity is the most rare and beautiful of all.",
    source: "The Emperor",
    citation: "Mulan",
    year: 1998,
    tags: ["inspiration", "adversity"],
  },
  {
    quote: "Our fate lives within us. You only have to be brave enough to see it.",
    source: "Merida",
    citation: "Brave",
    year: 2012,
    tags: ["courage", "bravery"],
  },
  {
    quote: "A true hero isn't measured by the size of his strength, but by the strength of his heart.",
    source: "Zeus",
    citation: "Hercules",
    year: 1997,
    tags: ["strength"],
  },
  {
    quote: "You're braver than you believe, and stronger than you seem, and smarter than you think.",
    source: "Winnie the Pooh",
    citation: "Pooh's Most Grand Adventure",
    year: 1997,
  },
  {
    quote: "Remember, you're the one who can fill the world with sunshine.",
    source: "Snow White",
    citation: "Snow White and the Seven Dwarves",
    year: 1937,
  },

];


/**
 * Function that generates a random number and uses that number to 
 * return a random quote object from the quotes array
 * @returns {object} - the quote object
 */
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};


/**
 * Function that performs 3 tasks:
 * -calls getRandomQuote function and stores returned quote object in variable 
 * -uses variable to access quote properties and build HTML string
 * -uses string to display a random quote in browser
 */
function printQuote() {
  const randomQuote = getRandomQuote();
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;

  // check if object contains citation property
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  };
  // check if object contains year property
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`
  };
  // check if object contains tags property
  if (randomQuote.tags) {
    html += `<span class="tags"> | Tags: ${randomQuote.tags.join(", ")}</span>`
  };
  // add closing p tag 
  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;
}


/**
 * function that generates random values for red, green and blue
 * and combines the values to generate a random background color;
 */ 
function randomBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = randomColor;
}


/**
 * timing function that uses setInterval() method and
 * calls printQuote function to update quote every 10 seconds
 */
function updateQuote() {
  return setInterval(printQuote, 10000);
}

/**
 * timing function that uses setInterval() method and calls 
 * randomBackgroundColor function to update background color every 10 seconds
 */
function updateBackgroundColor() {
  return setInterval(randomBackgroundColor, 10000);
}


// event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);
// event listener to change background color 
document.getElementById('load-quote').addEventListener("click", randomBackgroundColor, false);

// call functions to run intervals
updateQuote();
updateBackgroundColor();
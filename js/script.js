//Create an Array of objects to store the data for quotes
const quotes = [{
  quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  source: "Oscar Wilde",
  tags: "love",
},
{
  quote: "Be yourself; everyone else is already taken.",
  source: "Oscar Wilde",
  tags: "life",
},
{
  quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  source: "Albert Einstein",
  tags: "humor",
},
{
  quote: "So many books, so little time.",
  source: "Frank Zappa",
  year: 2002,
  tags: "humor",
},
{
  quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  source: "Bernard M. Baruch",
  tags: "life",
},
{
  quote: "A room without books is like a body without a soul.",
  source: "Marcus Tullius Cicero",
  tags: "life",
},
{
  quote: `You've gotta dance like there's nobody watching,
          Love like you'll never be hurt,
          Sing like there's nobody listening,
          And live like it's heaven on earth.`,
  source: "William W. Purkey",
  tags: "life",
},
{
  quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  source: "Dr. Seuss",
  tags: "love",
},
{
  quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
  source: "J.K. Rowling",
  citation: "Harry Potter and the Goblet of Fire",
  year: 2000,
  tags: "life",
},
{
  quote: `Don’t walk in front of me… I may not follow
          Don’t walk behind me… I may not lead
          Walk beside me… just be my friend`,
  source: "Albert Camus",
  tags: "friendship",
},
{
  quote: "No one can make you feel inferior without your consent.",
  source: "Eleanor Roosevelt",
  citation: "This is My Story",
  year: 1960,
  tags: "life",
},
{
  quote: `Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .`,
  source: "C.S. Lewis",
  citation: "The Four Loves",
  tags: "friendship",
},
{
  quote: "If you tell the truth, you don't have to remember anything.",
  source: "Mark Twain",
  tags: "life",
},
{
  quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  source: "Maya Angelou",
  tags: "life",
},
{
  quote: "A friend is someone who knows all about you and still loves you.",
  source: "Elbert Hubbard",
  tags: "friendship",
},
{
  quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  source: "Martin Luther King Jr.",
  citation: "A Testament of Hope: The Essential Writings and Speeches",
  year: 1986,
  tags: "life",
},
{
  quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
  source: "Oscar Wilde",
  citation: "The Happy Prince and Other Stories",
  tags: "humor",
},
];

//Get random quote
const getRandomQuote = (quotes) => {
const randomIndex = Math.floor(Math.random() * quotes.length);
return quotes[randomIndex];
}

// Create a new HTML for a quote.
const createHtml = (randomQuote) => {
let html = `<p class="quote">${randomQuote.quote}</p>
<p class="source">${randomQuote.source}`;
if (randomQuote.citation)
  html += `<span class="citation">${randomQuote.citation}</span>`;
if (randomQuote.year)
  html += `<span class="year">${randomQuote.year}</span>`;
if (randomQuote.tags)
  html += `<span class="tags">${randomQuote.tags}</span>`;
html += '</p>';
return html;
}

//Generate and Apply a new random background color.
const randomBackgroundColor = () => {
const x = Math.floor(Math.random() * 256);
const y = Math.floor(Math.random() * 256);
const z = Math.floor(Math.random() * 256);
const bgColor = "rgb(" + x + "," + y + "," + z + ")";
document.body.style.background = bgColor;
}

//Display quote and change background color
const printQuote = () => {
const randomQuote = getRandomQuote(quotes);
randomBackgroundColor();
document.getElementById('quote-box')
  .innerHTML = createHtml(randomQuote);
}

// Get a new quote everytime the buttom is clicked.
document.getElementById('load-quote')
.addEventListener("click", printQuote);

// Get a new quote in every 20 seconds.
setInterval(printQuote, 20000);
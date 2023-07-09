const quotesFile = require('./quotes.json');

const quotesArr= quotesFile.quotes;
const lengtOfQuotesArr = quotesArr.length; //102

const generateQuote = () => {
    const indexOfQuote = Math.floor(Math.random() * lengtOfQuotesArr);
    return `${quotesArr[indexOfQuote].quote}
${quotesArr[indexOfQuote].author}  `  
}

console.log(generateQuote());


var natural = require('natural');
var tokenizer = new natural.WordTokenizer();
var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "senticon");

const tokenizedString = tokenizer.tokenize("awesome");

// console.log(tokenizedString)

console.log(analyzer.getSentiment(tokenizedString));

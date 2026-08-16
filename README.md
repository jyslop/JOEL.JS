Joel left so we had to settle for the next best thing: a half-assed word prediction model plagarized from a previous project of mine. This time with little to none specialized NLP functions, all word data is scored gracefully from one list of token pairs and their context.

TODO: add pre-weighted attention layer, ring buffer to handle more data
```js
window.Joel.nextToken('phrase or sentence'); // returns {nextToken: 'next token in the phrase', previousPunctuation: 'punctuation of last token in phrase'}
window.Joel.appendage('full phrase prediction',tokenLength); //predicts X amount of tokens after phrase, returns full string. X being a whole number preferrably under 500-1000 tokens.

window.Joel.contextRange = 10; //sets the length of context surrounding each grabbed token, 10 by default
```

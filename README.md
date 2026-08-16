Joel left so we had to settle for the next best thing: a half-assed word prediction model plagarized from a previous project of mine. This time with little to none specialized NLP functions, all word data is scored gracefully from one list of token pairs and their context.

```js
window.nextToken('phrase or sentence'); // returns {nextToken: 'next token in the phrase', previousPunctuation: 'punctuation of last token in phrase'}
window.appendage('full phrase prediction',tokenLength) //predicts X amount of tokens after the given phrase. X being a whole number preferrably under 500-1000 tokens.
```

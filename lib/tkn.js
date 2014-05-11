var stopwords = require('stopwords').english; /* Dependency. List of english stop words. */

var regex = /\w+/g; /* regular expression to tokenise by word while ignoring punctuation. */

/** 
	* Determines whether a word belongs to the `stopwords` list.
	* `word` - String. Word in which check is to be performed.
	*
	* returns a `Boolean`.
	*/
function isStopWord (word) {
  return stopwords.indexOf(word.toLowerCase()) === -1;
}

module.exports = {
	/**
	  * Tokenises a given string, returning an Array of terms.
	  * text - String. Text to be tokenised.
	  * noStopWords - Boolean. Defines whether stop words should be removed or not.
	  *
	  * returns an `Array` of words.
		*/
	tokenise: function (text, noStopWords) {
		noStopWords = (typeof noStopWords === 'undefined') ? true : noStopWords;  // set default to `true`
		text = text.match(regex); // breaking text word-by-word
		if (noStopWords) text = text.filter(isStopWord); // removing stopwords
		return text;
	}	
}
tkn
===

[![Build Status](https://travis-ci.org/waltervascarvalho/tkn.svg?branch=master)](https://travis-ci.org/waltervascarvalho/tkn)

[![Gitter chat](https://badges.gitter.im/waltervascarvalho/tkn.png)](https://gitter.im/waltervascarvalho/tkn)

Simple word tokeniser that ignores punctuation. Returning an `Array` of words.

### Usage
`tokenise(text, noStopWords)`. Simply returns an array of terms, without punctuation.

* `text` is the string (text document) in which the calculations are to be performed on.
* `noStopWords` defaults to `true`. Set to `false` if you want to include stop words–e.g words such as "I" and "the".

```javascript
var tkn = require('tkn');

var str = "you're simply a test, a mere test";
var tokenised = tkn.tokenise(str);
>> ['simply', 'test', 'mere', 'test']

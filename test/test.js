var t = require('tap').test;
var tkn = require('../');

var STR_A = "you're simply a test, a mere test";
var STR_B = "you're simply a simplistic house, made for housing";
var STR_C = "@waltercfilho tweeted about houses: housing is the most expensive thing ever f#!*";

t('tokenisation, excluding stop words', function (t) {
	t.deepEqual(
		tkn.tokenise(STR_A),
		['simply', 'test', 'mere', 'test'],
		'wf.tokenise(STR_A)'
	);

	t.deepEqual(
		tkn.tokenise(STR_B),
		['simply', 'simplistic', 'house', 'housing'],
		'wf.tokenise(STR_B)'
	);

	t.deepEqual(
		tkn.tokenise(STR_C),
		["waltercfilho", "tweeted", "houses", "housing", "expensive"],
		'wf.tokenise(STR_C)'
	);

	t.end();
});

t('tokenisation, including stop words', function (t) {
	
	t.deepEqual(
		tkn.tokenise(STR_A, false),
		['you', 're', 'simply', 'a', 'test', 'a', 'mere', 'test'],
		'tkn.tokenise(STR_A, false)'
	);

	t.deepEqual(
		tkn.tokenise(STR_B, false),
		["you", "re", "simply", "a", "simplistic", "house", "made", "for", "housing"],
		'tkn.tokenise(STR_B, false)'
	);

	t.deepEqual(
		tkn.tokenise(STR_C, false),
		["waltercfilho", "tweeted", "about", "houses", "housing", "is", "the", "most", "expensive", "thing", "ever", "f"],
		'tkn.tokenise(STR_C, false)'
	);

	t.end();
});
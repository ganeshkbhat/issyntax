# issyntax
check if a item is a syntax in the javascript environment using issyntax


#### USAGE: isKeyword

```
const { isKeyword } = require("issyntax");

console.log("isKeyword('let');", isKeyword("let"));
console.log("isKeyword('const');", isKeyword("const"));
console.log("isKeyword('var');", isKeyword("var"));
console.log("isKeyword('function');", isKeyword("function"));
console.log("isKeyword('yield');", isKeyword("yield"));
console.log("isKeyword('Array');", isKeyword("Array"));
console.log("isKeyword('String');", isKeyword("String"));
console.log("isKeyword('Buffer');", isKeyword("Buffer"));
console.log("isKeyword('Arrays');", isKeyword("Arrays"));
console.log("isKeyword('Strings');", isKeyword("Strings"));
console.log("isKeyword('Buffers');", isKeyword("Buffers"));
```

#### USAGE: isInbuiltObjectOrFunction

```
const { isInbuiltObjectOrFunction } = require("issyntax");

console.log("isInbuiltObjectOrFunction(global, 'Arrays');", isInbuiltObjectOrFunction("Arrays"));
console.log("isInbuiltObjectOrFunction(globalThis, 'Strings');", isInbuiltObjectOrFunction("Strings"));
console.log("isInbuiltObjectOrFunction(window, 'Buffers');", isInbuiltObjectOrFunction("Buffers"));
```
<!-- 
#### USAGE: isSyntax

```
const { isSyntax } = require("issyntax");

console.log("isSyntax('let');", isSyntax("let"));
console.log("isSyntax('const');", isSyntax("const"));
console.log("isSyntax('var');", isSyntax("var"));
``` 
-->


#### REFERENCES

- https://www.w3schools.com/js/js_reserved.asp
- https://stackoverflow.com/questions/26255/reserved-keywords-in-javascript
- https://www.w3schools.com/js/js_reserved.asp
- https://stackoverflow.com/questions/42993710/how-to-detect-if-the-given-word-is-default-keyword-or-not-in-javascript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar
- https://www.google.com/amp/s/www.bitdegree.org/learn/javascript-reserved-words/amp


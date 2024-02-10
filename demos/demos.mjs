/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/issyntax
 * npmjs Link: https://www.npmjs.com/package/issyntax
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import { isKeyword } from "../index.js";

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

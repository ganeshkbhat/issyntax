/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { expect } = require('chai');
const { isKeyword } = require("../index.js");

describe('[isKeyword tests] Tests to check if some keyword is inbuilt in the browser, nodejs, or some other js distribution', () => {

  before(() => {
  });

  after(() => {
  });

  it('should use syntax as keyword for let', () => {
    let actual = isKeyword("let");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for var', () => {
    let actual = isKeyword("var");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for function', () => {
    let actual = isKeyword("function");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for yield', () => {
    let actual = isKeyword("yield");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for const', () => {
    let actual = isKeyword("const");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for ()', () => {
    let actual = isKeyword("()");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for setInterval but this is a function in the global and gets called', () => {
    let actual = isKeyword("setInterval");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for setTimeout but this is a function in the global and gets called', () => {
    let actual = isKeyword("setTimeout");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for clearInterval but this is a function in the global and gets called', () => {
    let actual = isKeyword("clearInterval");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should fail to use syntax as keyword for tester', () => {
    let actual = isKeyword("tester");
    let expected = false;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for => arrow for single line function', () => {
    let actual = isKeyword("=>");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for // comment bars', () => {
    let actual = isKeyword("//");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for <= operator', () => {
    let actual = isKeyword("<=");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should fail to use syntax as keyword for tts', () => {
    let actual = isKeyword("tts");
    let expected = false;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should fail to use syntax as keyword for tls', () => {
    let actual = isKeyword("tls");
    let expected = false;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for Array', () => {
    let actual = isKeyword("Array");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for String', () => {
    let actual = isKeyword("String");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for Boolean', () => {
    let actual = isKeyword("Boolean");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for Set', () => {
    let actual = isKeyword("Set");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for Object', () => {
    let actual = isKeyword("Object");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for NaN', () => {
    let actual = isKeyword("NaN");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for null', () => {
    let actual = isKeyword("null");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for Number', () => {
    let actual = isKeyword("Number");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for BigInt', () => {
    let actual = isKeyword("BigInt");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for float', () => {
    let actual = isKeyword("float");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for Math', () => {
    let actual = isKeyword("Math");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for RegEx', () => {
    let actual = isKeyword("RegEx");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for undefined', () => {
    let actual = isKeyword("undefined");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for Promise', () => {
    let actual = isKeyword("Promise");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for JSON', () => {
    let actual = isKeyword("JSON");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for parseInt', () => {
    let actual = isKeyword("parseInt");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for async', () => {
    let actual = isKeyword("async");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for await', () => {
    let actual = isKeyword("await");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for try', () => {
    let actual = isKeyword("try");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for catch', () => {
    let actual = isKeyword("catch");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for finally', () => {
    let actual = isKeyword("finally");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for switch', () => {
    let actual = isKeyword("switch");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for while', () => {
    let actual = isKeyword("while");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for do', () => {
    let actual = isKeyword("do");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for for', () => {
    let actual = isKeyword("for");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for ;', () => {
    let actual = isKeyword(";");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for module', () => {
    let actual = isKeyword("module");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for export', () => {
    let actual = isKeyword("export");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for exports', () => {
    let actual = isKeyword("exports");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for typeof', () => {
    let actual = isKeyword("typeof");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for Date', () => {
    let actual = isKeyword("Date");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for Buffer', () => {
    let actual = isKeyword("Buffer");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for throw', () => {
    let actual = isKeyword("throw");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should fail to use syntax as keyword for throws', () => {
    let actual = isKeyword("throws");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for super', () => {
    let actual = isKeyword("super");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for ;', () => {
    let actual = isKeyword(";");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for in', () => {
    let actual = isKeyword("in");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for if', () => {
    let actual = isKeyword("if");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for this', () => {
    let actual = isKeyword("this");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for globalThis', () => {
    let actual = isKeyword("globalThis");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for global', () => {
    let actual = isKeyword("global");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for window since this is nodejs env', () => {
    let actual = isKeyword("window");
    let expected = false;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for Infinity', () => {
    let actual = isKeyword("Infinity");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });

  it('should use syntax as keyword for case', () => {
    let actual = isKeyword("case");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });
  
  it('should use syntax as keyword for break', () => {
    let actual = isKeyword("break");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });
  
  it('should use syntax as keyword for ++', () => {
    let actual = isKeyword("++");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });
  
  it('should use syntax as keyword for --', () => {
    let actual = isKeyword("--");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });
  
  it('should use syntax as keyword for *', () => {
    let actual = isKeyword("*");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });
  
  it('should use syntax as keyword for &&', () => {
    let actual = isKeyword("&&");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });
  
  it('should use syntax as keyword for &', () => {
    let actual = isKeyword("&");
    let expected = true;
    expect(actual.isReserved).to.deep.equal(expected);
  });
});

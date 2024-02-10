(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
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

function testInbuiltFunction(g, k) {
  if (!!g[k]) {
    if (g[k] instanceof Function) { g[k](); }
    return true;
  }
  return false;
}

/**
 *
 *
 * @param {*} g the global object to work with based on environment. Ex: global, globalThis, window
 * @param {*} k the keyword to check
 * @return {*} 
 */
module.exports.isInbuiltObjectOrFunction = function isInbuiltObjectOrFunction(g, k) {
  let v = testInbuiltFunction(g, k);
  return { keyword: keyword, isReserved: v };
}

module.exports.isKeyword = function isKeyword(keyword) {
  try {
    let exceptions = ["let", "yield", "NaN", "float", "RegEx", "undefined",
      "async", "await", "module", "exports", "throws"];
    if (exceptions.includes(keyword)) return { keyword: keyword, isReserved: true };
    if (!!globalThis) {
      if (testInbuiltFunction(globalThis, keyword)) throw new Error("Inbuilt function or already define global function");
    } else if (!!global) {
      if (testInbuiltFunction(global, keyword)) throw new Error("Inbuilt function or already define global function");
    } else if (!!window) {
      if (testInbuiltFunction(window, keyword)) throw new Error("Inbuilt function or already define global window function");
    }
    new Function("var " + keyword + ";");
    return { keyword: keyword, isReserved: false };
  }
  catch (e) {
    return { keyword: keyword, isReserved: true };
  }
}

function isSyntax(env = "node" /* node, browser */) {
  let browserspecific = [
    "alert", "all", "anchor", "anchors",
    "area", "assign", "blur", "button",
    "checkbox", "clearInterval", "clearTimeout", "clientInformation",
    "close", "closed", "confirm", "constructor",
    "crypto", "decodeURI", "decodeURIComponent", "defaultStatus",
    "document", "element", "elements", "embed",
    "embeds", "encodeURI", "encodeURIComponent", "escape",
    "event", "fileUpload", "focus", "form",
    "forms", "frame", "innerHeight", "innerWidth",
    "layer", "layers", "link", "location",
    "mimeTypes", "navigate", "navigator", "frames",
    "frameRate", "hidden", "history", "image",
    "images", "offscreenBuffering", "open", "opener",
    "option", "outerHeight", "outerWidth", "packages",
    "pageXOffset", "pageYOffset", "parent", "parseFloat",
    "parseInt", "password", "pkcs11", "plugin",
    "prompt", "propertyIsEnum", "radio", "reset",
    "screenX", "screenY", "scroll", "secure",
    "select", "self",
    "status", "submit", "taint", "text",
    "textarea", "top", "unescape", "untaint", "window"
  ];

  let nodejsspecify = [
    "TypedArray", "DataView", "Blob", "TypedArray", "DataView", "Blob",
    "Buffer", "MessageChannel", "Buffer", "ArrayBuffer",
    "Uint16Array", "Uint8Array", "bigint",
    "File", "SlowBuffer", "AsyncResource", "AsyncLocalStorage",
    "AbortController", "AbortSignal", "ByteLengthQueuingStrategy",
    "BroadcastChannel", "btoa", "atob", "__dirname", "__filename",
    "clearImmediate", "clearInterval", "clearTimeout",
    "CompressionStream", "CountQueuingStrategy",
    "Crypto", "crypto", "CryptoKey", "CustomEvent",
    "DecompressionStream", "Event", "EventTarget", "exports", "fetch",
    "FormData", "globalThis", "global", "Headers", "MessageChannel", "MessageEvent", "MessagePort",
    "module", "Navigator", "navigator",
    "PerformanceEntry", "PerformanceMark", "PerformanceMeasure",
    "PerformanceObserver", "PerformanceObserverEntryList", "PerformanceResourceTiming",
    "performance", "process", "queueMicrotask",
    "ReadableByteStreamController", "ReadableStream", "ReadableStreamBYOBReader",
    "ReadableStreamBYOBRequest", "ReadableStreamDefaultController",
    "ReadableStreamDefaultReader", "require", "Response", "Request",
    "setImmediate", "setInterval", "setTimeout",
    "structuredClone", "SubtleCrypto", "DOMException",
    "TextDecoder", "TextDecoderStream", "TextEncoder",
    "TextEncoderStream", "TransformStream", "TransformStreamDefaultController",
    "URL", "URLSearchParams", "WebAssembly", "WebSocket",
    "WritableStream", "WritableStreamDefaultController", "WritableStreamDefaultWriter"
  ];

  let jsspecific = [
    "var", "const", "let", "foo", "enum",
    "function", "class", "constructor", "prototype",
    "Undefined", "Null", "Boolean", "Number", "Symbol", "String", "Object",
    "undefined", "null", "true", "false", "Infinity", "NaN", "float",
    "for", "while", "switch", "do", "case",
    "math", "Regex", "delete", "Math",
    "parseInt", "parseFloat", "of",
    "module", "default", "export",
    "Promise", "async", "await", "function*", "yield",
    "abstract", "arguments", "await*", "boolean", "case", "break", "byte",
    "char", "class*", "const*", "continue", "debugger",
    "double", "else", "enum*", "eval", "export*", "extends*", "final",
    "finally", "goto", "if", "else", "elseif", "implements", "import*",
    "in", "instanceof", "int", "interface", "let*", "long", "native", "new",
    "package", "private", "protected", "public", "return", "short", "static",
    "super*", "super", "synchronized", "this",
    "throw", "throws", "transient", "try", "catch", "finally",
    "typeof", "void", "volatile", "with",
    "Array", "Date", "eval", "JSON", "console",
    "#", "$", "/", "?", "^", "|", "~", "~~",
    "-", "+", "+=", "-=", "*=", "/=", "%=", "**=",
    "=", "*", "/", "%", "++", "--", "**",
    "===", "==", "!=", "!==", ">", ">=", "<", "<=",
    "&&", "||", ":", "`", "'", "\"", ";", "!",
    "|", "&", "^", "<<", ">>", ">>>",
    ",", "?:", "//", "/*", "*/", "(", ")",
    "{", "${", "}", "()", "=>", "[", "]",
    "\n", "\r", "\v", "\t", "\b", "\f", "\\",
    "get", "set", "setInterval", "setTimeout",
    "Error", "TypeError", "SyntaxError", "ReferenceError",
    "EvalError", "MediaError", "AssertionError",
    "RangeError", "ReferenceError", "WebTransportError",
    "OverconstrainedError", "ErrorEvent", "SpeechSynthesisErrorEvent",
    "GeolocationPositionError", "RTCPeerConnectionIceErrorEvent"
  ]

  let check = (!!(env === "browser")) ? [...browserspecific, ...jsspecific] : [...jsspecific, ...nodejsspecify];
  return check.map(function (keyword) {
    try {
      if (!!globalThis) {
        globalThis[keyword]();
        throw new Error("Inbuilt function or already define global function");
      } else if (!!global) {
        global[keyword]();
        throw new Error("Inbuilt function or already define global function");
      } else if (!!window) {
        window[keyword]();
        throw new Error("Inbuilt function or already define global window function");
      }
      new Function("var " + keyword + ";");
      return { keyword: keyword, isReserved: false };
    }
    catch (e) {
      return { keyword: keyword, isReserved: true };
    }
  });
}

// module.exports.isSyntax = isSyntax;

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);

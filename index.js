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

const path = require("path");

/**
 *
 *
 * @param {*} g
 * @param {*} k
 * @return {*} 
 */
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
function isInbuiltObjectOrFunction(g, k) {
  let v = testInbuiltFunction(g, k);
  return { keyword: keyword, isReserved: v };
}

/**
 *
 *
 * @param {*} keyword
 * @return {*} 
 */
function isKeyword(keyword) {
  try {
    let exceptions = ["let", "yield", "NaN", "float", "RegEx", "undefined",
      "async", "await", "module", "exports", "throws"];
    if (exceptions.includes(keyword)) return { keyword: keyword, isReserved: true };
    if (!!globalThis) {
      if (testInbuiltFunction(globalThis, keyword)) throw new Error("Inbuilt function\/ object defined globally");
    } else if (!!global) {
      if (testInbuiltFunction(global, keyword)) throw new Error("Inbuilt function\/ object defined globally");
    } else if (!!window) {
      if (testInbuiltFunction(window, keyword)) throw new Error("Inbuilt function\/ object defined globally window");
    }
    new Function("var " + keyword + ";");
    return { keyword: keyword, isReserved: false };
  }
  catch (e) {
    return { keyword: keyword, isReserved: true };
  }
}

/**
 *
 *
 * @param {string} [env="node"]
 * @return {*} 
 */
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

/**
 *
 *
 * @param {*} key
 * @param {string} [language="js.node"] options: js.node, js.generic, js.browser, java, rust
 * @param {string} [env="node"]
 * @return {*} 
 */
function isLanguageSyntax(key, language = "js.node") {
  let l = require(path.join("lang." + language + ".json"));
  return isLanguageKeyword(key, l);
}

/**
 *
 *
 * @param {*} key
 * @param {*} keywordArray
 * @param {string} [env="node"]
 * @return {*} 
 */
function isLanguageKeyword(key, keywordArray) {
  return keywordArray.includes(key);
}


/**
 *
 *
 * @return {*} 
 */
function isBrowser() {
  if (typeof process === "object" && typeof require === "function") { return "node"; }
  if (typeof importScripts === "function") { return "serviceworker"; }
  if (typeof window === "object") { return "browser"; }
}


if (isBrowser() === "node") {
  module.exports.isLanguageKeyword = isLanguageKeyword;
  module.exports.isLanguageSyntax = isLanguageSyntax;
  module.exports.isKeyword = isKeyword;
  module.exports.isInbuiltObjectOrFunction = isInbuiltObjectOrFunction;
  // module.exports.isSyntax = isSyntax;
}



/**

BeforeUnloadEvent
DOMStringMap
ErrorEvent
HTMLAnchorElement
HTMLAreaElement
HTMLAudioElement
HTMLBRElement
HTMLBaseElement
HTMLBodyElement
HTMLButtonElement
HTMLCanvasElement
HTMLDListElement
HTMLDataElement
HTMLDataListElement
HTMLDialogElement
HTMLDivElement
HTMLDocument
HTMLElement
HTMLEmbedElement
HTMLFieldSetElement
HTMLFormControlsCollection
HTMLFormElement
HTMLFrameSetElement
HTMLHRElement
HTMLHeadElement
HTMLHeadingElement
HTMLHtmlElement
HTMLIFrameElement
HTMLImageElement
HTMLInputElement
HTMLLIElement
HTMLLabelElement
HTMLLegendElement
HTMLLinkElement
HTMLMapElement
HTMLMediaElement
HTMLMenuElement
HTMLMetaElement
HTMLMeterElement
HTMLModElement
HTMLOListElement
HTMLObjectElement
HTMLOptGroupElement
HTMLOptionElement
HTMLOptionsCollection
HTMLOutputElement
HTMLParagraphElement
HTMLPictureElement
HTMLPreElement
HTMLProgressElement
HTMLQuoteElement
HTMLScriptElement
HTMLSelectElement
HTMLSourceElement
HTMLSpanElement
HTMLStyleElement
HTMLTableCaptionElement
HTMLTableCellElement
HTMLTableColElement
HTMLTableElement
HTMLTableRowElement
HTMLTableSectionElement
HTMLTemplateElement
HTMLTextAreaElement
HTMLTimeElement
HTMLTitleElement
HTMLTrackElement
HTMLUListElement
HTMLUnknownElement
HTMLVideoElement
HashChangeEvent
History
ImageData
Location
MessageChannel
MessageEvent
MessagePort
PageTransitionEvent
Plugin
PluginArray
PromiseRejectionEvent
RadioNodeList
UserActivation
ValidityState
Window
WorkletGlobalScope

*/

// DOM OBJECT

/** 

AbortController
AbortSignal
AbstractRange
Attr
CDATASection
CharacterData
Comment
CustomEvent
Document
DocumentFragment
DocumentType
DOMError
DOMException
DOMImplementation
DOMParser
DOMPoint
DOMPointReadOnly
DOMRect
DOMTokenList
Element
Event
EventTarget
HTMLCollection
MutationObserver
MutationRecord
NamedNodeMap
Node
NodeIterator
NodeList
ProcessingInstruction
Range
StaticRange
Text
TextDecoder
TextEncoder
TimeRanges
TreeWalker
XMLDocument

 */

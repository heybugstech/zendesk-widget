"use strict";
exports.__esModule = true;
var domElements_js_1 = require("./view/domElements.js");
var client = ZAFClient.init();
client.invoke('resize', { width: '100%', height: '350px' });
var knownProblemHtml = new domElements_js_1.CustomDiv('known-problems');
var test = knownProblemHtml.buildParagraphEl('Frankie testing!!');
console.log(test);
console.log('test');

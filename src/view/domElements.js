"use strict";
exports.__esModule = true;
exports.CustomDiv = void 0;
var knownProblemsDiv = document.querySelector('#known-problems');
var similarTicketsDiv = document.querySelector('#similar-tickets');
var CustomDiv = /** @class */ (function () {
    function CustomDiv(divId) {
        this.divId = divId;
    }
    CustomDiv.prototype.buildParagraphEl = function (text) {
        var pEl = document.createElement('p');
        pEl.innerText = text;
        pEl.style.backgroundColor = 'darkgray';
        this.insertHtmlElToParent(pEl);
        return pEl;
    };
    CustomDiv.prototype.insertHtmlElToParent = function (node) {
        document.querySelector("#" + this.divId).appendChild(node);
    };
    return CustomDiv;
}());
exports.CustomDiv = CustomDiv;

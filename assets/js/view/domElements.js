const knownProblemsDiv = document.querySelector('#known-problems');
const similarTicketsDiv = document.querySelector('#similar-tickets');
export class CustomDivWithParent {
    constructor(htmlElement, parentId) {
        this.parentId = parentId;
        this.htmlElement = document.createElement(htmlElement);
        this.parentElement = document.querySelector(`#${this.parentId}`);
        if (!this.parentElement) {
            throw new Error(`No HTML element with id "${this.parentElement}" found.`);
        }
    }
    addInnerText(text) {
        this.htmlElement.innerText = text;
    }
    applyCssStyle(userStyle, value) {
        this.htmlElement.style.setProperty(userStyle, value);
    }
    insertHtmlElToParent() {
        this.parentElement.appendChild(this.htmlElement);
    }
}

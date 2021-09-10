const knownProblemsDiv = document.querySelector('#known-problems');
const similarTicketsDiv = document.querySelector('#similar-tickets');
export class CustomDiv {
  constructor(divId, htmlEl) {
    this.divId = divId;
    this.htmlEl = document.createElement(htmlEl);
  }
  addInnerText(text) {
    this.htmlEl.innerText = text;
  }
  applyCssStyle(userStyle, value) {
    this.htmlEl.style.setProperty(userStyle, value);
  }
  insertToParent() {
    document.querySelector(`#${this.divId}`).appendChild(this.htmlEl);
  }
}

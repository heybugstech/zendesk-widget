export class CustomDiv {
  constructor(parentElId, htmlEl) {
    this.parentElId = parentElId;
    this.htmlEl = document.createElement(htmlEl);
  }
  addInnerText(text) {
    this.htmlEl.innerText = text;
  }
  insertToParent() {
    document.querySelector(`#${this.parentElId}`).appendChild(this.htmlEl);
  }
}

export var htmlElements;
(function (htmlElements) {
  htmlElements['P'] = 'p';
  htmlElements['Div'] = 'div';
})(htmlElements || (htmlElements = {}));
export class CustomDiv {
  constructor(parentElId) {
    this.parentElId = parentElId;
    this.baseDiv = document.querySelector(`#${this.parentElId}`);
  }
  addInnerText(text) {
    this.baseDiv.innerText = text;
  }
  addDivContainer(divClass, divText) {
    const div = document.createElement(htmlElements.Div);
    div.classList.add(divClass);
    if (divText) {
      const pEl = document.createElement(htmlElements.P);
      pEl.classList.add(divText.class);
      pEl.innerText = divText.text;
      div.appendChild(pEl);
    }
    this.baseDiv.appendChild(div);
  }
}

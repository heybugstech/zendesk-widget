export enum htmlElements {
  P = 'p',
  Div = 'div'
}

type divText = {
  text: string;
  class: string;
};

export class CustomDiv {
  private parentElId: string;
  private baseDiv: HTMLDivElement;

  constructor(parentElId: string) {
    this.parentElId = parentElId;
    this.baseDiv = document.querySelector(
      `#${this.parentElId}`
    ) as HTMLDivElement;
    if (!this.baseDiv) {
      throw new Error(
        `Could not find html element with id "${this.parentElId}"`
      );
    }
  }

  public addInnerText(text: string): void {
    this.baseDiv.innerText = text;
  }

  public addDivContainer(divClass: string, divText?: divText) {
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

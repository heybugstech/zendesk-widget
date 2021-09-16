export class CustomDiv {
  private parentElId: string;
  private htmlEl: HTMLElement;

  constructor(parentElId: string, htmlEl: string) {
    this.parentElId = parentElId;
    this.htmlEl = document.createElement(htmlEl);
  }

  public addInnerText(text: string): void {
    this.htmlEl.innerText = text;
  }

  public insertToParent(): void {
    document.querySelector(`#${this.parentElId}`).appendChild(this.htmlEl);
  }
}

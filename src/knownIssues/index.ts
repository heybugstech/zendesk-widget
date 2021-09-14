import { CustomDiv } from '../view/customDiv.js';

enum htmlElements {
  P = 'p'
}

export class KnownIssues {
  public parentElId: string;
  public htmlEl: CustomDiv;

  constructor(parentElId: string) {
    this.parentElId = parentElId;
    this.htmlEl = new CustomDiv(parentElId, htmlElements.P);
  }

  public createUI(knownIssuesEl: CustomDiv) {
    knownIssuesEl.addInnerText('New New');
    knownIssuesEl.applyCssStyle('background-color', 'blue');
    knownIssuesEl.insertToParent();
  }
}

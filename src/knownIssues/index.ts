import { CustomDiv } from '../htmlElements/customDiv.js';

enum htmlElements {
  P = 'p'
}

export class KnownIssuesSection {
  public parentElId: string;
  public htmlEl: CustomDiv;

  constructor(parentElId: string) {
    this.parentElId = parentElId;
    this.htmlEl = new CustomDiv(parentElId, htmlElements.P);
    this.htmlEl.insertToParent();
  }
}

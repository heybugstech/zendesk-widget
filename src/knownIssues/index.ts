import { CustomDiv, htmlElements } from '../htmlElements/customDiv.js';

export class KnownIssuesSection {
  public parentElId: string;
  public htmlEl: CustomDiv;

  constructor(parentElId: string) {
    this.parentElId = parentElId;
    this.htmlEl = new CustomDiv(parentElId, htmlElements.P);
    this.htmlEl.insertToParent();
  }
}

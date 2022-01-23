import { CustomDiv } from '../htmlElements/customDiv.js';

enum cssClasses {
  knownIssue = 'known-issue',
  knownIssueText = 'known-issue-text'
}

export class KnownIssuesSection {
  public knownIssuesDiv: CustomDiv;

  constructor(parentElId: string) {
    this.knownIssuesDiv = new CustomDiv(parentElId);
  }

  public addOneKnownIssue() {
    const placeholderText = {
      class: cssClasses.knownIssueText,
      text: 'Placeholder text'
    };
    this.knownIssuesDiv.addDivContainer(cssClasses.knownIssue, placeholderText);
  }
}

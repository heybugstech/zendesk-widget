declare const ZAFClient: any;
import { CustomDiv } from './view/domElements.js';

class ZendeskWidget {
  constructor(knownIssuesEl: CustomDiv) {
    this.initZendeskClient();
    this.initKnownIssues(knownIssuesEl);
  }

  private initKnownIssues(knownIssuesEl: CustomDiv) {
    knownIssuesEl.addInnerText('New New');
    knownIssuesEl.applyCssStyle('background-color', 'blue');
    knownIssuesEl.insertToParent();
  }

  private initZendeskClient() {
    const client = ZAFClient.init();
    client.invoke('resize', { width: '100%', height: '350px' });
  }
}

const knownIssuesHtmlEl = new CustomDiv('known-issues', 'p');
new ZendeskWidget(knownIssuesHtmlEl);

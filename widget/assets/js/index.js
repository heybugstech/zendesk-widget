import { CustomDiv } from './view/domElements.js';
class ZendeskWidget {
  constructor(knownIssuesEl) {
    this.initZendeskClient();
    this.initKnownIssues(knownIssuesEl);
  }
  initKnownIssues(knownIssuesEl) {
    knownIssuesEl.addInnerText('New New');
    knownIssuesEl.applyCssStyle('background-color', 'blue');
    knownIssuesEl.insertToParent();
  }
  initZendeskClient() {
    const client = ZAFClient.init();
    client.invoke('resize', { width: '100%', height: '350px' });
  }
}
const knownIssuesHtmlEl = new CustomDiv('known-issues', 'p');
new ZendeskWidget(knownIssuesHtmlEl);

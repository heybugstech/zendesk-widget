import { KnownIssuesSection } from './knownIssues/index.js';
export class ZendeskWidget {
  constructor() {
    this.initZendeskClient();
  }
  initZendeskClient() {
    this.zendeskClient = ZAFClient.init();
    this.zendeskClient.invoke('resize', { width: '100%', height: '350px' });
  }
  initKnownIssues(parentElId) {
    this.knownIssuesSection = new KnownIssuesSection(parentElId);
  }
}

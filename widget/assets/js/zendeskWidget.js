import { KnownIssuesSection } from './knownIssues/index.js';
export var htmlIds;
(function (htmlIds) {
  htmlIds['KNOWN_ISSUES'] = 'known-issues-section';
})(htmlIds || (htmlIds = {}));
export class ZendeskWidget {
  constructor(knownIssuesParentId) {
    this.initZendeskClient();
    this.knownIssuesSection = new KnownIssuesSection(knownIssuesParentId);
    this.getTopIssuesOnLoad();
  }
  initZendeskClient() {
    this.zendeskClient = ZAFClient.init();
  }
  getTopIssuesOnLoad() {
    this.knownIssuesSection.addOneKnownIssue();
    this.knownIssuesSection.addOneKnownIssue();
    this.knownIssuesSection.addOneKnownIssue();
  }
}

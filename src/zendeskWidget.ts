import { KnownIssuesSection } from './knownIssues/index.js';

enum htmlIds {
  KNOWN_ISSUES = 'known-issues-section'
}

class ZendeskWidget {
  protected zendeskClient: any;
  protected knownIssuesSection: KnownIssuesSection;

  constructor(knownIssuesParentId: htmlIds) {
    this.initZendeskClient();
    this.knownIssuesSection = new KnownIssuesSection(knownIssuesParentId);
  }

  private initZendeskClient() {
    // @ts-expect-error ZD client does not have a type
    this.zendeskClient = ZAFClient.init();
  }

  public getTopIssuesOnLoad(): void {
    this.knownIssuesSection.addOneKnownIssue();
    this.knownIssuesSection.addOneKnownIssue();
    this.knownIssuesSection.addOneKnownIssue();
  }
}

export default new ZendeskWidget(htmlIds.KNOWN_ISSUES);

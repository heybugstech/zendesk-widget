declare const ZAFClient: any;
import { KnownIssuesSection } from './knownIssues/index.js';

export enum htmlIds {
  KNOWN_ISSUES = 'known-issues-section'
}

export class ZendeskWidget {
  protected zendeskClient: any;
  protected knownIssuesSection: KnownIssuesSection;

  constructor(knownIssuesParentId: htmlIds) {
    this.initZendeskClient();
    this.knownIssuesSection = new KnownIssuesSection(knownIssuesParentId);
    this.getTopIssuesOnLoad();
  }

  private initZendeskClient() {
    this.zendeskClient = ZAFClient.init();
  }

  public getTopIssuesOnLoad() {
    this.knownIssuesSection.addOneKnownIssue();
    this.knownIssuesSection.addOneKnownIssue();
    this.knownIssuesSection.addOneKnownIssue();
  }
}

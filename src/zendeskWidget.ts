declare const ZAFClient: any;
import { KnownIssuesSection } from './knownIssues/index.js';

export class ZendeskWidget {
  protected zendeskClient: any;
  protected knownIssuesSection: KnownIssuesSection;

  constructor() {
    this.initZendeskClient();
  }

  private initZendeskClient() {
    this.zendeskClient = ZAFClient.init();
    this.zendeskClient.invoke('resize', { width: '100%', height: '350px' });
  }

  public initKnownIssues(parentElId: string) {
    this.knownIssuesSection = new KnownIssuesSection(parentElId);
  }
}

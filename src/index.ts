declare const ZAFClient: any;
import { KnownIssues } from './knownIssues/index.js';

class ZendeskWidget {
  protected zendeskClient: any;
  protected knownIssuesSection: KnownIssues;

  constructor() {
    this.initZendeskClient();
  }

  private initZendeskClient() {
    this.zendeskClient = ZAFClient.init();
    this.zendeskClient.invoke('resize', { width: '100%', height: '350px' });
  }

  public initKnownIssues(parentElId: string) {
    this.knownIssuesSection = new KnownIssues(parentElId);
    this.knownIssuesSection.createUI(this.knownIssuesSection.htmlEl);
  }
}

const zendeskWidget = new ZendeskWidget();
zendeskWidget.initKnownIssues('known-issues');

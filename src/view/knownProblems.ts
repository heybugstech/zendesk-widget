enum BugAdaptors {
  Jira
}

export class KnownProblemUi {
  private bugAdaptor: BugAdaptors;

  constructor(bugAdaptor: BugAdaptors) {
    this.bugAdaptor = bugAdaptor;
  }
}

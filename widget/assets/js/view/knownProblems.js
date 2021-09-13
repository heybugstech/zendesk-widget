var BugAdaptors;
(function (BugAdaptors) {
  BugAdaptors[(BugAdaptors['Jira'] = 0)] = 'Jira';
})(BugAdaptors || (BugAdaptors = {}));
export class KnownProblemUi {
  constructor(bugAdaptor) {
    this.bugAdaptor = bugAdaptor;
  }
}

var conventionalCommitTypes = require('./types');

module.exports = {
  types: conventionalCommitTypes,
  jiraMode: true,
  skipScope: true,
  skipType: false,
  skipDescription: false,
  skipBreaking: true,
  customScope: true,
  maxHeaderWidth: 72,
  minHeaderWidth: 10,
  maxLineWidth: 100,
  jiraPrefix: 'CC2',
  jiraOptional: false,
  jiraLocation: 'pre-description',
  jiraPrepend: '',
  jiraAppend: '',
  exclamationMark: false,
  skipJiraComment: false,
  skipJiraTime: false,
  skipJiraTransition: false,
  defaultJiraTransition: "in-code-review",
  jiraTransistions: [
    "ready",
    "in-development",
    "in-code-review",
    "ready-for-testing",
    "rework",
    "ready-for-production",
    "done",
    "cancelled"
  ]
};

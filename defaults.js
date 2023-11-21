var conventionalCommitTypes = require('./types');

module.exports = {
  types: conventionalCommitTypes,
  jiraMode: true,
  skipScope: true,
  skipType: false,
  skipDescription: false,
  skipBreaking: false,
  customScope: true,
  maxHeaderWidth: 72,
  minHeaderWidth: 10,
  maxLineWidth: 100,
  jiraPrefix: 'CC2',
  jiraOptional: false,
  jiraLocation: 'pre-description',
  jiraPrepend: '',
  jiraAppend: '',
  exclamationMark: false
};

exports.config = {
  framework: 'jasmine',
  directConnect: true,
  specs: ['test/**/*.spec.js'],
  capabilities: {
    browserName: 'chrome'
  }
}

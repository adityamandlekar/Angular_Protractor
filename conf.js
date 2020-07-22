exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
   // framework: 'jasmine',
    specs: ['todo-spec.js'],
    capabilities: {
      'browserName': 'internet explorer',
      'platform': 'ANY',
      'version': '11'
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose:true,
    includeStackTrace:true

}
  };
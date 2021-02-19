exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/autoTest.spec.js', '../tests/nameOrVorNameFalsch.js', '../tests/eMailFalsch.js', '../tests/teleNummerFalsch.js',
  '../tests/datenSchutzHackenFalse.js', '../tests/dateiFalsch.js', '../tests/alleFelderLeer.js', '../tests/ladeDateiHoch.js',
  '../tests/loescheDatei.js', '../tests/login.js', '../tests/registrieren.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

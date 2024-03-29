// Karma configuration
// Generated on Wed May 22 2013 17:53:35 GMT+0300 (IDT)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  'public/scripts/*.js', //this should be replaced by a "main" which would configure require...
  JASMINE,
  JASMINE_ADAPTER,
  'components/chai/chai.js',
  'tests/**/*test.coffee'
];


// list of files to exclude
exclude = [
  
];

preprocessors = {
  'public/scripts/**/*.js': 'coverage',
  'tests/**/*.coffee':'coffee'
  /*'*.html': 'html2js'*/
};

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'coverage'];

coverageReporter = {
  type : 'html',
  dir : 'coverage/'
}

// web server port
port = 9876;
runnerPort = 9100;
colors = true;
logLevel = LOG_INFO; // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

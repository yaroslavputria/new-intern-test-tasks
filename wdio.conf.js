exports.config = {

    /**
     * server configurations
     */
    host: 'localhost',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        'test/webdriver-test/test.js'
    ],
    // exclude: [
    //     'test/spec/multibrowser/**',
    //     'test/spec/mobile/**'
    // ],

 //   services: ['selenium-standalone'],
    customLaunchers: {
        ChromeTravis: {
            base: 'Chrome',
            flags: ['--no-sandbox']
        }
    },
    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'ChromeTravis'
    }],
   // services: ['phantomjs'],
    /**
     * test configurations
     */
    sync: false,
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    waitforTimeout: 10000,
    framework: 'mocha',

    reporters: ['spec'],
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd'
    },

    /**
     * hooks
     */
    onPrepare: function() {
        console.log('let\'s go');
    },
    onComplete: function() {
        console.log('that\'s it');
    }

};
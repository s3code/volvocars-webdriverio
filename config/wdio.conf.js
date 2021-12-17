import commands from "../common/commonCommands";
const allure = require('allure-commandline');

let capabilities;
if (process.env.browserType === "firefox") {
  capabilities = [
    {
      maxInstances: 5,
      browserName: 'firefox',
      'moz:firefoxOptions': {
        // args: ['-headless']
      },
      // excludeDriverLogs: ['bugreport', 'server'],
    }]
} else {
  capabilities = [
    {
      browserName: "chrome",
      'goog:chromeOptions': {
        // args: ['--headless', '--disable-gpu'],
      },
      acceptInsecureCerts: true,

    }]
}

exports.config = {

  hostname: "localhost",
  port: 4444,
  path: "/",

  // ==================
  // Specify Test Files
  // ==================

  specs: ["./test/specs/**/*.js"],

  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============

  maxInstances: 5,
  capabilities: capabilities,

  // ===================
  // Test Configurations
  // ===================
  // Level of logging verbosity: trace | debug | info | warn | error | silent

  logLevel: "silent",

  bail: 10,
  baseUrl: "https://www.volvocars.com",

  waitforTimeout: 15000,

  connectionRetryTimeout: 180000,
  connectionRetryCount: 3,

  // Test runner services

  services: ["docker"],

  framework: "mocha",

  //screenshotPath: './test/reports/errorShots/',
  reporters: ["spec", ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
  }]],


  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  beforeSession: async function (config, capabilities, specs, cid) {
    const del = require("del");
    await del(["allure-report", "allure-results"]);
  },
  before: function (capabilities, specs) {
    //asserions
    require("expect-webdriverio");
    global.wdioExpect = global.expect;
    const chai = require("chai");
    global.expect = chai.expect;

    //commands
    Object.keys(commands).forEach((key) => {
      browser.addCommand(key, commands[key]);
    });

    //browser feature
    browser.maximizeWindow();

  },


  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    if (error) {
      await browser.takeScreenshot();
    }
  },

  onComplete: function (exitCode, config, capabilities, results) {
    const reportError = new Error('Could not generate Allure report')
    const generation = allure(['generate', 'allure-results', '--clean'])
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(
        () => reject(reportError),
        5000)

      generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout)

        if (exitCode !== 0) {
          return reject(reportError)
        }

        console.log('Allure report successfully generated')
        resolve()
      })
    })

  },

};

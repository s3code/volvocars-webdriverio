"use strict";

class HomePage {
  // page actions
  getHomePageUrl() {
    return browser.config.baseUrl + "/intl";
  }
}

module.exports = new HomePage();

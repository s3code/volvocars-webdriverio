import cookiesPage from "../test/pageobjects/CookiesPage";
const fetch = require("node-fetch");

module.exports = {
  clickIfCookiesPresent: function () {
    if (cookiesPage.acceptButton.isDisplayed()) {
      cookiesPage.clickAcceptButton();
    }
  },
  waitToSetValue: function (element, value) {
    element.waitForExist();
    element.waitForDisplayed();
    element.setValue(value);
  },
  waitToExistAndClick: function (element, timeout) {
    element.waitForExist({ timeout: timeout });
    element.waitForClickable({ timeout: timeout });
    element.click();
  },
  isLinkOK: async function (url) {
    await console.log("hitting... url : " + url);
    let statusCode;
    try {
      let response = await fetch(url);
      statusCode = await response.status;
      if (statusCode == 200) {
        return true;
      }
    } catch (err) {
      return false;
    }
  },
};

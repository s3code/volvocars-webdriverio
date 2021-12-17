import cookiesPage from "../test/pageobjects/CookiesPage";
const fetch = require("node-fetch");

module.exports = {
  /**
   * @description This command will accept the cookies popup
   * 
   */
  clickIfCookiesPresent: function () {
    if (cookiesPage.acceptButton.isDisplayed()) {
      cookiesPage.clickAcceptButton();
    }
  },

  /**
   * @description It will wait and then set the value
   * @param {
   * } element 
   * @param {*} value 
   */
  waitToSetValue: function (element, value) {
    element.waitForExist();
    element.waitForDisplayed();
    element.setValue(value);
  },

  /**
   * @description it will wait to exist and then click
   * @param {*} element 
   * @param {*} timeout 
   */
  waitToExistAndClick: function (element, timeout) {
    element.waitForExist({ timeout: timeout });
    element.waitForClickable({ timeout: timeout });
    element.click();
  },

  /**
   * @description This function will check for the broken links
   * @param {
   * } url 
   * @returns 
   */
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

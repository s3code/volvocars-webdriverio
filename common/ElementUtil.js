"use strict";

/**
 * This class is a kind of helper class
 * it will help in browser/driver actions
 * 
 */
class ElementUtils {
  /**
   * 
   * @param {*} element  
   * 
   * @description waits for an element to be displayed and then click
   */

  doClick(element) {
    element.waitForDisplayed();
    element.click();
  }

  /**
   * @description wait for the element to display
   * and clears the input field and enters the given keyword
   * @param {*} element 
   * @param {*} keyword 
   * 
   */

  doSetValue(element, keyword) {
    element.waitForDisplayed();
    element.clear();
    element.setValue(keyword);
  }

  /**
   * @description for an element to display and then return a string
   * @param {*} element 
   * @returns a string
   */
  doGetText(element) {
    element.waitForDisplayed();
    return element.getText();
  }

  /**
   * @description wait for an element to display and then return a boolean
   * @param {*} element 
   * @returns boolean
   */
  doIsDisplayed(element) {
    try {
      element.waitForDisplayed();
      return element.isDisplayed();
    } catch (err) {
      console.log("Element didn't display due to exception: " + err);
      return false;
    }
  }

  /**
   * @description returns the page title as string
   * @returns string
   */
  doGetTitle() {
    return browser.getTitle();
  }

  /**
   * @description it helps in findElement in an Element
   * @param {*} element 
   * @param {*} selector 
   * @returns 
   */

  doGetElement(element, selector) {
    try {
      return element.$(selector);
    } catch (err) {
      console.log("Unable to find an element due to exception: " + err);
      return undefined;
    }
  }

  /**
   * @description it helps to scroll to view
   * @param {*} element 
   */
  doScrollToview(element) {
    try {
      element.scrollIntoView();
    } catch (err) {
      console.log("Unable to scroll into view due to exception: " + err);
    }
  }


  /**
   * 
   */

  doGetAttribute(element, attribute) {
    return element.getAttribute(attribute);
  }
}

module.exports = new ElementUtils();

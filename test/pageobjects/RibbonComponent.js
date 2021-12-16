"use strict";

import elementUtil from "../../common/ElementUtil";
import homePage from "./HomePage";
import ourCarsPage from "./OurCarsPage";

module.exports = class RibbonComponent {
  // selectors
  get volvoIcon() {
    return $("#vcc-site-nav+div a");
  }
  get ourCars() {
    return $("//*[text()='Our Cars']");
  }

  // page actions
  clickVolvoIcon() {
    elementUtil.doClick(this.volvoIcon);
    return homePage;
  }

  clickOurCars() {
    elementUtil.doClick(this.ourCars);
    return ourCarsPage;
  }
}



"use strict";
class OurCarsPage {

  // selectors
  get listCarTypes() {
    return $$("div[role='tablist'] button");
  }

  // page actions
  async getCarTypesLength() {
    return this.listCarTypes.length;
  }
}

export default new OurCarsPage();

"use strict";

import elementUtil from "../../common/ElementUtil";

class CookiesPage {

  // selectors
  get acceptButton() {
    return $("button[title ='Accept']");
  }

  // pageactions
  async clickAcceptButton() {
    await elementUtil.doClick(this.acceptButton);

  }
}
export default new CookiesPage();

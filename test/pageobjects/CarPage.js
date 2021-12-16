"use strict";
import elementUtil from "../../common/ElementUtil";

module.exports = class CarPage {
    // variables
    title = "Volvo XC90 Recharge";

    //page actions
    getTitle() {
        return elementUtil.doGetTitle();
    }

}




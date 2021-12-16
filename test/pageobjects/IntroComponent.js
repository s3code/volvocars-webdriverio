"use strict";

module.exports = class IntroComponent {

    //selectors
    get introHeaderText() {
        return $("#ModelIntro-1 h2");
    }


    get introParaText() {
        return $("#ModelIntro-1 p");
    }

    //page actions

    /**
   * @description
   *  this method will return a intro header text as a string
   * 
   */

    getIntroHeaderText() {
        return elementUtil.doGetText(this.introHeaderText);
    }

}


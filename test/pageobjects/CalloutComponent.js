"use strict";

import elementUtil from "../../common/ElementUtil";
import CarSafetyPage from "./CarSafetyPage";
module.exports = class CalloutComponent {

    // selectors
    get featurePhrased() {
        return $$("section[data-autoid='IconCallouts'] div [data-autoid='iconCallouts:iconTextItem']");
    }

    get learnCarSafety() {
        return $("div[data-autoid='IconCallouts-1'] a");
    }
    get testimonialVideos() {
        return $$("#VideoTestimonials-1 div[data-autoid^='videoTestimonials']");
    }

    // page actions

    /**
  * @description this method will click on 'LEARN MORE ABOUT CAR SAFETY' hyperlink 
  * @ returns  
  * CarSafetyPage object
  */
    clickLearnCarSafety() {
        elementUtil.doClick(this.learnCarSafety);
        return new CarSafetyPage();
    }

    /**
    * @description to collect all the features as key value pair 
    * @returns Map 
    */

    async getCalloutPhrases() {
        let map = await new Map();
        for await (let feature of this.featurePhrased) {
            let k = await elementUtil.doGetText(elementUtil.doGetElement(feature, "em"));
            let v = await await elementUtil.doGetText(elementUtil.doGetElement(feature, "p"));
            await map.set(k, v);
        }
        return await map;
    }
}
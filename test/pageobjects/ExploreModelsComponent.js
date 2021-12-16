"use strict";
//const CarPage = require("./CarPage");
import CarPage from "./CarPage";
import elementUtil from "../../common/ElementUtil";

module.exports = class ExploreModelsComponent {
    // private variables
    #modelname = "span[data-autoid$='modelName']";
    #rechargetype = "span[data-autoid$='rechargeType']";
    #shop = "a[data-autoid$='link2']";
    #modelLink = "div >a";

    // selectors

    get models() {
        return $$("div[data-autoid='springCarouselPane:carouselItem']");
    }

    get exploreOurModels() {
        return $("h2[data-autoid='productListCarousel:title']");
    }

    // page actions

    /**
     * @description this function verifies if there are any broken car links
     */

    async verifyNoBrokenLinks() {

        for await (const model of this.models) {
            let m = await elementUtil.doGetElement(model, this.#modelLink);
            let link = await elementUtil.doGetAttribute(m, "href");
            let isOK = await browser.isLinkOK(browser.config.baseUrl + link);
            await expect(isOK).to.be.true;
        }
    }






    /**
     * @parameters carName & engineType
     * 
     * @return CarPage object
     */



    async clickToBuy(modelName, rechargeType) {

        for await (const model of this.models) {
            await elementUtil.doScrollToview(this.exploreOurModels);
            let modelElement = await elementUtil.doGetElement(model, this.#modelname);
            let rechargeELement = await elementUtil.doGetElement(model, this.#rechargetype);
            let shop = await elementUtil.doGetElement(model, this.#shop);
            await shop.scrollIntoView();
            let strModelName = await elementUtil.doGetText(modelElement);
            let strRechargeType = await elementUtil.doGetText(rechargeELement);
            if (strModelName === modelName && strRechargeType.includes(rechargeType)) {
                await elementUtil.doClick(shop);
                break;
            }
        }
        return await new CarPage();
    }

}

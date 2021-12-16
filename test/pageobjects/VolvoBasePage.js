"use strict";

import RibbonComponent from "./RibbonComponent";
module.exports =
    class VolvoBasePage {

        // common inheritable pageactions

        getRibbonComponent() {
            return new RibbonComponent();
        }

        getTitle() {
            return browser.getTitle();
        }

    }
"use strict";
import elementUtil from "../../common/ElementUtil";
import CalloutComponent from "./CalloutComponent";
import carSafetyPage from "./CarSafetyPage";
import ExploreModelsComponent from "./ExploreModelsComponent";
import CommonRibbonComponent from "./RibbonComponent";
import IntroComponent from "./IntroComponent";
import VolvoBasePage from "./VolvoBasePage";


class CampaignPage extends VolvoBasePage {

  /**
   * Below are the locators/selectors
   * 
   */


  get getUrl() {
    return "intl/v/car-safety/a-million-more";
  }



  /**
   * 
   * page actions starts from here
   * 
   *  */



  /**
   * 
   * @returns IntroComponent Object 
   * 
   */

  getIntroComponent() {
    return new IntroComponent();
  }

  /**
   * 
   * @returns an CalloutComponent object 
   * 
   */
  getCalloutComponent() {
    return new CalloutComponent();
  }

  /**
   * 
   * @returns an ExploreModelsComponent object 
   * 
   */

  getExploreModelPage() {
    return new ExploreModelsComponent();
  }

}
module.exports = new CampaignPage();

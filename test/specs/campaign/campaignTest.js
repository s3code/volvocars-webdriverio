"use strict";
import campaignPage from "../../pageobjects/CampaignPage";
import campaignData from "../../../testdata/campaignData";


const RECHARGE_TYPE_HYBRID = "hybrid";
const RECHARGE_TYPE_ELECTRIC = "electric";



beforeEach(async () => {
  await browser.url(campaignPage.getUrl);
  await browser.clickIfCookiesPresent();
});

describe("Verify the url of Campaign Page", () => {
  it("User verifies the Campaign page's url contains 'intl/v/car-safety/a-million-more'", async () => {
    await wdioExpect(browser).toHaveUrlContaining(campaignPage.getUrl);
  });
});

describe("Videos", () => {
  it("Testimonial videos are displayed ", async () => {
    await campaignPage.getCalloutComponent().testimonialVideos.forEach(async (video) => {
      await wdioExpect(video).toBeDisplayed();
    });
  });
});

describe("Verify the models links are working fine", () => {

  it("Verify all the links are OK", async () => {
    await campaignPage.getExploreModelPage().verifyNoBrokenLinks();

  });

  it('model displayed smoke', async () => {
    //"XC90 Recharge"
    //S60 Recharge
    let car = await campaignPage.getExploreModelPage().clickToBuy("XC90 Recharge", RECHARGE_TYPE_HYBRID);
    await wdioExpect(browser).toHaveTitleContaining("XC90 Recharge");

  })

});

describe("To verify the links on campaign page", () => {
  it(" Verify 'LEARN MORE ABOUT CAR SAFETY' links navigates to Car Safety page.", async () => {
    let carSafetyPage = await campaignPage.getCalloutComponent().clickLearnCarSafety();
    await wdioExpect(browser).toHaveUrlContaining(carSafetyPage.carSafetyUrl);
  });

  it("Verify clicking on 'VOLVO' icon on top left navigates to Home page.", async () => {
    let homePage = await campaignPage.getRibbonComponent().clickVolvoIcon();
    await wdioExpect(browser).toHaveUrl(homePage.getHomePageUrl());
  });

  it("User clicks on 'Our Cars' menu", async () => {
    let ourCarsPage = await campaignPage.getRibbonComponent().clickOurCars();
    await wdioExpect(ourCarsPage.listCarTypes).toBeElementsArrayOfSize(3);
  });
});

describe('Intro phrases', () => {
  it("User verifies the intro header text", async () => {
    await wdioExpect(campaignPage.getIntroComponent().introHeaderText).toHaveText(campaignData.introHeaderText);
  });

  it("User verifies the intro para text", async () => {
    await wdioExpect(campaignPage.getIntroComponent().introParaText).toHaveText(campaignData.introParaText);
  });
})

describe('Callout verification', () => {

  describe("Verify callout texts", () => {
    it("Verify 'Speed cap' phrase", async () => {
      let actualPhrase = await (await campaignPage.getCalloutComponent().getCalloutPhrases()).get("Speed cap");
      await expect(actualPhrase).to.equal(campaignData.speedCap);
    });

    it("Verify 'Highway pilot' phrase", async () => {
      let actualPhrase = await (await campaignPage.getCalloutComponent().getCalloutPhrases()).get("Highway pilot");
      await expect(actualPhrase).to.equal(campaignData.highwayPilot);
    });

    it("Verify 'Driver monitoring cameras' phrase", async () => {
      let actualPhrase = await (await campaignPage.getCalloutComponent().getCalloutPhrases()).get("Driver monitoring cameras");
      await expect(actualPhrase).to.equal(campaignData.driverMonitoringCameras);
    });

    it("Verify 'Car Key' phrase", async () => {
      let actualPhrase = await (await campaignPage.getCalloutComponent().getCalloutPhrases()).get("Care Key");
      await expect(actualPhrase.trim()).to.equal(campaignData.careKey);
    });

  });



})

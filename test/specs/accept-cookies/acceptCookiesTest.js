import CookiesPage from "../../pageobjects/CookiesPage";

describe("Test cases related to cookies", () => {
  it("User accepts the cookies", async () => {
    await browser.url("/");
    await browser.pause(3000);
    await CookiesPage.clickAcceptButton();
    await wdioExpect(CookiesPage.acceptButton).not.toBeDisplayed();
  });
});

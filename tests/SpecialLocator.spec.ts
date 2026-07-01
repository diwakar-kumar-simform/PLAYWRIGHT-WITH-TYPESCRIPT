import {test, expect} from "@playwright/test";

test.only("getBy special locators in playwright", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    await page.getByLabel("Check me out if you Love IceCreams!").click(); // all the text present under label tag would be consider here as locator

    await page.getByLabel("Employed").click();

    await page.getByLabel("Gender").selectOption("Female");

    await page.getByPlaceholder("Password").fill("123456");

    await page.getByRole("button", {name: "Submit"}).click();

    await page.getByText("The Form has been submitted successfully!.").isVisible();

    await page.getByRole("link", {name: "Shop"}).click();

    await page.locator("app-card").filter({hasText: "Samsung Note 8"}).getByRole("button", {name: "Add"}).click();

    await page.pause();
    
})
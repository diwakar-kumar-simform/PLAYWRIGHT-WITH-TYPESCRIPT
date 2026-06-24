import { expect, test } from '@playwright/test';

test("First Playwright Test", async ({ page }) => {

    // this one is using the page fixture. its inside steps are same as the next test case have steps.
    await page.goto("https://www.google.com/");
    console.log(page.title());
    await expect(page).toHaveTitle("Google")
});

test("Browser context explanation Test with browser fixtures", async ({ browser }) => {

    // below is the default context - when you don't have anything like cookies or etc.
    const context = await browser.newContext();
    await context.newPage();
});

test("Browser context deafaul with page fixuters", async ({ page }) => {

    const userName = page.locator("#username");
    const password = page.locator("#password");
    const signInBtn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    await userName.fill("Diwakar");
    await password.fill("32456ytui");
    await signInBtn.click();

    console.log(await page.locator("[style*='block']").textContent());

    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await userName.fill(""); // This will clear the existing entered value.

    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signInBtn.click();

    // console.log(await cardTitles.first().textContent());
    // console.log(await cardTitles.nth(1).textContent());

    const allTitles = await cardTitles.allTextContents(); // this will return [], because this method will not wait until the page loading.
    console.log(allTitles); // its an array
});

test.only("Ui Controls", async ({ page }) => {
    const userName = page.locator("#username");
    const password = page.locator("#password");
    const signInBtn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    await page.locator("select.form-control").selectOption("Consultant");
    await page.locator("select.form-control").selectOption({ label: "Teacher" });
    
    await page.locator(".radiotextsty").nth(1).click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(await page.locator(".radiotextsty").last()).toBeChecked();

    console.log(await page.locator("#terms").isChecked());
    expect(await page.locator("#terms").isChecked()).toBeFalsy();

    await page.locator("#okayBtn").click()
    // await page.pause();
    await userName.fill("Diwakar");
    await password.fill("32456ytui");
    // await signInBtn.click();

})



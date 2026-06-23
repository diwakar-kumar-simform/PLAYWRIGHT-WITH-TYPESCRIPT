import {test, expect} from "@playwright/test";

test("Register a new user", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/register");
    const firstName = page.locator("#firstName");
    const lastName = page.locator("#lastName");
    const email = page.locator("#userEmail");
    const mobile = page.locator("#userMobile");
    const password = page.locator("#userPassword");
    const cnfpassword = page.locator("#confirmPassword");
    const checkBox = page.getByRole('checkbox');
    const registerBtn = page.locator("input[value='Register']");
    const loginBtn = page.getByText("Login");


    await firstName.fill("Dummy");
    await lastName.fill("User1");
    await email.fill("dummyuser4@gmail.com");
    await mobile.fill("1234567890");
    await password.fill("Mypassword@123");
    await cnfpassword.fill("Mypassword@123");
    await checkBox.check();
    await registerBtn.click();
    await loginBtn.click();

});

test.only("Login >> Extract the first product title", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const email = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    const loginBtn = page.getByText("Login");
    const productTitle = page.locator(".card-body b");

    await email.fill("dummyuser4@gmail.com");
    await password.fill("Mypassword@123");
    await loginBtn.click();

    // console.log(await productTitle.first().textContent());
    // console.log(await productTitle.nth(0).textContent());
    // console.log(await productTitle.nth(1).textContent());
    // console.log(await productTitle.last().textContent());
    // console.log(await productTitle.nth(2).textContent());

    await page.waitForLoadState('networkidle'); // intelligently this allows you to wait till all api response get fully loaded.
    console.log(await productTitle.allTextContents()); // this function doesn't auto wait that's why we have keep above one



    await productTitle.first().waitFor(); // intelligently wait till the locator doesn't appear. because above one method is little flaky
    console.log(await productTitle.allTextContents()); // this function doesn't auto wait that's why we have keep above one
    
})
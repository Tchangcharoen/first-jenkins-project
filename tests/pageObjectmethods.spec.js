import { expect, test } from '@playwright/test';

test("Getting the title of the page", async ({ page }) => {

  await page.goto("https://practice.cydeo.com/");

  let actualTitle = await page.title();
  console.log(actualTitle);


});


test("Getting the current URL of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  let actualURL = page.url();
  console.log(actualURL);

});


test("Set the window size", async ({ page }) => {
  
  await page.setViewportSize({ width: 1500, height: 700 })
  await page.goto("https://practice.cydeo.com/");

  
});
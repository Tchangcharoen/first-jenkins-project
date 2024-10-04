import { test } from '@playwright/test';

test.describe('@smoke Test Group1', () => {                              //<<<<< @tag  for specific test group


    
    test.beforeEach( async  ({page}) => {
        await page.goto("https://practice.cydeo.com/");
    });



  test("@lib01 Getting the title of the page", async ({ page }) => {       //<<<<< @tag  for specific test in the group
     console.log( await page.title());
  });

  test("Getting the current URL of the page", async ({ page }) => {
    console.log( page.url());
  });

 
});
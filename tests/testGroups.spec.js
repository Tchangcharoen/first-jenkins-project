
import { test } from '@playwright/test';

test.describe("Test Group1", () => {

    test.beforeAll( async  () => {
        console.log("Before ALL");
    });

    test.afterAll( async  () => {
        console.log("After ALL");
    });


    test.beforeEach( async  ({page}) => {
        console.log("Before EACH");
    });

    test.afterEach( async  ({page}) => {
        console.log("After EACH");
    });



  test("Test Case 1", async ({ page }) => {
    console.log("Test Case 1 is executed");
  });


  test("Test Case 2", async ({ page }) => {
    console.log("Test Case 2 is executed");
  });


  test("Test Case 3", async ({ page }) => {
    console.log("Test Case 3 is executed");
  });



});
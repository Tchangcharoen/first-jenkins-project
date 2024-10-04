import { test } from '@playwright/test';

test.describe('Test Group', () => {

    //create the before each and navigate to https://practice.cydeo.com/
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');

    });



    

  test("Check() checks the radio buttons and checkboxes if they havnt been checked yet", async ({ page }) => {
    
    let checkboxesLink = page.locator("text='Checkboxes'")
    await checkboxesLink.click();

    let checkbox1 = page.locator("#box1");
    await checkbox1.check();

  });


  test("uncheck() unchecks the radio buttons and checkboxes if they havnt been unchecked yet", async ({ page }) => {

    let checkboxesLink = page.locator("text='Checkboxes'")
    await checkboxesLink.click();

    let checkbox2 = page.locator("#box2");
    await checkbox2.uncheck();
  });



    test("selectOption() used for dropdowns", async ({ page }) => {
      
        page.locator("text='Dropdown'").click();

        let simpleDropdown = page.locator("//select[@id='dropdown']");


        await simpleDropdown.selectOption("1");      // Select by value



    });


    test("innerText()  retrives the visible text ", async ({ page }) => {              //retrives txt value of element with innerText()
       
        let headerElement = page.locator("//span[@class='h1y']");

        let actualText = await headerElement.innerText();                                  // act like getText();
    });


    test("inputValue(): only wotks with <input>, <textarea>, <select>", async ({ page }) => {
        
        await page.getByText("Inputs").click();

        let inputBox = page.locator("//input[@type='number']");           //navigate to input box

        await inputBox.fill("123");                                     // type input box with 123

        let inputValue = await inputBox.inputValue();                   // retrive the value

        console.log(inputValue);


    });
  

});
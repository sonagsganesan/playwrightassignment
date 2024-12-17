import {chromium,test, expect } from "@playwright/test";

type Credentials = {
    username: string;
    password: string;
  }

type LoginDetails = {
    baseUrl: string;
    credentials: Credentials;
}

const login : LoginDetails = {
    baseUrl:'https://login.salesforce.com',
    credentials:{
        username: 'sonak@testleaf.com',
        password: 'Abcd@1234',
    }

};
const firstName ="Sona";
const lastName = "Ganesan";
const Company = "Testleaf";

test("Login Into SaleForce", async () => {
    test.setTimeout(60000);
    let timestamp = Date.now();
    let OpportunityName = "Opportunity"+timestamp
    // Step: Launch the browser (Chrome / Edge / Firefox / Safari).
    const browserInstance = await chromium.launch({headless:false,channel:"chrome"});

    const browserContext = await browserInstance.newContext();

    const page = await browserContext.newPage();

    //Locators for Login Page
    const username = page.locator("input#username");
    const password = page.locator("input#password");

    //Locators for Home page
    const applauncher = page.locator(".slds-icon-waffle");
    const searchInput = page.locator('input[placeholder="Search apps or items..."]');
    const viewall = page.locator("button[aria-label='View All Applications']")
    const marketingcrm = page.locator('div[data-name="Marketing CRM Classic"]')
    const marketingcrmtitle = page.locator("//h1/span[@class='slds-truncate']");
    const leads = page.locator("//span[text()='Leads']");

    //Locators for Lead Page
    const newLead = page.locator('button[name="New"]');
    const moreactions = page.locator('//button//span[text()="Show more actions"]');
    const convertoption = page.locator('//span[text()="Convert"]'); 

    //Locators for Leads form
    const firstNameLead = page.locator('input[name="firstName"]');
    const lastNameLead = page.locator('input[name="lastName"]');
    const companyLead = page.locator('input[name="Company"]');
    const salutionLead = page.locator('button[aria-label="Salutation"]');
    const selectsalutionlead = page.locator('//span[@title="Mrs."]')
    const savebutton = page.locator('button[name="SaveEdit"]')
    const toastMessage = page.locator('//span[@class="toastMessage slds-text-heading--small forceActionsText"]');

    //Locators for Convert
    const convertButton = page.locator('//button[@class="slds-button slds-button_brand"]');
    const convertMsg = page.locator('//div[@class="panel runtime_sales_leadConvertedConfirmationDesktop"]//h2');
    const gotoleads = page.locator('//button[@class="slds-button slds-button_brand"]');

    //Locators for opportunities
    const opportunities = page.locator("//span[text()='Opportunities']");
    const opportunitiesnameBtn = page.locator(`//button[@title="${Company}-"]`)
    const opportunitiesnamefield = page.locator("(//input[@class=' input'])[4]")
    const searchOpportunities = page.locator("input[name='Opportunity-search-input']");
    const searchResult = page.locator(`a[title="${OpportunityName}"]`)

    //Step2: Load the specified URL (https://login.salesforce.com/).
    await page.goto(login.baseUrl);
    //Expected Result: The Salesforce application’s login window should appear.
    await expect(username).toBeVisible();
    await expect(password).toBeVisible();

    //Step3:Enter the Username, Password and click on the Login button.
    await username.fill(login.credentials.username);
    await password.fill(login.credentials.password);
    await page.click("#Login");
    await page.waitForLoadState('load')
    //Expected Result: The user should be logged into Salesforce CRM
    await expect(page).toHaveURL(/.*home/);


    //Step4: Click on the App Launcher toggle button.
    await expect(applauncher).toBeVisible();
    await applauncher.click();
    
    //Step: Click on the View All link.
    await viewall.click({timeout:5000});
    //Expected Result: The link should direct the user to the App Launcher pop up window.
    await searchInput.fill("Marketing");
    await expect(marketingcrm).toBeVisible();
    await marketingcrm.click({timeout:5000});
    await expect(marketingcrmtitle).toHaveText("Marketing CRM Classic")
    
    //Step: Navigate to the Leads tab from the Marketing dashboard.
    await leads.click();
    //Expected Result: User should see a list of existing leads (if any) and options to create a new lead.
    await expect(page).toHaveURL(/.*Lead/);
    
    //Step: Click on the New button to create a lead.
    await newLead.click();
    //Expected Result: A form to input details for the new lead should appear.
    await expect(firstNameLead).toBeVisible();

    //Step: Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid data.
    await salutionLead.click();
    await selectsalutionlead.click();
    await firstNameLead.fill(firstName);
    await lastNameLead.fill(lastName);
    await companyLead.fill(Company);
    //Step: Click on the Save button.
    await savebutton.click();
    //Expected Result: A new lead should be created and user should be redirected to the detailed view of the newly created lead. A confirmation message should also be displayed and verified.
    await expect(toastMessage).toBeVisible();
    await expect(toastMessage).toHaveText(`Lead "Mrs. ${firstName} ${lastName}" was created.`)

    //Step: In the newly created Lead page, locate the dropdown near Submit for Approval button and click on the Convert link.
    await moreactions.click();
    await convertoption.click();

    //Step: Click on the Opportunity Name input field, clear and enter a new opportunity name.
    await opportunitiesnameBtn.click();
    await opportunitiesnamefield.clear();
   
    //Step: Click on the Convert button.
    await opportunitiesnamefield.fill(OpportunityName)
    await convertButton.click({timeout:3000});
    await page.waitForTimeout(10000);

    //Expected Result: The lead should be successfully converted. A confirmation message ‘Your lead has been converted’ should be displayed and verified.
    await expect(convertMsg).toHaveText(`Your lead has been converted`)

    //Step: Click on the Go to Leads button.
    await expect(gotoleads).toBeVisible()
    await gotoleads.click()

    //Step: Navigate to the Opportunities tab and search for the opportunity linked with the converted lead.
    await expect(opportunities).toBeVisible();
    await opportunities.click();
    await expect(page).toHaveURL(/.*Opportunity/);

    //Step: Search the opportunity name created and click on the created opportunity name.
    await searchOpportunities.fill(OpportunityName);
    //Expected Result: The created Opportunity Name should appear and verify the same.
    await expect(searchResult).toHaveText(OpportunityName)
    
});



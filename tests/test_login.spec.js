import {Page, test, expect} from "@playwright/test"
import {LoginPage} from "../pages/loginPage"
import {ContactListPage} from "../pages/contactListPage"
import {ContactForm} from "../pages/contactForm"

const inputData = ["Test FirstName 2", "Test LastName ", "2022-11-11", "test@test.com", "8005551234", "Test St1", "Test St2", "Test City", "Test SP", "1234", "Test Country"]
test.describe.configure({ mode: 'serial' });
let page = Page;
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });


test("Login Test", async () => {
    const Login = new LoginPage(page)
    const ContactList = new ContactListPage(page)
    const ContactFormObj = new ContactForm(page)
    await Login.gotoLoginPage("https://thinking-tester-contact-list.herokuapp.com/")
    await Login.login("dummyuser@du.com", "dummydummy")
    await ContactList.addNewContact()
    await page.waitForTimeout(1000)
    await ContactFormObj.fillContactForm(inputData[0], 
                                            inputData[1], 
                                            inputData[2], 
                                            inputData[3], 
                                            inputData[4], 
                                            inputData[5], 
                                            inputData[6], 
                                            inputData[7], 
                                            inputData[8], 
                                            inputData[9],
                                            inputData[10])
    await ContactFormObj.submitForm()
    await page.waitForTimeout(3000)
})

test("Check Table Data", async () => {
    console.log(await page.url())
    const table = await page.locator("#myTable")
    const cols = await table.locator("thead tr th")
    const rows = await table.locator("tr")
    console.log(await cols.allTextContents())
    console.log(await rows.count())

})
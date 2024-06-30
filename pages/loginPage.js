exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page
        this.email = page.locator("#email")
        this.password = page.locator("#password")
        this.submit_button = page.locator("#submit")
    }

    async gotoLoginPage(url){
        await this.page.goto(url)
    }

    async enterEmail(email){
        return await this.email.fill(email)
    }

    async enterPassword(password){
        return await this.password.fill(password)
    }

    async clickOnLogin(){
        return await this.submit_button.click()
    }

    async login(email, password){
        await this.enterEmail(email)
        await this.enterPassword(password)
        await this.clickOnLogin()
    }
}
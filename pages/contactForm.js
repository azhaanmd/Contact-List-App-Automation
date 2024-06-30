exports.ContactForm = class ContactForm{
    constructor(page){
        this.page = page
        this.firstName = page.locator("#firstName")
        this.lastName = page.locator("#lastName")
        this.dateOfBirth = page.locator("#birthdate")
        this.email = page.locator("#email")
        this.phone = page.locator("#phone")
        this.street1 = page.locator("#street1")
        this.street2 = page.locator("#street2")
        this.city = page.locator("#city")
        this.stateProvince = page.locator("#stateProvince")
        this.postalCode = page.locator("#postalCode")
        this.country = page.locator("#country")
        this.submitButton = page.locator("#submit")
        this.cancelButton = page.locator("#cancel")

    }

    async fillContactForm(firstName, lastName, dateOfBirth, email, phone, street1, street2, city, stateProvince, postalCode, country){
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.dateOfBirth.fill(dateOfBirth)
        await this.email.fill(email)
        await this.phone.fill(phone)
        await this.street1.fill(street1)
        await this.street2.fill(street2)
        await this.city.fill(city)
        await this.firstName.fill(firstName)
        await this.stateProvince.fill(stateProvince)
        await this.postalCode.fill(postalCode)
        await this.country.fill(country)
        await this.submitButton.click()
    }
    
     
}
exports.ContactListPage = class ContactListPage{
    constructor(page){
        this.page = page
        this.addANewContactButton = page.locator("#add-contact")
    }

    async addNewContact(){
        return await this.addANewContactButton.click()
    }
}
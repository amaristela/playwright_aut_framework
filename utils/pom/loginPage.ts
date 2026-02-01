import { expect, type Locator, type Page } from '@playwright/test'

export class LoginPage {
    readonly page: Page
    readonly username: Locator
    readonly password: Locator
    readonly btnlogin: Locator

    constructor(page: Page) {
        this.page = page
        this.username = page.locator('xpath=//input[@name="username"]')
        this.password = page.locator('xpath=//input[@name="password"]')
        this.btnlogin = page.locator('xpath=//input[@value="Log In"]')
    }

    async gotoUrl() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
        await expect(this.page).toHaveTitle(/Welcome/)
    }

    async login(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.btnlogin.click()
    }
}

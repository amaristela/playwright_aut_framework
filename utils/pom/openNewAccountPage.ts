import {expect, type Locator, type Page} from '@playwright/test';

export class OpenNewAccountPage {
    readonly page : Page;
    readonly urlOpenNewAccount : Locator;
    readonly titleOpenNewAccount : Locator;
    readonly accountType : Locator;
    readonly fromAccountId : Locator;
    readonly btnOpenNewAccount : Locator;
    readonly lblAccountOpened : Locator;
    readonly lblCongratulationMsg : Locator;
    readonly lblYourNewAccountNo : Locator;
    readonly lblNewAccountNo : Locator;


    constructor(page:Page) {
        this.page = page;
        this.urlOpenNewAccount = page.locator('xpath=//div[@id="leftPanel"]//a[text()="Open New Account"]');
        this.titleOpenNewAccount = page.locator('xpath=//div[@id="openAccountForm"]/h1');
        this.accountType = page.locator('xpath=//select[@id="type"]');
        this.fromAccountId = page.locator('xpath=//select[@id="fromAccountId"]');
        this.btnOpenNewAccount = page.locator('xpath=//input[@value="Open New Account"]');
        this.lblAccountOpened = page.locator('xpath=//div[@id="openAccountResult"]/h1');
        this.lblCongratulationMsg = page.locator('xpath=//div[@id="openAccountResult"]/p[1]');
        this.lblYourNewAccountNo = page.locator('xpath=//div[@id="openAccountResult"]/p[2]/b');
        this.lblNewAccountNo = page.locator('xpath=//a[@id="newAccountId"]');

    }

    async createNewCheckingAccount() {
        await this.urlOpenNewAccount.click();
        await expect(this.titleOpenNewAccount).toHaveText('Open New Account');
        await expect(this.accountType).toHaveValue('0');
        await expect(this.fromAccountId).toHaveText(/1/);
        await this.btnOpenNewAccount.click();
        await expect(this.lblAccountOpened).toHaveText('Account Opened!');
        await expect(this.lblCongratulationMsg).toHaveText('Congratulations, your account is now open.');
        await expect(this.lblYourNewAccountNo).toHaveText('Your new account number:');
        await expect(this.lblNewAccountNo).toBeVisible();

    }
}


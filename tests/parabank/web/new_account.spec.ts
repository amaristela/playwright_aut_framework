import { expect } from '@playwright/test'
import { test } from '../../../utils/fixtures/fixtureParabank'

test.beforeEach(async ({ loginPage }) => {
    await loginPage.gotoUrl()
})

test('Open a new Checking Account', async ({ loginPage, openNewAccountPage, page }) => {
    await loginPage.login('abc', '123456')
    await openNewAccountPage.createNewCheckingAccount()
})

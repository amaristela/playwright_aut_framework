import { expect } from "@playwright/test";
import { test } from "../../../utils/fixtures/fixtureParabank";

test.beforeEach(async ({loginPage}) => {
    await loginPage.gotoUrl();
});

test('Parabank Login Success', async ({loginPage, page}) => {

    await loginPage.login('abc','123456');

    // Expect a title to contain /Accounts Overview/
    await expect(page).toHaveTitle(/Accounts Overview/);
});

test('Parabank login failed due to empty password', async ({loginPage, page}) => {

    await loginPage.login('abc','');

    // Expect to display error message
    await expect(page.locator('xpath=//p[text() = "Please enter a username and password."]')).toHaveText('Please enter a username and password.');
});

test('Parabank login failed due to empty username', async ({loginPage, page}) => {

    await loginPage.login('','123456');
    
    // Expect to display error message
    await expect(page.locator('xpath=//p[text() = "Please enter a username and password."]')).toHaveText('Please enter a username and password.');
});

test('Parabank login failed due to user was not registered', async ({loginPage, page}) => {

    await loginPage.login('xyz','123');

    // Expect to display "Error!" as Title
    await expect(page.locator('xpath=//h1[text() = "Error!"]')).toHaveText('Error!');

    // Expect to display error message
    await expect(page.locator('xpath=//p[text() = "The username and password could not be verified."]')).toHaveText('The username and password could not be verified.');
});
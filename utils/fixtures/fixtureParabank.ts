import {test as base} from '@playwright/test';
import { LoginPage } from '../pom/loginPage';
import { OpenNewAccountPage } from '../pom/openNewAccountPage';


type ParaBankFixtures = {
    loginPage : LoginPage;
    openNewAccountPage : OpenNewAccountPage;
};

export const test = base.extend<ParaBankFixtures>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    openNewAccountPage: async ({page}, use) => {
        const openNewAccountPage = new OpenNewAccountPage(page);
        await use(openNewAccountPage);
    }
});
import {test as base} from '@playwright/test';
import { ParabankLoginPage } from '../pom/parabankLoginPage';


type ParaBankFixtures = {
    parabankLoginPage : ParabankLoginPage;
};

export const test = base.extend<ParaBankFixtures>({
    parabankLoginPage: async ({page}, use) => {
        const parabankLoginPage = new ParabankLoginPage(page);
        await use(parabankLoginPage);
    }
})
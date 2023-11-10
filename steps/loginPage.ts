import { DataTable } from '@cucumber/cucumber';
import { page } from './hooks';
import { expect } from 'playwright/test';

export class CautestLoginPage {
    private Elements = {
        usernameInput: "//input[@id='username']",
        passwordInput: "//input[@id='password']",
        loginBtn: "//button[@id='loginBtn']",
        welcomeLine: "//h3[@class='pull-left font-extra-bold']",
        errorMess: "//div[@class='alert alert-danger']",
        errorValidation: "//ul[@class='list-unstyled']//li",
        forgotPassHyperlink: "//a[contains(@class,'forgotten-password')]//small",
        forgotPassForm: "//form[@class='form-horizontal']",
    }

    async fillLoginInfo(UN: any, PW: any) {
        await page.fill(this.Elements.usernameInput, UN);
        await page.fill(this.Elements.passwordInput, PW);
    }

    async clickLoginBtn() {
        await page.click(this.Elements.loginBtn);
    }

    async verifySuccessLogin(table: DataTable) {
        const expectRel = table.raw()[0][0];
        const actualRel = await page.textContent(this.Elements.welcomeLine);
        expect(actualRel).toContain(expectRel);
    }

    async verifyFailLogin(errorType: string, table: DataTable) {
        const expectError = table.raw()[0][0];
        let error = "";
        switch (errorType) {
            case 'invalid':
                error = this.Elements.errorMess;
            break;
            case 'username':
                error = this.Elements.errorValidation;
            break;
        }
        const actualRel = await page.textContent(error);
        expect(actualRel?.trim()).toBe(expectError.trim());
    }

    async clickForgotlink() {
        await page.click(this.Elements.forgotPassHyperlink);
    }

    async verifyForgotlink() {
        await expect(page.locator(this.Elements.forgotPassForm)).toBeVisible();
    }
}
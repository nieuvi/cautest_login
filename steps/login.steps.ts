import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { CautestLoginPage } from '../page/loginPage';
import { expect } from '@playwright/test';

let cautestLoginPage : CautestLoginPage;

//Verify that the user logins successfully when entering valid email and valid password
Given('User enters valid email and valid password', async function () {
    cautestLoginPage = new CautestLoginPage();
    await cautestLoginPage.fillLoginInfo('hoanognadmin@yopmail.com', 'HoaDung1987');
});

When('User clicks on the "Sign in" button', function () {
    cautestLoginPage.clickLoginBtn();
});

Then('User should be redirected to the dashboard', async function (table: DataTable) {
    expect(await cautestLoginPage.verifySuccessLogin(table));
});

//Verify that user logins unsuccessfully when entering valid email and invalid password
Given('User enters valid email and invalid password', async function () {
    cautestLoginPage = new CautestLoginPage();
    await cautestLoginPage.fillLoginInfo('hoanognadmin@yopmail.com', 'invalid');
});

When('User clicks on the "Sign in" button --password', function () {
    cautestLoginPage.clickLoginBtn();
});

Then('User should see an error message --password', async function (table: DataTable) {
    expect(await cautestLoginPage.verifyFailLogin('invalid', table));
});

//Verify that user logins unsuccessfully when entering invalid email and valid password
Given('User enters invalid email and valid password', async function () {
    cautestLoginPage = new CautestLoginPage();
    await cautestLoginPage.fillLoginInfo('invalid@yopmail.com', 'HoaDung1987');
});

When('User clicks on the "Sign in" button --username', function () {
    cautestLoginPage.clickLoginBtn();
});

Then('User should see an error message --username', async function (table: DataTable) {
    expect(await cautestLoginPage.verifyFailLogin('invalid', table));
});

//Verify that user logins unsuccessfully when entering invalid email and invalid password
Given('User enters invalid email and invalid password', async function () {
    cautestLoginPage = new CautestLoginPage();
    await cautestLoginPage.fillLoginInfo('invalid@yopmail.com', 'invalid');
});

When('User clicks on the "Sign in" button --invalid', function () {
    cautestLoginPage.clickLoginBtn();
});

Then('User should see an error message --invalid', async function (table: DataTable) {
    expect(await cautestLoginPage.verifyFailLogin('invalid', table));
});

//Verify that user logins unsuccessfully when leaving the username blank
Given('User enters valid password', async function () {
    cautestLoginPage = new CautestLoginPage();
    await cautestLoginPage.fillLoginInfo('', 'HoaDung1987');
});

Then('User should see an error message under username field --username blank', async function (table: DataTable) {
    expect(await cautestLoginPage.verifyFailLogin('username', table));
});

//Verify that user logins unsuccessfully when leaving the password blank
Given('User enters valid email', async function () {
    cautestLoginPage = new CautestLoginPage();
    await cautestLoginPage.fillLoginInfo('hoanognadmin@yopmail.com', '');
});

When('User clicks on the "Sign in" button --password blank', function () {
    cautestLoginPage.clickLoginBtn();
});

Then('User should see an error message --password blank', async function (table: DataTable) {
    expect(await cautestLoginPage.verifyFailLogin('invalid', table));
});

//Verify that the error validation is displayed when entering username with wrong email format
Given('User enters email with wrong format in username field', async function () {
    cautestLoginPage = new CautestLoginPage();
    await cautestLoginPage.fillLoginInfo('test@', '');
});

Then('User should see an error message under username field', async function (table: DataTable) {
    expect(await cautestLoginPage.verifyFailLogin('username', table));
});

//Verify that the "Forgotten Password?" hyperlink is clickable
Given('User enters valid email --hyperlink', async function () {
    cautestLoginPage = new CautestLoginPage();
    await cautestLoginPage.fillLoginInfo('hoanognadmin@yopmail.com', '');
});

When('User clicks on the "Forgotten Password?" hyperlink', function () {
    cautestLoginPage.clickForgotlink();
});

Then('The "Forgotten Password" form should be displayed', async function () {
    expect(await cautestLoginPage.verifyForgotlink());
});

//Verify that the user can access the organisation form to sign up
Given('User clicks on the "Sign up" hyperlink --organisation', async function () {
    cautestLoginPage = new CautestLoginPage();
    await cautestLoginPage.fillLoginInfo('hoanognadmin@yopmail.com', '');
    await cautestLoginPage.clickSignupHyperlink();
})

When('User chooses the "Organisation" option', async function() {
    await cautestLoginPage.selectSignup('Organisation');
})

Then('The "Organisation" form should be displayed', async function() {
    expect (await cautestLoginPage.verifySignUpHyperlink('Organisation'));
})

//Verify that the user can access the individual form to sign up
Given('User clicks on the "Sign up" hyperlink --individual', async function () {
    cautestLoginPage = new CautestLoginPage();
    await cautestLoginPage.fillLoginInfo('hoanognadmin@yopmail.com', '');
    await cautestLoginPage.clickSignupHyperlink();
})

When('User chooses the "Individual" option', async function() {
    await cautestLoginPage.selectSignup('Individual');
})

Then('The "Individual" form should be displayed', async function() {
    expect (await cautestLoginPage.verifySignUpHyperlink('Individual'));
})
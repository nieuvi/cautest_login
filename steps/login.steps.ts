import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../page/loginPage";
import { expect } from "playwright/test";

let loginPage: LoginPage;

Given('The API server is running --login', function () {
    loginPage = new LoginPage();
});

When('I send a POST request to that API server', function () {
    loginPage.postRequest();
});

Then('I receive a {int} response --login', async function (int) {
    expect(await loginPage.verifyLogin(int));
});
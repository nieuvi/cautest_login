import { Given, When, Then } from "@cucumber/cucumber";
import { APIPage } from "../page/testapiPage";
import { expect } from '@playwright/test';

let apiPage: APIPage;

Given('The API server is running', async function () {
    apiPage = new APIPage();
    await apiPage.navigate();
});

When('I send a GET request to that API server', async function() {
    apiPage.getRequestAll('');
});

Then('I receive a {int} response', async function (int) {
    expect(await apiPage.verifyStatus(int));
});
import { Given, When, Then } from "@cucumber/cucumber";
import { UserPage } from "../page/userPage";
import { expect} from '@playwright/test';

let userPage: UserPage;

Given('The API server is running --new user', function () {
    userPage = new UserPage();
});

When('I send a POST request to that API server --new user', async function () {
    await userPage.postRequest();
});

Then('I receive a response body with new id --new user', function () {
    expect(userPage.verifyStatus(200));
});
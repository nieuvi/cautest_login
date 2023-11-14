import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { APIPage } from "../page/testapiPage";
import { expect } from '@playwright/test';

let apiPage: APIPage;

//Get all products
Given('The API server is running', function () {
    apiPage = new APIPage();
});

When('I send a GET request to that API server', function() {
    apiPage.getRequest('');
});

Then('I receive a {int} response', async function (int) {
    expect(await apiPage.verifyStatus(int));
});

//Get a single product
Given('The API server is running --single', function () {
    apiPage = new APIPage();
});

When('I send a GET request to {string} endpoint --single', function (string) {
    apiPage.getRequest(string);
});

Then('I receive a {int} response --single', async function (int) {
    expect(await apiPage.verifyStatus(int));
});

Then('I receive a response body contain:', async function (table: DataTable) {
    expect(await apiPage.containBodyget("/1", table));
});

//Limit results
Given('The API server is running --limit', function () {
    apiPage = new APIPage();
});

When('I send a GET request to {string} endpoint --limit', function (string) {
    apiPage.getRequest(string);
});

Then('I receive a response body containing {int} products', async function (int) {
    expect(await apiPage.verifyLength("?limit=5", int));
});

//Add a new product
Given('The API server is running --add', function () {
    apiPage = new APIPage();
});

When('I send a POST request to the API server --add', function () {
    apiPage.postRequest();
});

Then('I receive a response body having a added product with id {int} and contains: --add', async function (int, table: DataTable) {
    expect(await apiPage.containBodypost(int, table));
});

//Update a product
Given('The API server is running --update', function () {
    apiPage = new APIPage();
  });

When('I send a PUT request to {string} endpoint --update', function (string) {
    apiPage.putRequest(string);
  });

  Then('I receive a response body having a updated product with id {int} and contains: --update', async function (int, table: DataTable) {    
    expect(await apiPage.containBodyput("/7", int, table));
  });

import { Given, When, Then } from "@cucumber/cucumber";
import { CartPage } from "../page/cartPage";

let cartPage: CartPage;

//Get all carts
Given('The API server is running --all carts', function () {
    cartPage = new CartPage();
});

When('I send a GET request to the API server --all carts', function () {
    cartPage.getRequest('');
});

Then('I receive a {int} response --all carts', function (int) {
    cartPage.verifyStatus(int);
});

//Get a single cart
Given('The API server is running --single cart', function () {
    cartPage = new CartPage();
});

When('I send a GET request to {string} endpoint --single cart', function (string) {
    cartPage.getRequest(string);
});

Then('I receive a response body with id {int} --single cart', function (int) {
    cartPage.verify("Id", "/5", int);
});


//Limit results
Given('The API server is running --limit carts', function () {
    cartPage = new CartPage();
});

When('I send a GET request to {string} endpoint --limit carts', function (string) {
    cartPage.getRequest(string);
});

Then('I receive a response with {int} carts --limit carts', function (int) {
    cartPage.verify("Length", "?limit=5", int);
});


//Sort results descrease
Given('The API server is running --sort carts', function () {
    cartPage = new CartPage();
});

When('I send a GET request to {string} endpoint --sort carts', function (string) {
    cartPage.getRequest(string);
});

Then('I receive a response body with id {int} at first --sort carts', function (int) {
    cartPage.verify("IdFirst", "?sort=desc", int);
});


//Get carts in a date range
Given('The API server is running --date range', function () {
    cartPage = new CartPage();
});

When('I send a GET request to {string} endpoint --date range', function (string) {
    cartPage.getRequest(string);
});

Then('I receive a response body in date range --date range', function () {
    cartPage.verify('Date', "?startdate=2020-02-25&enddate=2020-03-01", 0)
});


//Get user cart 
Given('The API server is running --user cart', function () {
    cartPage = new CartPage();
});

When('I send a GET request to {string} endpoint --user cart', function (string) {
    cartPage.getRequest(string);
});

Then('I receive a response body with userid {int} --user cart', function (int) {
    cartPage.verify('UserId', "/user/2", int);
});

//Add a new cart
Given('The API server is running --add cart', function () {
    cartPage = new CartPage();
});

When('I send a POST request to that server --add cart', function () {
    cartPage.postRequest();
});

Then('I receive a 200 response --add cart', function () {
    cartPage.verifyStatus(200);
});

Then('I receive a new cart in response body --add cart', function () {
    cartPage.verifyPost();
});

//Update a cart
Given('The API server is running --update cart', function () {
    cartPage = new CartPage();
});

When('I send a PUT request to {string} endpoint --update cart', function (string) {
    cartPage.putRequest("/7")
});

Then('I receive a {int} response --update cart', function (int) {
    cartPage.verifyStatus(int);
});

Then('I receive a updated cart --update cart', function () {
    cartPage.verifyPut();
});
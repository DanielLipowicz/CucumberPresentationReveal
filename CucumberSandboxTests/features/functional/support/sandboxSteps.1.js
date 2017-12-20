var { defineSupportCode } = require('cucumber');
var assert = require('assert');
var seleniumWebdriver = require('selenium-webdriver');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var cucumbers;
defineSupportCode(function ({ Given, Then, When }) {

    Given(/^there are (\d+) cucumbers$/, function (startNumber) {
        cucumbers = startNumber;
    })

    When(/^I (\w+) 5 cucumbers$/, function (toDo) {
        switch (toDo) {
            case "eat":
                cucumbers -= 5;
                break;
            case "add":
                cucumbers += 5;
                break;
                //...
        }
    })
    Then(/^I should have (\d+) cucumbers$/, function (endNumber) {
        console.log('value' + cucumbers);
        console.log("setValue " + cucumbers);
        assert.equal(cucumbers, endNumber);
    })
});
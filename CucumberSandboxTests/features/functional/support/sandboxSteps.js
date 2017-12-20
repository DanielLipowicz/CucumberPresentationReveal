var { defineSupportCode } = require('cucumber');
var assert = require('assert');
var seleniumWebdriver = require('selenium-webdriver');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

var setValue;
defineSupportCode(function ({ Given, Then, When }) {

    Given(/^Nothing$/, function () {
        console.log('do nothing');
    })
    When(/^I set value (\d+)$/, function (value) {
        setValue = value
    })
    Then(/^Value should be (\d+)$/, function (value) {
        console.log('value' + value);
        console.log("setValue " + setValue);
        assert.equal(setValue, value);
    })
});
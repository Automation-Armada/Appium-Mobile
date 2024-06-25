import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});


Given('I am on the login page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  When('I login with tomsmith and SuperSecretPassword!', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


  Then('I should see a flash message saying You logged into a secure area!', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
var {Given, When, Then} = require('cucumber');

Given('I open the application', () => {
      browser.url("https://angular.io/");
});

When('I click on link {string}', (link) => {
      var el = $(link);
      el.click();
      browser.pause(5000);
});

Then('Verify id {string} is present', (id) => {
      var el = $(id);
      expect(el).toBeDisplayed();
      browser.pause(5000);
});

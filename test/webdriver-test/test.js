var chai = require('chai');
global.expect = chai.expect;
chai.Should();
describe('Webdriver tests:', function () {
  it('must be 5 files with chosen criteria', function () {
    browser.url('http://172.22.195.20:8080').then(function () {
        browser.waitForExist('#userName');
        browser.setValue('#userName', 'my8bit');
        browser.selectByAttribute('#type', 'value', 'text/plain');
        browser.selectByAttribute('#lang', 'value', 'Markdown');
        browser.click('#sendRequest');
        browser.waitForExist('#listOfFiles');
        var lis = browser.elements('#listOfFiles li');
        lis.value.length.should.be.equal(5);
    });
  });
});


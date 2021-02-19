describe('den Login-Prozess auf der Bewerberportal-Seite und', function() {

  beforeAll(function() {
    console.log('Test Case: Läuft der Login-Prozess komplett ohne Fehler durch?');
  });

  afterAll(function() {
    console.log('\nDer Login-Prozess ist durchgelaufen und der Login war erfolgreich (Erfolgreicher Test).\n');
  });

  it('oeffne die Login-Seite', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:80/login.html');
  });

  it('die Emailadresse eingeben', function() {
      element(by.name('emailadresse')).sendKeys('maxMustermann@web.de');
      browser.sleep(1500);
  });

  it('das Passwort eingeben', function() {
    element(by.name('password')).sendKeys('1234567890');
    browser.sleep(1500);
  });

  it('das Stellenangebotsformular absenden', function() {
    var submitForm = element(by.name('login_user'));
    submitForm.click();
  });

  it('ist der Login-Prozess erfolgreich gewesen?', function() {
    expect(browser.getCurrentUrl()).toEqual("http://localhost/bewerberportal.html?absenden=loginerfolgreich");
  });
});

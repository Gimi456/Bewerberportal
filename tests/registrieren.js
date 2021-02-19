describe('den Registrierungs-Prozess auf der Bewerberportal-Seite und', function() {

  beforeAll(function() {
    console.log('Test Case: Läuft der Registrierungs-Prozess komplett ohne Fehler durch?');
  });

  afterAll(function() {
    console.log('\nDer Registrierungs-Prozess ist durchgelaufen und der Login war erfolgreich (Erfolgreicher Test).\n');
  });

  it('oeffne die Registrierungs-Seite', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:80/registrieren.html');
  });

  it('die Emailadresse eingeben', function() {
      element(by.name('emailadresse')).sendKeys('maximeMusterfrau@web.de');
      browser.sleep(1500);
  });

  it('die Emailadresse eingeben', function() {
      element(by.name('name')).sendKeys('Musterfrau');
      browser.sleep(1500);
  });

  it('die Emailadresse eingeben', function() {
      element(by.name('vorname')).sendKeys('Maxime');
      browser.sleep(1500);
  });

  it('das Passwort eingeben', function() {
    element(by.name('passwordFirst')).sendKeys('34567890123');
    browser.sleep(1500);
  });

  it('das Passwort erneut eingeben', function() {
    element(by.name('passwordCheckFirst')).sendKeys('34567890123');
    browser.sleep(1500);
  });

  it('den Datenschutzerklaerungshacken setzen', function() {
    var datenCheckBox = element(by.id('datenschutzErklaerung'));
    datenCheckBox.click();
    browser.sleep(1500);
  });

  it('die Registrierung durchführen', function() {
    var submitForm = element(by.name('submit'));
    submitForm.click();
  });

  it('ist der Registrierungs-Prozess erfolgreich gewesen?', function() {
    expect(browser.getCurrentUrl()).toEqual("http://localhost/bewerberportal.html?absenden=registrationerfolgreich");
  });
});

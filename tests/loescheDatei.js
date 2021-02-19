describe('die Stellenangebote werden über die Unternehmenssicht hochgeladen und', function() {

  beforeAll(function() {
    console.log('Test Case: Wird das Stellenangebot erfolgreich hochgeladen?');
  });

  afterAll(function() {
    console.log('\nDas Stellenangebot wurde erfolgreich hochgeladen (Erfolgreicher Test)\n');
  });

  it('oeffne das Bewerberportal der Unternehmenssicht', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:80/bewerberportalAdmin.html');
  });

  it('das Stellenangebot absenden und hochladen', function() {
    var submitForm = element(by.name('loeschen'));
    submitForm.click();
  });

  it('sind Exceptions aufgetreten?', function() {
    expect(browser.getCurrentUrl()).toEqual("http://localhost/bewerberportalAdmin.html?absenden=erfolgreichgeloescht");
  });
});

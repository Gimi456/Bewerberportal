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

  it('das Stellenangebot auswählen', function() {
    var bewerbungsUnterlagen = element(by.css('input[type=file]'));
    bewerbungsUnterlagen.sendKeys('C://Users/User/Desktop/BAM - 1 Semester/Software Projekt Management/Bewerberportal/filesForTest/IT-Projektmanagement - Projektleiter (m,w,d).pdf');
    browser.sleep(6000);
  });

  it('den Standort des Stellenangebots eingeben', function() {
    element(by.name('standort')).sendKeys('Berlin');
    browser.sleep(1500);
  });

  it('das Aufgabenfeld des Stellenangebots eingeben', function() {
    element(by.name('bereich')).sendKeys('SAP Beratung');
    browser.sleep(1500);
  });

  it('das Stellenangebot absenden und hochladen', function() {
    var submitForm = element(by.name('hochladen'));
    submitForm.click();
  });

  it('sind Exceptions aufgetreten?', function() {
    expect(browser.getCurrentUrl()).toEqual("http://localhost/bewerberportalAdmin.html?absenden=uploaderfolgreich");
  });
});

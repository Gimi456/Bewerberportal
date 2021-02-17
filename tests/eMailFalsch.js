describe('die Email-Adresse falsch eingeben, um zu sehen, ob eine Exception geworfen wird.', function() {

  beforeAll(function() {
    console.log('Test Case: Exception Throw, wenn Email-Adresse falsch?');
  });

  afterAll(function() {
    console.log('\nDer Bewerbungsablauf wurde abgebrochen, da die Emailadresse falsch eingegeben worden ist. (Erfolgreicher Test)\n');
  });

  it('oeffne das Bewerberportal', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:80/bewerberportal.html');
  });

  it('auf das Stellenangebot klicken', function(){
    var arrowID = element(by.id('arrow1'));
    browser.sleep(500);
    arrowID.click();
  });

  it('den Namen Falsch eingeben', function() {
      element(by.name('name')).sendKeys('Mustermann');
      browser.sleep(1500);
  });

  it('den Vornamen eingeben', function() {
    element(by.name('vorname')).sendKeys('Max');
    browser.sleep(1500);
  });

  it('die Emailadresse eingeben', function() {
    element(by.name('emailadresse')).sendKeys('max.mustermann@hs-furte');
    browser.sleep(6000);
  });

  it('die Telefon- oder Handynummer eingeben', function() {
    element(by.name('telefonnummer')).sendKeys('01729214434');
    browser.sleep(1500);
  });

  it('den Datenschutzerklaerungshacken setzen', function() {
    var datenCheckBox = element(by.id('datenschutzErklaerung1'));
    datenCheckBox.click();
    browser.sleep(1500);
  });

  it('die Bewerbungsunterlagen anklicken', function() {
    var bewerbungsUnterlagen = element(by.css('input[type=file]'));
    bewerbungsUnterlagen.sendKeys('C://Users/User/Desktop/BAM - 1 Semester/SWP/Bewerberportal/filesForTest/Lebenslauf.pdf');
    browser.sleep(1500);
  });

  it('das Stellenangebotsformular absenden', function() {
    var submitForm = element(by.name('submit'));
    submitForm.click();
  });

  it('sind Exceptions aufgetreten?', function() {
    expect(browser.getCurrentUrl()).toEqual("http://localhost/bewerberportal.html?absenden=ungueltigeemail");
  });
});

describe('die Stellenangebotsformular wird leer abgegeben, um zu sehen, ob eine Exception geworfen wird.', function() {

  beforeAll(function() {
    console.log('Test Case: Exception Throw, wenn alle Felder leer?');
  });

  afterAll(function() {
    console.log('\nDer Bewerbungsablauf ist durchgelaufen und die Bewerbungsunterlagen wurden abgespeichert. (Erfolgreicher Test)\n');
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

  it('das Stellenangebotsformular absenden', function() {
    browser.sleep(6000);
    var submitForm = element(by.name('submit'));
    submitForm.click();
  });

  it('ist der Bewerbungsablauf erfolgreich gewesen?', function() {
    expect(browser.getCurrentUrl()).toEqual("http://localhost/bewerberportal.html?absenden=leer");
  });
});

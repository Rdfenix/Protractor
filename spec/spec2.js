describe('Protractor Demo App', function() {
  it('should add one and two', function() {
  	//pega a url do browser que ser requisitado.
    browser.get('http://juliemr.github.io/protractor-demo/');

    //adiciona um valor no primeiro campo
    element(by.model('first')).sendKeys(3);

    //adiciona um valor no segundo campo
    element(by.model('second')).sendKeys(2);

    //clica no botão que tem o id de "gobutton"
    element(by.id('gobutton')).click();

    //verifica se no resultado final contem o numero igual a 5
    expect(element(by.binding('latest')).getText()).toEqual('5'); // This is wrong!
  });
});

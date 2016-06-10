
describe("Calcular mais de uma operação matematica", function(){
      var firstNumber = element(by.model('first'));
      var secondNumber = element(by.model('second'));
      var goButton = element(by.id('gobutton'));
      var latestResult = element(by.binding('latest'));

      var select = element(by.model('operator'));

      beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
      });

      it("Realizar a Divisao dos numeros", function(){
        firstNumber.sendKeys(4);
        secondNumber.sendKeys(2);
        select.$('[value="DIVISION"]').click();
        goButton.click();
        expect(latestResult.getText()).toEqual('2');
      });

      it("Realizar Multiplicação do numeros", function(){
        firstNumber.sendKeys(3);
        secondNumber.sendKeys(2);
        select.$('[value="MULTIPLICATION"]').click();
        goButton.click();
        expect(latestResult.getText()).toEqual('6');
      });

});

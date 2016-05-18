
describe("Calcular mais de uma operação matematica", function(){
      var firstNumber = element(by.model('first'));
      var secondNumber = element(by.model('second'));
      var goButton = element(by.id('goButton'));
      var latestResult = element(by.binding('latest'));
      //var operation = element(by.model('operator').$('[value="DIVISION"]'));
      var operation = element.all(by.model('operator'));
      beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
      });

      function add(a, b) {
          firstNumber.sendKeys(a);
          operation.get('[value="DIVISION"]').click();
          secondNumber.sendKeys(b);
          goButton.click();
      }

      it("Realizar a Divisao dos numeros", function(){
        add(2,2);
        expect(latestResult.getText()).toEqual('1');
      });

});

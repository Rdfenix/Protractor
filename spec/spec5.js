describe("Capetura e contagem do dropdow list", function(){
  var alloption = element.all(by.options("value for (key, value) in operators"));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it("Captura de options", function() {
      expect(alloption.count()).toEqual(5);
  });
});

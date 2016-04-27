describe('Estudo sobre Protractor', function() {
	it('Vendo se existe um titulo', function() {
		// pega a url e adicionar no browser
		browser.get('http://juliemr.github.io/protractor-demo/');
		//pega o titulo e verifica se o titulo é igual ao passado pela comparador toEqual.
		//comparador do campo <title>qualquer coisa</title> pgando valor dentro do  <head></head>
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
});
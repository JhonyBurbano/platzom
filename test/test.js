
const expect = require('chai').expect
const platzom = require('..').default // los dos .. requiere el modulo que esta un nivel mas arriba es decir (en package.jon en main)

// mocha utiliza describe para describir las funciones para el test
describe('#platzom', function () {

	// Para correr un te se debe hacer de la siguiente forma
	// Parametros
	// 1. describir el test
	// 2. crear la fuction que va realizar el test
	it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function () {
		const traducida = platzom("Programar") // Funcion de platzom que va realizar la accion

		expect(traducida).to.equal("Program") // la respuesta que se espera
	})

	it('Si la palabra inicia con Z, Se le añade "pe" al final', function () {
		const traducida = platzom("Zorro")
		const traducida2 = platzom("Zarpar")

		expect(traducida).to.equal("Zorrope")
		expect(traducida2).to.equal("Zarppe")
	})

	it('Si la palabra traducida tiene 10 o mas letras. Se debe partir a la mitad y unir con un guion de medio', function () {
		const traducida = platzom("abecedario")

		expect(traducida).to.equal("abece-dario")
	})

	it('Si la palabra original es un palindrimo. Ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas', function () {
		const traducida = platzom("sometemos")

		expect(traducida).to.equal("SoMeTeMoS")
	})


})
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var traducida = str;

	// Si la palabra original es un palindrimo
	// nunguna regla anterior cuenta y se devuelve
	// la misma palabra intercalando mayusculas y minusculas
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	var minMay = function minMay(str) {
		var length = str.length;
		var traducida = '';
		var capitalize = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			traducida += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return traducida;
	};

	if (str == reverse(str)) {
		return minMay(str);
	}

	// si la palabra termina en "ar", se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		traducida = str.slice(0, -2);
	}

	// Si la palabra inicia con Z, Se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		traducida += 'pe';
	}

	// Si la palabra traducida tiene 10 o mas letras 
	// se debe partir a la mitad y unir con un guion de medio
	var length = traducida.length;
	if (length >= 10) {
		var firstHalf = traducida.slice(0, Math.round(length / 2));
		var secondHalf = traducida.slice(Math.round(length / 2));
		traducida = firstHalf + '-' + secondHalf;
	}

	return traducida;
}

export default function platzom(str){
	let traducida = str;

	// Si la palabra original es un palindrimo
	// nunguna regla anterior cuenta y se devuelve
	// la misma palabra intercalando mayusculas y minusculas
	const reverse = (str) => str.split('').reverse().join('');

	const minMay = (str) => {
		const length = str.length;
		let traducida = '';
		let capitalize = true;
		for (let i = 0; i < length; i++) {
			const char = str.charAt(i);
			traducida += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return traducida
	}
			
	if(str == reverse(str)){
		return minMay(str);
	}

	// si la palabra termina en "ar", se le quitan esos dos caracteres
	if(str.toLowerCase().endsWith('ar')){
		traducida = str.slice(0,-2);
	}

	// Si la palabra inicia con Z, Se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		traducida += 'pe';
	}

	// Si la palabra traducida tiene 10 o mas letras 
	// se debe partir a la mitad y unir con un guion de medio
	const length = traducida.length;
	if (length >= 10) {
		const firstHalf = traducida.slice(0,Math.round(length/2));
		const secondHalf = traducida.slice(Math.round(length/2));
		traducida = `${firstHalf}-${secondHalf}`;
	}

	return traducida;
}
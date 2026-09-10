const regrasBandeiras = [
	{ bandeira: "Mastercard", prefixos: [[51, 55], [2221, 2720]], tamanhos: [16] },
	{ bandeira: "Elo", prefixos: [4011, 4312, 4389, 4514, 5041, 5066, 6362, 6363], tamanhos: [16] },
	{ bandeira: "American Express", prefixos: [34, 37], tamanhos: [15] },
	{ bandeira: "Aura", prefixos: [50], tamanhos: [16] },
	{ bandeira: "Diners Club", prefixos: [[300, 305], 36, 38, 39], tamanhos: [14, 16] },
	{ bandeira: "Discover", prefixos: [6011, 65, [644, 649]], tamanhos: [16, 19] },
	{ bandeira: "EnRoute", prefixos: [2014, 2149], tamanhos: [15] },
	{ bandeira: "Hipercard", prefixos: [6062], tamanhos: [16] },
	{ bandeira: "JCB", prefixos: [35], tamanhos: [16, 17, 18, 19] },
	{ bandeira: "Voyager", prefixos: [8699], tamanhos: [15] },
	{ bandeira: "Visa", prefixos: [4], tamanhos: [13, 16, 19] }
];

function correspondeAoPrefixo(numero, prefixo) {
	const quantidade = String(Array.isArray(prefixo) ? prefixo[0] : prefixo).length;
	const inicio = Number(numero.slice(0, quantidade));

	if (Array.isArray(prefixo)) {
		return inicio >= prefixo[0] && inicio <= prefixo[1];
	}

	return inicio === prefixo;
}

function identificaBandeira(numero) {
	return regrasBandeiras.find((regra) =>
		regra.prefixos.some((prefixo) => correspondeAoPrefixo(numero, prefixo)) &&
		regra.tamanhos.includes(numero.length)
	)?.bandeira || "Desconhecida";
}

function validaLuhn(numero) {
	let soma = 0;
	let duplicar = false;

	for (let indice = numero.length - 1; indice >= 0; indice -= 1) {
		let digito = Number(numero[indice]);

		if (duplicar) {
			digito *= 2;
			if (digito > 9) digito -= 9;
		}

		soma += digito;
		duplicar = !duplicar;
	}

	return soma % 10 === 0;
}

function validarCartao(numero) {
	const numeroNormalizado = String(numero).replace(/[\s-]/g, "");

	if (!/^\d+$/.test(numeroNormalizado)) {
		return { valido: false, bandeira: "Desconhecida" };
	}

	const bandeira = identificaBandeira(numeroNormalizado);
	const regra = regrasBandeiras.find((item) => item.bandeira === bandeira);
	const tamanhoValido = regra?.tamanhos.includes(numeroNormalizado.length) || false;

	return {
		valido: bandeira !== "Desconhecida" && tamanhoValido && validaLuhn(numeroNormalizado),
		bandeira
	};
}

module.exports = { validarCartao };


const resultado = validarCartao("3454 049767 85384");
console.log(resultado);
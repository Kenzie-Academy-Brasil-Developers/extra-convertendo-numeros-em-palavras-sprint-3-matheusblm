const oneName = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
const tenName = ["", "dez", "vinte", "trinta", "quarenta", "cinquenta",
                "sessenta", "setenta", "oitenta", "noventa"];
const hundName = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos", "mil"]
function oneToTwelve(){
	let resultado = []
	for(number = 0; number < 20; number++){
	if(number < 19){
	resultado.push(" " + oneName[number])
	}else{
	resultado.push(" vinte.")
	}
	}
	return resultado
}
function twelveToHundred(){
	let resultado =[]
	for(numero = 20; numero < 100; numero++){
	if(numero < 99){
		let string = numero.toString()
		let firstString= string[0]
		let secondString = string[1]
		let firstNum = Number(firstString)
		let secondNum = Number(secondString)
			if(secondNum === 0){
				let name = " " + tenName[firstNum]
				resultado.push(name)
			}
			else{
				let name = " " + tenName[firstNum] + " e " + oneName[secondNum-1]
				resultado.push(name)
			}
	}
		else{
			resultado.push(" " +"cem")
		}
}
return resultado
}
function hundredToThousand(){
	let resultado = []
	for(numero = 101; numero <= 1000; numero ++){
		let string = numero.toString()
		let firstString= string[0]
		let secondString = string[1]
		let thirdStrting = string[2]
		let firstNum = Number(firstString)
		let secondNum = Number(secondString)
		let thirdNum = Number(thirdStrting)
		let fourtString = secondString + thirdStrting
		let fourtNumber = Number(fourtString)

		if(numero === 1000){
			let name = " " + "mil"
			resultado.push(name)
		}
		if(numero < 1000){
		if(secondNum === 0 && thirdNum === 0){
			let name = " " + hundName[firstNum]
			resultado.push(name)
		}	
		if(fourtNumber < 20 && fourtNumber > 0){
			let name = " " + hundName[firstNum] + " e " + oneName [fourtNumber-1]
			resultado.push(name)
		}
		if(fourtNumber === 20){
			let name = " " + hundName[firstNum] + " e " + tenName[secondNum]
			resultado.push(name)
		}
		if(fourtNumber > 20){
			if(secondNum === 0){
				let name = " " + hundName[firstNum] + " e " + oneName[thirdNum -1]
				resultado.push(name)
			}
			if(thirdNum === 0){
				let name = " " + hundName[firstNum] + " e " + tenName[secondString]
				resultado.push(name)
			}
			else{
				let name = " " + hundName[firstNum] + " e " + tenName[secondString] + " e " + oneName[thirdNum-1]
				resultado.push(name)
			}
		}
		}
	}
	return resultado
}

function numberToWords(){
	let novo = document.createElement("span")
	let novo1 = document.createElement("span")
	let novo2 = document.createElement("span")
	let twelve = document.getElementById("twelve")
	let hundred = document.getElementById("hundred")
	let thousand = document.getElementById("thousand")
	novo.append(oneToTwelve())
	twelve.appendChild(novo)
	novo1.append(twelveToHundred())
	hundred.appendChild(novo1)
	novo2.append(hundredToThousand())
	thousand.appendChild(novo2)
}

numberToWords()
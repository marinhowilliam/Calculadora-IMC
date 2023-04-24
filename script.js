//documentos

const divContainer = document.createElement("div")
const divNome = document.createElement("div")
const divPesoAltura = document.createElement("div")
const divCalcular = document.createElement("div")
const inputNome = document.createElement("input")
const inputPeso = document.createElement("input")
const inputAltura = document.createElement("input")
const btnCalcular = document.createElement("button")
const outPut = document.createElement("output")
const body = document.body
const h1 = document.createElement("h1")

//filhos


body.appendChild(h1)
body.appendChild(divContainer)
divContainer.appendChild(divNome)
divNome.appendChild(inputNome)
divContainer.appendChild(divPesoAltura)
divPesoAltura.appendChild(inputPeso)
divPesoAltura.appendChild(inputAltura)
divContainer.appendChild(btnCalcular)
body.appendChild(outPut)

//h1

h1.textContent = "Calculadora IMC"
h1.style.display = "flex"
h1.style.alignItems = "center"
h1.style.justifyContent = "center"
h1.style.padding = "1em"

//CSS

//body

body.style.display="grid"
body.style.alignItems="center"
body.style.justifyContent="center"
body.style.background="white"
body.style.fontFamily="arial"

//css main

divContainer.style.background = "green"
divContainer.style.height = "300px"
divContainer.style.width = "400px"
divContainer.style.display = "flex"
divContainer.style.flexDirection = "column"
divContainer.style.alignItems = "center"
divContainer.style.justifyContent = "center"

//estilo divNome

divNome.style.background = "red"
divNome.style.margin = "20px"


//estilo inputNome

inputNome.style.height = "2rem"
inputNome.style.width = "350px"
inputNome.style.outline = "none"
inputNome.style.padding = "8px 16px"
inputNome.setAttribute("type", "text")
inputNome.setAttribute("placeholder", "Nome")

//estilo inputPeso

inputPeso.style.height = "2rem"
inputPeso.style.outline = "none"
inputPeso.style.padding = "8px 16px"
inputPeso.setAttribute("type", "text")
inputPeso.setAttribute("placeholder", "Peso. Ex.: 64")

//estilo inputAltura

inputAltura.style.height = "2rem"
inputAltura.style.outline = "none"
inputAltura.style.padding = "8px 16px"
inputAltura.setAttribute("type", "text")
inputAltura.setAttribute("placeholder", "Altura. Ex.: 1.70")

//estilo botao

btnCalcular.style.height = "1.5rem"
btnCalcular.style.width = "50%"
btnCalcular.style.margin = "20px"
btnCalcular.style.outline = "none"
btnCalcular.innerText = "Calcular"

//estilo output

outPut.style.height = "50px"
outPut.style.width = "100%"
outPut.style.background = "yellow"
outPut.style.display = "flex"
outPut.style.alignItems = "center"
outPut.style.justifyContent = "center"
outPut.style.margin = "50px 0"


//funcao

btnCalcular.addEventListener("click", function () {
    let resultado = parseFloat(inputPeso.value) / parseFloat(inputAltura.value)**2
    let nome = inputNome.value
    if (resultado < 18.5){
        outPut.style.background = "red"
        outPut.textContent = `${nome}, seu IMC é: ${resultado.toFixed(1)}, você está abaixo do peso`
    }
    else if(resultado >= 18.5 && resultado < 24.9){
        outPut.style.background = "blue"
        outPut.textContent = `${nome}, seu IMC é: ${resultado.toFixed(1)}, você está no peso ideal`
    }
    else if(resultado >= 24.9 && resultado < 29.9){
        outPut.textContent = `${nome}, seu IMC é: ${resultado.toFixed(1)}, você está acima do peso`
    }
    else{
        outPut.textContent = `${nome}, seu IMC é: ${resultado.toFixed(1)}, você está muito acima do peso`
    }
}
)
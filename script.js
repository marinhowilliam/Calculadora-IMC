//documentos

const divContainer = document.createElement("div")
const divNome = document.createElement("div")
const divPesoAltura = document.createElement("div")
const divCalcular = document.createElement("div")
const inputNome = document.createElement("input")
const inputPeso = document.createElement("input")
const inputAltura = document.createElement("input")
const btnCalcular = document.createElement("button")
const legenda = document.createElement("div")
const box1 = document.createElement("div")
const box2 = document.createElement("div")
const box3 = document.createElement("div")
const box4 = document.createElement("div")
const outPut = document.createElement("output")
const body = document.body
const h1 = document.createElement("h1")
const h2 = document.createElement("h2")

//filhos


body.appendChild(h1)
body.appendChild(divContainer)
divContainer.appendChild(divNome)
divNome.appendChild(inputNome)
divContainer.appendChild(divPesoAltura)
divPesoAltura.appendChild(inputPeso)
divPesoAltura.appendChild(inputAltura)
divContainer.appendChild(btnCalcular)
divContainer.appendChild(legenda)
legenda.appendChild(box1)
legenda.appendChild(box2)
legenda.appendChild(box3)
legenda.appendChild(box4)
body.appendChild(outPut)


//CSS

//body

body.style.display="grid"
body.style.alignItems="center"
body.style.justifyContent="center"
body.style.background="#aca4b1"
body.style.fontFamily="Inter, sans-serif"
body.style.background="black"

//h1

h1.textContent = "Calculadora IMC"
h1.style.display = "flex"
h1.style.alignItems = "center"
h1.style.justifyContent = "center"
h1.style.color = "white"
h1.style.fontWeight = "bolder, 400"

//css container

divContainer.style.background = ""
divContainer.style.height = "350px"
divContainer.style.width = "750px"
divContainer.style.display = "flex"
divContainer.style.flexDirection = "column"
divContainer.style.alignItems = "center"
divContainer.style.justifyContent = "center"

//estilo divNome

divNome.style.display = "flex"
divNome.style.alignItems = "center"
divNome.style.width = "55%"
divNome.style.margin = "20px"


//estilo divPesoAltura

divPesoAltura.style.margin = "20px"


//estilo inputNome

inputNome.style.height = "2rem"
inputNome.style.width = "100%"
inputNome.style.outline = "none"
inputNome.style.padding = "8px 16px"
inputNome.style.borderRadius = "5px"
inputNome.style.textAlign = "center"
inputNome.style.boxShadow = "rgba(83,145,199, 0.48) 6px 2px 16px 0px, rgba(83,145,199, 0.8) -6px -2px 16px 0px"
inputNome.setAttribute("type", "text")
inputNome.setAttribute("placeholder", "Nome")

//estilo inputPeso

inputPeso.style.height = "2rem"
inputPeso.style.outline = "none"
inputPeso.style.borderRadius = "5px"
inputPeso.style.marginRight = "25px"
inputPeso.style.padding = "8px 16px"
inputPeso.style.boxShadow = "rgba(83,145,199, 0.48) 6px 2px 16px 0px, rgba(83,145,199, 0.8) -6px -2px 16px 0px"
inputPeso.setAttribute("type", "text")
inputPeso.setAttribute("placeholder", "Peso. Ex.: 64")

//estilo inputAltura

inputAltura.style.height = "2rem"
inputAltura.style.outline = "none"
inputAltura.style.borderRadius = "5px"
inputAltura.style.padding = "8px 16px"
inputAltura.style.boxShadow = "rgba(83,145,199, 0.48) 6px 2px 16px 0px, rgba(83,145,199, 0.8) -6px -2px 16px 0px"
inputAltura.setAttribute("type", "text")
inputAltura.setAttribute("placeholder", "Altura. Ex.: 1.70")

//estilo botao

btnCalcular.style.height = "2rem"
btnCalcular.style.width = "30%"
btnCalcular.style.border = "none"
btnCalcular.style.borderRadius = "5px"
btnCalcular.style.background = "white"
btnCalcular.style.boxShadow = "rgba(83,145,199, 0.56) 0px 22px 40px 4px"
btnCalcular.style.margin = "20px"
btnCalcular.style.outline = "none"
btnCalcular.style.color = "black"
btnCalcular.innerText = "Calcular"

//estilo divLegenda

legenda.style.height = "80px"
legenda.style.width = "100%"
legenda.style.display = "flex"
legenda.style.alignItems = "end"
legenda.style.justifyContent = "space-around"


//container box's

//estilo box1

box1.style.display = "flex"
box1.style.alignItems = "center"
box1.style.justifyContent = "center"
box1.style.boxShadow = "rgba(225, 225, 225, 0.3) 0px 25px 50px -12px"
box1.style.height = "50%"
box1.style.width = "120px"
box1.style.backgroundImage = "linear-gradient( 135deg, #70F570 10%, #49C628 100%)"
box1.textContent = "Abaixo do peso"

//estilo box2

box2.style.display = "flex"
box2.style.alignItems = "center"
box2.style.justifyContent = "center"
box2.style.boxShadow = "rgba(225, 225, 225, 0.3) 0px 25px 50px -12px"
box2.style.height = "50%"
box2.style.width = "120px"
box2.style.backgroundImage = "linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%)"
box2.textContent = "Peso ideial"

//estilo box3

box3.style.display = "flex"
box3.style.alignItems = "center"
box3.style.justifyContent = "center"
box3.style.boxShadow = "rgba(225, 225, 225, 0.3) 0px 25px 50px -12px"
box3.style.height = "50%"
box3.style.width = "120px"
box3.style.backgroundImage = "linear-gradient( 135deg, #FFE985 10%, #FA742B 100%)"
box3.textContent = "Acima do peso"

//estilo box4

box4.style.display = "flex"
box4.style.alignItems = "center"
box4.style.justifyContent = "center"
box4.style.boxShadow = "rgba(225, 225, 225, 0.3) 0px 25px 50px -12px"
box4.style.height = "50%"
box4.style.width = "120px"
box4.style.backgroundImage = "linear-gradient( 135deg, #FDD819 10%, #E80505 100%)"
box4.textContent = "Obesidade"


//estilo output

outPut.style.height = "50px"
outPut.style.width = "100%"
outPut.style.background = ""
outPut.style.display = "flex"
outPut.style.alignItems = "center"
outPut.style.justifyContent = "center"
outPut.style.margin = "50px 0"


//funcao

btnCalcular.addEventListener("click", function () {
    let resultado = parseFloat(inputPeso.value) / parseFloat(inputAltura.value)**2
    let nome = inputNome.value
    if (resultado < 18.5){
        outPut.style.backgroundImage = "linear-gradient( 135deg, #70F570 10%, #49C628 100%)"
        outPut.textContent = `${nome}, seu IMC é: ${resultado.toFixed(1)}, você está abaixo do peso!"`
    }
    else if(resultado >= 18.5 && resultado < 24.9){
        outPut.style.backgroundImage = "linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%)"
        outPut.textContent = `${nome}, seu IMC é: ${resultado.toFixed(1)}, você está no peso ideal!`
    }
    else if(resultado >= 24.9 && resultado < 29.9){
        outPut.style.backgroundImage = "linear-gradient( 135deg, #FFE985 10%, #FA742B 100%)"
        outPut.textContent = `${nome}, seu IMC é: ${resultado.toFixed(1)}, você está acima do peso!`
    }
    else if (resultado >= 30){
        outPut.style.backgroundImage = "linear-gradient( 135deg, #FDD819 10%, #E80505 100%)"
        outPut.textContent = `${nome}, seu IMC é: ${resultado.toFixed(1)}, você está obeso!`
    }
}
)




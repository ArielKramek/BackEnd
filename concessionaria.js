const fs = require("fs")
const carrosArquivo = require("./carros.json")

const carrosArquivoJSON = JSON.stringify(carrosArquivo)

function salvar(){
    const carrosArquivoJSON = JSON.stringify(carrosArquivo)
    fs.writeFileSync("carros.json",carrosArquivoJSON)

}

console.log(carrosArquivo)

function mostrarcarros(){
    carrosArquivo.forEach((veiculo)=>{

        console.log(veiculo.marca + " modelo: " + veiculo.modelo+ " ano: "+ veiculo.ano+ " velociade maxima: "+veiculo.velocidade_max+ " valor: "+ veiculo.valor+ " estado: "+ veiculo.estado )
            
        })
}

function adicionarcarros(modelo, marca, ano, velocidade_max, valor, estado){
    const existe = carrosArquivo.some(
        veiculo => veiculo.marca ===marca
    )
    if(existe===true){

        console.log("O novo veículo chegou a concessionaria "+ modelo + " da "+ marca+ " do ano de " +ano+ " com a velocidade maxima de "+ velocidade_max+ "no valor de R$ "+ valor+ "em um estado "+ estado+ "\n")
        
    }
       else{
    console.log("O novo veículo "+ modelo + " modelo "+ marca+ " do ano de " +ano+ " com a velocidade maxima de "+ velocidade_max+ "no valor de R$ "+ valor+ "em um estado "+ estado+ "foi cadastrado"+"\n")
    carrosArquivo.push({
    modelo:modelo,
    marca:marca,
    ano:ano,
    velocidade_max:velocidade_max,
    valor:valor,
    estado:estado,
    





 }
 )}
salvar()



}
function filtrar(){





    
}






















adicionarcarros("vectra","chevrolet",1998, 210,17.000, "bom")
mostrarcarros()
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
    ano:Number(ano),
    velocidade_max:velocidade_max,
    valor:Number(valor),
    estado:estado,
    
 }
 )}
salvar()
}


function filtro(){
    console.log("\n##### carros com lançamento depois de 2020#####\n")

    const carrosFiltrados = carrosArquivo.filter(
        (v) => Number(v.ano) >= 2020
    )

    carrosFiltrados.forEach((v)=>{
        console.log(
            `${v.modelo} | marca: ${v.marca} | ano: ${v.ano} | velocidade_max: ${v.velocidade_max} | valor: ${v.valor} | estado: ${v.estado}`
        )
    })
}


    function Desconto_valor(){
    console.log("\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Carros com 15% de desconto !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n")
    
    const carrosComDesconto = carrosArquivo.map((veiculo)=> {
        return {
            ...veiculo,
            valor: Number(veiculo.valor) * 0.85
        }
    })

    carrosComDesconto.forEach((v)=>{
        console.log(
            `${v.modelo} | marca: ${v.marca} |preço: ${v.valor.toFixed(2)}`
        )
    })
}

















adicionarcarros("vectra","chevrolet",1998, "210 km/h",17000, "bom")
mostrarcarros()
filtro()
Desconto_valor()
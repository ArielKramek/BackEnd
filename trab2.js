const carros = [
    {
        modelo: "488 Pista",
        marca: "Ferrari",
        ano: "2020",
        velocidade_max: "340 km/h",
        valor: "R$ 4.500.000",
        estado: "Impecável",
    },
    {
        modelo: "911 GT3 RS",
        marca: "Porsche",
        ano: "2023",
        velocidade_max: "296 km/h",
        valor: "R$ 1.900.000",
        estado: "Novo",
    },
    {
        modelo: "Chiron",
        marca: "Bugatti",
        ano: "2021",
        velocidade_max: "420 km/h",
        valor: "R$ 22.000.000",
        estado: "Coleção",
    },
    {
        modelo: "Aventador SVJ",
        marca: "Lamborghini",
        ano: "2021",
        velocidade_max: "350 km/h",
        valor: "R$ 6.800.000",
        estado: "Impecável",
    },
    {
        modelo: "Corvette C8 Stingray",
        marca: "Chevrolet",
        ano: "2022",
        velocidade_max: "312 km/h",
        valor: "R$ 1.100.000",
        estado: "Seminovo",
    },
    {
        modelo: "M5 CS",
        marca: "BMW",
        ano: "2022",
        velocidade_max: "305 km/h",
        valor: "R$ 1.200.000",
        estado: "Excelente",
    },
    {
        modelo: "Skyline GT-R R34",
        marca: "Nissan",
        ano: "1999",
        velocidade_max: "250 km/h",
        valor: "R$ 1.500.000",
        estado: "Restaurado",
    },
    {
        modelo: "Mustang Shelby GT500",
        marca: "Ford",
        ano: "2021",
        velocidade_max: "290 km/h",
        valor: "R$ 950.000",
        estado: "Seminovo",
    },
    {
        modelo: "Model S Plaid",
        marca: "Tesla",
        ano: "2023",
        velocidade_max: "322 km/h",
        valor: "R$ 850.000",
        estado: "Novo",
    },
    {
        modelo: "Lancer Evolution X",
        marca: "Mitsubishi",
        ano: "2015",
        velocidade_max: "250 km/h",
        valor: "R$ 280.000",
        estado: "Muito Bom",
    }
]

const carrosJSON = JSON.stringify(carros)
console.log(carrosJSON)

const fs = require("fs")
fs.writeFileSync("carros.json",carrosJSON)

const carrosArquivo = require("./carros.json")
console.log(carrosArquivo)

carrosArquivo.forEach((veiculo)=>{

console.log(veiculo.marca + " modelo: " + veiculo.modelo+ " ano: "+ veiculo.ano+ " velociade maxima: "+veiculo.velocidade_max+ " valor: "+ veiculo.valor+ " estado: "+ veiculo.estado )
    
})
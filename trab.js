/*
Imagine que você abriu uma loja:
1) Crie o nome de 10 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/

const produtos = ["Kwid", "Renault", "Vectra", "Marajo", "Tesla", "Gol", "GTR", "logos", "Fusca","Camaro"]
const precos = [    10,      20,        15,       12,        37,    11,     22,     9,      5,       30 ]
const Q_estoque = [4,          6,         8,       2,       12,      9,     22,     3,       12,      7 ]

let contador = 0

function lerProduto(){
    console.log("####ESTOQUE####")
while(contador < produtos.length){
    console.log("produto: " + produtos[contador] + " preço: " + precos[contador])
    contador++
    }
    console.log("##############")
}

function novo_produto(produto, preco){
produtos.push(produto)
precos.push(preco)


}
lerProduto()
novo_produto("kombi", 7)
lerProduto()
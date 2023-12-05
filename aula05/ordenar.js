const clientes = require("./clientes.json")

function ordenar(lista, propriedade) {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1
    }
    if (a[propriedade] > b[propriedade]) {
      return 0
    }
  })
  return resultado
}

const listaOrdenadosPorNome = ordenar(clientes, "nome")

console.log(listaOrdenadosPorNome)

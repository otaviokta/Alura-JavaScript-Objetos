const clientes = require("./clientes.json")

function filtrarApartamentosSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    )
  })
}

const clientesFiltrados = filtrarApartamentosSemComplemento(clientes)
console.log(clientesFiltrados)

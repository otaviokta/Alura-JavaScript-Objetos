const cliente = {
  nome: "Otávio",
  idade: "27",
  email: "otavio@hotmail.com",
  telefone: ["32 999040433", "32 999040434"],
}

cliente.enderecos = [
  {
    rua: "Rua Jose Cleovaldo",
    numero: 113,
    apartamento: true,
    complemento: "Predio Unico",
  },
]

cliente.enderecos.push({
  rua: "Rua Francisco da Silva",
  numero: 112,
  apartamento: false,
  complemento: "nenhum",
})

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
)

console.log(listaApenasApartamentos)

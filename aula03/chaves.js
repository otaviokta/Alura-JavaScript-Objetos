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

const chavesDoObjeto = Object.keys(cliente)
// console.log(chavesDoObjeto)
if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter endereço cadastrado.")
}

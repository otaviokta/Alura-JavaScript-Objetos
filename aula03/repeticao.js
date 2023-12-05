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

for (let chave in cliente) {
  let tipo = typeof cliente[chave]
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
  }
}

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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`)
  console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone)

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
}

console.log(encomenda)

const cliente = {
  nome: "Otávio",
  idade: "27",
  email: "otavio@hotmail.com",
  telefone: ["32 999040433", "32 999040434"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Você não possui saldo suficiente.")
    } else {
      this.saldo -= valor
      console.log(`Pagamento realizado, novo saldo ${this.saldo}`)
    }
  },
}

cliente.efetuaPagamento(198)

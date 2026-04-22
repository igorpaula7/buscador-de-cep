const formularioCep = document.querySelector("#form-cep");
const enderecoEncontrado = document.querySelector("#endereco-encontrado");
const inputCep = document.querySelector("#input-cep");

formularioCep.addEventListener("submit", async (event) => {
  event.preventDefault();

  const numeroCep = inputCep.value;

  if (numeroCep.trim() === "") {
    enderecoEncontrado.textContent = "Digite um CEP válido para prosseguir.";
    return;
  }

  const urlCep = `https://viacep.com.br/ws/${numeroCep}/json/`;

  try {
    const resposta = await fetch(urlCep);

    const dadosCep = await resposta.json();

    if (dadosCep.erro) {
      enderecoEncontrado.textContent = "CEP Inválido.";
      return;
    }

    let enderecoFormatado = "";

    if (dadosCep.logradouro) {
      enderecoFormatado += dadosCep.logradouro + ", ";
    }

    if (dadosCep.bairro) {
      enderecoFormatado += dadosCep.bairro + " - ";
    }

    if (dadosCep.localidade) {
      enderecoFormatado += dadosCep.localidade + "/";
    }

    if (dadosCep.uf) {
      enderecoFormatado += dadosCep.uf;
    }

    if (dadosCep.cep) {
      enderecoFormatado += ` (${dadosCep.cep})`;
    }

    enderecoEncontrado.textContent = enderecoFormatado;
    inputCep.value = "";
  } catch (erro) {
    enderecoEncontrado.textContent = "Erro ao buscar o CEP.";
  }
});

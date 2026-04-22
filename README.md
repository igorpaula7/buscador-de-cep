# 🔎 Buscador de CEP - JavaScript

Aplicação web desenvolvida com **JavaScript puro** que consome a API pública do ViaCEP para buscar e exibir informações de endereço a partir de um CEP.

---

## 🚀 Funcionalidades

- 🔍 Busca de endereço a partir de um CEP
- ⚠️ Validação de input vazio
- ❌ Tratamento de CEP inválido
- 🌐 Consumo de API externa (ViaCEP)
- 📄 Exibição dinâmica dos dados no DOM

---

## 🛠 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- API ViaCEP

---

## 💡 Sobre o projeto

Este projeto foi desenvolvido com foco em praticar integração com APIs e manipulação de dados assíncronos utilizando JavaScript.

A aplicação realiza uma requisição HTTP para a API do ViaCEP, trata a resposta recebida e exibe os dados de forma dinâmica na interface, considerando cenários onde algumas informações podem não estar disponíveis.

---

## 🎯 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos como:

- Requisições HTTP com `fetch`
- Uso de `async/await` para controle assíncrono
- Manipulação de JSON
- Tratamento de erros (rede e regra de negócio)
- Construção dinâmica de conteúdo

---

## 📂 Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/buscador-cep-js.git
```

2. Acesse a pasta do projeto:

```bash
cd buscador-cep-js
```

3. Abra o arquivo `index.html` no navegador

---

## ⚠️ Tratamento de erros

A aplicação trata dois tipos de erro:

- ❌ CEP inválido (retornado pela API)
- 🌐 Falha na requisição (problemas de rede)

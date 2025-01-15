# Desafio Mobile

O desafio consiste na criação de um simples aplicativo, seguindo os padrões que
trabalhamos na empresa ou que vamos seguir nos projetos futuros.

Resumo da aplicação: O aplicativo consiste em mostrar uma lista de marcas de carro,
podendo acessar uma marca específica mostrando assim os seus respectivos modelos.

## Recursos obrigatórios

O aplicativo deverá apresentar as seguintes telas:
- SignIn (Login para acessar as outras telas)
- Home (Listagem das marcas de carros)
- Model (Listagem dos modelos de carros ao clicar na marca específica)

## Bibliotecas/Tecnologias/Padrões de Projeto

O aplicativo deve ser criado utilizando os seguintes recursos obrigatoriamente:
- Expo
- Typescript
- Context API (Gerenciar dados de Login)
- Async Storage (Gerenciar dados de Login)
- NativeWind ou Styled Components
- React Navigation (Livre para escolher o tipo de navegação)
- Fetch Api ou Axios (Para consulta das API’s)

Obs: você sai na frente se utilizar React Hook Form (Para os inputs de Login). Além
disso, você é livre para adicionar bibliotecas que achar necessárias. O estilo do aplicativo fica por sua conta, seja criativo.

Fluxo do aplicativo: O usuário deverá fazer login e cair na tela “Home” listando todas as
marcas de carros. Apresentar também nesta tela o nome do usuário(puxando do context) e um
botão para sair do app. Ao clicar em uma marca, deverá ser encaminhado para a tela de “Model” listando todos os modelos de carros da marca escolhida.

## Para instalar as dependências

    npm i

## Para executar o projeto

    npx expo start

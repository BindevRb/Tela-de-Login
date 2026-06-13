# Tela de Login - Estudo

## Link do Projeto
https://bindevrb.github.io/Tela-de-Login/

## Sobre o projeto

Este projeto consiste no desenvolvimento de uma **tela de login com cadastro de usuários**, com o objetivo de praticar conceitos fundamentais de **HTML, CSS e JavaScript**.

A aplicação simula um sistema básico de autenticação e cadastro no front-end, validando os dados inseridos pelo usuário antes de permitir o acesso ou a criação de uma nova conta.

---

## Tecnologias utilizadas

* HTML5 → estrutura da página
* CSS3 → estilização e layout
* JavaScript → validação, lógica de login e cadastro

---

## Como funciona

A tela possui dois modos: **Login** e **Cadastro**, alternados através do botão "Criar Conta" / "Entrar".

### Modo Login

* Campo de **usuário**
* Campo de **senha** (com botão de exibir/ocultar)
* Checkbox de **aceite dos termos de uso**

### Modo Cadastro

Ao clicar em "Criar Conta", campos adicionais são exibidos:

* Campo de **email**
* Campo de **confirmar senha** (também com botão de exibir/ocultar)

---

## Validações implementadas

### Login

1. Verifica se o campo de usuário está preenchido
2. Verifica se o campo de senha está preenchido
3. Verifica se o usuário aceitou os termos de uso
4. Valida as credenciais informadas (usuário e senha devem corresponder a um cadastro existente)

### Cadastro

1. Verifica se o campo de usuário está preenchido
2. Verifica se o campo de email está preenchido
3. Verifica se o campo de senha está preenchido
4. Verifica se a senha possui no mínimo **8 caracteres**
5. Verifica se "Senha" e "Confirmar Senha" são iguais
6. Verifica se o nome de usuário já está cadastrado
7. Verifica se o email já está cadastrado

---

## Regras de autenticação (usuários pré-cadastrados)

Para acessar o sistema com os dados de exemplo:

* Usuário: `admin`; `Barney`; `Daniel`; `Fabio`
* Senha: `admin`; `ba123456`; `da123456`; `fa123456`
* Checkbox de termos: **marcado**

Novos usuários podem ser criados através do modo Cadastro, informando usuário, email e senha (mínimo de 8 caracteres).

---

## Possíveis retornos

O sistema exibe mensagens via `alert` para:

**Login**
* Campos obrigatórios não preenchidos
* Termos não aceitos
* Usuário ou senha incorretos

**Cadastro**
* Campos obrigatórios não preenchidos
* Senha com menos de 8 caracteres
* Senhas que não coincidem
* Usuário já cadastrado
* Email já cadastrado
* Cadastro realizado com sucesso (com limpeza automática dos campos)

---

## Interface

A interface foi construída com foco em simplicidade, contendo:

* Layout centralizado em formato de card
* Estilo dark com gradiente
* Formulário organizado e funcional, com altura ajustável conforme o modo (Login/Cadastro)
* Botão de alternância de visibilidade nas caixas de Senha e Confirmar Senha
* Alternância dinâmica entre os modos Login e Cadastro, com troca de textos dos botões e exibição/ocultação dos campos extras

---

## Objetivo do projeto

Este projeto foi desenvolvido com fins educacionais, visando:

* Praticar manipulação do DOM
* Entender validações básicas em JavaScript
* Trabalhar com formulários e eventos
* Implementar um fluxo de cadastro de usuários (validação, verificação de duplicidade e armazenamento em memória)
* Desenvolver noções de UI simples e de estados dinâmicos de interface

---

## Próximos passos

* Persistência dos usuários cadastrados utilizando `localStorage`, para que os dados não se percam ao atualizar a página
* Feedback visual inline (sem `alert`) para mensagens de erro e sucesso
* Reset automático para o modo Login após cadastro concluído com sucesso

---

## Preview

<img width="1305" height="657" alt="image" src="https://github.com/user-attachments/assets/2450aae4-f99a-45fa-8715-e8ce607baf73" />
<img width="1311" height="660" alt="image" src="https://github.com/user-attachments/assets/942d4a7f-2284-443f-a456-a35d48291c0d" />

---

## Autor: Bin.dev

Desenvolvido como projeto de estudo.
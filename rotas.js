const express = require("express");
const { cadastrarUsuario } = require("./controladores/usuarios");
const { login } = require("./controladores/login");
const verificaLogin = require("./filtros/verificaLogin");

const rotas = express();

// login
rotas.post("/login", login);

// cadastro de usuario
rotas.post("/usuarios", cadastrarUsuario);

// filtro para verificar usuario logado
rotas.use(verificaLogin);

module.exports = rotas;

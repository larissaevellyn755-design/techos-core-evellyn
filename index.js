
import UsuarioFactory from "./UsuarioFactory.js";
import GerenciadorOS from "./GerenciadorOS.js";

console.log("==============================================");
console.log("       TECHOS CORE - SISTEMA DE OS");
console.log("==============================================");

// Criando os usuários usando Factory Method
const cliente = UsuarioFactory.criarUsuario("cliente", {
    id: 101,
    nome: "Ana",
    email: "ana@email.com",
    telefone: "81999999999"
});

console.log(
    `[FACTORY] Objeto 'Cliente' criado (ID: ${cliente.getId()}, Nome: ${cliente.getNome()}).`
);

const tecnico = UsuarioFactory.criarUsuario("tecnico", {
    id: 202,
    nome: "Carlos",
    email: "carlos@email.com",
    especialidade: "Manutenção de computadores"
});

console.log(
    `[FACTORY] Objeto 'Tecnico' criado (ID: ${tecnico.getId()}, Nome: ${tecnico.getNome()}).`
);

// Obtendo a instância Singleton
const gerenciador = new GerenciadorOS();

// Criando uma ordem de serviço
gerenciador.criarOrdem(
    cliente,
    tecnico,
    "Troca de Tela"
);

// Exibindo as ordens cadastradas
console.log("\n[SISTEMA] Lista de OS ativas:");

console.log(
    JSON.stringify(gerenciador.listarOrdens(), null, 2)
);

// Testando se o Singleton funciona
const gerenciador2 = new GerenciadorOS();

console.log(
    "\n[SINGLETON] Mesma instância?",
    gerenciador === gerenciador2
);

console.log("\n==============================================");
console.log("       EXECUÇÃO FINALIZADA!");
console.log("==============================================");

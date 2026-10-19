
import Cliente from "./Cliente.js";
import Tecnico from "./Tecnico.js";

export default class UsuarioFactory {
    static criarUsuario(tipo, dados) {
        console.log(`[FACTORY] Criando Usuário Tipo: ${tipo.toUpperCase()}...`);

        switch (tipo.toLowerCase()) {
            case "cliente":
                return new Cliente(
                    dados.id,
                    dados.nome,
                    dados.email,
                    dados.telefone
                );

            case "tecnico":
                return new Tecnico(
                    dados.id,
                    dados.nome,
                    dados.email,
                    dados.especialidade
                );

            default:
                throw new Error(`Tipo de usuário inválido: ${tipo}`);
        }
    }
}

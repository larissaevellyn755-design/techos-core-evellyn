
export default class Usuario {
    constructor(id, nome, email) {
        if (new.target === Usuario) {
            throw new Error("Usuario é uma classe abstrata e não pode ser instanciada diretamente.");
        }

        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    getId() {
        return this.id;
    }

    getNome() {
        return this.nome;
    }

    getEmail() {
        return this.email;
    }
}

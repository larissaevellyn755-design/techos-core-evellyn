
export default class OrdemServico {
    constructor(id, cliente, tecnico, descricao) {
        if (!cliente || !tecnico) {
            throw new Error("A ordem precisa de cliente e técnico.");
        }

        this.id = id;
        this.cliente = cliente;
        this.tecnico = tecnico;
        this.descricao = descricao;
        this.status = "ABERTA";
        this.dataCriacao = new Date();
    }

    getId() {
        return this.id;
    }

    getStatus() {
        return this.status;
    }

    atualizarStatus(novoStatus) {
        const statusPermitidos = [
            "ABERTA",
            "EM_ANDAMENTO",
            "CONCLUIDA",
            "CANCELADA"
        ];

        if (!statusPermitidos.includes(novoStatus)) {
            throw new Error("Status inválido.");
        }

        this.status = novoStatus;
    }

    toJSON() {
        return {
            id: this.id,
            cliente: this.cliente.getNome(),
            tecnico: this.tecnico.getNome(),
            status: this.status,
            descricao: this.descricao
        };
    }
}

class usuarioController {
    constructor(Database) {
        this.Database = Database;
    }
    getAll() {
        return this.Database.findAll('usuarios');
    }
}

module.exports = { usuarioController } // exportando a variavel 
const { spy, assert, stub, mock } = require('sinon')
const { Database } = require('./database')
const { usuarioController } = require('./controller')
const { expect } = require('@jest/globals') // Na aula o professor não mencionou essa importação

let respostaEsperada

describe('Controller de Usuários', () => {

    beforeAll(() => {
        respostaEsperada = [
            {
                id: 10,
                nome: 'João Paulo',
                email: 'joao@teste.com.br'
            }
        ]
    });

    it('01 - fake', () => {
        const fakeDatabase = {
            findAll() {
                return respostaEsperada
            }
        }

        const controller = new usuarioController(fakeDatabase)
        const response = controller.getAll()

        expect(response).toBe(respostaEsperada)
    });

    it('02 - Spy', () => {
        const findAll = spy(Database, 'findAll')
        const controller = new usuarioController(Database)
        controller.getAll()

        assert.calledWith(findAll, 'usuarios')
        findAll.restore()
    });

    it('03 - stub', () => {
        const findAll = stub(Database, 'findAll')
        findAll.withArgs('usuarios').returns(respostaEsperada)

        const controller = new usuarioController(Database)
        const response = controller.getAll()

        assert.calledWith(findAll, 'usuarios')
        expect(response).toEqual(respostaEsperada)

        findAll.restore()
    });

    it('04 - Mock', () => {
        const dbMock = mock(Database)
        dbMock.expects('findAll').once().withArgs('usuarios').returns(respostaEsperada)

        const controller = new usuarioController(Database)
        const response = controller.getAll()

        expect(response).toEqual(respostaEsperada)

        dbMock.verify()
        dbMock.restore()
    });
});

// código conferido com o do professor.
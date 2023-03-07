
const { soma, dobro } = require ('./codigo') // aqui trouxe a variavel igual está no arquivo do codigo.

describe ('Funções Matemáticas:', ()=>{
    
    /* beforeAll(() => {
        console.log('antes de tudo')
    });

    beforeEach(() => {
        console.log('antes de cada teste')
    });

    afterEach(() => {
        console.log('depois de cada teste')
    });

    afterAll(() => {
        console.log('depois de tudo')
    }); */

    it('01 - Soma de dois valores', () => {
        expect(soma(2,5)).toBe(7);
        expect(soma(2,4)).toBe(6);
        expect(soma(22,33)).toBe(55);
    });
    it('02 - Dobro do valor', () => {
        expect(dobro(4)).toBe(8);
    });
});
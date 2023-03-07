import { mount } from "@cypress/vue"
import HelloWorld from './HelloWorld.vue'


describe('Componente HelloWorld', () => {
    it('01 - Verificar a msg do componente', () => {
        const msg = 'Meu primeiro teste de componente'
        mount(HelloWorld, {
            propsData: {
                msg
            }
        })

        cy.get('h1').should('have.text', msg)

    });
});
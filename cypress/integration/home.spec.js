import signup from '../pages/SignupPage'
import homepage from '../pages/HomePage'

//Isso cria uma suite de teste no caso home page, e dentro dele fica os casos de testes
describe('home page', ()=>{
    it('app deve estar online', ()=>{//caso de teste 1 entrar no site
       
        
        cy.visit('/')
        homepage.alertMessageHome('Seja um parceiro entregador pela Buger Eats')


        
        



    })

})






class HomePage{


    alertMessageHome(expectMessage){
        cy.get('h1').should('have.text', expectMessage)//verifica o texto no site
    }
    


}

export default new HomePage;
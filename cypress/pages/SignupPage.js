

class SignupPage{

    go(){//Vai para a pagína inicial do Web App
      
        cy.visit('/')//acessa a pagína do site

        cy.get('a[href="/deliver"]').click()//evento de click

        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')//verifica texto no sistema

    }


    fillForm(entregador){

        cy.get('input[name="fullName"]').type(entregador.nome)//preenche o campo nome
        cy.get('input[name="cpf"]').type(entregador.cpf)//preenche o campo cpf
        cy.get('input[name="email"]').type(entregador.email)//preenche o campo email
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)//preenche o campo whatsapp
        
        
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)//preenche o campo cep
        cy.get('input[type=button][value="Buscar CEP"]').click()//clica no botão busca cep

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)//preenche o campo numero da casa
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)//preenche o campo complemento

        cy.get('input[name="address"]').should('have.value',entregador.endereco.rua)//preenche o campo nome da rua
        cy.get('input[name="district"]').should('have.value',entregador.endereco.bairro)//preenche o campo nome do bairro
        cy.get('input[name="city-uf"]').should('have.value',entregador.endereco.cidade_uf)//preenche o campo nome da cidade e seu UF

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()//clica no botão metodo de entrega, chamada pela massa simples metodo_entrega: "Moto"

        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)//faz upload do arquivo imagem cnh que esta na subpasta images na pasta fixtures

    }

    submit(){

        cy.get('form button[type="submit"]').click()//clicar no botão de submiter cadastro 
    }

    modalContentShouldBe(expectMessage){//verifica o texto quando submete o cadastro com sucesso

        cy.get('.swal2-shown div[class="swal2-html-container"]').should('have.text', expectMessage)
    }

    alertMenssageShouldBe(expectMessage){//Alerta de mensagem de erro nos campos de cadastro

        // cy.get('.field-group span[class="alert-error"]').should('have.text', expectMessage)//usado so apenas por um texto
        cy.contains('.alert-error', expectMessage).should('be.visible')//usado para varios texto 
    }

}

export default new SignupPage;//exportando arquivos SignupPage ja instanciada (new)
import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'



// before(function(){
//     cy.log('Tudo aqui é execultado uma única vez ANTES de TODOS os casos de testes')

// })

// beforeEach(function(){
//     cy.log('Tudo aqui é execultado sempre ANTES de CADA caso de teste')

// })

// after(function(){
//     cy.log('Tudo aqui é execultado uma única vez DEPOIS de TODOS os casos de testes')

// })

// afterEach(function(){
//     cy.log('Tudo aqui é execultado sempre DEPOIS de CADA caso de teste')

// })


describe.skip('Cadastro', () => {//suite de teste

    //so usa este codigo se for usar o json no formato de fixtures
    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })



    it.skip('Usuario deve se tornar um entregador', function () {//teste

        var deliver = signupFactory.deliver()//chamada para usar o json feito em NOD factories
        // var signup = new SignupPage()//faz a chamada da classes na pasta page

        signup.go()
        // signup.fillForm(this.deliver.signup)//usado para arquivos json fixtures

        signup.fillForm(deliver)//usado para arquivos json NOD factories
        signup.submit()

        const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'//variavel que recebe um texto pra ser chamado em comandos cy

        signup.modalContentShouldBe(expectMessage)



    })

    it.skip('CPF incorreto', function () {//teste

        var deliver = signupFactory.deliver()//chamada para usar o json feito em NOD factories
        // var signup = new SignupPage()

        deliver.cpf = '008642562AA'//informando um CPF incorreto

        signup.go()
        // signup.fillForm(this.deliver.cpf_invalido)//usado para arquivos json fixtures
        signup.fillForm(deliver)//usado para arquivos json NOD factories
        signup.submit()



        signup.alertMenssageShouldBe('Oops! CPF inválido')




    })

    it.skip('email incorreto', function () {//teste Skip para pular o teste

        var deliver = signupFactory.deliver()//chamada para usar o json feito em NOD factories
        // var signup = new SignupPage()

        deliver.email = 'capry.com.rr'//informando um email incorreto

        signup.go()
        // signup.fillForm(this.deliver.email_invalido)//usado para arquivos json fixtures

        signup.fillForm(deliver)//usado para arquivos json NOD factories
        signup.submit()



        signup.alertMenssageShouldBe('Oops! Email com formato inválido.')

    })

    context('campos obrigatórios', function () {

        const messages = [
            { field: 'nome', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'cep', output: 'É necessário informar o CEP' },
            { field: 'numero', output: 'É necessário informar o número do endereço' },
            { field: 'metodo_entrega', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){//antes do teste campos obrigatórios faça essas ações
            SignupPage.go()
            SignupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} obrigatórios`, function(){//caso de teste feito step by step
                SignupPage.alertMenssageShouldBe(msg.output)
            })
        })
    })
    // it('campos obrigatórios', function(){//caso de teste feito com 7 alerts

    //     signup.go()
    //     signup.submit()

    //     SignupPage.alertMenssageShouldBe('É necessário informar o nome')
    //     SignupPage.alertMenssageShouldBe('É necessário informar o CPF')
    //     SignupPage.alertMenssageShouldBe('É necessário informar o email')
    //     SignupPage.alertMenssageShouldBe('É necessário informar o CEP')
    //     SignupPage.alertMenssageShouldBe('É necessário informar o número do endereço')
    //     SignupPage.alertMenssageShouldBe('Selecione o método de entrega')
    //     SignupPage.alertMenssageShouldBe('Adicione uma foto da sua CNH')




    // })
})
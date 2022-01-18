

var faker = require('faker')//chamando a função faker mas antes instala no console digitando npm install faker --save-dev
var cpf = require('gerador-validador-cpf')//chamando a library cpf faker mas antes no console execulte o codigo para download npm install gerador-validador-cpf --save-dev

export default {

    deliver: function () {

        var firstNmae = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            // nome: 'Robson Souza',//modo NOD de massa
            nome: `${firstNmae} ${lastName}`,//usando a massa com faker
            // cpf: '00864152685',//modo NOD de massa
            cpf: cpf.generate(),//usando a library gerador-validador-cpf
            // email: 'gamesolinger@gmail.com',//modo NOD de massa
            email: faker.internet.email(firstNmae),//gera email usando a faker
            whatsapp: '+5592992061170',
            endereco: {
                cep: '69073130',
                rua: 'Rua Claudiano Moreira',
                numero: '824',
                complemento: 'Ap 07',
                bairro: 'São Lázaro',
                cidade_uf: 'Manaus/AM'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }

}
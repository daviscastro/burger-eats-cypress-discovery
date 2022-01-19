var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '71999999999',
            address:{
                postalcode: '42808065',
                street: 'Rua Catuama',
                number: '1000',
                details: 'Casa 198',
                district: 'Tancredo Neves',
                city_state: 'Camaçari/BA'
            },
            delivery_method: 'Moto',
            cnh:  'cnh-digital.jpg'
        }

        return data
    }
}
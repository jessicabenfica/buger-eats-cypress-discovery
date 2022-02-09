var faker = require('faker')
var cpf = require('gerador-validador-cpf')



export default {
    deliver: function () {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: "31985294491",
            address: {
                postalcode: '30690320',
                street: 'Rua das Verbenas',
                number: '342',
                details: 'Casa',
                district: 'Lindéia (Barreiro)',
                city_state: 'Belo Horizonte/MG'
            },

            delivery_method: "Moto",
            cnh: "cnh-digital.jpg"
        }
        return data

    }
}
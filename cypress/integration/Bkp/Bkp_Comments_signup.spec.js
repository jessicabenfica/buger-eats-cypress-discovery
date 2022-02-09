import signup from '../pages/SignupPage'

describe('Signup', () => {
    beforeEach(function () {
        cy.fixture('delivery').then((d) => {
            this.delivery = d

        })
    })


    //    var signup = new SignupPage()
    // Ganchos
    // before(function(){
    //     cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
    // })

    // beforeEach(function(){
    //     cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    // })

    // after(function(){
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    // })

    // afterEach(function(){
    //     cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
    // })

    it('User should be deliver', function () {

        // var deliver = {
        //     name: 'Jessica Benfica',
        //     cpf: '10075225697',
        //     email: 'jessica.rodriguesb@gmail.com',
        //     whatsapp: '31985294491',
        //     address: {
        //         postalcode: '30690320',
        //         street: 'Rua das Verbenas',
        //         number: '342',
        //         details: 'Casa',
        //         district: 'Lindéia (Barreiro)',
        //         city_state: 'Belo Horizonte/MG'
        //     },
        //     delivery_method: 'Moto',
        //     cnh: 'cnh-digital.jpg'
        // }

        signup.go()
        signup.fillForm(this.delivery.signup)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('Incorrect Document', function () {

        // var deliver = {
        //     name: 'Jessica Benfica',
        //     cpf: '100752256AA',
        //     email: 'jessica.rodriguesb@gmail.com',
        //     whatsapp: '31985294491',
        //     address: {
        //         postalcode: '30690320',
        //         street: 'Rua das Verbenas',
        //         number: '342',
        //         details: 'Casa',
        //         district: 'Lindéia (Barreiro)',
        //         city_state: 'Belo Horizonte/MG'
        //     },
        //     delivery_method: 'Moto',
        //     cnh: 'cnh-digital.jpg'
        // }


        signup.go()
        signup.fillForm(this.delivery.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect Document', function () {
        signup.go()
        signup.fillForm(this.delivery.email_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })
})
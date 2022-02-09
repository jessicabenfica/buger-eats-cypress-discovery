import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
// import { it } from 'faker/lib/locales'  - Sempre remover essa linha
import SignupPage from '../pages/SignupPage'
//import { it } from 'faker/lib/locales'  - Linha está sendo importada automaticamente (Retirar)

describe('Signup', () => {
    // beforeEach(function () {
    //     cy.fixture('delivery').then((d) => {
    //         this.delivery = d
    //     })
    // })

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('Incorrect Document', function () {

        var deliver = signupFactory.deliver()
        deliver.cpf = '00000000141aa'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect Document', function () {

        var deliver = signupFactory.deliver()
        deliver.email = 'jessica.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]
        before(function () {
            signup.go()
            signup.submit()
        })
        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                SignupPage.alertMessageShouldBe(msg.output)

            })
        })


    })

    // it('Required fields', function () {
    //     signup.go()
    //     signup.submit()
    //     signup.alertMessageShouldBe('É necessário informar o nome')
    //     signup.alertMessageShouldBe('É necessário informar o CPF')
    //     signup.alertMessageShouldBe('É necessário informar o email')
    //     signup.alertMessageShouldBe('É necessário informar o CEP')
    //     signup.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signup.alertMessageShouldBe('Selecione o método de entrega')
    //     signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    // })
})
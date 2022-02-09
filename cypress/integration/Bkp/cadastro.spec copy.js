describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')  // Validar o texto

        //Massa de Teste
        var delivery = {
            name: 'Jessica Benfica',
            cpf: '10075225697',
            email: 'jessica.rodriguesb@gmail.com',
            whatsapp: '31985294491',
            address: {
                postalcode: '30690320',
                street: 'Rua das Verbenas',
                number: '342',
                details: 'Casa',
                district: 'Lindéia (Barreiro)',
                city_state: 'Belo Horizonte/MG'
            },
            delivery_method: 'Moto',
           // metodo_entrega: 'Bicicleta'
           // metodo_entrega: 'Van/Carro'

           //CNH
            cnh: 'cnh-digital.jpg'

        }
        cy.get('input[name="name"]').type(delivery.name)
        cy.get('input[name="cpf"]').type(delivery.cpf)
        cy.get('input[name="email"]').type(delivery.email)
        cy.get('input[name="whatsapp"]').type(delivery.whatsapp)

        //Endereço
        cy.get('input[name="postalcode"]').type(delivery.address.postalcode)

        //Clicar no botão "Buscar CEP"
        cy.get('input[type=button][value="Buscar CEP"]').click()

        //Numero
        cy.get('input[name="address-number"]').type(delivery.address.number)

        //Complemento
        cy.get('input[name="address-details"]').type(delivery.address.details)

        //Validação do Endereço ao clicar em "BuscarCEP"
        cy.get('input[name="address"]').should('have.value', delivery.address.street)
        cy.get('input[name="district"]').should('have.value', delivery.address.district)
        cy.get('input[name="city-uf"]').should('have.value', delivery.address.city_state)


        //Função Contains vai receber o localizador "delivery-method"
        cy.contains('.delivery-method li', delivery.delivery_method).click()


        //Upload da CNH - Ele busca dentro da pasta "Fixtures" a imagem da CNH
        //attachFile('/images/' - Definir dentro de qual pasta está
        cy.get('input[accept^="image"]').attachFile('/images/' + delivery.cnh)


        //Clicar no botão "Cadastre-se para fazer entregas"

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'  //Criar constante para receber textos grandes

        cy.get('form button[type="submit"]').click()
        cy.get('.swal2-container .swal2-html-container')
        .should('have.text', expectedMessage)
    })

    it('CPF Incorreto', () => {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')  // Validar o texto

        //Massa de Teste
        var delivery = {
            name: 'Jessica Benfica',
            cpf: '100752AA999',
            email: 'jessica.rodriguesb@gmail.com',
            whatsapp: '31985294491',
            address: {
                postalcode: '30690320',
                street: 'Rua das Verbenas',
                number: '342',
                details: 'Casa',
                district: 'Lindéia (Barreiro)',
                city_state: 'Belo Horizonte/MG'
            },
            delivery_method: 'Moto',
           // metodo_entrega: 'Bicicleta'
           // metodo_entrega: 'Van/Carro'

           //CNH
            cnh: 'cnh-digital.jpg'

        }
        cy.get('input[name="name"]').type(delivery.name)
        cy.get('input[name="cpf"]').type(delivery.cpf)
        cy.get('input[name="email"]').type(delivery.email)
        cy.get('input[name="whatsapp"]').type(delivery.whatsapp)

        //Endereço
        cy.get('input[name="postalcode"]').type(delivery.address.postalcode)

        //Clicar no botão "Buscar CEP"
        cy.get('input[type=button][value="Buscar CEP"]').click()

        //Numero
        cy.get('input[name="address-number"]').type(delivery.address.number)

        //Complemento
        cy.get('input[name="address-details"]').type(delivery.address.details)

        //Validação do Endereço ao clicar em "BuscarCEP"
        cy.get('input[name="address"]').should('have.value', delivery.address.street)
        cy.get('input[name="district"]').should('have.value', delivery.address.district)
        cy.get('input[name="city-uf"]').should('have.value', delivery.address.city_state)


        //Função Contains vai receber o localizador "delivery-method"
        cy.contains('.delivery-method li', delivery.delivery_method).click()


        //Upload da CNH - Ele busca dentro da pasta "Fixtures" a imagem da CNH
        //attachFile('/images/' - Definir dentro de qual pasta está
        cy.get('input[accept^="image"]').attachFile('/images/' + delivery.cnh)

        //CPF Incorreto
        cy.get('form button[type="submit"]').click()
        cy.get('span.alert-error').should('have.text', 'Oops! CPF inválido')



    //Clicar no botão "Cadastre-se para fazer entregas"
    //     const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'  //Criar constante para receber textos grandes
    //     cy.get('form button[type="submit"]').click()
    //     cy.get('.swal2-container .swal2-html-container')
    //     .should('have.text', expectedMessage)

    })   
    
})
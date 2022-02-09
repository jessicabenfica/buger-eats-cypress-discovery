class SignupPage {

    go() {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')  // Validar o texto
    }

    fillForm(delivery) {
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

    }
    submit() {
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe() {
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)
    }
}

